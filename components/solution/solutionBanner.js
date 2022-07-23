import React from 'react';
import HomeButton from "../buttons/HomeButton";


function SolutionBanner(props) {
    return (
        <div className='h-screen min-h-[100vh] items-center relative'>         
                <div className="md:flex items-center block relative">
                 
                  <div className='md:w-[50%] w-full  md:h-full md:mt-0'>
                    <div className="">
                      <div className='bg-solution'>
                        {/* <video src="/images/AppDevelopment.mp4" muted loop controls={false} autoPlay={true} ></video> */}
                      </div>
                    </div>
                  </div>
                  <div className='lg:w-[50%] w-full  md:h-full'>
                    <div className='3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full'>
                      <div className='2xl:text-4xl lg:text-5xl text-5xl Gilroy-Bold text-white'>hacking industries with path breaking technologies</div>     
                        <div className='flex flex-col'>
                          <div className='color-gray text-sm Gilroy-Bold'>
                          From ideating with a prototype, testing a product with an MVP, finding a product-market fit and to scaling- We do it all.
                          </div> 
                          <div className='mt-8'>
                          <HomeButton>Explore our work</HomeButton>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
            {/* <span id='circle' className="border absolute p-8 rounded-full border-blue -left-24 pointer-events-none"></span> */}
          </div>  
    );
}

export default SolutionBanner;