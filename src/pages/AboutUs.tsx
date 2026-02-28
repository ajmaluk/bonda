import { SEO } from '../components/SEO';
import './Page.css';

export function AboutUs() {
    const pageSchema = [{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Us - Uthakkan & Bonda",
        "url": "https://bonda.toolpix.in/about",
        "description": "Learn about Uthakkan, the team that built Bonda.",
        "mainEntity": {
            "@type": "Organization",
            "name": "Uthakkan",
            "alternateName": "Bonda by Uthakkan",
            "url": "https://www.uthakkan.in",
            "logo": "https://bonda.toolpix.in/logo.png",
            "description": "We build fast, uncompromising software experiences without bureaucratic bloat.",
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
                        We build fast, uncompromising software. Uthakkan, founded in 2025 in Kannur, Kerala, is a collective of specialized engineers focused on high-performance web architecture, native AI integration, and secure user data processing. Bonda represents our commitment to merging local cultural nuances with world-class engineering.
                    </p>

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
                    <h3>Ajmal U K (Founder & Principal Engineer)</h3>
                    <p>
                        Ajmal is a senior full-stack developer and AI implementation specialist based in Kerala. With over half a decade of experience in building high-traffic web applications, he specializes in React performance optimization and LLM prompt engineering. Frustrated by the lack of culturally aware software, he founded **Uthakkan** to architect tools that are as technically sound as they are delightful to use.
                    </p>
                    <div className="contact-info mt-4">
                        <p><strong>Connect:</strong> <a href="https://linkedin.com/in/ajmal-u-k-1a93b2241" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="https://github.com/ajmaluk" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                        <p><strong>Headquarters:</strong> Kannur, Kerala</p>
                        <p><strong>Email:</strong> <a href="mailto:contact.uthakkan@gmail.com">contact.uthakkan@gmail.com</a></p>
                    </div>
                </div>
            </main>
        </>
    );
}
