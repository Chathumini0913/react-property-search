/*import { useParams } from "react-router-dom";
import data  from "../data/properties.json";
import PropertyGallery from "../components/PropertyGallery";

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

            {/* Image gallery 
            <div className="property-gallery">
                {property.picture.map((img, index) => (
                    <img 
                        key={index}
                        src={img}
                        alt={`Property ${index +1}`}
                    />
                ))}
            </div>

            {/* Property details 
            <p><strong>Type:</strong> {property.type}</p>
            <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
            <p><strong>Tenture:</strong> {property.tenture}</p>

            {/* Floor plan 
            <h3>Floor Plan</h3>
            <img
                src={property.floorPlan}
                alt="Property floor plan"
                className="floorplan-image"
            />

            {/* Description 
            <p>{property.longDescription}</p>
        </div>
    );
}

export default PropertyPage;*/



import { useParams } from "react-router-dom";
import data from "../data/properties.json";
import PropertyGallery from "../components/PropertyGallery";

function PropertyPage() {
  const { id } = useParams();
  const property = data.properties.find(p => p.id === id);

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="container">
      <h1>£{property.price.toLocaleString()}</h1>
      <h2>{property.location}</h2>

      {/* Image Gallery */}
      <PropertyGallery images={property.picture} />

      {/* Property details */}
      <p><strong>Type:</strong> {property.type}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Tenure:</strong> {property.tenure}</p>

      <h3>Description</h3>
      <p>{property.longDescription}</p>

      <h3>Floor Plan</h3>
      <img
        src={property.floorPlan}
        alt="Property floor plan"
        className="floorplan-image"
      />
    </div>
  );
}

export default PropertyPage;





