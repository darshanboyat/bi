import React from 'react';
import HomeButton from '../buttons/HomeButton'
import Image from "next/image";


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
                    <h2 className='text-black Gilroy-Bold text-3xl'>meet the crew</h2>
                    <p className='Gilroy-light text-black mt-2 text-base mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <HomeButton><span className="text-sm text-black">See All Members</span></HomeButton>

                    </div>
                </div>
                <div className="col-span-2 bg-meeting p-8">
                    <div className='lg:grid lg:grid-cols-3 gap-4'>
                    {
                            meeting.map((el) =>(
                                <div key={el}>
                                    <div className='w-[250px] h-[330px] mr-2 relative'>
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