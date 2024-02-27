import React from "react";
import Post from "../../Components/Forum/Post";
import PostCard from "../../Components/Forum/PostCard";
import SuggestedEvents from "../../Components/Forum/SuggestedEvents";

const Forum = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <br />
      <div class="md:flex">
        <div class="md:w-3/4">
          <div className="flex justify-center items-center ">
            <div className=" w-full p-2 md:w-2/3">
              <Post />
              <PostCard className="mt-12" />
            </div>
          </div>
        </div>
        <div class="hidden md:block w-1/4 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl bg-white m-2 p-4">
          <SuggestedEvents />
        </div>
      </div>
    </div>
  );
};

export default Forum;
