import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Main search area on homepage
function Hero() {
    // State to track selected mode: buy, rent, sold
    const [mode, setMode] = useState("buy");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    // Return descriptive text based on selected mode
    const getModeText = () => {
        if (mode === "buy") return "Search properties to buy";
        if (mode === "rent") return "Search properties to rent";
        return "Search sold house prices";
    };

    // Handle search button click or Enter key
    const handleSearch = () => {
        const params = new URLSearchParams({
            mode,
            location: query
        }).toString();
    
        navigate(`/search?${params}`);
    };

    return (
        <section className="hero">
            <div className="hero-content">
                {/* Main heading */}
                <h1 className="hero-title">Find your happy place</h1>
                
                {/* Subheading */}
                <h2 className="hero-subtitle">Search properties for sale and to rent in the UK</h2>

                {/* Buy / Rent / Sold buttons */}
                <div className="hero-toggle">
                    <button
                        className={`hero-toggle-btn ${mode === "buy" ? "active" : ""}`}
                        onClick={() => setMode("buy")}
                    >
                        Buy
                    </button> 

                    <button
                        className={`hero-toggle-btn ${mode === "rent" ? "active" : ""}`}
                        onClick={() => setMode("rent")}
                    >
                        Rent
                    </button>

                    <button
                        className={`hero-toggle-btn ${mode === "sold" ? "active" : ""}`}
                        onClick={() => setMode("sold")}
                    >
                        Sold
                    </button>
                </div>

                {/* Mode text under buttons */}
                <p className="hero-mode-text">{getModeText()}</p>

                {/* Search input */}
                <div className="hero-search">
                    <input
                        type="text"
                        className="hero-search-input"
                        placeholder="e.g. Bath, NW3, or Leeds station"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    />
                    <button className="hero-search-btn" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;












