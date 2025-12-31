/*import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";*/
import { useState } from "react";

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

export default SearchForm;
