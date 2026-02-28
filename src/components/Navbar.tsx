import { Link, useLocation } from 'react-router-dom';
import bondaIcon from '../assets/icon.png';
import './Navbar.css';

export function Navbar() {
    const location = useLocation();

    return (
        <nav className="global-navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    <img
                        src={bondaIcon}
                        alt="Bonda Icon"
                        className="navbar-logo"
                    />
                    <span className="navbar-title gradient-text">Bonda</span>
                </Link>

                <div className="navbar-links">
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Tools
                    </Link>
                    <Link
                        to="/blog"
                        className={`nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}
                    >
                        Blog
                    </Link>
                    <Link
                        to="/about"
                        className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                    >
                        About Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}
