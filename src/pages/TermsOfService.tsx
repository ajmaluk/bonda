import { SEO } from '../components/SEO';
import './Page.css';

export function TermsOfService() {
    const pageSchema = [{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service - Bonda",
        "url": "https://bonda.toolpix.in/terms-of-service",
        "description": "Read the terms and conditions for using the Bonda application.",
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
                title="Terms of Service | Bonda"
                description="Bonda terms of service and usage conditions."
                url="https://bonda.toolpix.in/terms-of-service"
                schema={pageSchema}
            />
            <main className="page-content animate-fade-in">
                <h1 className="gradient-text page-title">Terms of Service</h1>

                <div className="glass-panel page-card text-block">
                    <p>Last Updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using Marksheet AI (provided by Uthakkan), you accept and agree to be bound by the terms and provision of this agreement.
                    </p>

                    <h2>2. Description of Service</h2>
                    <p>
                        Marksheet AI provides an AI-powered feedback generator based on uploaded images of marksheets. The service provides simulated "motivation" or "roast" (troll) feedback for entertainment and novel purposes.
                    </p>

                    <h2>3. User Conduct and Responsibilities</h2>
                    <ul>
                        <li>You must only upload documents that you have the right to process.</li>
                        <li>The AI-generated "Troll" mode is strictly for comedic purposes and should not be taken seriously or as professional advice.</li>
                        <li>You agree not to use the service for any illegal or unauthorized purpose.</li>
                    </ul>

                    <h2>4. Intellectual Property</h2>
                    <p>
                        The service and its original content, features, and functionality are and will remain the exclusive property of Uthakkan and its licensors.
                    </p>

                    <h2>5. Limitation of Liability</h2>
                    <p>
                        In no event shall Uthakkan, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                    </p>

                    <h2>6. Changes to Terms</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
                    </p>

                    <h2>7. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at: <a href="mailto:contact.uthakkan@gmail.com">contact.uthakkan@gmail.com</a>
                    </p>
                </div>
            </main>
        </>
    );
}
