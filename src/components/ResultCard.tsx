import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, Loader2, Copy, Check } from 'lucide-react';
import './ResultCard.css';

interface ResultCardProps {
    isLoading: boolean;
    loadingStep: string; // e.g., "Scanning marksheet...", "Generating roast..."
    result: string | null;
    tone: 'Motivation' | 'Troll';
    error: string | null;
    onClose: () => void;
}

export function ResultCard({ isLoading, loadingStep, result, tone, error, onClose }: ResultCardProps) {
    const [copied, setCopied] = useState(false);

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

    return createPortal(
        <div className="modal-overlay animate-fade-in" onClick={!isLoading ? onClose : undefined}>
            <div className={`result-card glass-panel ${tone.toLowerCase()}`} onClick={(e) => e.stopPropagation()}>
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

                        <div className="result-body animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            <p className="final-text">{result}</p>
                        </div>
                    </div>
                )}

                {!isLoading && (result || error) && (
                    <div className="modal-footer">
                        <button className="try-again-btn" onClick={onClose}>
                            Try Again
                        </button>
                    </div>
                )}

                {copied && (
                    <div className="toast-notification">
                        <Check size={14} />
                        <span>Copied to clipboard!</span>
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}
