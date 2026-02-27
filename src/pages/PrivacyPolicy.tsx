import './Page.css';

export function PrivacyPolicy() {
    return (
        <main className="page-content animate-fade-in">
            <h1 className="gradient-text page-title">Privacy Policy</h1>

            <div className="glass-panel page-card text-block">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Introduction</h2>
                <p>
                    Welcome to Marksheet AI, a product by Uthakkan. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
                </p>

                <h2>2. Data We Collect</h2>
                <p>
                    When you use Marksheet AI, you may upload an image of a marksheet. We use OCR technology to extract the text and process it via our advanced AI to generate feedback.
                </p>
                <ul>
                    <li><strong>Uploaded Images:</strong> Images are processed locally or securely transmitted for text extraction. We do not permanently store your marksheet images.</li>
                    <li><strong>Extracted Text:</strong> The text extracted from your marksheet is sent to our AI provider (PicoApps) to generate your request. This data is only used for the generation process and is not retained for training our models.</li>
                    <li><strong>Usage Data:</strong> We may collect anonymous analytics data to improve the speed and usability of our software.</li>
                </ul>

                <h2>3. How We Use Data</h2>
                <p>
                    The data collected is strictly used to provide, maintain, and improve the Marksheet AI service. We do not sell your data to third-party advertisers or data brokers under any circumstances.
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
    );
}
