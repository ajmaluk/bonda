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

const HOME_SCHEMA = [
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
        "applicationSubCategory": "AI Feedback Tool",
        "operatingSystem": "All",
        "description": "Upload your marksheet for a brutal AI roast or instant motivation in Malayalam and English. Advanced client-side OCR and localized Gemini AI analysis.",
        "featureList": "Client-side OCR, Privacy-first analysis, Malayalam script support, AI Roasting, Educational Motivation",
        "isAccessibleForFree": true,
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Bonda AI Marksheet Analyzer",
        "description": "A premium AI tool for analyzing student marksheets and providing culturally relevant feedback in Malayalam.",
        "brand": {
            "@type": "Brand",
            "name": "Bonda"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://bonda.toolpix.in",
            "price": "0",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        }
    },
    {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to get an AI Marksheet Roast",
        "description": "Get a brutal AI roast or instant motivation for your academic results in 3 easy steps.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Upload Marksheet",
                "text": "Upload your marksheet as an image (JPG, PNG) or PDF. Processing is 100% local.",
                "url": "https://bonda.toolpix.in/#upload"
            },
            {
                "@type": "HowToStep",
                "name": "Select Tone & Language",
                "text": "Choose 'Troll' for a roast or 'Motivation' for support, and select Malayalam or English.",
                "url": "https://bonda.toolpix.in/#options"
            },
            {
                "@type": "HowToStep",
                "name": "Get AI Feedback",
                "text": "Click 'Analyze Marksheet' to receive your personalized, culturally aware AI feedback.",
                "url": "https://bonda.toolpix.in/#result"
            }
        ],
        "totalTime": "PT1M"
    },
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Uthakkan",
        "alternateName": "Bonda by Uthakkan",
        "url": "https://uthakkan.in/",
        "logo": "https://bonda.toolpix.in/logo.png",
        "description": "A software organization focused on building fast, uncompromising digital tools, SaaS products, and premium AI implementations.",
        "foundingDate": "2025",
        "foundingLocation": {
            "@type": "Place",
            "name": "Kannur, Kerala, India"
        },
        "founder": {
            "@type": "Person",
            "name": "Muhammed Ajmal U K",
            "alternateName": "Ajmal U K",
            "jobTitle": "Founder & Lead Engineer",
            "image": "https://bonda.toolpix.in/images/team/ajmal.jpg"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Professional Software Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web & SaaS Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Professional Video & Graphic Design" } }
            ]
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
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is my marksheet data safe on Bonda?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Bonda uses advanced client-side OCR technology. This means your marksheet is processed entirely within your own browser and is never uploaded or stored on our servers."
                }
            },
            {
                "@type": "Question",
                "name": "How accurate is the AI marksheet roast?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bonda uses Google Gemini's latest LLM technology to analyze your grades with high precision, providing culturally relevant feedback in both Malayalam and English."
                }
            },
            {
                "@type": "Question",
                "name": "Does Bonda support PDF marksheets?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Bonda supports both image formats (JPG, PNG, WebP) and PDF documents. Our system extracts text from all popular marksheet formats."
                }
            }
        ]
    }
];

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
            <SEO
                title="Bonda - AI Marksheet Roast & Motivation"
                description="Upload your marksheet for a brutal AI roast or instant motivation in Malayalam and English. The ultimate student AI feedback tool by Uthakkan."
                url="https://bonda.toolpix.in"
                schema={HOME_SCHEMA}
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

                <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto', marginBottom: '6rem' }}>
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

                {/* Step-by-Step How To Guide for SEO Snippets */}
                <div style={{ maxWidth: '800px', margin: '0 auto 6rem', textAlign: 'left' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3.5rem', fontSize: '2.2rem' }} className="gradient-text">How to Get Your AI Marksheet Roast</h2>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'var(--accent-primary)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, marginTop: '0.2rem' }}>1</div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Upload Your Document</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Select your academic marksheet in PDF, JPG, or PNG format. Bonda uses elite-tier OCR to read your grades locally in the browser.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'var(--accent-primary)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, marginTop: '0.2rem' }}>2</div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Choose Your Vibe (Malayalam/English)</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Feel like a laugh? Choose 'Troll' for a brutal roast. Need a boost? Select 'Motivation' for encouraging feedback in Malayalam script.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'var(--accent-primary)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, marginTop: '0.2rem' }}>3</div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Share & React</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Generate your results instantly! Copy the feedback or take a screenshot to share on WhatsApp or Instagram with your friends.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visible FAQ Section for Ranking */}
                <div className="faq-section" style={{ maxWidth: '800px', margin: '0 auto 6rem', textAlign: 'left' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3.5rem', fontSize: '2.2rem' }} className="gradient-text">Frequently Asked Questions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="glass-panel" style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Is my marksheet data safe on Bonda?</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Yes. Bonda uses advanced client-side technology. Your file never leaves your device — it's processed entirely in your browser. We prioritize your academic privacy and data security.</p>
                        </div>
                        <div className="glass-panel" style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>How accurate is the AI marksheet analysis?</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>We use Google's latest Gemini models to analyze your marks with high precision, providing culturally authentic feedback specifically tuned for Kerala students and global learners.</p>
                        </div>
                        <div className="glass-panel" style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Does it support university marksheets (KTU, Calicut, MG)?</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Yes, Bonda is optimized for Indian university marksheets including KTU, University of Calicut, MG University, and more. Our OCR handles complex table structures with ease.</p>
                        </div>
                        <div className="glass-panel" style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>Can I use it for SSLC and Plus Two results?</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Absolutely! Whether it's Kerala SSLC, CBSE Plus Two, or collegiate semester results, simply upload a clear photo or PDF for an instant AI roast or motivational boost.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
