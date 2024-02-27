import React from "react";
import IMG from "../../Assets/Images/dash.png";
const Dash = () => {
  return (
    <div className="">
    <div className="bg-gray-200">
      <div>
        <div>
            <br/>
          <p className="text-center text-xl font-bold">DASHBOARD</p>
        </div>
        <div className="p-6 md:p-36 md:-mt-24">
          <img src={IMG} alt="dash" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dash;
