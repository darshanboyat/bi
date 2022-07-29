import React from 'react';

function staffBanner() {
    return (
        <div className='lg:h-screen relative'>
            <img src='/images/staffbanner.png' className='w-full object-cover' />
             <div className='relative top-[-50px]'>
                 <div className='grid lg:grid-cols-2 grid-cols-1'>
                      <div>
                         <h2 className='lg:text-7xl text-4xl Gilroy-Bold 2xl:px-14 xl:px-12 px-10 '>IT Staff <br/> Augmentation</h2>
                         <p className='2xl:px-14 xl:px-12 px-10 pt-6 lg:pr-[14rem] color-light text-lg '>Reduce time to market with experienced developers Increasing the efficiency of your team. Hire Top Talent Fast and build large products with ease.</p>
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