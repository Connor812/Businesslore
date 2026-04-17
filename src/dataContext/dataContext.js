import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const navigate = useNavigate();

    const [data, setData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('userData') ? true : false);

    function logout(e) {
        e.preventDefault();
        sessionStorage.removeItem('userData');
        setIsLoggedIn(false);
        navigate('/');
    }

    return (
        <DataContext.Provider value={{ data, isLoggedIn, setIsLoggedIn, logout }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };