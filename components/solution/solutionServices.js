import React from 'react';

const SolutionDetails = [
    {
        id: '1',
        title: 'Healthcare Solutions',
        description: 'We follow the standard set of principles and techniques to deliver scalable web applications and solutions to meet your business demands.',
        image: '',
    },
    {
        id: '2',
        title: 'Custom Social Networks',
        description: 'We follow the standard set of principles and techniques to deliver scalable web applications and solutions to meet your business demands.',
        image: '',
    },
    {
        id: '3',
        title: 'Sports Betting Solutions',
        description: 'We follow the standard set of principles and techniques to deliver scalable web applications and solutions to meet your business demands.',
        image: '',
    },
    {
        id: '4',
        title: 'Healthcare Solutions',
        description: 'We follow the standard set of principles and techniques to deliver scalable web applications and solutions to meet your business demands.',
        image: '',
    },
    {
        id: '5',
        title: 'Custom Social Networks',
        description: 'We follow the standard set of principles and techniques to deliver scalable web applications and solutions to meet your business demands.',
        image: '',
    },
    {
        id: '6',
        title: 'Sports Betting Solutions',
        description: 'We follow the standard set of principles and techniques to deliver scalable web applications and solutions to meet your business demands.',
        image: '',
    },
    {
        id: '7',
        title: 'Custom Fantasy Sports',
        description: 'We follow the standard set of principles and techniques to deliver scalable web applications and solutions to meet your business demands.',
        image: '',
    },
    {
        id: '8',
        title: 'eLearning & LMS',
        description: 'We follow the standard set of principles and techniques to deliver scalable web applications and solutions to meet your business demands.',
        image: '',
    },
    {
        id: '9',
        title: 'On-Demand Solutions',
        description: 'We follow the standard set of principles and techniques to deliver scalable web applications and solutions to meet your business demands.',
        image: '',
    }

]

function SolutionServices(props) {
    return (
        <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
            <div className='container'>
                <h3 className="Gilroy-Bold lg:text-4xl text-3xl text-white pt-8">developing solutions for a range of business domains</h3>
                <p className=" pb-8 pt-2">We help you get up and running faster by leveraging pre-built platforms for implementing many of our mobile solutions.</p>
            
              <div className='grid grid-cols-3 gap-16'>
                    {
                        SolutionDetails.map((el)=>{
                            return(
                                <div key={el.id}>
                                    <div className='bg-stack w-full h-60'></div>
                                    <h3 className='Gilroy-Bold text-xl pt-3'>{el.title}</h3>
                                    <p className='color-light'>{el.description}</p>
                                </div>
                            )
                        })
                    }
              </div>
            </div>             
        </div>
    );
}

export default SolutionServices;