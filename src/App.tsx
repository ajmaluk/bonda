import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Blog } from './pages/Blog';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Background blobs for premium effect */}
        <div className="bg-blob-1"></div>
        <div className="bg-blob-2"></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
