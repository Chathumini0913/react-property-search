function PropertyCard({ property }) {
    return (
        <div className="property-card">
            <h3>£{property.price}</h3>
            <p>{property.bedrooms} bedroom {property.type}</p>
            <p>{property.location}</p>
        </div>
    );
}

export default PropertyCard;