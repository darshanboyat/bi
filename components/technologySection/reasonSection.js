import React from 'react';


function ReasonSection(props) {
    return (
       
        <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
        <div className=' '>
            <div className='container padding-left-all-section'>
                <div>
                    <h2 className='Gilroy-Bold lg:text-4xl pb-2 text-3xl text-white pt-4'>
                        Reasons to choose Application
                    </h2>
                    <p className='text-white'>
                    Many big brands are on top of their game after switching to React Native. Besides low developmental costs and faster time-to-market, there are many advantages of choosing React Native app development.
                    </p>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-4'>
                     <div className='border-active-1'>
                        <img src='/images/s-1.svg' className='h-10' />
                        <h3 className='text-white'>100% Transparency</h3>
                        <p className='text-white'>We follow the standard set of principles and techniques to deliver scalable web applications and solutions to meet your business demands.</p>
                     </div>
                     <div className='border-active-1'>
                     <img src='/images/s-2.svg' className='h-10' />
                        <h3 className='text-white'>Experienced iPhone mobile app developers</h3>
                        <p className='text-white'>
                        Our experienced developers customise apps as per your unique business needs. They have successfully deployed over 350+ iOS applications across different industry verticals.
                        </p>
                     </div>
                     <div className='border-active-1'>
                     <img src='/images/s-3.svg' className='h-10' />
                        <h3 className='text-white'>Flexible-Engagement -Models</h3>
                        <p className='text-white'>
                            We offer custom engagement models, allowing you to hire iOS developers hourly or at a fixed price to meet your unique business requirements.
                        </p>
                     </div>
                     <div className='border-active-1'>
                     <img src='/images/s-4.svg' className='h-10' />
                        <h3 className='text-white'>Excellent Track Record</h3>
                        <p className='text-white'>
                            We have an excellent track record with hundreds of successful and quality iOS apps to our credit. We have cross-industry expertise and a diverse clientele from across the world.
                        </p>
                     </div>
                     <div className='border-active-1' >
                     <img src='/images/s-5.svg' className='h-10' />
                        <h3 className='text-white'>Technical Support</h3>
                        <p className='text-white'>
                           We have a technical support team that will answer all your queries, provide you consultation every step of the way and craft the best possible solution to render a delightful experience.
                        </p>
                     </div>
                     <div className='border-active-1'>
                        <img src='/images/s-5.svg' className='h-10' />
                        <h3 className='text-white'>Timely Delivery</h3>
                        <p className='text-white'>
                           Our adoption of agile methodology has resulted in an exceptional delivery track record. We deliver projects right on time while adhering to the highest quality standards. We provide 3-month support after the delivery to ensure our clients do not face any problem once the project is delivered.
                        </p>
                     </div>
                </div>
            </div>     
        </div>
       
        </div>
    );
}

export default ReasonSection;