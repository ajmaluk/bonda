import { useEffect, useState } from 'react';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import './ResultCard.css';

interface ResultCardProps {
    isLoading: boolean;
    loadingStep: string; // e.g., "Scanning marksheet...", "Generating roast..."
    result: string | null;
    tone: 'Motivation' | 'Troll';
    error: string | null;
}

export function ResultCard({ isLoading, loadingStep, result, tone, error }: ResultCardProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [copied, setCopied] = useState(false);

    // Typing effect
    useEffect(() => {
        if (result && !isLoading) {
            let i = 0;
            setDisplayedText('');
            const speed = Math.max(10, 50 - result.length / 20); // Dynamic speed

            const timer = setInterval(() => {
                if (i < result.length - 1) {
                    setDisplayedText(prev => prev + result[i]);
                    i++;
                } else {
                    setDisplayedText(result); // make sure entire string is set
                    clearInterval(timer);
                }
            }, speed);

            return () => clearInterval(timer);
        }

        if (!result) setDisplayedText('');
    }, [result, isLoading]);

    const copyToClipboard = () => {
        if (result) {
            navigator.clipboard.writeText(result);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    if (!isLoading && !result && !error) {
        return null;
    }

    return (
        <div className={`result-card glass-panel animate-fade-in ${tone.toLowerCase()}`}>
            {isLoading && (
                <div className="loading-state">
                    <Loader2 className="spinner animate-spin" />
                    <p className="loading-text animate-pulse">{loadingStep}</p>
                </div>
            )}

            {error && (
                <div className="error-state">
                    <p>{error}</p>
                </div>
            )}

            {!isLoading && result && !error && (
                <div className="result-content-wrapper">
                    <div className="result-header">
                        <div className="result-badge">
                            <Sparkles size={16} />
                            <span>AI {tone}</span>
                        </div>
                        <button
                            className="action-btn copy-btn"
                            onClick={copyToClipboard}
                            title="Copy to clipboard"
                        >
                            {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                        </button>
                    </div>

                    <div className="result-body">
                        <p className="typed-text">{displayedText}</p>
                        {displayedText.length < result.length && <span className="cursor"></span>}
                    </div>
                </div>
            )}

            {copied && (
                <div className="toast-notification">
                    <Check size={14} />
                    <span>Copied to clipboard!</span>
                </div>
            )}
        </div>
    );
}
