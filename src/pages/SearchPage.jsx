import { useState } from "react";
import SearchForm from "../components/SearchForm";
import properties from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";

function SearchPage() {
    const [filtered, setFiltered] = useState(properties.properties);

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