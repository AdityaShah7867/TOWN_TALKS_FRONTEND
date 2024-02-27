// EventContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const EventContext = createContext();

const EventProvider = ({ children }) => {

    // const [events, setEvents] = useState([])


    const fetchEvents = async () => {
        const response = await axios.get(`http://localhost:4000/api/event/events`, {
            headers: {
                'auth-token': localStorage.getItem('auth')
            }
        })

        return response
    }


    return (
        <EventContext.Provider value={{ fetchEvents }}>
            {children}
        </EventContext.Provider>
    );
};

const useEvent = () => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEvent must be used within an EventProvider');
    }
    return context;
};

export { EventProvider, useEvent };