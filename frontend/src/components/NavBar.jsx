import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/NavBar.css';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <h1><Link to="/" className="logo-link" onClick={closeMenu}>Healing Meadows</Link></h1>
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/therapist" onClick={closeMenu}>About</Link></li>
                <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
                <li><Link to="/therapeutic-approach" onClick={closeMenu}>Approach</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;