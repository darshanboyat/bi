import React from 'react';
import Image from "next/image";
import HomeButton from '../buttons/HomeButton'

const blogstype = [
    {
        id: 1,
        image: '1-article.png',
        summary: 'Dear Sophie: How does the International Entrepreneur Parole program work?'
    },
    {
        id: 2,
        image: '1-article.png',
        summary: 'Dear Sophie: How does the International Entrepreneur Parole program work?'
    },
    {
        id: 3,
        image: '1-article.png',
        summary: 'Dear Sophie: How does the International Entrepreneur Parole program work?'
    },
    {
        id: 4,
        image: '1-article.png',
        summary: 'Dear Sophie: How does the International Entrepreneur Parole program work?'
    },
    {
        id: 5,
        image: '1-article.png',
        summary: 'Dear Sophie: How does the International Entrepreneur Parole program work?'
    },
    {
        id: 6,
        image: '1-article.png',
        summary: 'Dear Sophie: How does the International Entrepreneur Parole program work?'
    }
]
function process(props) {
    return (
        <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6 '>
            <div className='pt-24 pb-24 container padding-left-all-section'>

           <h2 className='text-4xl Gilroy-Bold pb-12'>Our work process is our identity</h2>

           <div className="snap-x snap-mandatory overflow-x-auto flex no-scrollbar space-x-8 scroll-p-10">
            {
                    blogstype.map((el) => (
                        <div key={el.id} className="snap-start flex flex-col space-y-4">
                            <div className='flex justify-between'>
                            <div className="2xl:w-[450px] xl:w-[400px] w-[375px]  relative 2xl:h-[500px] xl:h-[500px] h-[500px]">
                                <Image src={'/images/' + el.image}  layout="fill" objectFit="cover" />
                            </div>
                            <div className='w-96 ml-4'>
                                <p className='pt-8 pb-3 Gilroy-Light'>Strategy</p>
                                <h3 className='Gilroy-Bold text-white text-2xl'>Design sprints & Workshops.</h3>
                                <p className='Gilroy-light text-gray-400 text-sm pb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>            
                                <h3 className='Gilroy-Bold text-white text-2xl'>Business & user research</h3>
                                <p className='Gilroy-light text-gray-400 text-sm pb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                <HomeButton> <span className="text-sm text-white">how we work</span> </HomeButton>
                            </div>
                            </div>
                            <p className="2xl:text-xl xl:text-lg text-base Gilroy-Light">{el.summary}</p>
                        </div>
                    ))
            }
            </div>
        </div>
        
        </div>
    );
}

export default process;