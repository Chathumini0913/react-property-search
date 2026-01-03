import  { Link } from "react-router-dom";

function PropertyCard({ property }) {
    return (
        <Link to={`/property/${property.id}`} className="property-card">
            <img src={property.picture[0]} alt={property.shortDescription} />

            <div className="content">
                <h3>£{property.price.toLocaleString()}</h3>
                <p>{property.shortDescription}</p>
                <p>
                    {property.bedrooms} bedroom {property.type}
                </p>
                <p>{property.location}</p>
            </div>
        </Link>
    );
}

export default PropertyCard;