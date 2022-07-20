import React, { Component } from 'react';

class Magic extends Component {
    render() {
        return (
            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
            <div className='container padding-left-all-section'>
              <p className='text-2xl Gilroy-Bold'>All the magic for perfection happens here.</p>  

              <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 mt-8'>
                    <div className=''>
                        <h2 className='Gilroy-Bold text-3xl'>Discover</h2>
                        <p>Smart coding is to avoid all the technical risk right away while writing the code and make it fault resistant. We plan the actions and how users could react before writing the code.</p>
                    </div>
                    <div className=''>
                        <h2 className='Gilroy-Bold text-3xl'>Define</h2>
                        <p>The reusability of code reduces redundancy and development time. The optimization of code is very important and we do it by having reusability of the code.</p>
                    </div>
                    <div className=''>
                        <h2 className='Gilroy-Bold text-3xl'>Design</h2>
                        <p>Smart coding is to avoid all the technical risk right away while writing the code and make it fault resistant. We plan the actions and how users could react before writing the code.</p>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 mt-8'>
                    <div className=''>
                        <h2 className='Gilroy-Bold text-3xl'>Design</h2>
                        <p>Smart coding is to avoid all the technical risk right away while writing the code and make it fault resistant. We plan the actions and how users could react before writing the code.</p>
                    </div>
                    <div className=''>
                        <h2 className='Gilroy-Bold text-3xl'>Prototype</h2>
                        <p>The reusability of code reduces redundancy and development time. The optimization of code is very important and we do it by having reusability of the code.</p>
                    </div>
              </div>
              
            </div>
         </div>
        );
    }
}

export default Magic;