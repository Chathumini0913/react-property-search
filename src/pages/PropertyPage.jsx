import { useParams } from "react-router-dom";
import data from "../data/properties.json";

function PropertyPage() {
    const { id } = useParams();
    const property = data.properties.find(p => p.id === id);

    if(!property) {
        return <p>Property not found</p>;
    }

    return (
        <div>
            <h1>£{property.price.toLocaleString()}</h1>
            <p>{property.location}</p>
            <img src={property.picture} alt="" />
            <p>{property.description}</p>
        </div>
    );
}

export default PropertyPage;