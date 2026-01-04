import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-black">Home</span> 
          <span className="logo-accent">Search</span>
        </Link>
        <NavMenu />
      </div>
    </header>
  );
}

export default Header;
