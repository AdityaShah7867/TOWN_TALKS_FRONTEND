import React from "react";
import Post from "../../Components/Forum/Post";
import PostCard from "../../Components/Forum/PostCard";

const Forum = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <br />
      <div className="flex justify-center items-center ">
        <div className=" w-full p-2 md:w-1/3">
          <Post />
          <PostCard className='mt-12' />
        </div>
        
      </div>
      
    </div>
  );
};

export default Forum;
