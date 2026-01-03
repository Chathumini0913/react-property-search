import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import SearchForm from "../components/SearchForm";
import PropertyCard from "../components/PropertyCard";
import data from "../data/properties.json";

function HomePage() {
  const [properties, setProperties] = useState(data.properties);
  const navigate = useNavigate(); // <-- useNavigate hook

  const handleSearch = (filters) => {
    let result = [...data.properties];

    if (filters.type && filters.type !== "any") {
      result = result.filter((p) => p.type === filters.type);
    }

    if (filters.minPrice) {
      result = result.filter((p) => p.price >= Number(filters.minPrice));
    }

    if (filters.maxPrice) {
      result = result.filter((p) => p.price <= Number(filters.maxPrice));
    }

    if (filters.bedrooms) {
      result = result.filter((p) => p.bedrooms >= Number(filters.bedrooms));
    }

    if (filters.postcode) {
      result = result.filter((p) =>
        p.location.toLowerCase().includes(filters.postcode.toLowerCase())
      );
    }

    setProperties(result);
  };

  // function to redirect to sign-in page
  const goToSignIn = () => {
    navigate("/signin");
  };

  return (
    <>
      <Hero />

      <div className="container">
        {/* Sign-in box */}
        <div className="signin-box">
          <strong>Sign in to streamline your search</strong>
          <p>Save properties, create alerts and keep track of enquiries.</p>
          <button className="continue-btn" onClick={goToSignIn}>
            Sign in or create an account
          </button>
        </div>

        {/* Search Form */}
        <SearchForm onSearch={handleSearch} />

        {/* Property Results */}
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
    </>
  );
}

export default HomePage;





