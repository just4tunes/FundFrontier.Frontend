
import Cardd1 from "../../assets/Cardd1";
import Cardd2 from "../../assets/Cardd2";
import Cardd3 from "../../assets/Cardd3";

const Plans = () => {
  return (
    <div className=" h-[100vh] bg-white ">
      <div className=" custom-margin">
        <p className="justify-center flex pt-10 text-[3vh] text-gray-400">
          Plans
        </p>
        <div className="leading-9 mt-4 sm:leading-[1]">
          <h1 className="justify-center flex text-[6vh] font-[600] ">
            Our Trading{" "}
          </h1>
          <h2 className="justify-center flex text-[5.3vh]  text-red-500 font-[600] mt-1">
            plans
          </h2>
        </div>
      </div>
      <div className=" custom-margin mt-10 md:flex md:gap-10  2xl:ml-[15vh] 2xl:mr-[15vh] overflow-hidden">
      <Cardd1/>
      <Cardd2/>
      <Cardd3/>
    
      </div>

     
    </div>
  );
};

export default Plans;
