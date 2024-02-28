import React, { useState } from "react";
import PieChart from "../../Components/Chart/Piechart";
import ColumnChart from "../../Components/Chart/Columnchart";

import bg from "../../Assets/Images/b.avif";
import bg1 from "../../Assets/Images/bg1.jpg";
import b1 from "../../Assets/Images/b.jpg";
import b2 from "../../Assets/Images/back.jpg";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Eventprofile1 = () => {
  const { eventId } = useParams();

  const [event, setEvent] = useState({});
  const [feedbacks, setFeedbacks] = useState([]);

  const [feedback, setFeedback] = useState({
    rating: null,
    experience: "",
  });

  const createFeedback = async () => {
    const response = await axios.post(
      `http://localhost:4000/api/feedback/create-feedback/${eventId}`,
      {
        rating: feedback.rating,
        suggestion: feedback.experience,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      }
    );

    if (response.status === 200) {
      console.log(response.data);
      toast.success("Feedback created");
    } else {
      toast.error("Failed to create feedback");
    }
  };

  const fetchEventById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/event/get-event/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth")}`,
          },
        }
      );
      if (response.status === 200) {
        setEvent(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getFeedBacksByEventyId = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/feedback/get-feedback-data-by-event-id/${eventId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      }
    );
    if (response.status === 200) {
      console.log(response.data);
      setFeedbacks(response.data);
    }
  };

  useEffect(() => {
    fetchEventById();
    getFeedBacksByEventyId();
  }, [eventId]);
  const pieChartData = [
    { label: "Category 1", value: 30 },
    { label: "Category 2", value: 40 },
    { label: "Category 3", value: 20 },
    { label: "Category 4", value: 10 },
  ];
  const chartData = [30, 40, 45, 50, 49, 60, 70, 91, 125];
  const chartCategories = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
    "Category 9",
  ];

  const handleRatingChange = (value) => {
    setFeedback({ ...feedback, rating: value });
  };

  const handleExperienceChange = (event) => {
    setFeedback({ ...feedback, experience: event.target.value });
  };

  function StarRating({ rating }) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="text-yellow-400">&#9733;</span>);
    }
    return <div>{stars}</div>;
  }

  const handleSubmitFeedback = async (event) => {
    event.preventDefault();

    await createFeedback();
    getFeedBacksByEventyId();
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

  return (
    <div>
      <div className="bg-gray-100">
        <center>
          <br />
          <p className="font-semibold font-sans text-3xl">
            {" "}
            {event.title}{" "}
          </p>
        </center>
        <hr />
        <br />
        <div class="md:flex">
          <div class="w-3/4 flex flex-col mx-4 items-end">
            <img
              src={"http://localhost:4000/" + event.image}
              alt=""
              className="w-2/3 h-4/5 rounded-3xl"
            />
          </div>
          <div class=" w-full md:w-1/2">
            <div className="w-full md:w-2/3 justify-center  items-center p-4">
              <div>
                <form
                  onSubmit={handleSubmitFeedback}
                  className=" w-full md:max-w-1/2 mx-auto p-4 bg-white shadow-md rounded-md"
                >
                  <p className="font-semibold text-xl mb-4">
                    Feedback for the Event
                  </p>

                  {/* Rating Section */}
                  <div className="mb-4">
                    <label
                      htmlFor="rating"
                      className="block font-medium text-base"
                    >
                      Rate your Experience:
                    </label>
                    <div className="flex flex-row gap-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <React.Fragment key={value}>
                          <input
                            type="radio"
                            id={`rating${value}`}
                            name="rating"
                            value={value}
                            className="form-radio text-blue-500 focus:ring focus:border-blue-300"
                            onChange={() => handleRatingChange(value)}
                          />
                          <label
                            htmlFor={`rating${value}`}
                            className="cursor-pointer text-lg mr-2"
                          >
                            {value}
                          </label>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Experience Sharing Section */}
                  <div className="mb-4">
                    <label
                      htmlFor="feedback"
                      className="block font-medium text-base"
                    >
                      Share your Experience:
                    </label>
                    <textarea
                      id="feedback"
                      name="feedback"
                      placeholder="Enter your feedback"
                      className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                      value={feedback.experience}
                      onChange={handleExperienceChange}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Submit Feedback
                  </button>
                </form>
              </div>

              <div className="bg-white mt-4 rounded-md p-4">
                <p className="">
                  {" "}
                  Start Date: {formatDateTime(event.startDate)}
                </p>
                <p className=""> End Date: {formatDateTime(event.endDate)}</p>
                <br />

                <p className=" font-medium text-lg mt-4">
                  {" "}
                  No of Registrations:{event?.participants?.length}
                </p>

                <div className="w-2/3 mr-5  flex flex-col  bg-white">
                  {event.eventMode === "offline" ? (
                    <>
                      <p className="font-semibold text-3xl">
                        <a className="text-xl font-medium">
                          Happening : Offline{" "}
                        </a>
                      </p>
                      <p className="font-medium text-lg mt-2">
                        {event.city} - {event.zip}
                      </p>
                      {/* Add any other elements you want to render when eventMode is offline */}
                    </>
                  ) : (
                    <>
                      <p className="font-semibold text-3xl">
                        <a className="text-xl font-medium">
                          Happpening : Online
                        </a>
                      </p>
                      <p className="font-medium text-lg mt-2">
                        Meeting Link: {event.meetingLink}
                      </p>
                      {/* Add any other elements you want to render when eventMode is online */}
                    </>
                  )}
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <center>
        <div className="p-8">
      <div className="bg-white md:-mt-36 p-2 items-center justify-center">
        <p> USER REVIEWS</p>
        {feedbacks.map((feedback) => (
          <div
            key={feedback._id}
            className="flex flex-col gap-2 p-2 border-2 rounded-md mt-4"
          >
            <p className="font-semibold text-xl">
              User: {feedback.userId.username}
            </p>
            <p className="font-medium text-lg">
              Comment: {feedback.suggestion}
            </p>
            <div className="flex items-center justify-center">
              <p className="font-medium text-lg">Rating: </p>
              <StarRating rating={feedback.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
        </center>
      </div>
    </div>
  );
};

export default Eventprofile1;
