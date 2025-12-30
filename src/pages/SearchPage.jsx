import properties from "../data/properties.json";

function SearchPage() {
    return (
    
        <div>
            <h2>Property Results</h2>
            
            {properties.map((property) => (
                <div key={property.id}>
                    <h3>£{property.price}</h3>
                    <p>{property.bedrooms} bedroom {property.type}</p>
                    <p>{property.location}</p>
                </div>
            ))}
        </div>
    );
}

export default SearchPage;