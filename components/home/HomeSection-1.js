import { useEffect, useState } from "react";
import HomeButton from "../buttons/HomeButton";


const HomeSectionOne = () => {
  return (
        <div className='h-screen min-h-[100vh] flex items-center relative'>
        <div className="md:flex block items-center relative">
        <div className='lg:w-[40%] w-full  md:h-full'>
          <div className='3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full'>
          
            <div className='2xl:text-2xl lg:text-xl text-lg Gilroy-Bold color-gray'>We are__</div>
        
            <div className='flex flex-col'>
              <div className='text-heading-4'>a digital production company focusing heavily on design & development based in indore. we create products that make people say oh damn!</div>
            </div>
            <div className="rotating scroll-logo md:block hidden">
              <img src="/images/scrollAnimation.svg"></img>
           </div>
          </div>
        </div>
        <div className='md:w-[60%] w-full  md:h-full mt-14 md:mt-0'>
          <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 ">
          <video src="/videos/FinalVideo.mp4" className="relative md:top-[3rem] top-0"  muted loop controls={false} autoPlay={true} />
          </div>
        </div>



        </div>
        {/* <span id='circle' className="border absolute p-8 rounded-full border-blue -left-24 pointer-events-none"></span> */}
      </div>  
    );
}

export default HomeSectionOne;