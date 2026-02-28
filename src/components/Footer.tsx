import { Link } from 'react-router-dom';
import bondaIcon from '../assets/icon.png';
import './Footer.css';

export function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-company-info">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <img src={bondaIcon} alt="Bonda Icon" style={{ width: '28px', height: '28px', filter: 'drop-shadow(0 0 5px rgba(217, 119, 6, 0.4))' }} />
                        <h3 style={{ margin: 0 }}>Bonda</h3>
                    </div>
                    <p>We build fast, uncompromising software. Bonda is your ultimate AI marksheet feedback tool, created by Uthakkan.</p>
                    <p className="founder-credit">Founded by Muhammed Ajmal U K in 2025</p>
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
                    <p>Developer: <a href="https://uthakkan.in/" target="_blank" rel="noopener noreferrer">Uthakkan</a></p>
                    <p>Headquarters: <a href="https://maps.app.goo.gl/S5irH1f84h9wd7LV8" target="_blank" rel="noopener noreferrer">Kannur, Kerala</a></p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Bonda by Uthakkan. All rights reserved.</p>
                <p className="powered-by">Powered by Google Gemini &amp; Local OCR.</p>
            </div>
        </footer>
    );
}
