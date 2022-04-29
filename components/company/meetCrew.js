import React from 'react';
import HomeButton from '../buttons/HomeButton'
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";



const meeting = [

    {
        image: 'person1.png',
        title: 'Krishna Agrawal',
        designation: 'UI/UX Designer'
    },
    {
        image: 'person2.png',
        title: 'Hussain Ali',
        designation: 'Developer'
    },
    {
        image: 'person3.png',
        title: 'Sidra',
        designation: 'Developer'
    },
    {
        image: 'person1.png',
        title: 'Krishna Agrawal',
        designation: 'UI/UX Designer'
    },
    {
        image: 'person2.png',
        title: 'Krishna Agrawal',
        designation: 'UI/UX Designer'
    },
    {
        image: 'person3.png',
        title: 'Krishna Agrawal',
        designation: 'UI/UX Designer'
    },
]

function meetCrew(props) {
    return (
        <div className='bg-meet'>
            <div className='container'>
            <div className='lg:grid lg:grid-cols-3 gap-4'>
                <div className="flex self-center pr-6 pl-8">
                    <div className='my-12 lg:my-0'>
                    <AnimationOnScroll delay={200} animateIn="animate__fadeInUp">
                    <h2 className='text-black Gilroy-Bold text-5xl'>meet the crew</h2>
          </AnimationOnScroll>
          <AnimationOnScroll delay={400} animateIn="animate__fadeInUp">
                    <p className='Gilroy-light text-black text-lg mt-6 mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </AnimationOnScroll>
          <AnimationOnScroll delay={600} animateIn="animate__fadeInUp">
                    <HomeButton><span className="text-sm text-black">See All Members</span></HomeButton>
          </AnimationOnScroll>

                    </div>
                </div>
                <div className="col-span-2 bg-meeting p-8">
                    <div className='lg:grid lg:grid-cols-3 gap-4'>
                    {
                            meeting.map((el) =>(
                                <div key={el}>
                                    <div className='w-[260px] h-[280px] mr-2 relative'>
                                <Image src={'/images/' + el.image}  layout="fill"/>
                                </div>
                                <h2 className='text-black Gilroy-Bold pt-2'>{el.title}</h2>
                                <p className='text-black'>{el.designation}</p>
                                </div>
                            ))
                        }
                    
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default meetCrew;