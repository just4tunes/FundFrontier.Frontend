import  { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Heroimg from "../../assets/herobackground.png";
import Header from "../common/Header";
import Slide1 from "../../assets/slide1.svg";
import Slide2 from "../../assets/heroimg2.svg";
import Whyinvest from "./Whyinvest";
import About from './About';
import Trading from './Trading';
import Plans from './Plans';

const slides = [
  { id: 0, text: 'New Standard in stock broker.', subText: 'A trusted destination for traders worldwide, Authorised by FCA, ASIC & FSCA', image: Slide1 },
  { id: 1, text: 'Multi-regulated global broker.', subText: 'A trusted destination for traders worldwide, Authorised by FCA, ASIC & FSCA', image: Slide2 },
];

function Hero() {
  const [index, setIndex] = useState(0);

  const transitions = useTransition(slides[index], {
    key: slides[index].id,
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  const handlePrev = () => {
    setIndex((state) => (state === 0 ? slides.length - 1 : state - 1));
  };

  const handleNext = () => {
    setIndex((state) => (state + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-bg"
      style={{
        backgroundImage: `url(${Heroimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <Header />
      <div className="md:h-[65vh] md:ml-[8vh] md:mr-[8vh]">
        <div className="h-[50vh] justify-center custom-margin mt-[10vh] leading-8 sm:flex md:pt-[4vh] 2xl:ml-[10vh] relative">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center">
            <FaArrowLeft
              onClick={handlePrev}
              className="cursor-pointer text-white text-3xl  bg-gray-700 bg-opacity-50 rounded-full"
            />
          </div>
          <div className="w-full sm:w-1/2 relative lg:w-full">
            {transitions((style, item) => (
              <animated.div style={style} className="flex flex-col  h-full sm:ml-9">
                <h1 className="text-[5vh] text-white ml-[3vh] font-[700] sm:mt-[10vh]  md:mt-[13vh] md:text-balance md:text-[3vh]    lg:w-[90%] lg:text-[7vh] lg:leading-[1] lg:mt-10  xl:mt-11 xl:leading-[1] 2xl:text-[8vh] 2xl:w-[80%] 2xl:leading-[8vh] "  data-aos="fade-top" data-aos-duration="1000" data-aos-delay="1000">
                  {item.text}
                </h1>
                <h2 className="text-gray-500 hidden lg:block leading-7 mt-4 text-[3vh] ml-5 w-[80%] lg:mt-8 lg:text-[2vh]  "  data-aos="fade-left" data-aos-duration="2 000" data-aos-delay="2000">
                  {item.subText}
                </h2>
                <button className="w-[70%] h-[7vh] border-2 border-red-500 rounded-lg hidden sm:block sm:mt-5 sm:ml-5 md:w-[50%] md:mt-5">
                  <p className="text-white text-[1.8vh] font-[700] md:text-[1.1vh]"  >DISCOVER PLATFORM</p>
                </button>
              </animated.div>
            ))}
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center">
            <FaArrowRight
              onClick={handleNext}
              className="cursor-pointer text-white text-3xl  bg-gray-700 bg-opacity-50 rounded-full"
            />
          </div>
          <div className="sm:w-1/2 2xl:mr-[20vh]" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000">
            <img src={slides[index].image} className="mt-[9vh] w-full h-auto md:mt-[11vh] sm:mt-0 xl:w-[80%]  lg:h-[30vh] lg:w-[130%] lg:mt-[10vh] 2xl:w-[100%] 2xl:h-[45vh]  2xl:mt-0" alt={slides[index].text} />
          </div>
        </div>
      </div>
      <Whyinvest />
      <About/>
      <Trading/>
      <Plans/>
    </div>
  );
}

export default Hero;

