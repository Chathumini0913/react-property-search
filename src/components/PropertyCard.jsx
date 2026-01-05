import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import { Link } from "react-router-dom"; 

// Display property info in search results
function PropertyCard({ property }) {
  const { addFavourite, favourites, removeFavourite } = useContext(FavouritesContext);

  // Check if the property is already a favourite
  const isFavourite = favourites.some((p) => p.id === property.id);

  return (
    <div
      className="property-card"
      draggable
      onDragStart={(e) =>
        e.dataTransfer.setData("property", JSON.stringify(property))
      }
    >
      <img src={property.picture[0]} alt={property.type} />

      <div className="content">
        <h3>£{property.price.toLocaleString()}</h3>
        <p>{property.shortDescription}</p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={`/property/${property.id}`}>View</Link>

          <button
            onClick={() =>
              isFavourite ? removeFavourite(property.id) : addFavourite(property)
            }
          >
            {isFavourite ? "❤️ Added" : "❤️ Favourite"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;


