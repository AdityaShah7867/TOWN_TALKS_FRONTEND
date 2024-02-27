import React from "react";

const StatusCard = ({ text, count, completeCount, onClick, btnText }) => {
  return (
    <div>
      <div className="w-full md:w-72 bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5  ml-0 md:ml-8 mb-8 md:mb-0 flex flex-col justify-around shadow-md">
        <p className="text-lg font-bold font-sans">{text}</p>
        <div className="py-3 flex items-center">
          <p className="text-gray-400 text-2xl">
            <i className="fas fa-users text-xl mt-2"></i>
            <span className="ml-2">{count}</span>
          </p>
        </div>
        <div className="flex justify-end">
          <div className="text-sm flex gap-2 text-right">
            <button
              className="bg-slate-200 px-2 rounded-xl text-black hover:bg-slate-400 transition-colors ease-in-out"
              onClick={onClick}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
