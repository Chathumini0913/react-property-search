import { useState } from "react";
import data from "../data/properties.json"
import SearchForm from "../components/SearchForm";
import PropertyCard from "../components/PropertyCard";

function SearchPage() {
    const [results, setResults] = useState(data.properties);

    function handleSearch(criteria) {
        console.log(criteria);
    }

    return (
        <div>
            <SearchForm onSearch={handleSearch} />

            <div className="results-grid">
                {results.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
}

export default SearchPage;