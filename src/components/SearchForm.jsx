import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function SearchForm({ onSearch }) {
    const [type, setType] = useState(null);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const options = [
        { value: "any", label: "Any" },
        { value: "house", label: "House" },
        { value: "flat", label: "Flat"}
    ];

    return (
        <div>
            <select options={options} onCharge={setType} />
            <input type="number" placeholder="Min Price" onCharge={e => setMinPrice(e.target.value)} />
            <input type="number" placeholder="Max Price" onCharge={e => setMaxPrice(e.target.value)} />
            <button>Search</button>
        </div>
    );
}

export default SearchForm;
