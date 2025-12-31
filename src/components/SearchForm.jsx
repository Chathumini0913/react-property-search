/*import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";*/
import { useState } from "react";

function SearchForm({ onSearch }) {
    const [type, setType] = useState(null);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    function handleSubmit(e) {
        e.preventDeafault();

        onSearch({
            type,
            minPrice,
            maxPrice
        });
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <select value={type} onChange={e => setType(e.target.value)}>
                <option value="">Any</option>
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

            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;
