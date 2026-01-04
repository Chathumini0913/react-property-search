import { createContext, useState, useEffect } from "react";

export const FavouritesContext = createContext();

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

    const addFavourite = (property) => {
        if (!favourites.find((p) => p.id === property.id)) {
            setFavourites([...favourites, property]);
        }
    };

    const removeFavourite = (id) => {
        setFavourites(favourites.filter((p) => p.id !== id));
    };

    const clearFavourites = () => setFavourites([]);

    return (
        <FavouritesContext.Provider
           value={{ favourites, addFavourite, removeFavourite, clearFavourites }}
        >
            {children}
        </FavouritesContext.Provider>
    );  
}