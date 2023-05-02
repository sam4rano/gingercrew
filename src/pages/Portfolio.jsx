import React from 'react'
import imageOne from "../assets/image2.png";
import imageTwo from "../assets/image2.png";
import imageThree from "../assets/image2.png";
import imageFour from "../assets/image2.png";




const Portfolio = () => {
  return (
    <div className="h-[1440px] sm:h-[1100px] w-full text-black bg-[#DADADA] p-8">
      <div className="p-4 w-[800px] sm:w-[320px]">
        <h1 className="pb-8 text-[30px] font-bold sm:text-[20px] sm:text-center">
          SELECTED WORKS
        </h1>
        <h2 className="w-[600px] text-[24px] sm:text-[16px] sm:w-[320px]">
          Here are the solutions birth from us sorting through product
          challenges to arrive at a befitting solution
        </h2>
      </div>
      <div className="flex flex-col p-8">
        <div className="flex flex-row justify-between p-8 w-full">
          <div className="flex flex-col p-4">
            <img src={imageOne} alt="logo" className="rounded-sm pb-2" />
            <div className=" flex flex-row justify-between">
              <h1 className="sm:text-[12px] font-bold">TECH</h1>
              <h2 className="sm:text-[12px]">view live</h2>
            </div>
            <h1 className="font-bold text-[25px] sm:text-[20px]">
              Online Booking Solution
            </h1>
          </div>
          <div className="flex flex-col p-4">
            <img src={imageOne} alt="logo" className=" rounded-sm pb-2" />
            <div className="flex flex-row justify-between">
              <h1 className="sm:text-[12px] font-bold">TECH</h1>
              <h2 className="sm:text-[12px]">view live</h2>
            </div>
            <h1 className="font-bold text-[25px] sm:text-[20px]">
              Online Booking Solution
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-between p-8 w-full">
          <div className="flex flex-col p-4">
            <img src={imageOne} alt="logo" className="rounded-sm pb-2" />
            <div className=" flex flex-row justify-between">
              <h1 className="sm:text-[12px] font-bold">TECH</h1>
              <h2 className="sm:text-[12px]">view live</h2>
            </div>
            <h1 className="font-bold text-[25px] sm:text-[20px]">
              Online Booking Solution
            </h1>
          </div>
          <div className="flex flex-col p-4">
            <img src={imageOne} alt="logo" className=" rounded-sm pb-2" />
            <div className="flex flex-row justify-between">
              <h1 className="sm:text-[12px] font-bold">TECH</h1>
              <h2 className="sm:text-[12px]">view live</h2>
            </div>
            <h1 className="font-bold text-[25px] sm:text-[20px]">
              Online Booking Solution
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-around w-full">
          <h1 className="text-[24px] font-bold">Looking For More</h1>
          <button className="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded w-[200px] text-md h-[50px]">
            All Projects
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Portfolio