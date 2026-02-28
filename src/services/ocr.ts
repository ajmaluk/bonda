import Tesseract from 'tesseract.js';
import * as pdfjsLib from 'pdfjs-dist';

// Import the pdf.js worker using Vite's URL import feature
import pdfWorkerSrc from 'pdfjs-dist/build/pdf.worker.mjs?url';
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerSrc;

/**
 * Extracts text from an image file using Tesseract.js with explicit worker lifecycle.
 */
async function extractTextFromImage(file: File, onProgress?: (msg: string) => void): Promise<string> {
    onProgress?.('Initializing Optical Character Recognition...');

    // Explicitly create a worker for memory management
    const worker = await Tesseract.createWorker('eng', 1, {
        logger: m => {
            if (m.status === 'recognizing text') {
                onProgress?.(`Scanning marksheet: ${Math.round(m.progress * 100)}%`);
            } else if (m.status === 'loading language traineddata') {
                onProgress?.(`Loading Language Models: ${Math.round(m.progress * 100)}%`);
            } else if (m.status === 'loading tesseract core') {
                onProgress?.(`Loading OCR Engine...`);
            } else {
                onProgress?.(`Initializing OCR...`);
            }
        }
    });

    try {
        const { data: { text } } = await worker.recognize(file);
        return text;
    } catch (error) {
        console.error("OCR Image Error:", error);
        throw new Error("Failed to scan image. Please ensure it's a clear marksheet.");
    } finally {
        // CRITICAL: Explicitly terminate the worker to free up browser memory instantly
        await worker.terminate();
    }
}

/**
 * Extracts the first page of a PDF file as an image (canvas base64), 
 * then runs OCR on it.
 */
async function extractTextFromPDF(file: File, onProgress?: (msg: string) => void): Promise<string> {
    onProgress?.('Parsing PDF document...');
    try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        onProgress?.('Extracting text from PDF...');

        let fullText = '';
        const numPages = Math.min(pdf.numPages, 3); // Check up to 3 pages

        for (let i = 1; i <= numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map((item: unknown) => {
                const textItem = item as { str?: string };
                return textItem && 'str' in textItem && textItem.str ? textItem.str : '';
            }).join(' ');
            fullText += pageText + '\n';
        }

        // If we found enough digital text, return it immediately (super fast)
        if (fullText.trim().length > 20) {
            return fullText.trim();
        }

        // fallback to OCR if no text found in PDF (i.e. it's a scanned image)
        onProgress?.('No digital text found. Scanning page 1...');

        // Function to OCR a specific page
        const runOcrOnPage = async (pageNum: number) => {
            const page = await pdf.getPage(pageNum);
            const viewport = page.getViewport({ scale: 3.0 });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            await page.render({
                canvasContext: context!,
                viewport: viewport,
                canvas: canvas
            }).promise;

            const blob = await new Promise<Blob | null>((resolve) => {
                canvas.toBlob(resolve, 'image/jpeg', 0.95);
            });

            if (!blob) return '';
            const imageFile = new File([blob], `page-${pageNum}.jpg`, { type: "image/jpeg" });
            return extractTextFromImage(imageFile, p => onProgress?.(`Page ${pageNum}: ${p}`));
        };

        const page1Text = await runOcrOnPage(1);

        // If page 1 is very short, try page 2 if it exists
        if (page1Text.trim().length < 50 && pdf.numPages >= 2) {
            onProgress?.('Page 1 empty/short. Scanning page 2...');
            const page2Text = await runOcrOnPage(2);
            return page1Text + '\n' + page2Text;
        }

        return page1Text;

    } catch (error) {
        console.error("OCR PDF Error:", error);
        throw new Error("Failed to parse PDF document.");
    }
}

/**
 * Main entry point for OCR extraction.
 */
export async function extractTextFromFile(file: File, onProgress?: (msg: string) => void): Promise<string> {
    if (file.type === 'application/pdf') {
        return extractTextFromPDF(file, onProgress);
    } else {
        return extractTextFromImage(file, onProgress);
    }
}
