/*function Footer() {
    return (
        <footer className="footer">
            <p>@ 2025 PropertyFinder</p>
        </footer>
    );
}

export default Footer; */




import { Link } from "react-router-dom";
import "../styles/App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Buy</h4>
          <Link to="/search?mode=buy">Houses for Sale</Link>
          <Link to="/search?mode=buy">Flats for Sale</Link>
        </div>
        <div className="footer-column">
          <h4>Rent</h4>
          <Link to="/search?mode=rent">Houses for Rent</Link>
          <Link to="/search?mode=rent">Flats for Rent</Link>
        </div>
        <div className="footer-column">
          <h4>Sold</h4>
          <Link to="/search?mode=sold">Sold houses prices</Link>
          <Link to="/search?mode=sold">Instant valuation</Link>
        </div>
        <div className="footer-column">
          <h4>Help</h4>
          <Link to="/faq">FAQ</Link>
          <Link to="/support">Support</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 HomeSearch. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
