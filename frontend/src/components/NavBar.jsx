import { Link } from 'react-router-dom';
import '../css/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <h1><Link to="/" className="logo-link">Healing Meadows</Link></h1>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/therapist">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/therapeutic-approach">Approach</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;