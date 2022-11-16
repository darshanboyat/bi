import React from 'react';

function staffBanner() {
    return (
        <div className='lg:h-screen relative'>
            <img src='/images/staffbanner.png' className='w-full object-cover' />
             <div className='relative top-[-300px]'>
                 <div className='grid lg:grid-cols-2 grid-cols-1'>
                      <div>
                         <h1 className='lg:text-7xl text-4xl Gilroy-Bold 2xl:px-14 xl:px-12 px-10 '>Hire Dedicated <br/> Developer</h1>
                         <p className='2xl:px-14 xl:px-12 px-10 pt-6 lg:pr-[14rem] pb-6 color-light text-lg '>If you want to increase your efficiency and speed up your product development, then you need to hire experienced developers.</p>
                         <p className='2xl:px-14 xl:px-12 px-10  lg:pr-[14rem] pb-6 color-light text-lg '>With our team of experienced developers, you can build large products faster than ever before. We're experienced in building apps for both enterprise and consumer markets, so we know how to take on any app project.</p>
                         <p className='2xl:px-14 xl:px-12 px-10  lg:pr-[14rem] pb-6 color-light text-lg '>We'll help you build a product that's ready for launch in no time at all and will be fully functional from day one.</p> 
                      </div>
                      <div>
                        {/* <div className="rotating scroll-logo md:block hidden">
                            <img src="/images/scrollAnimation.svg" ></img>
                        </div> */}
                      </div>
                 </div>
            </div>
        </div>
    );
}

export default staffBanner;