import { createContext, useState, useEffect } from "react";

// Create context to store favourite properties
export const FavouritesContext = createContext();

// Provider component that wraps the app and provides favourite-related functions
export function FavouritesProvider({ children }) {
    const [favourites, setFavourites] = useState([]);

    //Load from localStorage
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("favourites")) || [];
        setFavourites(saved);
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    // Add property to favourites
    const addFavourite = (property) => {
        if (!favourites.find((p) => p.id === property.id)) {
            setFavourites([...favourites, property]);
        }
    };

    // Remove property from favourites by ID
    const removeFavourite = (id) => {
        setFavourites(favourites.filter((p) => p.id !== id));
    };

    // Clear all favourites
    const clearFavourites = () => setFavourites([]);

    return (
        <FavouritesContext.Provider
           value={{ favourites, addFavourite, removeFavourite, clearFavourites }}
        >
            {children}
        </FavouritesContext.Provider>
    );  
}