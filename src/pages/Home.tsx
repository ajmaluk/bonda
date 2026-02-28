import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { FileUpload } from '../components/FileUpload';
import { ToneSelector } from '../components/ToneSelector';
import type { Tone } from '../components/ToneSelector';
import { LanguageSelector } from '../components/LanguageSelector';
import type { Language } from '../components/LanguageSelector';
import { ResultCard } from '../components/ResultCard';
import { extractTextFromFile } from '../services/ocr';
import { generateFeedback } from '../services/api';

export function Home() {
    const homeSchema = [
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Bonda",
            "url": "https://bonda.toolpix.in",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://bonda.toolpix.in/blog?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Bonda - AI Marksheet Roast & Motivation",
            "url": "https://bonda.toolpix.in",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "All",
            "description": "Upload your marksheet for a brutal AI roast or instant motivation in Malayalam and English."
        },
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Uthakkan",
            "alternateName": "Bonda by Uthakkan",
            "url": "https://www.uthakkan.in",
            "logo": "https://bonda.toolpix.in/logo.png",
            "description": "A software organization focused on building fast, uncompromising digital tools.",
            "foundingDate": "2025",
            "foundingLocation": {
                "@type": "Place",
                "name": "Kannur, Kerala, India"
            },
            "founder": {
                "@type": "Person",
                "name": "Ajmal U K",
                "jobTitle": "Founder & Lead Engineer"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact.uthakkan@gmail.com",
                "contactType": "customer support"
            },
            "sameAs": [
                "https://github.com/ajmaluk",
                "https://linkedin.com/in/ajmal-u-k-1a93b2241",
                "https://x.com/uthakkan"
            ],
            "brand": {
                "@type": "Brand",
                "name": "Bonda",
                "logo": "https://bonda.toolpix.in/icon.png"
            }
        }
    ];

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
            <SEO
                title="Bonda - AI Marksheet Roast & Motivation"
                description="Upload your marksheet for a brutal AI roast or instant motivation in Malayalam and English. The ultimate student AI feedback tool by Uthakkan."
                url="https://bonda.toolpix.in"
                schema={homeSchema}
            />

            <header className="header animate-fade-in" style={{ paddingBottom: '1rem' }}>
                <p style={{ fontSize: '1.25rem', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
                    Upload your marksheet below for instant AI motivation or a brutal roast.
                </p>
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

            {/* SEO and Feature Content Section */}
            <section className="seo-section animate-fade-in" style={{ animationDelay: '0.2s', marginTop: '4rem', padding: '0 1rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                        The Ultimate Student Tool for AI Motivation & Marksheet Roasts
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Bonda is a cutting-edge platform designed to analyze your academic results. Whether you need an empathetic push
                        to study harder or a hilarious, brutal roast to share with friends, our AI delivers perfectly crafted feedback.
                        Proudly featuring native Malayalam support to keep it culturally authentic.
                    </p>
                </div>

                <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto', marginBottom: '4rem' }}>
                    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>🔥 Brutal AI Roasts</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Upload your failing grades and let our AI roast you. Perfect for comic relief during stressful exam seasons and built for the best meme-worthy reactions.
                        </p>
                    </div>
                    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>💡 Student Motivation</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Feeling down about your marks? Select the Motivation tone and receive encouraging, actionable, and incredibly supportive feedback to get you back on track.
                        </p>
                    </div>
                    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
                        <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>🌴 Native Malayalam Support</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Experience your feedback in pure, native Malayalam script. No weird Manglish translations—just authentic Kerala humor and support written flawlessly.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
