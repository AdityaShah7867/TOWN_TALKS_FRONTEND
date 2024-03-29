import React, { useEffect } from "react";
// import Search from '../../Components/Search/Search'
import EventCard from "../../Components/Cards/EventCard";
import { useEvent } from "../../Context/EventContext";
import { useState } from "react";
import Multi from "../../Components/Multi/Multi";
import Search from "../../Components/Multi/Search";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { fetchEvents } = useEvent();

  useEffect(() => {
    fetchEvents().then((response) => {
      setEvents(response.data);
    });
  }, []);

  let formattedEvents = events.filter((event) => {
    return event.title.toLowerCase().includes(searchText.toLowerCase());
  });

  useEffect(() => {
    console.log("searchText", searchText);
  }, [searchText]);

  return (
    <div className="bg-gray-100 p-12 min-h-screen overflow-hid font-sans">
      <div className="mb-8">


        {/* <Search searchText={searchText} setSearchText={setSearchText} /> */}
        <Multi />
      </div>
      <div className="   flex flex-wrap gap-8 mt-4">
        {formattedEvents
          ? formattedEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))
          : events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
      </div>
    </div>
  );
};

export default Home;
