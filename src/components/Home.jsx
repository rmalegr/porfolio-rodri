// import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import "./home.css";
const Home = () => {
  return (
    <div name='home' className='w-full h-screen  bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is </p>
        <h1 className=' text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>
          Rodrigo M Alegre{" "}
        </h1>
        <h2 className='title text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          {" "}
          <blockquote>Im a full-stack developer</blockquote>{" "}
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Im a full-stack developer in building and occasionally designing
          exceptional digital experiences. Currently , Im focuserd on building
          responsive full-stack web applications
          
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 '>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowRight className='ml-3' />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
