import { Link } from "react-router-dom";

function PropertyCard({ property }) {
    return (
        <Link to={`/property/${property.id}`} className="card">
            <img src={property.image} alt="property" />
            <div className="card-body">
                <h3>£{property.price.toLocaleString()}</h3>
                <p>{property.bedrooms} bedroom</p>
                <p>{property.type}</p>
                <p>{property.postcode}</p>
            </div>
        </Link>
    );
}

export default PropertyCard;