import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Bonda Runtime Error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary-overlay" style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    textAlign: 'center',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-primary)'
                }}>
                    <div className="glass-panel" style={{ padding: '3rem', maxWidth: '500px' }}>
                        <span style={{ fontSize: '4rem', display: 'block', marginBottom: '1.5rem' }}>🍳</span>
                        <h1 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Bonda has a crack!</h1>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            Something went wrong in the kitchen. Don't worry, your data is safe (it never left your browser anyway).
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="btn-primary"
                        >
                            Refresh the Kitchen
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
