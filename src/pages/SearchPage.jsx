import { useState } from "react";
import SearchForm from "../components/SearchForm";
import properties from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";

function SearchPage() {
    const [filtered, setFiltered] = useState(properties.properties);

    const handleSearch = (filters) => {
        let result = properties.properties;

        if (filters.type !== "any") {
            result = result.filter(p => p.type === filters.type);
        }

        setFiltered(result);
    };

    return (
        <div className="container">
            <h1>Property Results</h1>

            <SearchForm onSearch={handleSearch} />

            <div className="results-grid">
                {filtered.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
}

export default SearchPage;