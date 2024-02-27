import React from "react";
import Search from "./Search";
import Mode from "./Mode";
import Type from "./Type";
import Map from "./Map";

const Multi = ({ searchText, setSearchText }) => {
  return (
    <div>

      <div className="flex flex-col md:flex-row">

        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
          <Search searchText={searchText} setSearchText={setSearchText} />
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
          <Mode />
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
          <Type />
        </div>



      </div>
      <div className="flex justify-center items-center mt-8">
        <Map />
      </div>
    </div>
  );
};

export default Multi;
