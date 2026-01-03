import { useParams } from "react-router-dom";
import data  from "../data/properties.json";

function PropertyPage() {
    const { id } = useParams();
    const property = data.properties.find(p => p.id === id);

    if(!property) {
        return <p>Property not found</p>;
    }

    return (
        <div className="container">
            <h1>£{property.price.toLocaleString()}</h1>
            <h2>{property.location}</h2>

            {/* Image gallery */}
            <div className="property-gallery">
                {property.picture.map((img, index) => (
                    <img 
                        key={index}
                        src={img}
                        alt={`Property ${index +1}`}
                    />
                ))}
            </div>

            <p><strong>Type:</strong> {property.type}</p>
            <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
            <p><strong>Tenture:</strong> {property.tenture}</p>

            <p>{property.longDescription}</p>
        </div>
    );
}

export default PropertyPage;






