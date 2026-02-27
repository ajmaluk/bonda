import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { FileUpload } from '../components/FileUpload';
import { ToneSelector } from '../components/ToneSelector';
import type { Tone } from '../components/ToneSelector';
import { LanguageSelector } from '../components/LanguageSelector';
import type { Language } from '../components/LanguageSelector';
import { ResultCard } from '../components/ResultCard';
import { extractTextFromFile } from '../services/ocr';
import { generateFeedback } from '../services/api';

export function Home() {
    const [file, setFile] = useState<File | null>(null);
    const [tone, setTone] = useState<Tone>('Motivation');
    const [language, setLanguage] = useState<Language>('English');

    // Execution states
    const [isProcessing, setIsProcessing] = useState(false);
    const [loadingStep, setLoadingStep] = useState<string>('');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        if (!file) return;

        setIsProcessing(true);
        setResult(null);
        setError(null);

        try {
            // Step 1: Extract Text via OCR/PDF Parsing
            const extractedText = await extractTextFromFile(file, (msg) => setLoadingStep(msg));

            // Step 2: Hit the AI API
            setLoadingStep("Generating your AI response...");
            const aiResponse = await generateFeedback(extractedText, tone, language);

            setResult(aiResponse);
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
            setError(errorMessage);
        } finally {
            setIsProcessing(false);
            setLoadingStep("");
        }
    };

    const handleFileSelect = (newFile: File | null) => {
        setFile(newFile);
        // Reset output when a new file is uploaded or removed
        setResult(null);
        setError(null);
    };

    return (
        <>
            <header className="header animate-fade-in">
                <h1 className="gradient-text">Marksheet AI</h1>
                <p>Upload your marksheet for instant motivation or a brutal roast, powered by advanced AI.</p>
            </header>

            <main className="main-content animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <FileUpload
                    file={file}
                    onFileSelect={handleFileSelect}
                    disabled={isProcessing}
                />

                <div className="options-grid">
                    <ToneSelector
                        selectedTone={tone}
                        onSelectTone={setTone}
                        disabled={isProcessing}
                    />
                    <LanguageSelector
                        selectedLanguage={language}
                        onSelectLanguage={setLanguage}
                        disabled={isProcessing}
                    />
                </div>

                <button
                    className="btn-primary"
                    onClick={handleSubmit}
                    disabled={!file || isProcessing}
                >
                    <Sparkles size={20} />
                    {isProcessing ? 'Processing AI...' : 'Generate AI Feedback'}
                </button>

                <ResultCard
                    isLoading={isProcessing}
                    loadingStep={loadingStep}
                    result={result}
                    tone={tone}
                    error={error}
                    onClose={() => {
                        setResult(null);
                        setError(null);
                    }}
                />
            </main>
        </>
    );
}
