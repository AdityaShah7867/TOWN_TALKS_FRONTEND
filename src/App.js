import React from "react";
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
// import EventProfile from "./Pages/Eventprofile/EventProfile";
import EventProfile from "./Pages/Eventprofile/Eventprofile1";
import Private from "./Private/Private";

import Video from "./Pages/Zego/Video";
import Room from "./Pages/Zego/Room";

import Chatbot from "./Components/AiBot/ChatBot";
import OrganizationDetail from "./Pages/OrganizationDetail/OrganizationDetail";
import Poll from "./Pages/Polling/Poll";
import Library from "./Pages/Digital/Library";



const App = () => {
  return (
    <>
      <Router>
        <>
          <Navbar />
          <Chatbot />

          <ToastContainer />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />

            <Route path="/docs" element={<Document />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          



            <Route path="/login" element={<Login />} />



            <Route path="library" element={<Library />} />

       
            {/* PRIVATE ROUTES BELOW THIS */}

          <Route path="/" element={<Private />}>
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat/:communityId" element={<GrpChat />} />
            <Route path="organization/:id" element={<OrganizationDetail />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/addevent" element={<Addevent />} />

            <Route path="/video" element={<Video />} />
            <Route path="/room/:roomId" element={<Room />} />

            <Route path="/polls" element={<Poll />} />



          </Route>



          </Routes>
        </>
      </Router>
    </>
  )
}

export default App