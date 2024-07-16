import React from "react";
import Card1 from "./Card1";

const Whyinvest = () => {
  return (
    <div className="relative w-full h-auto bg-black lg:pt-6  ">
      <div className="lg:flex lg:ml-[10vh] ">
        <div className="custom-margin md:justify-center md:flex lg:flex-none lg:w-1/2 lg:ml-[3vh]  ">
          <p className=" text-white text-[3.7vh] font-[800] ml-4 pt-10  lg:text-[4vh]">
            Save time.
            <span className="text-red-500 lg">Get higher returns</span>. Multiply
            wealth.
          </p>
        </div>

        <div className="justify-center flex mt-4 lg:w-1/2 ">
          <button className="w-[90%] h-[7vh] border-2 border-red-500 rounded-lg lg:w-[40%] lg:mt-[11vh] lg:ml-[11vh]  ">
            <p className="text-white text-[1.8vh] font-[700]">FIND OUT MORE </p>
          </button>
        </div>
      </div>
      <div className="lg:ml-[10vh] ">
      <Card1/>

      </div>
      
    </div>
  );
};

export default Whyinvest;
