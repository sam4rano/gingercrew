import React from 'react'

const About = () => {
  return (
    <div className="h-[1200px] bg-[#1E1E1E] max-w-[1024]">
      <div>
        <div className="flex flex-row justify-around pt-[20px] pb-[40px] m-[50px]">
          <div>
            <h1 className="font-bold text-[80px]">20</h1>
            <h1>Happy clients</h1>
          </div>
          <div>
            <h1 className="font-bold text-[80px]">20</h1>
            <h1>Launched Startups</h1>
          </div>
          <div>
            <h1 className="font-bold text-[80px]">20</h1>
            <h1>Completed Projects</h1>
          </div>
        </div>
        <hr />
        <h1 className="text-white text-[24px] text-center p-8 flex items-center mx-auto h-[72px] w-[800px] m-[50px]">
          By staying connected with us, we can make your product idea come to
          reality more quickly with our efficient work rates on creation of
          technology products for businesses of every level
        </h1>
        <hr />

        <div className="mx-auto w-[800px] h-[500px] bg-[#FFFFFF] m-[50px] pb-[50px]"></div>
        <div className="flex flex-row justify-around">
          <h1 className="text-[24px] w-[630px]">
            We build digital products that are world-class. We help deliver
            value efficiently with our dedicated teams with the right creative
            and technical blend
          </h1>
          <button className="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded w-[200px] text-md h-[50px]">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default About