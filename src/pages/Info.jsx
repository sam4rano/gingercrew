import React from 'react'
import { Link } from 'react-router-dom';

const info = () => {
  return (
    <div className="h-[1100px] p-4 w-[1200px] mx-auto">
      <div className="flex flex-col p-6">
        <h1 className="pb-[20px]">PRODUCTS & SERVICES</h1>
        <h1 className="font-bold text-[30px] w-[450px] ">
          We follow through every product livecycle phase
        </h1>
      </div>
      <hr />
      <div className="m-2">
        <div>
          <div>
            <div className="flex flex-row justify-between">
              <div>
                01
                <span className="pl-[10px] font-bold text-[25px]">
                  Product Design
                </span>
              </div>
              <hr className="w-[40px] mt-[20px]" />
            </div>
          </div>
          <div className="flex flex-row justify-between pb-[40px]">
            <ul className="list-disc p-4">
              <li>Focus on making a usable and efficient solution</li>
              <li>We build and Maintain</li>
              <li>We solve and scale</li>
            </ul>
            <div className="flex flex-col ">
              <h1 className="pb-4 w-[400px]">
                Let’s start building on your idea. We will work with you n
                shaping your idea into a befitting solution with a solid plan
              </h1>
              <Link className="underline underline-offset-8">See Details</Link>
            </div>
          </div>
          <hr />
        </div>
        <div className="mt-[50px]">
          <div className="pb-[30px]">
            <div className="flex flex-row justify-between pb-[50px]">
              <div>
                01
                <span className="pl-[10px] font-bold text-[25px]">
                  Product Design
                </span>
              </div>
              <hr className="w-[40px] mt-[20px]" />
            </div>
            <hr className="pt-[30px]" />
          </div>
          <div className="pb-[30px]">
            <div className="flex flex-row justify-between pb-[50px]">
              <div>
                01
                <span className="pl-[10px] font-bold text-[25px]">
                  Product Design
                </span>
              </div>
              <hr className="w-[40px] mt-[20px]" />
            </div>
            <hr />
          </div>
          <div className="pb-[40px]">
            <div className="flex flex-row justify-between pb-[50px]">
              <div>
                01
                <span className="pl-[10px] font-bold text-[25px]">
                  Product Design
                </span>
              </div>
              <hr className="w-[40px] mt-[20px]" />
            </div>
            <hr />
          </div>
          <div className="pb-[40px]">
            <div className="flex flex-row justify-between pb-[50px]">
              <div>
                01
                <span className="pl-[10px] font-bold text-[25px]">
                  Product Design
                </span>
              </div>
              <hr className="w-[40px] mt-[20px]" />
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around pb-[40px] ">
        <h1 className="text-[24px] w-[630px]">Check for our full expertise</h1>
        <button className="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded w-[200px] text-md h-[50px]">
          All Services
        </button>
      </div>
      <hr />
    </div>
  );
}

export default info