import React from 'react';
import Image from "next/image";
import HomeButton from '../buttons/HomeButton'
import { AnimationOnScroll } from "react-animation-on-scroll";




function contactBanner(props) {
    return (
        
       <div>
           <div className='h-screen bg-gradient-1 flex items-center relative'>
        <div className='lg:w-1/2 w-full  h-full  relative'>
          <div className='3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full'>
          
            <div className='2xl:text-7xl xl:text-7xl mt-20 text-6xl stroke-text-3 Gilroy-Bold'>talk to us!</div>
         
            <div className='text-heading-1 Gilroy-Bold'>lets do some great <br/> things together!</div>
        
            <div className='flex flex-col'>
              <div className='Gilroy-Light text-xl text-gray-50'>While we are good at sign language, there are various other simpler ways to connect with us. Talk to us in person.</div>
            </div>
        
       
           <div className='md:flex block'>
            <a href="tel:+91-810-956-1401">
            <HomeButton><span className='text-base'>call us now!</span></HomeButton>
            </a>
            <a  className='btn-contact md:ml-8 ml-0' href='mailto:askus@braininventory.com?subject=Me&body=Hello!'>drop a email</a>
           </div>

          </div>
         
        </div>
        {/* <AnimationOnScroll animateIn="animate__fadeInRight"> */}
        <div className='hero-bg-2 w-1/2 h-full lg:block hidden'></div>
        <span id='circle' className="border absolute p-8 rounded-full border-blue -left-24 pointer-events-none"></span>
         {/* </AnimationOnScroll> */}
      </div>     
       </div>
    );
}

export default contactBanner;