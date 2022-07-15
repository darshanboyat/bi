import React, { Component } from 'react';

class WebBanner extends Component {
    render() {
        return (
            <div className='h-screen min-h-[100vh] items-center relative'>
            
             <h2 className='2xl:px-14 xl:px-12 px-10 pt-32 text-7xl stroke-text-mobile Gilroy-Bold'>pixels with purpose.</h2>
            <div className="md:flex block items-center relative">
            <div className='lg:w-[40%] w-full  md:h-full'>
              <div className='3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full'>
              
                <div className='2xl:text-4xl lg:text-4xl text-4xl Gilroy-Bold text-white'>web development</div>
            
                <div className='flex flex-col'>
                  <div className='color-gray text-sm Gilroy-Bold'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.
                  </div>
                  <div>
                     <button className='bg-case-blue-request h-11 px-8 mt-6 text-sm'>our concepts </button>
                  </div>
                </div>
               
              </div>
            </div>
            <div className='md:w-[60%] w-full md:h-full mt-14 md:mt-0'>
              <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 ">
                  <div className=''>
                  <video loop autoplay src="/images/WebDevelopment.mp4" ></video>

                  </div>
              </div>
            </div>
    
    
    
            </div>
            {/* <span id='circle' className="border absolute p-8 rounded-full border-blue -left-24 pointer-events-none"></span> */}
          </div>  
        );
    }
}

export default WebBanner;