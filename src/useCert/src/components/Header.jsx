import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-content">
          <div className="logo-section">
            <h1>Exam Registration System</h1>
          </div>

          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            {/* <a href="#" className="nav-link">
              Dashboard
            </a>
            <a href="#" className="nav-link">
              Registration
            </a>
            <a href="#" className="nav-link">
              Schedule
            </a> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
