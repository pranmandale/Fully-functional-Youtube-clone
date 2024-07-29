

import React, { useEffect, createContext, useState, useContext } from "react";
import { fetchdata } from "../utils/RapidAPI/Rapidapi";

// this is prefined authcontext
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [value, setValue] = useState("new");

    useEffect(() => {
        fetchAlldata(value);
    }, [value]);

    const fetchAlldata = (query) => {
        setLoading(true);
        fetchdata(`search/?q=${query}`)
            .then((res) => {
                setData(res);
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