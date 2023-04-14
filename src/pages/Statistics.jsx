import React from 'react'

const statistics = () => {
  return (
    <div className="h-[800px] bg-[#1E1E1E]">
      <div > 
        <div className="flex flex-row justify-around pt-[20px] pb-[40px]">
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
        <h1 className='text-white text-[24px] text-center p-8'>
          By staying connected with us, we can make your product idea come to
          reality more quickly with our efficient work rates on creation of
          technology products for businesses of every level
        </h1>
        <div></div>
      </div>
    </div>
  );
}

export default statistics