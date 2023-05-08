import React from 'react'
import { Link } from 'react-router-dom';



const Process = () => {
  return (
    <div className="flex flex-col bg-white p-4 h-[400px] align-middle justify-center w-full" id='process'>
      <div className="flex flex-col text-black mx-auto">
        <h1 className="flex justify-center font-bold text-[16px] p-4">
          Ready?
        </h1>
        <h1 className="font-bold text-[40px] mx-auto w-[400px] sm:w-[300px] sm:text-[30px] pb-4 flex justify-center align-middle">
          Let’s Get To Work on your Next Idea!
        </h1>
        <h1 className="sm:w-[300px]">
          Our crew will be happy to help bring your ideas to life
        </h1>
      </div>
      <div className="flex flex-row justify-evenly mx-auto pt-4 ">
        <Link className="pr-[40px]">
          <button className="text-white bg-black font-bold rounded w-[140px] text-[14px] sm:text-[14px] h-[40px]">
            Start Your Project
          </button>
        </Link>
        <Link>
          <button className="bg-white border-2 border-black text-black sm:text-[14px] font-bold rounded w-[140px] text-[14px] h-[40px]">
            Schedule A Call
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Process