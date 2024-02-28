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
import {useLoader} from "./Context/LoaderContext";



const App = () => {
  const { isLoading } = useLoader();
  return (
    
      <Router>
      <Navbar />
      {/* <center> */}
      {isLoading && (<div className=" items-center justify-center max-w-sm p-6 bg-transparent  border border-gray-200 rounded-lg shadow-md dark:bg-transparent dark:border-white   flex h-20 w-20">
 
  <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
    <svg aria-hidden="true" className="w-8 h-8 text-gray-800 animate-spin dark:text-gray-800 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
    <span className="sr-only">Loading...</span>
  </div>
</div>
)}
          
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
              <Route path="/home/:eventId" element={<EventProfile />} />
            </Route>



          </Routes>
        
      </Router>
    
  )
}

export default App