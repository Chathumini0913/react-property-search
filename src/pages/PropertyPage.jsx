import { useParams } from "react-router-dom";
import data from "../data/properties.json";
import PropertyGallery from "../components/PropertyGallery";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function PropertyPage() {
  const { id } = useParams();
  const property = data.properties.find((p) => p.id === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="container">
      <h1>£{property.price.toLocaleString()}</h1>
      <h2>{property.location}</h2>

      <PropertyGallery images={property.picture} />

      <p><strong>Type:</strong> {property.type}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Tenure:</strong> {property.tenure}</p>

      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Google Map</Tab>
        </TabList>

        <TabPanel style={{ marginTop: "20px", lineHeight: "1.6" , fontSize: "1rem" }}>
          <p>{property.longDescription}</p>
        </TabPanel>
        <TabPanel>
          <img
            src={property.floorPlan}
            alt="Floor Plan"
            className="floorplan-image"
          />
        </TabPanel>
        <TabPanel style={{ marginTop: "200px"}}>
          <iframe
            title="Property Map"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "8px" }}
            loading="lazy"
            allowFullScreen
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${property.lng-0.01}%2C${property.lat-0.01}%2C${property.lng+0.01}%2C${property.lat+0.01}&layer=mapnik&marker=${property.lat}%2C${property.lng}`}
          ></iframe>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default PropertyPage;




