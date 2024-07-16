

import { FaCheckCircle } from "react-icons/fa";

const Cardd1 = () => {
  return (
    <div
      className="md:w-[50%] " data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000"
      style={{
        backgroundColor: "white",
        border: "2px solid black",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        height: "60vh",
      }}
    >
      <div className=" h-[4vh] w-full  custom-margin " data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">
        <h1 className="text-[4vh] font-[600]">Starter Plan</h1>
        <p className="text-[2.4vh] ">The plan for Beginners</p>
      </div>
      <div className="h-[1px] w-[90%] bg-red-500 mt-[13vh] custom-margin  md:mt-[16vh]"></div>

      <div className="custom-margin sm:mt-[3vh]">
        <div className="flex gap-2 mt-2">  <FaCheckCircle className="text-red-700 mt-1" />  <p>Minimum Deposit: $100</p></div>
        <div className="flex gap-2 mt-2">  <FaCheckCircle className="text-red-700 mt-1" />  <p>Maximum Deposit: $4,999</p></div>
        <div className="flex gap-2 mt-2">  <FaCheckCircle className="text-red-700 mt-1" />  <p>ROI: 20% - 25%</p></div>
        <div className="flex gap-2 mt-2">  <FaCheckCircle className="text-red-700 mt-1" />  <p>Order Volume: 0.01 - 500 lots</p></div>
        <div className="flex gap-2 mt-2">  <FaCheckCircle className="text-red-700 mt-1" />  <p>Duration: 3 Days</p></div>

        <button className="w-[70%] h-[5vh] bg-red-700 mt-5 rounded-md sm:w-[100%] sm:mt-[4vh] "><p className="text-[2vh] text-white sm:text-[1.5vh]">Open Your Account</p></button>

      </div>
    </div>
  );
};

export default Cardd1;
