import React, { Component } from 'react';

class Standard extends Component {
    render() {
        return (
            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
            <div className='container padding-left-all-section'>
              <p className='text-2xl Gilroy-Bold'>coding standards</p>  

              <div className='w-[70%] flex mt-8'>
                    <div className='w-[100%]'>
                        <h2 className='Gilroy-Bold text-3xl'>Smart</h2>
                        <p>Smart coding is to avoid all the technical risk right away while writing the code and make it fault resistant. We plan the actions and how users could react before writing the code.</p>
                    </div>
                    <div className='w-[100%]'>
                        <h2 className='Gilroy-Bold text-3xl'>Reusable</h2>
                        <p>The reusability of code reduces redundancy and development time. The optimization of code is very important and we do it by having reusability of the code.</p>
                    </div>
                </div>
                <div className='w-[70%] flex mt-8'>
                    <div className='w-[100%]'>
                        <h2 className='Gilroy-Bold text-3xl'>Beautiful</h2>
                        <p>Smart coding is to avoid all the technical risk right away while writing the code and make it fault resistant. We plan the actions and how users could react before writing the code.</p>
                    </div>
                    <div className='w-[100%]'>
                        <h2 className='Gilroy-Bold text-3xl'>Stable</h2>
                        <p>The reusability of code reduces redundancy and development time. The optimization of code is very important and we do it by having reusability of the code.</p>
                    </div>
              </div>
            </div>
         </div>
        );
    }
}

export default Standard;