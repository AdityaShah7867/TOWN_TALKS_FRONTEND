import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";

const PostCard = () => {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex flex-wrap gap-4">
        <div>
          <span className="bg-black w-8 h-8  rounded-full">
            <img
              src="https://avatars.githubusercontent.com/u/121731399?v=4"
              className="w-12 h-12 mt-1 rounded-full"
              alt=""
            />
          </span>
        </div>
        <div>
          <p className="font-semibold">Aditya shah</p>
          <p>Date: 12 nov 2023 , time : 10:00 am</p>
        </div>
      </div>

      <div className="mt-4 p-2">Some great text message</div>
      <div>
        <img
          src="https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg"
          alt=""
        />
      </div>
      <div className="flex justify-between">

      <div className="flex flex-wrap gap-4">
        <div className="text-xl flex flex-wrap mt-6">
          <FaRegThumbsUp  /> <span className="-mt-1">2</span>
        </div>
        <div className="text-xl flex flex-wrap mt-6">
          <BiCommentDetail />  <span className="-mt-1">2</span>
        </div>
      </div>

      <div className="text-2xl mb-2 mt-8">
          <CiMenuKebab />
      </div>
      </div>
      <hr/>
      <div>
        <p>No comments yet</p>
      </div>


    </div>
  );
};

export default PostCard;
