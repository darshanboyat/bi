import React from 'react';
import Image from "next/image";
import HomeButton from '../buttons/HomeButton'



function contactBanner(props) {
    return (
        
       <div>
           <div className='h-screen flex items-center relative'>
        <div className='lg:w-1/2 w-full bg-gradient-1 h-full  relative'>
          <div className='3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full'>
            <div className='2xl:text-6xl xl:text-5xl text-4xl stroke-text-3 Gilroy-Bold'>talk to us!</div>
            <div className='text-heading-1 Gilroy-Bold'>let's do some great <br/> things together!</div>
            <div className='flex flex-col'>
              <div className='Gilroy-Light text-xl text-gray-50'>While we are good at sign language, there are various other simpler ways to connect with us. Talk to us in person.</div>
            </div>
            <HomeButton>call us now!</HomeButton>
          </div>
         
        </div>
        <div className='hero-bg-2 w-1/2 h-full lg:block hidden'></div>
        <span id='circle' className="border absolute p-8 rounded-full border-blue -left-24 pointer-events-none"></span>
      </div>  
         
       </div>
    );
}

export default contactBanner;