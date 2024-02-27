import React from "react";

const Button = ({ bgColor, text, onClick }) => {
    const buttonStyle = `bg-${bgColor}-500 hover:bg-${bgColor}-700 text-white font-bold py-2 px-4 rounded`;
  return (
    <div>
      <button className={buttonStyle} onClick={onClick}>
        Button
      </button>
    </div>
  );
};

export default Button;
