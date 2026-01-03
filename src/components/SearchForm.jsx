import { useState } from "react";

function SearchForm({ onSearch }) {
  const [filters, setFilters] = useState({
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










