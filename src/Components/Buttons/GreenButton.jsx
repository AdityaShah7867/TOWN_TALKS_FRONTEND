import React from "react";

const GreenButton = ({ text, onClick }) => {
    const buttonStyle = `bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`;
  return (
    <div>
      <button className={buttonStyle} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default GreenButton;
