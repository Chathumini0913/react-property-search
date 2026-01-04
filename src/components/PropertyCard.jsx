/*import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  const { addFavourite, favourites } = useContext(FavouritesContext);

  const isFavourite = favourites.some((p) => p.id === property.id);

  return (
    <div className="property-card">
      <img src={property.picture[0]} alt={property.type} />

      <div className="content">
        <h3>£{property.price.toLocaleString()}</h3>
        <p>{property.shortDescription}</p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={`/property/${property.id}`}>View</Link>

          <button
            onClick={() => addFavourite(property)}
            disabled={isFavourite}
          >
            {isFavourite ? "❤️ Added" : "❤️ Favourite"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard; */





import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  const { addFavourite, favourites, removeFavourite } = useContext(FavouritesContext);

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


