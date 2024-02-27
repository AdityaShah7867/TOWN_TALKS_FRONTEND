import React, { useEffect, useRef } from "react";
import ButtonDoc from "./Buttons";
import CardDoc from "./Card";
import Dash from "./Dash";
import ImgCard from "./ImgCard";


const Document = () => {
  

  return (
    <div className="mb-12">
    <ButtonDoc/>
    <CardDoc/>
    <ImgCard/>
    <Dash/>
    Created by Aditya Shah
    </div>
  );
};

export default Document;
