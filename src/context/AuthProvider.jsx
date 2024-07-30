import React, { useEffect, createContext, useState, useContext } from "react";
import { fetchdata } from "../utils/RapidAPI/Rapidapi";

// this is prefined authcontext
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    // The loading state likely indicates whether data is currently being fetched.
    const [loading, setLoading] = useState(false);

    // This state will hold the data fetched from the API.
    const [data, setData] = useState([]);

    // The value state may represent a query term or some other parameter used to fetch data.
    const [value, setValue] = useState("new");

    useEffect(() => {
        fetchAlldata(value);
    }, [value]);

    const fetchAlldata = (query) => {
        // true indicates fetching is in progress
        setLoading(true);
        fetchdata(`search/?q=${query}`)
        // contents is array of data which is coming from API
            .then(({contents}) => {
                setData(contents);
                // false indicated fetching of data is completed
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    };

    return (
        <AuthContext.Provider value={{ loading, data, value, setValue }}>
            {children}
        </AuthContext.Provider>
    );
}

// it is custom defined 
export const useAuth= ()=> useContext(AuthContext)