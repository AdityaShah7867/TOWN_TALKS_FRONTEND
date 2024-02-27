import React, { useEffect } from "react";
import Chart from "../../Components/Chart/Chart";
import PieChart from "../../Components/Chart/Piechart";
import Sidebar from "../../Components/Sidebar/Sidebar";

import ColumnChart from "../../Components/Chart/Columnchart";
import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Dashboard() {


  const navigate = useNavigate()

  const [events, setEvents] = useState([])



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

          {
            events.map(event => (
              <div onClick={() => {
                navigate(`/home/${event._id}`)
              }} key={event._id} className="flex flex-col rounded-md border w-[400px] h-[100px] p-8 justify-center">
                <h2>{event.title}</h2>
                <li className="text-gray-500 mt-3">{event.description}</li>
              </div>
            ))
          }

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
        <div className="flex space-x-8 py-6">
          <div className="flex flex-col rounded-md border  w-[400px] h-[200px] p-8 justify-center">
            <h2>Your Activity</h2>
            <li className="text-gray-500 mt-3">Sent Rs 10000 to mother</li>
          </div>
          <div className="flex flex-col rounded-md border w-[400px] h-[200px] p-8 justify-center">
            <h2>Pending Bills</h2>
            <li className="text-gray-500 mt-3">Broadband bill: Rs 1000</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
