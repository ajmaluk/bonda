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
                    <h2>Our Story</h2>
                    <p>
                        We build fast, uncompromising software. Uthakkan, founded in 2025 in Kannur, Kerala, is focused on creating digital products that solve complex problems with elegant architecture.
                    </p>

                    <h2>Our Mission</h2>
                    <p>
                        To merge creativity with technology — delivering clean, efficient, and impactful digital products that simplify work, enhance productivity, and inspire innovation.
                    </p>

                    <h2>Our Vision</h2>
                    <p>
                        To innovate across AI, development, and design — shaping technology that inspires creativity and drives meaningful digital growth.
                    </p>

                    <h2>Founder Details</h2>
                    <h3>Ajmal U K (Founder & Lead Engineer)</h3>
                    <p>
                        Ajmal is a full-stack developer and AI enthusiast who builds products at the intersection of complex engineering and clean design. Frustrated by bloated software, he founded Uthakkan to architect tools—like ToolPix and Byte AI—that are as powerful under the hood as they are elegant on the surface.
                    </p>
                    <div className="contact-info mt-4">
                        <p><strong>Headquarters:</strong> Kannur, Kerala</p>
                        <p><strong>Email:</strong> <a href="mailto:contact.uthakkan@gmail.com">contact.uthakkan@gmail.com</a></p>
                    </div>
                </div>
            </main>
        </>
    );
}
