import React, { useEffect } from "react";
// import Search from '../../Components/Search/Search'
import EventCard from "../../Components/Cards/EventCard";
import { useEvent } from "../../Context/EventContext";
import { useState } from "react";
// import Multi from "../../Components/Multi/Multi";
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
      <div>
        <p className="text-3xl font-bold ml-8">FIND EVENTS</p>
        {/* <Multi searchText={searchText} setSearchText={setSearchText} /> */}

        <Search searchText={searchText} setSearchText={setSearchText} />
      </div>
      <div className=" mx-20  flex flex-wrap gap-8 mt-4">
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
