import { useState } from "react";

// SearchForm components for filtering properties based on user-selected critiria
function SearchForm({ onSearch }) {
  // State to track all search filters
  const [filters, setFilters] = useState({
    type: "any",
    minPrice: "",
    maxPrice: "",
    minBeds: "",
    maxBeds: "",
    dateFrom: "",
    dateTo: "",
    postcode: "",
  });

  // Submit handler calls parent onSearch with current filters
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form className="rm-search-box" onSubmit={handleSubmit}>
      <h2 className="rm-title">Find property for sale</h2>

      {/* Row 1 : Property type and date added filters*/}
      <div className="rm-row">
        <div className="rm-field">
          <label>Property type</label>
          <select
            value={filters.type}
            onChange={(e) =>
              setFilters({ ...filters, type: e.target.value })
            }
          >
            <option value="any">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </div>

        <div className="rm-field">
          <label>Added to site</label>
          <select
            value={filters.dateFrom}
            onChange={(e) =>
              setFilters({ ...filters, dateFrom: e.target.value })
            }
          >
            <option value="">Anytime</option>
            <option value="2025-01-01">Last 24 hours</option>
            <option value="2025-01-07">Last 7 days</option>
            <option value="2025-01-30">Last 30 days</option>
          </select>
        </div>
      </div>

      {/* Row 2 : Price range and bedrooms */}
      <div className="rm-row">
        <div className="rm-field">
          <label>Price range (£)</label>
          <div className="rm-inline">
            <input
              type="number"
              placeholder="No min"
              value={filters.minPrice}
              onChange={(e) =>
                setFilters({ ...filters, minPrice: e.target.value })
              }
            />
            <span>–</span>
            <input
              type="number"
              placeholder="No max"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: e.target.value })
              }
            />
          </div>
        </div>

        <div className="rm-field">
          <label>No. of bedrooms</label>
          <div className="rm-inline">
            <input
              type="number"
              placeholder="No min"
              value={filters.minBeds}
              onChange={(e) =>
                setFilters({ ...filters, minBeds: e.target.value })
              }
            />
            <span>–</span>
            <input
              type="number"
              placeholder="No max"
              value={filters.maxBeds}
              onChange={(e) =>
                setFilters({ ...filters, maxBeds: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      {/* Row 3 : Postcode filter and search button */}
      <div className="rm-row rm-bottom">
        <div className="rm-field">
          <label>Postcode area</label>
          <input
            type="text"
            placeholder="e.g. G12"
            value={filters.postcode}
            onChange={(e) =>
              setFilters({ ...filters, postcode: e.target.value })
            }
          />
        </div>

        <button type="submit" className="rm-search-btn">
          Search properties
        </button>
      </div>
    </form>
  );
}

export default SearchForm;












