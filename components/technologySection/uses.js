import React from "react";

function Uses(props) {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className=" ">
        <div className="container padding-left-all-section">
          <div>
            <h2 className="Gilroy-Bold lg:text-4xl pb-2 text-3xl text-white pt-4">
              Who uses Application ?
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-4">
            <div className="logo-bg-uses"></div>
            <div className="logo-bg-uses"></div>
            <div className="logo-bg-uses"></div>
            <div className="logo-bg-uses"></div>
            <div className="logo-bg-uses"></div>
            <div className="logo-bg-uses"></div>
            <div className="logo-bg-uses"></div>
            <div className="logo-bg-uses"></div>
          </div>
        </div>

        <div className='container padding-left-all-section pt-20 pb-10'>
              <p className='text-3xl Gilroy-Bold text-white'>coding standards</p>  

              <div className='lg:w-[70%] w-[100%] flex mt-8'>
                    <div className='w-[100%] mb-6'>
                        <h2 className='Gilroy-Bold text-white text-3xl'>Smart</h2>
                        <p className='text-white'>Smart coding is to avoid all the technical risk right away while writing the code and make it fault resistant. We plan the actions and how users could react before writing the code.</p>
                    </div>
                    <div className='w-[100%] ml-12'>
                        <h2 className='Gilroy-Bold text-3xl text-white'>Reusable</h2>
                        <p className='text-white'>The reusability of code reduces redundancy and development time. The optimization of code is very important and we do it by having reusability of the code.</p>
                    </div>
                </div>
                <div className='lg:w-[70%] w-[100%]  flex mt-8'>
                    <div className='w-[100%]'>
                        <h2 className='Gilroy-Bold text-white text-3xl'>Beautiful</h2>
                        <p className='text-white'>Smart coding is to avoid all the technical risk right away while writing the code and make it fault resistant. We plan the actions and how users could react before writing the code.</p>
                    </div>
                    <div className='w-[100%] ml-12'>
                        <h2 className='Gilroy-Bold text-white text-3xl'>Stable</h2>
                        <p className='text-white'>The reusability of code reduces redundancy and development time. The optimization of code is very important and we do it by having reusability of the code.</p>
                    </div>
              </div>
            </div> 
      </div>
    </div>
  );
}

export default Uses;
