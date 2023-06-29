import React, {createContext, useState} from "react";

export const DataContext =createContext();

export const DataProvider = ({children}) =>{
    const[data, setData]=useState(false);

    const login = () => {
        setData(true);
    }

    const logout = () => {
        setData(false)
    }

    return(
        <DataContext.Provider value={{data, login, logout}}>
            {children}
        </DataContext.Provider>
    )
};

