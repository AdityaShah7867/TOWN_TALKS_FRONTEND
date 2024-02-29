import React, { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEvent } from "../../Context/EventContext";
import { FaLocationDot } from "react-icons/fa6";


const EventCard = ({ event }) => {


    const navigate = useNavigate();
    const { user } = useAuth()
    const { fetchEvents } = useEvent();

    const joinEvent = async () => {
        const response = await axios.post(
            `http://localhost:4000/api/event/join-event/${event?._id}`,
            {},
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("auth")}`,
                },
            }
        );

        console.log(response);

        if (response.status === 200) {
            toast.success("You have joined the event");
            fetchEvents()
            window.location.reload();
        } else {
            toast.error("Failed to join event");
        }
    };

    const handleCommunity = () => {
        if (event.communityId) {
            // navigate(`/chat/${event.communityId}`)
            navigate(`/home/${event?._id}`)
        } else {
            toast.error('No community found')
        }
    };

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

    useEffect(() => {
        console.log(user)
        event.participants.includes(user?.id) ? console.log('user is in the event') : console.log('user is not in the event')
    }, [event])

    return (
        <div className="font-['inter_var'] font-semibold rounded-2xl border  shadow-orange-950">
            <div
                className="bg-white max-w-96  rounded-2xl "
                style={{
                    width: "500px",
                }}
            >
                <div onClick={() => {
                    navigate(`/home/${event._id}`)
                }}>
                    <img
                        src={
                            `http://localhost:4000/${event.image}` ||
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3nzdHxRZ_7w7JoH3dQlCi66ir4kP1a2JBuQ&usqp=CAU"
                        }
                        className="rounded-tl-xl rounded-tr-xl max-h-60 w-96"
                        alt=""
                    />
                </div>
                <div className="ml-4 mt-4 text-base flex flex-wrap">
                    <FaLocationDot /> &nbsp; {event.address}
                </div>

                <div className="text-2xl p-2">
                    {event.title}
                </div>
                <div className="ml-2 text-xl text-gray-500 font-sans">{event.description}</div>

                <div className="flex justify-between mt-2">
                    <div className=" ml-2 font-sans">
                        <p>2nd march 2024</p>
                    </div>
                </div>
                <div className="mt-4 font-semibold text-xl font-sans">

                </div>


                <div className="mt-8 ml-2 mb-8 ">
                    <span className="h-12 bg-gray-200 p-2 rounded-xl font-sans">
                        {event.meetinglink? 'Online' : 'Offline'}
                    </span>
                    {/* <span className="h-12 ml-4 bg-gray-200 p-2 rounded-xl font-sans">
                        PAID {event.price}
                    </span> */}
                    <span className="text-black font-lg font-bold "></span>
                </div>
                <div className="flex justify-between p-4     mt-4">
                    <div>
                        {
                            event.participants.includes(user?._id) ? (
                                <>
                                    <button
                                        onClick={joinEvent}
                                        className="bg-red-500 text-white p-2 rounded-lg font-sans"
                                    >
                                        leave
                                    </button>

                                    <button
                                        onClick={handleCommunity}
                                        className="bg-red-500 text-white p-2 rounded-lg font-sans ml-4"
                                    >
                                        View Community
                                    </button></>
                            ) : (
                                <button
                                    onClick={joinEvent}
                                    className="bg-green-500 text-white p-2 text-base rounded-lg"
                                >
                                    Join
                                </button>
                            )
                        }
                    </div>
                    {/* <div className="flex">
                        <img
                            src="https://avatars.githubusercontent.com/u/121731399?v=3"
                            className="rounded-full w-8 h-8"
                            alt=""
                        />
                        <img
                            src="https://avatars.githubusercontent.com/u/121731399?v=3"
                            className="rounded-full w-8 h-8"
                            alt=""
                        />
                        <div className="bg-gray-800 h-8 w-8 text-white rounded-full">
                            <p className="p-1">+87</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default EventCard;
