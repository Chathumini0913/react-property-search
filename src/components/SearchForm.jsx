/*import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";*/


/*import { useState } from "react";

function SearchForm({ onSearch }) {
    const [type, setType] = useState("any");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [postcode, setPostcode] = useState("");

    const handleSubmit = (e) => {
        e.preventDeafault();

        onSearch({
            type,
            minPrice,
            maxPrice,
            bedrooms,
            postcode
        });
    };

    return ( 
        <form className="search-form" onSubmit={handleSubmit}>
            <select value={type} onChange={e => setType(e.target.value)}>
                <option value="any">Any</option>
                <option value="House">House</option>
                <option value="Flat">Flat</option>
            </select>

            <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onCharge={e => setMinPrice(e.target.value)}
            />

            <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onCharge={e => setMaxPrice(e.target.value)}
            /> 

            <input
                type="number"
                placeholder="Min Bedrroms"
                value={bedrooms}
                onCharge={e => setBedrooms(e.target.value)}
            />

            <input
                type="text"
                placeholder="Postcode area"
                value={postcode}
                onCharge={e => setMaxPrice(e.target.value)}
            />

            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;*/

import { useState } from "react";

function SearchForm({ onSearch }) {
  const [filters, setFilters] = useState({
    mode: "buy",
    type: "any",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    postcode: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>

      {/* Buy / Rent Toggle */}
      <div className="buy-rent-toggle">
        <button
          type="button"
          className={filters.mode === "buy" ? "active" : ""}
          onClick={() => setFilters({ ...filters, mode: "buy" })}
        >
          Buy
        </button>

        <button
          type="button"
          className={filters.mode === "rent" ? "active" : ""}
          onClick={() => setFilters({ ...filters, mode: "rent" })}
        >
          Rent
        </button>
      </div>

      {/* Property Type */}
      <select
        value={filters.type}
        onChange={(e) =>
          setFilters({ ...filters, type: e.target.value })
        }
      >
        <option value="any">Any property type</option>
        <option value="House">House</option>
        <option value="Flat">Flat</option>
      </select>

      {/* Price */}
      <input
        type="number"
        placeholder="Min price"
        value={filters.minPrice}
        onChange={(e) =>
          setFilters({ ...filters, minPrice: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Max price"
        value={filters.maxPrice}
        onChange={(e) =>
          setFilters({ ...filters, maxPrice: e.target.value })
        }
      />

      {/* Bedrooms */}
      <input
        type="number"
        placeholder="Min bedrooms"
        value={filters.bedrooms}
        onChange={(e) =>
          setFilters({ ...filters, bedrooms: e.target.value })
        }
      />

      {/* Postcode */}
      <input
        type="text"
        placeholder="Postcode area"
        value={filters.postcode}
        onChange={(e) =>
          setFilters({ ...filters, postcode: e.target.value })
        }
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;

