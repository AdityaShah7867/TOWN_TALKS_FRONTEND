import React, { useState, useEffect } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";

const PostCard = ({ forums }) => {
  

  

  return (
    <div className="">
      {forums.map((forum) => (
        <div className="bg-white p-4 rounded-xl mt-2" key={forum._id}>
          <div className="flex flex-wrap gap-4">
            <div>
              <span className="bg-black w-8 h-8  rounded-full">
                <img
                  src={forum.author.profilePicture} // Assuming author has a profilePicture field
                  className="w-12 h-12 mt-1 rounded-full"
                  alt=""
                />
              </span>
            </div>
            <div>
              <p className="font-semibold">{forum.author.username}</p>
              <p>Date: {forum.createdAt}, time: {forum.time}</p>
            </div>
          </div>

          <div className="mt-4 p-2">{forum.content}</div>
          <div>
            <img
              src={forum.media}
              alt=""
              className="max-w-52"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-wrap gap-4">
              <div className="text-xl flex flex-wrap mt-6">
                <FaRegThumbsUp /> <span className="-mt-1">{forum.likes.length}</span>
              </div>
              <div className="text-xl flex flex-wrap mt-6">
                <BiCommentDetail /> <span className="-mt-1">{forum.comments.length}</span>
              </div>
            </div>
            <div className="text-2xl mb-2 mt-8">
              <CiMenuKebab />
            </div>
          </div>
          <hr />
          <div>
            <p>No comments yet</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
