// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);


    useEffect(() => {
        console.log(token)
    }, [token])

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:4000/api/user/login', { email, password });
            setUser(response.data.user);
            localStorage.setItem('auth', response.data.data)
            setToken(response.data.data);
            return response
        } catch (error) {
            console.log(error);
            return error.response;
        }
    };

    const register = async (username, email, password, userType) => {
        try {
            const response = await axios.post('http://localhost:4000/api/user/register', {
                username,
                email,
                password,
                typeOfUser: userType
            });
            console.log('this is the response', response)
            return response
        } catch (error) {
            console.log(error);
            return error.response;
        }
    }

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };