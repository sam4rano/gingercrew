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
    <div className="bg-[#0170BA] min-h-[800px] pt-[50px]">
      <div className="flex flex-col justify-center align-middle p-8 mb-[5rem]">
        {/* <h1 className="relative text-[64px] leading-12 font-medium font-coolvetica text-white">
          <AnimatedLetter
            letterClass={letterClass}
            strArray={ctaArray}
            idx={15}
          />
        </h1> */}
        <h1 className="text-[64px] font-bold mb-4 p-md text-center">
          WE TRANSFORM YOUR IDEA INTO POSSIBLE REALITIES
        </h1>
        <h1 className="text-[24px]  mb-4 p-md text-center leading-4">
          Our Client love to work with us
          <span className="font-bold pl-1">GINGER</span>CREW
        </h1>
      </div>
      <div className="flex flex-row h-[350px] justify-around">
        <div className="flex flex-row">
          <img src={imageOne} alt="logo" className="pr-4 rounded-lg" />
          <img src={imageTwo} alt="logo" className=" rounded-lg" />
        </div>
        <div className=" p-2">
          <div className="flex flex-col text-[24px] pb-2">
            <h1>
              <span className="font-bold">GINGER</span>CREW
            </h1>
            <br />
            <h1 className="max-w-[390px] text-[24px]">
              is a strategic software development agnecy focused on creation of
              technology products for businesses of every level
            </h1>
          </div>

          <div className="flex flex-row justify-between  ">
            <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded w-[200px] text-md h-[50px]">
              START A PROJECT
            </button>
            <div className="flex flex-row justify-around h-[80px] ">
              <div className="h-[50px] w-[50px] rounded-full bg-black p-1"></div>
              <div className="h-[50px] w-[50px] rounded-full bg-black p-1"></div>
              <div className="h-[50px] w-[50px] rounded-full bg-black p-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection