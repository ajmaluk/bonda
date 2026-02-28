import { SEO } from '../components/SEO';
import './Page.css';

export function PrivacyPolicy() {
    const pageSchema = [{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy - Bonda",
        "url": "https://bonda.toolpix.in/privacy-policy",
        "description": "Learn how Bonda handles your data securely via completely client-side processing.",
        "publisher": {
            "@type": "Organization",
            "name": "Uthakkan",
            "logo": {
                "@type": "ImageObject",
                "url": "https://bonda.toolpix.in/logo.png"
            }
        }
    }];

    return (
        <>
            <SEO
                title="Privacy Policy | Bonda"
                description="Read Bonda's Privacy Policy. We respect your data by processing everything locally."
                url="https://bonda.toolpix.in/privacy-policy"
                schema={pageSchema}
            />
            <main className="page-content animate-fade-in">
                <h1 className="gradient-text page-title">Privacy Policy</h1>

                <div className="glass-panel page-card text-block">
                    <p>Last Updated: February 28, 2026</p>

                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to Bonda, a product by Uthakkan. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
                    </p>

                    <h2>2. Data We Collect</h2>
                    <p>
                        When you use Bonda, you may upload an image of a marksheet. We use OCR technology to extract the text and process it via our advanced AI to generate feedback.
                    </p>
                    <ul>
                        <li><strong>Uploaded Images:</strong> Images are processed 100% locally in your browser for text extraction. We never upload or store your marksheet images on any server.</li>
                        <li><strong>Extracted Text:</strong> Only the anonymized text extracted from your marksheet is sent to our AI provider (Gemini via PicoApps) to generate your request. This data is only used for the generation process and is not retained for training.</li>
                        <li><strong>Usage Data:</strong> We may collect anonymous analytics data to improve the speed and usability of our software.</li>
                    </ul>

                    <h2>3. How We Use Data</h2>
                    <p>
                        The data collected is strictly used to provide, maintain, and improve the Bonda service. We do not sell your data to third-party advertisers or data brokers under any circumstances.
                    </p>

                    <h2>4. Data Security</h2>
                    <p>
                        Uthakkan implements appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
                    </p>

                    <h2>5. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:contact.uthakkan@gmail.com">contact.uthakkan@gmail.com</a>
                    </p>
                </div>
            </main>
        </>
    );
}
