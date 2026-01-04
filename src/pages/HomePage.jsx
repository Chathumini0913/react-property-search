/*import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import PropertyCard from "../components/PropertyCard";
import data from "../data/properties.json";
import { FavouritesContext } from "../context/FavouritesContext";

function HomePage() {
  const [properties, setProperties] = useState(data.properties);
  const navigate = useNavigate();
  const { favourites, addFavourite, removeFavourite, clearFavourites } =
    useContext(FavouritesContext);

  const handleSearch = (filters) => {
    let result = [...data.properties];

    if (filters.type && filters.type !== "any") {
      result = result.filter((p) => p.type === filters.type);
    }
    if (filters.minPrice) result = result.filter((p) => p.price >= Number(filters.minPrice));
    if (filters.maxPrice) result = result.filter((p) => p.price <= Number(filters.maxPrice));
    if (filters.bedrooms) result = result.filter((p) => p.bedrooms >= Number(filters.bedrooms));
    if (filters.postcode)
      result = result.filter((p) =>
        p.location.toLowerCase().includes(filters.postcode.toLowerCase())
      );

    setProperties(result);
  };

  const goToSignIn = () => navigate("/signin");

  return (
    <>
      <Hero />

      <div className="container" style={{ display: "flex", gap: "20px" }}>
        {/* Main content 
        <div style={{ flex: 3 }}>
          {/* Sign-in box 
          <div className="signin-box">
            <strong>Sign in to streamline your search</strong>
            <p>Save properties, create alerts and keep track of enquiries.</p>
            <button className="continue-btn" onClick={goToSignIn}>
              Sign in or create an account
            </button>
          </div>

          {/* Search Form 
          <SearchForm onSearch={handleSearch} />

          {/* Property Results 
          <div className="results-grid">
            {properties.length === 0 ? (
              <p>No properties found.</p>
            ) : (
              properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            )}
          </div>
        </div>

        {/* Favourites Panel 
        <div
          className="favourites-box"
          style={{
            flex: 1,
            background: "#fff",
            padding: "16px",
            borderRadius: "8px",
            minWidth: "250px",
            maxHeight: "180vh",
            overflowY: "auto",
            marginTop: "390px",
          }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const dropped = JSON.parse(e.dataTransfer.getData("property"));
            addFavourite(dropped);
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <h2>Your Favourites</h2>
            <button onClick={clearFavourites}>Clear All</button>
          </div>

          {favourites.length === 0 && <p>No favourites yet.</p>}

          {favourites.map((p) => (
            <div
              key={p.id}
              className="property-card"
              draggable
              onDragEnd={() => removeFavourite(p.id)}
            >
              <img src={p.picture[0]} alt={p.type} />
              <div className="content">
                <h4>£{p.price.toLocaleString()}</h4>
                <p>{p.shortDescription}</p>
                <button onClick={() => removeFavourite(p.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage; */



import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import PropertyCard from "../components/PropertyCard";
import data from "../data/properties.json";
import { FavouritesContext } from "../context/FavouritesContext";

function HomePage() {
  const [properties, setProperties] = useState(data.properties);
  const navigate = useNavigate();
  const { favourites, addFavourite, removeFavourite, clearFavourites } =
    useContext(FavouritesContext);

  const handleSearch = (filters) => {
    let result = [...data.properties];

    if (filters.type && filters.type !== "any") {
      result = result.filter((p) => p.type === filters.type);
    }
    if (filters.minPrice)
      result = result.filter((p) => p.price >= Number(filters.minPrice));
    if (filters.maxPrice)
      result = result.filter((p) => p.price <= Number(filters.maxPrice));
    if (filters.bedrooms)
      result = result.filter((p) => p.bedrooms >= Number(filters.bedrooms));
    if (filters.postcode)
      result = result.filter((p) =>
        p.location.toLowerCase().includes(filters.postcode.toLowerCase())
      );

    setProperties(result);
  };

  const goToSignIn = () => navigate("/signin");

  return (
    <>
      <Hero />

      <div
        className="container"
        style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
      >
        {/* Left Column: Sign-in, Search, Results */}
        <div
          style={{
            flex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Sign-in box */}
          <div
            className="signin-box"
            style={{ width: "100%", maxWidth: "700px", marginBottom: "20px" }}
          >
            <strong>Sign in to streamline your search</strong>
            <p>Save properties, create alerts and keep track of enquiries.</p>
            <button className="continue-btn" onClick={goToSignIn}>
              Sign in or create an account
            </button>
          </div>

          {/* Search Form */}
          <div
            style={{ width: "100%", maxWidth: "700px", marginBottom: "20px" }}
          >
            <SearchForm onSearch={handleSearch} />
          </div>

          {/* Property Results */}
          <div className="results-grid" style={{ width: "100%" }}>
            {properties.length === 0 ? (
              <p>No properties found.</p>
            ) : (
              properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            )}
          </div>
        </div>

        {/* Right Column: Favourites */}
        <div
          className="favourites-box"
          style={{
            flex: 1,
            background: "#fff",
            padding: "16px",
            borderRadius: "8px",
            minWidth: "250px",
            maxHeight: "180vh",
            overflowY: "auto",
          }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const dropped = JSON.parse(e.dataTransfer.getData("property"));
            addFavourite(dropped);
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <h2>Your Favourites</h2>
            <button onClick={clearFavourites}>Clear All</button>
          </div>

          {favourites.length === 0 && <p>No favourites yet.</p>}

          {favourites.map((p) => (
            <div
              key={p.id}
              className="property-card"
              draggable
              onDragEnd={() => removeFavourite(p.id)}
            >
              <img src={p.picture[0]} alt={p.type} />
              <div className="content">
                <h4>£{p.price.toLocaleString()}</h4>
                <p>{p.shortDescription}</p>
                <button onClick={() => removeFavourite(p.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;









