import { useState } from "react";
import { useContext } from "react";
import SearchForm from "../components/SearchForm";
import properties from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import { FavouritesContext } from "../context/FavouritesContext";

function SearchPage() {
    const [filtered, setFiltered] = useState(properties.properties);

    const { favourites, removeFavourite, clearFavourites } =
        useContext(FavouritesContext); 

    const handleSearch = (filters) => {
        let result = [...properties.properties];

        if (filters.type && filters.type !== "any") {
            result = result.filter(p => p.type === filters.type);
        }

        if (filters.minPrice) {
            result = result.filter(p => p.price >= (filters.minPrice));
        } 

        if (filters.maxPrice) {
            result = result.filter(p => p.price <= (filters.maxPrice));
        }

        if (filters.bedrooms) {
            result = result.filter(p => p.bedrooms >= (filters.bedrooms));
        } 

        if (filters.postcode) {
            result = result.filter(p => 
                p.postcode.toLowerCase().startsWith(filters.postcode.toLowerCase()) 
            );
        }

        setFiltered(result);
    };

    return (
        <div className="container">
            <h1>Property Results</h1>

            <SearchForm onSearch={handleSearch} />

            {/* Favourites section */}
            {favourites.length > 0 && (
                <div className="favourites-box">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h2>Your Favourites</h2>
                        <button onClick={clearFavourites}>Clear All</button>
                    </div>

                    <div className="results-grid">
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
            )}

            {/* Search results */}
            <div className="results-grid">
                {filtered.length === 0 ? (
                    <p>No properties found.</p>
                ) : ( 
                    filtered.map(property => (
                    <PropertyCard key={property.id} property={property} />
                    ))
                )}
            </div>
        </div>
    );
}

export default SearchPage;