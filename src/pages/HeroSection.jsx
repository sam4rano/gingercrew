import React, { useState, useEffect } from 'react'
import AnimatedLetter from '../components/AnimatedLetter';
import imageOne from '../assets/image1.png'
import imageTwo from "../assets/image3.png";

const HeroSection = () => {
  // const [letterClass, setLetterClass] = useState("text-animate");

  // const ctaArray = ["WE"," ","TRANSFORM"," ", "YOUR"," ","IDEA", " ", "INTO"," ","POSSIBLE"," ","REALITIES"]

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLetterClass("text-animate-hover");
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="bg-[#DFEBF0] min-h-[1000px] sm:h-[1100px] pt-[120px] w-full flex flex-col md:p-8 sm:p-6">
      <div className="flex flex-col justify-center align-middle p-[150px] md:mb-4">
        {/* <h1 className="relative text-[64px] leading-12 font-medium font-coolvetica text-white">
          <AnimatedLetter
            letterClass={letterClass}
            strArray={ctaArray}
            idx={15}
          />
        </h1> */}
        <h1 className="text-[45px] text-black font-bold mb-8 p-md text-center mx-auto md:text-[38px]">
          WE TRANSFORM YOUR IDEA INTO POSSIBLE REALITIES
        </h1>
        <h1 className="text-[16px]  mb-4 p-md text-black text-center leading-4 flex flex-row justify-around">
          Our Client love to work with us
          <span className="flex flex-row pl-[-3rem]">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 8L0.5 0.205772L0.5 15.7942L14 8Z" fill="black" />
            </svg>
            <span className="font-bold pl-1 ">GINGER</span>CREW
          </span>
        </h1>
      </div>
      <div className="flex flex-row h-[350px] justify-around pb-[70px] w-full md:flex-col md:pt-8 sm:flex-col sm:pt-10">
        <div className="flex flex-row w-[700px] h-[350px] sm:justify-around">
          <div className="flex flex-col md:mx-auto">
            <img
              src={imageOne}
              alt="logo"
              className="pr-4 rounded-md min-w-[150px] sm:w-[250px]"
            />
            <div className="text-center pt-4">
              <h1 className="text-black">Industry</h1>
              <h1 className="text-black font-bold">Saas</h1>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src={imageTwo}
              alt="logo"
              className=" rounded-md min-w-[150px]"
            />
            <div className=" text-center pt-4">
              <h1 className="text-black">Industry</h1>
              <h1 className="text-black font-bold">Saas</h1>
            </div>
          </div>
        </div>
        <div className=" p-2  w-[400px] md:p-4 pt-2 md:mx-auto sm:mx-auto sm:pt-10">
          <div className="flex flex-col text-[24px] pb-4">
            <h1 className="pb-4 text-black">
              <span className="font-bold">GINGER</span>CREW
            </h1>
            <h1 className=" text-[24px] text-black">
              is a strategic software development agency focused on creation of
              technology products for businesses of every level
            </h1>
          </div>

          <div className="flex flex-row justify-between  ">
            <button className="bg-black hover:bg-white hover:text-black text-white font-bold rounded w-[200px] text-md h-[50px]">
              START A PROJECT
            </button>
            <div className="flex flex-row justify-around h-[80px] relative ">
              <div className="h-[50px] w-[50px] rounded-full bg-black z-20 relative"></div>
              <div className="h-[50px] w-[50px] rounded-full bg-black z-10 relative"></div>
              <div className="h-[50px] w-[50px] rounded-full bg-black z-0 relative"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-[#DFEBF0] min-h-[800px]">

    // </div>
  );
}

export default HeroSection