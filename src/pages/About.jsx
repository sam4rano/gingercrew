import React from 'react'

const About = () => {
  return (
    <div className="h-[1200px] bg-[#1E1E20] w-full sm:h-[1450px]">
      <div>
        <div className="flex flex-row sm:flex-col sm:justify-center sm:items-center sm:align-middle justify-around pt-[20px] pb-[40px] m-[50px]">
          <div>
            <div className="flex flex-row ">
              <h1 className="font-bold text-[80px] text-white sm:text-[50px]">
                20
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="blue"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <h1 className="text-white sm:text-[18px]">Happy clients</h1>
          </div>
          
          <div>
            <div className="flex flex-row">
              <h1 className="font-bold text-[80px] text-white sm:text-[50px]">
                20
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="red"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <h1 className="text-white sm:text-[18px]"> Launched Startups</h1>
          </div>
          <div>
            <div className="flex flex-row">
              <h1 className="font-bold text-[80px] text-white sm:text-[50px]">
                20
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="yellow"
                className="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <h1 className="text-white sm:text-[18px]">Completed Projects</h1>
          </div>
        </div>
        <hr className="md:p-2 w-full p-2" />
        <h1 className="text-white text-[24px] text-center p-8 flex items-center mx-auto h-[72px] w-full m-[50px] sm:text-[20px] ">
          By staying connected with us, we can make your product idea come to
          reality more quickly with our efficient work rates on creation of
          technology products for businesses of every level
        </h1>
        <hr className="w-full p-2" />

        <div className="mx-auto max-w-[800px] h-[400px] bg-[#FFFFFF] m-[50px] pb-[50px] md:w-[500px]"></div>
        <div className="flex flex-row justify-between p-8 sm:justify-between">
          <h1 className="text-[24px] max-w-[500px] text-white sm:text-[18px] sm:w-[150px]">
            We build digital products that are world-class. We help deliver
            value efficiently with our dedicated teams with the right creative
            and technical blend
          </h1>
          <div className="sm:w-1/2 ">
            <button className="bg-white hover:bg-black hover:text-white text-black font-bold rounded sm:w-[150px] sm:text-center sm:flex sm:justify-center sm:align-middle max-w-[220px] flex align-middle text-[20] p-3 h-[50px]">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About