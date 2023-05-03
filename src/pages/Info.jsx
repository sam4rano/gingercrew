import React from 'react'
import { Link } from 'react-router-dom';

const info = () => {
  return (
    <div
      className="h-[1250px] sm:h-[1400px] p-4 w-full mx-auto bg-gradient-to-r from-[#1E1E1E] to-[#4D4D4D]
"
    >
      <div className="flex flex-col p-6">
        <h1 className="pb-[20px] text-white sm:mx-auto">PRODUCTS & SERVICES</h1>
        <h1 className="font-bold text-[30px] w-[450px] sm:w-[300px] text-white sm:text-[25px] sm:mx-auto">
          We follow through every product livecycle phase
        </h1>
      </div>
      <hr />
      <div className="m-2">
        <div>
          <div>
            <div className="flex flex-row justify-between text-white">
              <div>
                01
                <span className="pl-[10px] font-bold text-[25px]">
                  Product Design
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="white"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row justify-between pb-[40px] text-white sm:flex-col">
            <ul className="list-disc p-4">
              <li>Focus on making a usable and efficient solution</li>
              <li>We build and Maintain</li>
              <li>We solve and scale</li>
            </ul>
            <div className="flex flex-col ">
              <h1 className="pb-4 w-[400px] sm:w-[300px]">
                Let’s start building on your idea. We will work with you n
                shaping your idea into a befitting solution with a solid plan
              </h1>
              <Link className="underline underline-offset-8">See Details</Link>
            </div>
          </div>
          <hr />
        </div>
        <div className="mt-[50px]">
          <div className="pb-[30px] text-white">
            <div className="flex flex-row justify-between pb-[50px]">
              <div>
                01
                <span className="pl-[10px] font-bold text-[25px]">
                  Product Design
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="white"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <hr className="pt-[30px]" />
          </div>
          <div className="pb-[30px] text-white">
            <div className="flex flex-row justify-between pb-[50px]">
              <div>
                01
                <span className="pl-[10px] font-bold text-[25px]">
                  Product Design
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="white"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <hr />
          </div>
          <div className="pb-[40px] text-white">
            <div className="flex flex-row justify-between pb-[50px]">
              <div>
                01
                <span className="pl-[10px] font-bold text-[25px]">
                  Product Design
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="white"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <hr />
          </div>
          <div className="pb-[40px] text-white">
            <div className="flex flex-row justify-between pb-[50px]">
              <div>
                01
                <span className="pl-[10px] font-bold text-[25px]">
                  Product Design
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="white"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between pb-[40px] ">
        <h1 className="text-[24px] flex flex-wrap font-bold text-white sm:text-[20px]">
          Check for our full expertise
        </h1>
        <button className="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded w-[140px] text-md h-[50px]">
          All Services
        </button>
      </div>
      <hr />
    </div>
  );
}

export default info