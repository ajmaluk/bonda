import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';
import './Page.css';

export function NotFound() {
    return (
        <>
            <SEO
                title="Page Not Found"
                description="The page you're looking for doesn't exist. Navigate back to Bonda to explore AI Marksheet Roast & Motivation."
                url="https://bonda.toolpix.in/"
                noindex={true}
            />

            <main className="page-content animate-fade-in" style={{
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: '1.5rem'
            }}>
                <div style={{
                    fontSize: '8rem',
                    fontWeight: 900,
                    lineHeight: 1,
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary, #f59e0b))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: 0.8
                }}>
                    404
                </div>

                <h1 style={{
                    fontSize: '2rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                }}>
                    Page Not Found
                </h1>

                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    maxWidth: '500px',
                    lineHeight: 1.6
                }}>
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link
                        to="/"
                        className="btn-primary"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                    >
                        <Home size={18} />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="glass-panel"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 1.5rem',
                            cursor: 'pointer',
                            color: 'var(--text-secondary)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(255,255,255,0.03)',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>
                </div>
            </main>
        </>
    );
}
