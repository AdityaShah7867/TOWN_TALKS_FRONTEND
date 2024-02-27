import React from "react";

const BlueButton = ({ text, onClick }) => {
    const buttonStyle = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`;
  return (
    <div>
      <button className={buttonStyle} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default BlueButton;
