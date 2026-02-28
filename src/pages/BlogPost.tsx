import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogs } from '../data/blogs';
import { SEO } from '../components/SEO';
import './Page.css';

export function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const post = blogs.find(b => b.slug === slug);

    const postSchema = post ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://bonda.toolpix.in/blog/${post.slug}`
        },
        "headline": post.title,
        "description": post.excerpt,
        "image": `https://bonda.toolpix.in${post.imageUrl}`,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Uthakkan",
            "logo": {
                "@type": "ImageObject",
                "url": "https://bonda.toolpix.in/logo.png"
            }
        },
        "datePublished": new Date(post.date).toISOString(),
        "wordCount": post.content.split(/\s+/).length,
        "articleSection": "Education & AI",
        "keywords": post.tags?.join(", ")
    } : undefined;

    if (!post) {
        return (
            <main className="page-content animate-fade-in text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 className="gradient-text page-title">Post Not Found</h1>
                <p style={{ color: 'var(--text-secondary)' }}>The blog post you're looking for doesn't exist.</p>
                <Link to="/blog" style={{ marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', textDecoration: 'none' }}>
                    <ArrowLeft size={20} />
                    Back to Blog
                </Link>
            </main>
        );
    }

    return (
        <>
            <SEO
                title={`${post.title} | Bonda Blog`}
                description={post.excerpt}
                url={`https://bonda.toolpix.in/blog/${post.slug}`}
                image={`https://bonda.toolpix.in${post.imageUrl}`}
                type="article"
                schema={postSchema}
            />
            <main className="page-content animate-fade-in" style={{ maxWidth: '850px' }}>
                <Link to="/blog" className="glass-panel" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.25rem',
                    marginBottom: '2.5rem',
                    textDecoration: 'none',
                    color: 'var(--text-secondary)',
                    borderRadius: 'var(--radius-full)',
                    alignSelf: 'flex-start',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--text-primary)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.borderColor = 'rgba(217, 119, 6, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                >
                    <ArrowLeft size={18} />
                    Back to all articles
                </Link>

                {/* Cinematic Hero Image */}
                <div
                    style={{
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '21/9',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        marginBottom: '3rem',
                        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)',
                        position: 'relative',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}
                >
                    <img
                        src={post.imageUrl}
                        alt={post.imageAlt}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
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
                        height: '60%',
                        background: 'linear-gradient(to top, rgba(5,26,17,1), transparent)',
                        pointerEvents: 'none'
                    }} />
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {post.tags?.map((tag, idx) => (
                        <span key={idx} className="tag-pill">
                            {tag}
                        </span>
                    ))}
                </div>

                <h1 className="gradient-text page-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '3.25rem', lineHeight: 1.1 }}>
                    {post.title}
                </h1>

                <div className="glass-panel" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                    marginBottom: '3.5rem',
                    padding: '1.25rem 2rem',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img
                            src={post.authorAvatar}
                            alt={post.author}
                            style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(217, 119, 6, 0.4)' }}
                        />
                        <div>
                            <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.05rem' }}>{post.author}</div>
                            <div style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={14} /> {post.date}
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-secondary)', fontWeight: 500, fontSize: '0.95rem' }}>
                        <Clock size={18} />
                        <span>{post.readTime}</span>
                    </div>
                </div>

                <div
                    className="glass-panel page-card"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </main>
        </>
    );
}
