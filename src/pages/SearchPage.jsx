import { useState } from "react";
import { useContext } from "react";
import SearchForm from "../components/SearchForm";
import properties from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import { FavouritesContext } from "../context/FavouritesContext";
import {useNavigate } from "react-router-dom";

function SearchPage() {
    const navigate = useNavigate();
    const [filtered, setFiltered] = useState(properties.properties);

    const { favourites, removeFavourite, clearFavourites } =
        useContext(FavouritesContext); 

    const handleSearch = (filters) => {
        let result = [...properties.properties];

        // Property type
        if (filters.type && filters.type !== "any") {
            result = result.filter(p => p.type === filters.type);
        }

        // Price range
        if (filters.minPrice) {
            result = result.filter(p => p.price >= Number(filters.minPrice));
        } 

        if (filters.maxPrice) {
            result = result.filter(p => p.price <= Number(filters.maxPrice));
        }

        // Bedrooms
        if (filters.minBeds) {
            result = result.filter(p => p.bedrooms >= Number(filters.minBeds));
        } 

        if (filters.maxBeds) {
            result = result.filter(p => p.bedrooms <= Number(filters.maxBeds));
        }

        // Postcode
        if (filters.postcode) {
            result = result.filter(p => 
                p.location
                    .toLowerCase()
                    .includes(filters.postcode.toLowerCase()) 
            );
        }

        // Date added 
        if (filters.dateFrom) {
            result = result.filter(p => {
                const date = new Date(p.dateAdded || p.added);
                return date >= new Date(filters.dateFrom);
            });
        } 

        if (filters.dateTo) {
            result = result.filter(p => {
                const date = new Date(p.dateAdded || p.added);
                return date <= new Date(filters.dateTo);
            });
        }

        console.log("Filters applied:", filters);
        console.log("Results:", result);

        setFiltered(result);
    };

    return (
        <div className="container">
            <button
                className="back-home-btn"
                onClick={() => navigate("/")}
            >
                ← Back to Home 
            </button>
        
            <h1>Property Results</h1>

            <SearchForm onSearch={handleSearch} />

            <div
                style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                }}
            >

                {/* Search results */}
                <div style={{ flex: 3 }}>
                    <div className="results-grid">
                        {filtered.length === 0 ? (
                            <p>No properties found.</p>
                        ) : ( 
                            filtered.map(property => (
                                <PropertyCard 
                                    key={property.id} 
                                    property={property}
                                />
                            ))
                        )}
                    </div>
                </div>
                

                {/* Favourites section */} 
            
                <div className="favourites-box sticky-favourites">
                    <div 
                        style={{
                            display: "flex", 
                            justifyContent: "space-between",
                            marginBottom: "10px",
                        }}
                    >
                        <h2>Your Favourites</h2>
                        <button 
                            className="clear-favourites-btn"
                            onClick={clearFavourites}
                        >
                            Clear All
                        </button>
                    </div>

                    {favourites.length === 0 && <p>No favourites yet.</p>}

                    
                    {favourites.map((p) => (
                        <div key={p.id} className="property-card">
                            <img src={p.picture[0]} alt={p.type} />
                            <div className="content">
                                <h3>£{p.price.toLocaleString()}</h3>
                                <p>{p.shortDescription}</p>
                                <button onClick={() => removeFavourite(p.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>    
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchPage;










