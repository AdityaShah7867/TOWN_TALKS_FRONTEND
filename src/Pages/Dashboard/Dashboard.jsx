import React, { useEffect } from "react";
// import Chart from "../../Components/Chart/Chart";
import PieChart from "../../Components/Chart/Piechart";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { FaSquarePollVertical } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

import ColumnChart from "../../Components/Chart/Columnchart";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import PieChart from "../../Components/Chart/Piechart";

function Dashboard() {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const getEventByUserId = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/event/get-event-by-user-id",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      }
    );

    if (response.status === 200) {
      console.log(response.data);
      setEvents(response.data);
    }
  };

  useEffect(() => {
    getEventByUserId();
  }, []);

  const [pieChartData, setPieChartData] = useState([]);
  const [avarageRating, setAvarageRating] = useState(0.0);

  const fetchPieChartdata = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/feedback/get-feedback-data-for-piechart",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth")}`,
          },
        }
      );

      if (response.status === 200) {
        setPieChartData(response.data.ratings);
        setAvarageRating(response.data.meanRating);
        console.log(response.data.ratings);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPieChartdata();
  }, []);

  const handleNavPoll = () => {
    navigate("/");
  };

  const handleEvent = () => {
    navigate("/addevent");
  };

  let chartData = [];

  pieChartData.forEach((item, index) => {
    chartData.push(item.value);
  });

  let chartCategories = [];

  pieChartData.forEach((item, index) => {
    chartCategories.push(item.label);
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full ">
        <h2>Dashboard</h2>

        <div className="flex space-x-8 py-6">
          {events.map((event) => (
            <div
              onClick={() => {
                navigate(`/home/${event._id}`);
              }}
              key={event._id}
              className="flex flex-col rounded-md border w-[400px] h-[100px] p-8 justify-center"
            >
              <h2>{event.title}</h2>
              <li className="text-gray-500 mt-3">{event.description}</li>
            </div>
          ))}
        </div>
        <div className="flex space-x-8 py-6 w-4/5">
          <div className="flex flex-col rounded-md border w-full p-8 justify-center">
            <h2 className="text-black font-bold text-sans">Event Analytics </h2>
            <div className="flex  gap-14">
              <PieChart data={pieChartData} />
              <ColumnChart data={chartData} categories={chartCategories} />
            </div>
            {/* <Chart /> */}
            <h2 className="text-black font-bold text-sans">
              Average Rating: {avarageRating}
            </h2>
          </div>
        </div>
        <div className="flex space-x-8 py-2">
          <div
            className="flex flex-col justify-center cursor-pointer items-center bg-[#673ab7] text-white  rounded-md border w-[400px] h-[100px] p-8 "
            onClick={toggleModal}
          >
            <h2 className="text-3xl font-semibold">Host New Poll </h2>
            <h2 className="text-3xl">
              <FaSquarePollVertical />
            </h2>
          </div>

          <div
            className="flex flex-col justify-center cursor-pointer items-center rounded-md bg-[rgb(41,49,79)] border w-[400px] h-[100px] p-2 "
            onClick={handleEvent}
          >
            <h2 className="text-3xl font-semibold text-white">
              Host New Event
            </h2>
            <h2 className="text-3xl text-white">
              <MdEvent />{" "}
            </h2>
            {/* <li className="text-gray-500 mt-3">Broadband bill: Rs 1000</li> */}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8">
            <h1 className="text-xl font-semibold mb-4">LET'S CREATE A POLL!</h1>
            <form>
              <div className="mb-4">
                <br />
                <label
                  htmlFor="title"
                  className="block text-sm w-96 font-medium text-gray-700"
                >
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                  placeholder="Enter poll title"
                />
              </div>
              <br />
              <div className="mb-4">
                <label
                  htmlFor="option1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Option 1:
                </label>
                <input
                  type="text"
                  id="option1"
                  name="option1"
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                  placeholder="Enter option 1"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="option2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Option 2:
                </label>
                <input
                  type="text"
                  id="option2"
                  name="option2"
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                  placeholder="Enter option 2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="option3"
                  className="block text-sm font-medium text-gray-700"
                >
                  Option 3:
                </label>
                <input
                  type="text"
                  id="option3"
                  name="option3"
                  className="mt-1 p-2 block w-full border-gray-300 rounded-md"
                  placeholder="Enter option 3"
                />
              </div>
              <br />
              <div className="flex justify-between">
                <button
                  onClick={toggleModal}
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  Create Poll
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
