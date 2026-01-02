import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
    const [mode, setMode] = useState("buy");
    const [query, setQuery ] = useState("");
    const navigate = useNavigate();

    const getModeText = () => {
        if (mode === "buy") return "Search properties for sale";
        if (mode === "rent") return "Search properties to rent";
        return "Search sold house prices";
    };

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
                <h1>Find your happy place</h1>
                <p>Search propertes for sale and to rent in the UK</p>

                {/* Buy / Rent / Sold buttons*/ }
                <div className="hero-toggle">
                    <button
                        className={mode === "buy" ? "active" : ""}
                        onClick={() => setMode("buy")}
                    >
                        Buy
                    </button> 

                    <button
                        className={mode === "rent" ? "active" : ""}
                        onClick={() => setMode("rent")}
                    >
                        Rent
                    </button>

                    <button
                        className={mode === "sold" ? "active" : ""}
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
                        placeholder="Enter postcode, town or city"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;












