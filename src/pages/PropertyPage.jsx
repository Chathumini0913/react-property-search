import { useParams } from "react-router-dom";
import properties  from "../data/properties.json";

function PropertyPage() {
    const { id } = useParams();
    const property = properties.properties.find(p => p.id === Number(id));

    if(!property) {
        return <p>Property not found</p>;
    }

    return (
        <div className="container">
            <h1>£{property.price.toLocaleString()}</h1>
            <img src={property.image} alt="" style={{ width: "100%" }} />
            <p>Type: {property.type}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Postcode: {property.postcode}</p>
            <p>{property.description}</p>
        </div>
    );
}

export default PropertyPage;