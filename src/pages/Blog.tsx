import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { blogs } from '../data/blogs';
import './Page.css';

export function Blog() {
    return (
        <>
            <SEO
                title="Bonda Blog | Student Tips & Developer Log"
                description="Read our latest tips on academic success, how AI creates brutally honest roasts, and updates directly from the developers at Uthakkan."
                url="https://bonda.toolpix.in/blog"
            />
            <main className="page-content animate-fade-in" style={{ maxWidth: '1000px', width: '90%' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div className="tag-pill" style={{ display: 'inline-block', marginBottom: '1.5rem', background: 'rgba(217, 119, 6, 0.1)' }}>Updates & Resources</div>
                    <h1 className="gradient-text page-title" style={{ marginBottom: '1.25rem', fontSize: '3.5rem' }}>Bonda Blog</h1>
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1.25rem',
                        maxWidth: '650px',
                        margin: '0 auto',
                        lineHeight: 1.7
                    }}>
                        Deep dives into generative AI technologies, brutally honest study tips, and the complete journey of building Bonda.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                    gap: '2.5rem',
                    width: '100%'
                }}>
                    {blogs.map((post, index) => (
                        <Link
                            to={`/blog/${post.slug}`}
                            key={post.id}
                            className="glass-panel"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                textDecoration: 'none',
                                color: 'inherit',
                                overflow: 'hidden',
                                padding: 0,
                                borderRadius: 'var(--radius-lg)',
                                transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                                transform: 'translateY(0)',
                                animation: `fadeUp 0.6s ease-out ${index * 0.1}s forwards`,
                                opacity: 0,
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-12px)';
                                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,0.6), 0 0 30px rgba(217, 119, 6, 0.15)';
                                e.currentTarget.style.borderColor = 'rgba(217, 119, 6, 0.3)';

                                const img = e.currentTarget.querySelector('.card-image') as HTMLElement;
                                if (img) img.style.transform = 'scale(1.08)';

                                const title = e.currentTarget.querySelector('.card-title') as HTMLElement;
                                if (title) title.style.color = 'var(--accent-primary)';

                                const arrow = e.currentTarget.querySelector('.arrow-icon') as HTMLElement;
                                if (arrow) arrow.style.transform = 'translateX(6px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';

                                const img = e.currentTarget.querySelector('.card-image') as HTMLElement;
                                if (img) img.style.transform = 'scale(1)';

                                const title = e.currentTarget.querySelector('.card-title') as HTMLElement;
                                if (title) title.style.color = 'var(--text-primary)';

                                const arrow = e.currentTarget.querySelector('.arrow-icon') as HTMLElement;
                                if (arrow) arrow.style.transform = 'translateX(0)';
                            }}
                        >
                            <div style={{
                                width: '100%',
                                height: '220px',
                                overflow: 'hidden',
                                position: 'relative',
                                borderBottom: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="card-image"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
                                    }}
                                    onError={(e) => {
                                        e.currentTarget.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22450%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20450%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%231a1025%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%232a1015%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23bg)%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22225%22%20font-family%3D%22system-ui%2C%20sans-serif%22%20font-size%3D%2230%22%20fill%3D%22%23d97706%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20font-weight%3D%22bold%22%3EBonda%20Blog%3C%2Ftext%3E%3C%2Fsvg%3E';
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '40%',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    pointerEvents: 'none'
                                }} />

                                {post.tags && post.tags.length > 0 && (
                                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 2 }}>
                                        <span className="tag-pill" style={{
                                            background: 'rgba(5, 26, 17, 0.8)',
                                            backdropFilter: 'blur(8px)',
                                            border: '1px solid rgba(217, 119, 6, 0.5)',
                                            boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                                        }}>
                                            {post.tags[0]}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 1 }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.25rem',
                                    color: 'var(--text-tertiary)',
                                    fontSize: '0.85rem',
                                    marginBottom: '1rem',
                                    fontWeight: 500
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <Calendar size={14} color="var(--accent-primary)" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <Clock size={14} color="var(--accent-primary)" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                <h2 className="card-title" style={{
                                    fontSize: '1.45rem',
                                    fontWeight: 700,
                                    marginBottom: '1rem',
                                    color: 'var(--text-primary)',
                                    lineHeight: 1.35,
                                    transition: 'color 0.3s ease'
                                }}>
                                    {post.title}
                                </h2>

                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '1.05rem',
                                    lineHeight: 1.6,
                                    marginBottom: '2.5rem',
                                    flex: 1
                                }}>
                                    {post.excerpt}
                                </p>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginTop: 'auto',
                                    borderTop: '1px solid rgba(255,255,255,0.05)',
                                    paddingTop: '1.5rem'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <img src={post.authorAvatar} alt={post.author} style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }} />
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>{post.author}</span>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.4rem',
                                        color: 'var(--accent-primary)',
                                        fontWeight: 600,
                                        fontSize: '0.95rem'
                                    }}>
                                        Read <ArrowRight size={16} className="arrow-icon" style={{ transition: 'transform 0.3s ease' }} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes fadeUp {
                        from { opacity: 0; transform: translateY(30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}} />
            </main>
        </>
    );
}
