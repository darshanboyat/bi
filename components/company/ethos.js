import React from 'react';

const ethosValue = [
{
    description: 'Clients are friends. Each of their problems are ours.'
},
{
    description: 'We dont assume. We arrive at solutions through careful'
},
{
    description: 'Ownership and accountability are our'
},
{
    description: '100+  digital talent cares about your project.'
},
{
    description: '100+  digital talent cares about your project.'
},
{
    description: 'We Know how to play digital for brand value.'
},
{
    description: 'Clients are friends. Each of their problems are ours.'
},
{
    description: 'Clients are friends. Each of their problems are ours.'
},
]

function ethos(props) {
    return (
        <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6 pt-24 pb-24'>
            <h2 className='text-7xl text-stroke-2 Gilroy-Bold stroke-text-3'>Our ethos</h2>
            <div className='grid grid-cols-4 gap-4 mb-4'>
            {
                ethosValue.map((el) =>(
                    <div key={el}>
                    <div className='line'></div>
                    <div className='w-40 pl-4'>
                        <p className='Gilroy-Bold'>{el.description}</p>
                    </div>
                    </div>
                ))
            }
            </div>
            
        </div>
    );
}

export default ethos;