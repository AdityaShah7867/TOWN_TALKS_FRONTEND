import React, { useEffect } from "react";
import Chart from "../../Components/Chart/Chart";
import PieChart from "../../Components/Chart/Piechart";
import Sidebar from "../../Components/new/Sidebar/Sidebar";
import { FaSquarePollVertical } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ColumnChart from "../../Components/Chart/Columnchart";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import Table from "./Table";
// import PieChart from "../../Components/Chart/Piechart";
import { useAuth } from "../../Context/AuthContext";

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [pollData, setPollData] = useState({
    title: "",
    options: ["", "", ""], // Initialize with three empty options
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPollData({
      ...pollData,
      [name]: value,
    });
  };

  const handleOptionChange = (e, index) => {
    const newOptions = [...pollData.options];
    newOptions[index] = e.target.value;
    setPollData({
      ...pollData,
      options: newOptions,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/poll/createpoll",
        pollData
      );
      console.log("Poll created successfully:", response.data);
      // Reset form data
      setPollData({
        question: "",
        options: ["", "", ""],
      });
      toggleModal();
      toast.success("Poll Created Successfully");
    } catch (error) {
      toast.error("Error creating poll:", error);
    }
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

  const [tabledata, settabledata] = useState([])


  const getTableData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/poll/getPayment/${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth")}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        settabledata(response.data);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div classname="flex flex-col py-14 px-16 h-screen overflow-y-auto w-full ">
        <h2 className="m-8 p-4 text-3xl">Transactions</h2>

        <Table data={tabledata} />
      </div>
    </div>
  );
}

export default Dashboard;
