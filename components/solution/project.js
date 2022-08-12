import React from 'react';


function Project(props) {
    return (
        <div className='bg-color-blue'>
            <div className=''>
                <div className='lg:flex items-center'>
                    <div className='lg:w-[50%] pl-10 pt-14 pb-14'>
                        <h3 className='text-5xl Gilroy-Bold'>some of our <br/> industry-specific <br/> projects</h3>      
                        <p className='pt-6 Gilroy-Light text-xl lg:pr-24'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button className='bg-white h-10 px-6 mt-8 Gilroy-Bold text-base text-black'>see our concept</button>
                    </div>  
                    <div className='lg:w-[50%]'>
                        <img src='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;