import React, { useState, useEffect } from 'react'
import AnimatedLetter from '../components/AnimatedLetter';
import imageOne from '../assets/image1.png'
import imageTwo from "../assets/image3.png";
import ImageCard from "../components/imageCard";

const HeroSection = () => {
  // const [letterClass, setLetterClass] = useState("text-animate");

  // const ctaArray = ["WE"," ","TRANSFORM"," ", "YOUR"," ","IDEA", " ", "INTO"," ","POSSIBLE"," ","REALITIES"]

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLetterClass("text-animate-hover");
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);


  // <div className="flex flex-col md:mx-auto">
  //           <img
  //             src={imageOne}
  //             alt="logo"
  //             className="pr-4 rounded-md min-w-[150px]"
  //           />
  //           <div className="text-center pt-4">
  //             <h1 className="text-black">Industry</h1>
  //             <h1 className="text-black font-bold">Saas</h1>
  //           </div>
  //         </div>
  //         <div className="flex flex-col ">
  //           <img
  //             src={imageTwo}
  //             alt="logo"
  //             className=" rounded-md min-w-[150px]"
  //           />
  //           <div className=" text-center pt-4">
  //             <h1 className="text-black">Industry</h1>
  //             <h1 className="text-black font-bold">Saas</h1>
  //           </div>
  //         </div>

  return (
    <div className="bg-[#DFEBF0] min-h-[950px] md:h-[1000px] sm:h-[1300px] pt-[50px] w-full flex flex-col md:p-2 sm:p-2" id='herosection'>
      <div className="flex flex-col justify-center sm:items-center align-middle p-[150px] sm:mb-[3rem] md:mb-4 sm:w-[360px] sm:mx-auto md:w-full sm:pt-[50px]">
        {/* <h1 className="relative text-[64px] leading-12 font-medium font-coolvetica text-white">
          <AnimatedLetter
            letterClass={letterClass}
            strArray={ctaArray}
            idx={15}
          />
        </h1> */}
        <h1 className="text-[45px] text-black font-bold mb-8 sm:text-[30px] sm:w-full sm:text-center text-center mx-auto md:text-[38px] md:w-full">
          WE TRANSFORM YOUR IDEA INTO POSSIBLE REALITIES
        </h1>
        <div className="text-[16px]  mb-4 sm:text-[12px] sm:flex-row sm:w-full sm:justify-around p-md text-black text-center leading-4 flex flex-row justify-around">
          <h1 className="sm:mx-auto]">Our Client love to work with us</h1>
          <div className="flex sm:flex-row ">
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
            </span>
            <span className="font-bold pl-1 ">GINGER</span>CREW
          </div>
        </div>
      </div>
      <div className="flex flex-row h-[350px] justify-around pb-[70px] w-full md:flex-col md:pt-8 sm:flex-col sm:pt-10">
        <div className="flex flex-row max-w-[800px] h-[350px] sm:h-70 sm:justify-around justify-around sm:flex-col md:p-[4rem]">
          <ImageCard imageUrl={imageOne} headline="Industry" body="SaaS" />
          <ImageCard imageUrl={imageOne} headline="Industry" body="SaaS" />
        </div>
        <div className=" p-2 sm:w-[320px] w-[400px] md:p-4 pt-2 md:mx-auto sm:mx-auto sm:pt-10">
          <div className="flex flex-col text-[24px] pb-4 sm:hidden">
            <h1 className="pb-4 text-black">
              <span className="font-bold">GINGER</span>CREW
            </h1>
            <h1 className=" text-[24px] text-black sm:text-[16px]">
              is a strategic software development agency focused on creation of
              technology products for businesses of every level
            </h1>
          </div>

          <div className="flex flex-row justify-between sm:flex-col sm:p-4 ">
            <button className="bg-black sm:mb-[1rem] hover:bg-white hover:text-black text-white font-bold rounded sm:mx-auto w-[200px] text-md h-[50px]">
              START A PROJECT
            </button>
            <div className="flex flex-row justify-around h-[80px] sm:mx-auto sm:hidden">
              <div className="h-[50px] w-[50px] rounded-full bg-black"></div>
              <div className="h-[50px] w-[50px] rounded-full bg-black"></div>
              <div className="h-[50px] w-[50px] rounded-full bg-black"></div>
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