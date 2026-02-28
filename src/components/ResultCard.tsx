import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, Loader2, Copy, Check, X } from 'lucide-react';
import './ResultCard.css';

interface ResultCardProps {
    isLoading: boolean;
    loadingStep: string;
    result: string | null;
    tone: 'Motivation' | 'Troll';
    error: string | null;
    onClose: () => void;
}

export function ResultCard({ isLoading, loadingStep, result, tone, error, onClose }: ResultCardProps) {
    const [copied, setCopied] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const closeBtnRef = useRef<HTMLButtonElement>(null);

    // Focus Trap & Keyboard Management
    useEffect(() => {
        if (result || error || isLoading) {
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';

            // Focus the close button or modal container
            const focusTarget = closeBtnRef.current || modalRef.current;
            focusTarget?.focus();

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape' && !isLoading) {
                    onClose();
                }

                if (e.key === 'Tab' && modalRef.current) {
                    const focusableElements = modalRef.current.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    const firstElement = focusableElements[0] as HTMLElement;
                    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

                    if (e.shiftKey) { // if shift key pressed for shift + tab combination
                        if (document.activeElement === firstElement) {
                            lastElement.focus(); // add focus for the last focusable element
                            e.preventDefault();
                        }
                    } else { // if tab key is pressed
                        if (document.activeElement === lastElement) { // if focused has reached to last focusable element
                            firstElement.focus(); // add focus for the first focusable element
                            e.preventDefault();
                        }
                    }
                }
            };

            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                document.body.style.overflow = 'unset';
            };
        }
    }, [result, error, isLoading, onClose]);

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
        <div className="modal-overlay animate-fade-in" onClick={!isLoading ? onClose : undefined} role="presentation">
            <div
                ref={modalRef}
                className={`result-card glass-panel ${tone.toLowerCase()} ${result && /[\u0D00-\u0D7F]/.test(result) ? 'malayalam' : ''}`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="result-title"
                tabIndex={-1}
            >
                {isLoading && (
                    <div className="loading-state">
                        <Loader2 className="spinner animate-spin" aria-hidden="true" />
                        <p className="loading-text animate-pulse">{loadingStep}</p>
                    </div>
                )}

                {error && (
                    <div className="error-state" role="alert">
                        <p>{error}</p>
                    </div>
                )}

                {!isLoading && result && !error && (
                    <div className="result-content-wrapper">
                        <div className="result-header">
                            <div className="result-badge" id="result-title">
                                <Sparkles size={16} aria-hidden="true" />
                                <span>AI {tone}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button
                                    className="action-btn copy-btn"
                                    onClick={copyToClipboard}
                                    title="Copy to clipboard"
                                    aria-label="Copy result"
                                >
                                    {copied ? <Check size={16} className="text-success" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                                </button>
                                <button
                                    ref={closeBtnRef}
                                    className="action-btn"
                                    onClick={onClose}
                                    aria-label="Close modal"
                                >
                                    <X size={16} aria-hidden="true" />
                                </button>
                            </div>
                        </div>

                        <div className="result-body animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            {result.split('\n\n').map((paragraph, pIdx) => (
                                <p key={pIdx} className="final-text">
                                    {paragraph.split(/(\*\*.*?\*\*)/g).map((part, i) => {
                                        if (part.startsWith('**') && part.endsWith('**')) {
                                            return <strong key={i}>{part.slice(2, -2)}</strong>;
                                        }
                                        return part;
                                    })}
                                </p>
                            ))}
                        </div>
                    </div>
                )}

                {!isLoading && (result || error) && (
                    <div className="modal-footer">
                        <button className="try-again-btn" onClick={onClose} aria-label="Dismiss results">
                            Try Again
                        </button>
                    </div>
                )}

                {copied && (
                    <div className="toast-notification" aria-live="polite">
                        <Check size={14} aria-hidden="true" />
                        <span>Copied to clipboard!</span>
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}
