import React, { Component } from 'react';

class WebServices extends Component {
    render() {
        return (
            <div className='bg-white 2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
            <div className='bg-white '>
                <div className='container padding-left-all-section py-10'>
                    <div>
                        <h2 className='Gilroy-Bold lg:text-4xl pb-2 text-3xl text-black pt-4'>
                        they call it best-in-class. we call it SMART thinking.
                        </h2>
                        <p className='text-black'>
                        We take pride in developing enterprise web services and small business web solutions to meet your specific needs. Smart choices of latest technologies and deployment of standardized coding frameworks, help us ensure that our processes and solutions are scalable and future-proof, enhancing the user experience. Invariably, the result is a powerful software to the world. Our 10+ years of combined expertise in web design and big/small business web development sets us apart.
                        </p>
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 mt-4'>
                         <div className='border-active'>
                            <h3>Expansive</h3>
                            <p>We follow the standard set of principles and techniques to deliver scalable web applications and solutions to meet your business demands.</p>
                         </div>
                         <div className='border-active'>
                            <h3>Responsive</h3>
                            <p>
                            Our experienced developers customise apps as per your unique business needs. They have successfully deployed over 350+ iOS applications across different industry verticals.
                            </p>
                         </div>
                         <div className='border-active'>
                            <h3>Fast</h3>
                            <p>
                            We offer custom engagement models, allowing you to hire iOS developers hourly or at a fixed price to meet your unique business requirements.
                            </p>
                         </div>
                         <div className='border-active'>
                            <h3>Secure</h3>
                            <p>
                            We have an excellent track record with hundreds of successful and quality iOS apps to our credit. We have cross-industry expertise and a diverse clientele from across the world.
                            </p>
                         </div>
                     
                    </div>
                    <button className='bg-case-blue-request h-11 px-8 mt-6 text-sm mb-6'>how we work</button>

                </div>    
                <div className='container padding-left-all-section'>
              <p className='text-2xl Gilroy-Bold text-black'>coding standards</p>  

              <div className='lg:w-[70%] w-[100%] flex mt-8'>
                    <div className='w-[100%]'>
                        <h2 className='Gilroy-Bold text-black text-3xl'>Smart</h2>
                        <p className='text-black'>Smart coding is to avoid all the technical risk right away while writing the code and make it fault resistant. We plan the actions and how users could react before writing the code.</p>
                    </div>
                    <div className='w-[100%]'>
                        <h2 className='Gilroy-Bold text-3xl text-black'>Reusable</h2>
                        <p className='text-black'>The reusability of code reduces redundancy and development time. The optimization of code is very important and we do it by having reusability of the code.</p>
                    </div>
                </div>
                <div className='lg:w-[70%] w-[100%] flex mt-8'>
                    <div className='w-[100%]'>
                        <h2 className='Gilroy-Bold text-black text-3xl'>Beautiful</h2>
                        <p className='text-black'>Smart coding is to avoid all the technical risk right away while writing the code and make it fault resistant. We plan the actions and how users could react before writing the code.</p>
                    </div>
                    <div className='w-[100%]'>
                        <h2 className='Gilroy-Bold text-black text-3xl'>Stable</h2>
                        <p className='text-black'>The reusability of code reduces redundancy and development time. The optimization of code is very important and we do it by having reusability of the code.</p>
                    </div>
              </div>
            </div> 
            </div>
         
            </div>
        );
    }
}

export default WebServices;