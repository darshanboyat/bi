import React from 'react';
import HomeButton from '../buttons/HomeButton';


function HireDedicatedDeveloper(props) {
    return (
        <div className='container padding-left-all-section'>
            <div className=' 2xl:p-10 p-8 '>
                <h1 className='text-heading-1 Gilroy-Bold mb-8'>Hire Dedicated Developers</h1>

                <div className='h-[450px] bg-stack relative'>
                   <div className='absolute bottom-4 left-4'>
                    <a href='/hire-dedicated-remote-developers'>
                      <HomeButton>Hire Developers</HomeButton>
                    </a> 
                   </div>
                </div>
            </div>
        </div>
    );
}

export default HireDedicatedDeveloper;