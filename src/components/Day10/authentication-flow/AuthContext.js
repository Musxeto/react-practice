import React, { createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ childeren }) => {
    const [authenticated, setAuthenticated] = useState(false);

    const login = () =>{
        setAuthenticated(true);
    };

    const logout = () =>{
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ authenticated, login, logout}}>
            {childeren}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
};