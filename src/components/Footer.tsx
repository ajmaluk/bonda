import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-company-info">
                    <h3>Bonda</h3>
                    <p>We build fast, uncompromising software. Bonda is your ultimate AI marksheet feedback tool, created by Uthakkan.</p>
                    <p className="founder-credit">Founded by Ajmal U K in 2025</p>
                </div>

                <div className="footer-links-group">
                    <h4>Pages & Policies</h4>
                    <ul className="footer-links">
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-service">Terms of Service</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact & Info</h4>
                    <p>Email: <a href="mailto:contact.uthakkan@gmail.com">contact.uthakkan@gmail.com</a></p>
                    <p>Website: <a href="https://bonda.toolpix.in" target="_blank" rel="noopener noreferrer">bonda.toolpix.in</a></p>
                    <p>Headquarters: Kannur, Kerala</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Bonda by Uthakkan. All rights reserved.</p>
                <p className="powered-by">Powered by Advanced AI & Local OCR.</p>
            </div>
        </footer>
    );
}
