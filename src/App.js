import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./Pages/Landing/Landing";
import Document from "./Pages/Docs/Document";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/Home/Home";
import Forum from "./Pages/Forum/Forum";
import GrpChat from "./Pages/Communities/Chat";
import Addevent from "./Components/Forms/Addevent";

const App = () => {
  return (
    <>
      <Router>
        <>
          <Navbar />

          <ToastContainer />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/docs" element={<Document />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat/:communityId" element={<GrpChat />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/addevent" element={<Addevent />} />
            {/* PRIVATE ROUTES BELOW THIS */}
            {/* <Route path="/" element={<Private />}>
            <Route path="/editcustomer" element={<CustomerEdiit />} />
          </Route> */}


          </Routes>
        </>
      </Router>
    </>
  )
}

export default App