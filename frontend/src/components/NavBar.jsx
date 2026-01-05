import '../css/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <h1>Healing Meadows</h1>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#approach">Approach</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;