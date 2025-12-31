import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="navbar">
            <div className="navebar-container">
                <Link to="/" className="navbar-logo">PropertyFinder</Link>
            
                <nav className="navbar-links">
                    <Link to="/" className="nav-link">Buy</Link>
                    <Link to="/" className="nav-link">Rent</Link>
                    <Link to="/" className="nav-link">Sold Prices</Link> 
                    <Link to="/" className="nav-link">New Homes</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;