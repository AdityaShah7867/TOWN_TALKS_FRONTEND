// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    // const navigate = useNavigate()




    useEffect(() => {
        console.log(token)
    }, [token])

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/user/getUser', {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("auth")}`,
                    },
                });
                setUser(response.data.data);

            } catch (error) {
                console.log(error);
            }
        };
        checkAuth();
    }
        , []);

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
        localStorage.removeItem('auth');
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