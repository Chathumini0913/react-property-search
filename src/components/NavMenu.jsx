import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function NavMenu() {
    const [openMenu, setOpenMenu] = useState(null);
    const navRef = useRef(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpenMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="nav-menu" ref={navRef}>

            {/* BUY */}
            <div className="nav-item">
                <span className="nav-title" onClick={() => toggleMenu("buy")}>
                    Buy
                </span>
                <div className={`dropdown mega ${openMenu === "buy" ? "show" : ""}`}>
                    <Link to="/">Property for sale</Link>
                    <Link to="/">New homes for sale</Link>
                    <Link to="/">Property valuation</Link>
                    <Link to="/">Investors</Link>
                    <Link to="/">Mortgages</Link>
                </div>
            </div>

            {/* RENT */}
            <div className="nav-item">
                <span className="nav-title" onClick={() => toggleMenu("rent")}>
                    Rent
                </span>
                <div className={`dropdown mega ${openMenu === "rent" ? "show" : ""}`}>
                    <Link to="/">Property to rent</Link>
                    <Link to="/">Student property</Link>
                </div>
            </div>

            {/* HOUSE PRICES */}
            <div className="nav-item">
                <span className="nav-title" onClick={() => toggleMenu("prices")}>
                    House Prices
                </span>
                <div className={`dropdown mega ${openMenu === "prices" ? "show" : ""}`}>
                    <Link to="/">Sold house prices</Link>
                    <Link to="/">Instant valuation</Link>
                </div>
            </div>

            {/* FIND AGENT */}
            <div className="nav-item">
                <span className="nav-title" onClick={() => toggleMenu("agent")}>
                    Find Agent
                </span>
                <div className={`dropdown mega ${openMenu === "agent" ? "show" : ""}`}>
                    <Link to="/">Find estate agents</Link>
                </div>
            </div>

            <Link to="/signin" className="sign-in-btn">Sign in</Link>
        </nav>
    );
}

export default NavMenu;

