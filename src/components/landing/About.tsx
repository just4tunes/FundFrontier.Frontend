
import Aboutimg1 from "../../assets/Aboutimg1.jpg";
import Aboutimg2 from "../../assets/Aboutimg2.jpg";
import { PiPhoneCallBold } from "react-icons/pi";

const About = () => {
  return (
    <div className=" h-[100vh] pb-[48vh] sm:pb-[75vh] md:h-[60vh] lg:h-[60vh] xl:h-[85vh] md:pb-2 bg-white md:flex-row md:flex md:pt-8 lg:justify-center 2xl:pl-1 ">
      {/* textcontainer */}
      <div className="custom-margin md:w-[50%] lg:mt-7 lg:w-[40%] lg:ml-[12vh] 2xl:mt-16  2xl:ml-[16vh]">
        <p className="ml-[3vh] pt-[8vh] font-[400] text-[2vh] md:ml-2  lg:ml-7">WHAT WE DO </p>
        <h1 className="text-[4vh] ml-[2.3vh] leading-9 mt-2 font-[600] mb-3  md:leading-[1] md:ml-2  lg:ml-7 2xl:text-[7vh] 2xl:leading-[9vh] 2xl:w-[70vh] 2xl:ml-5 ">
          Transactions & corpo-rate finance
        </h1>
        <div className="ml-3 md:ml-[1vh] md:w-[100%] md:mt-[2vh] lg:ml-7 ">
          <span className="text-neutral-700 text-[2.4vh] md:text-[2vh] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget.
          </span>
        </div>
        <div className="2xl:flex hidden xl:block gap-16 2xl:ml-5">
          <button className="w-[30%]  h-[7vh] border-2 border-red-500 rounded-lg  ml-2 mt-5 ">
            <p className="text-red-500 text-[1.8vh] font-[700]">
              FIND OUT MORE{" "}
            </p>
          </button>

          <div className="flex mt-6">
            <PiPhoneCallBold className="w-8 h-10" />
            <p className="ml-1 mt-2">09041329588</p>
          </div>
        </div>
      </div>

      {/* imgcontainer */}
      <div className="flex relative mt-7 custom-margin sm:ml-5 md:w-full lg:w-[50%] lg:ml-[10vh]  ">
        <div className="w-[60%] absolute inset-0 ml-[20vh] sm:w-[70%] md:w-[90%]  md:ml-5 md:mt-[4vh] lg:w-[100%] lg:mt-[5vh]">
          <img
            className="w-full sm:h-[60vh] sm:w-[50%] md:h-[40vh] md:w-[100%] md:mt-1 md:object-conatin lg:w-[80%] 2xl:h-[70vh]"
            src={Aboutimg2}
            alt="Background Image"
          />
        </div>
        <div className="w-[50%] absolute inset-0 z-10 md:hidden lg:block lg:w-[50%]">
          <img
            className="w-[100%] mt-[15vh] md:h-[32vh] md:mt-[16vh] 2xl:h-[50vh]"
            src={Aboutimg1}
            alt="Foreground Image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
