import React from "react";
import { useEvent } from "../../Context/EventContext";
import { useState } from "react";
import { useEffect } from "react";
const SuggestedEvents = () => {
  const [events, setEvents] = useState([]);

  const { fetchEvents } = useEvent();

  function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    const formattedDate = date.toLocaleDateString("en-US", options);


    return formattedDate;
  }

  const handlePolls = () => {
    window.location.href = "/polls";
  };

  useEffect(() => {
    fetchEvents().then((response) => {
      setEvents(response.data);
    });
  }, []);

  return (
    <div>
      <div className="">
        <h1 className="text-2xl font-bold text-center">Suggested Events</h1>
        <center>
        <button class="border hover:scale-95 my-2 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold"
         onClick={handlePolls} >
          <div class="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
          <div class="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
          <div class="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
          <div class="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
          <p class="z-10">Polls Are LIVE !!</p>
        </button>
        </center>

        {events.map((event, index) => (
          <div className=" mt-2 p-2">
            <center>
              <div>
                <img
                  src={
                    `http://localhost:4000/${event.image}` ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3nzdHxRZ_7w7JoH3dQlCi66ir4kP1a2JBuQ&usqp=CAU"
                  }
                  alt=""
                  className=" h-64 w-96"
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-blank font-sans text-lg font-bold">
                  Event Name:{event.title}{" "}
                </p>
                <p className="text-blank font-sans text-lg font-bold">
                  Event Date:{formatDateTime(event.startDate)}
                </p>
              </div>
            </center>
            <hr className="mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedEvents;
