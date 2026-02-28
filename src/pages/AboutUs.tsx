import { SEO } from '../components/SEO';
import './Page.css';

export function AboutUs() {
    const pageSchema = [{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Us - Uthakkan & Bonda",
        "url": "https://bonda.toolpix.in/about",
        "description": "Learn about Muhammed Ajmal U K and Uthakkan, the team that built Bonda and provides elite SaaS, AI, and software services.",
        "mainEntity": {
            "@type": "Organization",
            "name": "Uthakkan",
            "alternateName": "Bonda by Uthakkan",
            "url": "https://uthakkan.in/",
            "logo": "https://bonda.toolpix.in/logo.png",
            "description": "We build fast, uncompromising software experiences, SaaS products, and AI tools from Kannur, Kerala.",
            "knowsAbout": [
                "React 19 ecosystem",
                "Generative AI Implementation",
                "OCR Technology",
                "Full-stack SaaS Development",
                "SEO Mastery",
                "Kerala Tech Ecosystem"
            ],
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
                "description": "Muhammed Ajmal U K is a senior software architect specializing in React, AI, and performance-first web systems.",
                "image": "https://bonda.toolpix.in/images/team/ajmal.jpg",
                "knowsLanguage": ["Malayalam", "English"]
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Software and Design Services",
                "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web and SaaS Development" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Tool Integration" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Creation and Design (Logo/Thumbnail)" } }
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
        }
    }];

    return (
        <>
            <SEO
                title="About Us | Bonda by Uthakkan"
                description="Learn about the team behind Bonda. Uthakkan builds uncompromising software."
                url="https://bonda.toolpix.in/about"
                schema={pageSchema}
            />
            <main className="page-content animate-fade-in">
                <h1 className="gradient-text page-title">About Uthakkan</h1>

                <div className="glass-panel page-card text-block">
                    <h2>Our Story & Technical Expertise</h2>
                    <p>
                        Uthakkan, founded in 2025 in **Kannur, Kerala**, is a specialized software powerhouse dedicated to building fast, uncompromising digital experiences. We bridge the gap between complex architectural engineering and intuitive user design. Our focus spans across **Enterprise SaaS solutions**, **Generative AI implementations**, and high-performance web systems. Bonda is the pinnacle or our commitment to merging local cultural nuances with world-class engineering.
                    </p>

                    <h2>Our Technology Stack</h2>
                    <div className="tech-stack-grid mt-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        <div className="tech-item glass-panel" style={{ padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <span style={{ display: 'block', fontSize: '1.5rem', marginBottom: '0.5rem' }}>⚛️</span>
                            <strong style={{ fontSize: '0.9rem' }}>React 19</strong>
                        </div>
                        <div className="tech-item glass-panel" style={{ padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <span style={{ display: 'block', fontSize: '1.5rem', marginBottom: '0.5rem' }}>📘</span>
                            <strong style={{ fontSize: '0.9rem' }}>TypeScript</strong>
                        </div>
                        <div className="tech-item glass-panel" style={{ padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <span style={{ display: 'block', fontSize: '1.5rem', marginBottom: '0.5rem' }}>🧠</span>
                            <strong style={{ fontSize: '0.9rem' }}>Gemini AI</strong>
                        </div>
                        <div className="tech-item glass-panel" style={{ padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <span style={{ display: 'block', fontSize: '1.5rem', marginBottom: '0.5rem' }}>📸</span>
                            <strong style={{ fontSize: '0.9rem' }}>Tesseract.js</strong>
                        </div>
                        <div className="tech-item glass-panel" style={{ padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <span style={{ display: 'block', fontSize: '1.5rem', marginBottom: '0.5rem' }}>⚡</span>
                            <strong style={{ fontSize: '0.9rem' }}>Vite</strong>
                        </div>
                        <div className="tech-item glass-panel" style={{ padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <span style={{ display: 'block', fontSize: '1.5rem', marginBottom: '0.5rem' }}>🚀</span>
                            <strong style={{ fontSize: '0.9rem' }}>Vercel</strong>
                        </div>
                    </div>

                    <h2>Our Services</h2>
                    <div className="services-grid mt-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div className="service-item glass-panel" style={{ padding: '1.5rem', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>🌐 Web Development</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Full-stack React ecosystem, performance-first architecture, and SEO mastery.</p>
                        </div>
                        <div className="service-item glass-panel" style={{ padding: '1.5rem', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>📱 Mobile Apps</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Cross-platform native experiences built for speed and reliability.</p>
                        </div>
                        <div className="service-item glass-panel" style={{ padding: '1.5rem', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>🎬 Video Creation</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Professional video editing, motion graphics, and engaging visual storytelling.</p>
                        </div>
                        <div className="service-item glass-panel" style={{ padding: '1.5rem', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>🎨 Creative Design</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Logo design, high-CTR thumbnail creation, and premium brand identity.</p>
                        </div>
                    </div>

                    <h2>Our Mission: Digital Perfection</h2>
                    <p>
                        Our mission is to bridge the gap between complex AI capabilities and intuitive user experiences. We deliver clean, efficient, and impactful digital products like Bonda that simplify work, provide emotional value, and inspire innovation across the Kerala tech ecosystem.
                    </p>

                    <h2>Our Vision for 2026 and Beyond</h2>
                    <p>
                        To lead the next wave of generative AI applications in India — shaping technology that respects user privacy, understands regional languages perfectly, and drives meaningful digital growth for students and professionals alike.
                    </p>

                    <div className="trust-badge-section mt-4" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', marginTop: '2rem' }}>
                        <h2 style={{ color: 'var(--accent-primary)' }}>Why Trust the Bonda Platform?</h2>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.4rem' }}>🔒</span>
                                <div>
                                    <strong>100% Client-Side Privacy:</strong> Unlike other AI tools, Bonda never uploads your marksheets to a server. Our **local OCR engine** (Tesseract.js) processes your data entirely within your browser environment.
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.4rem' }}>🧠</span>
                                <div>
                                    <strong>Elite AI Intelligence:</strong> Powered by Google's state-of-the-art **Gemini LLM**, specifically prompted for academic context and cultural authenticity in Malayalam and English.
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.4rem' }}>🛠️</span>
                                <div>
                                    <strong>Industrial Engineering:</strong> Built by the team behind **ToolPix**, ensuring a robust, scalable backend and a flicker-free, premium frontend experience.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <h2 className="mt-4">Founder & Lead Architect</h2>
                    <div className="founder-profile" style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                        <img
                            src="/images/team/ajmal.jpg"
                            alt="Muhammed Ajmal U K - Founder of Bonda & Uthakkan"
                            style={{ width: '150px', height: '150px', borderRadius: 'var(--radius-lg)', objectFit: 'cover', border: '2px solid var(--accent-primary)' }}
                        />
                        <div style={{ flex: '1' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Muhammed Ajmal U K (Ajmal U K)</h3>
                            <p style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1rem' }}>Founder & Principal Engineer</p>
                            <p>
                                Muhammed Ajmal U K is a senior full-stack architect and AI specialist based in Kerala. With expertise in React, Next.js, and LLM implementation, he founded **Uthakkan** to build tools that solve real problems with uncompromising speed. He is dedicated to building the next generation of SaaS and AI tools from the heart of Kerala.
                            </p>
                        </div>
                    </div>
                    <div className="contact-info mt-4" style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                        <p><strong>Connect:</strong> <a href="https://linkedin.com/in/ajmal-u-k-1a93b2241" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/ajmaluk" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                        <p><strong>Headquarters:</strong> <a href="https://maps.app.goo.gl/S5irH1f84h9wd7LV8" target="_blank" rel="noopener noreferrer">Kannur, Kerala, India</a></p>
                        <p><strong>Email:</strong> <a href="mailto:contact.uthakkan@gmail.com">contact.uthakkan@gmail.com</a></p>
                    </div>
                </div>
            </main >
        </>
    );
}
