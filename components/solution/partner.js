import React from 'react';

function Partner(props) {
    return (
        <>        
            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
                <div className='container'>
                    <h3 className='Gilroy-Bold lg:text-4xl text-3xl text-white pt-8'>Our Technology Partners</h3>
                    <p className=' pb-8 pt-2 color-light'>We are a partner and a collaborator- not a vendor. We know how to strike a balance between business needs, teams and partners, and we understand the <br/> transparency it requires.</p>
                
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-6 mt-8'>
                    <div className='h-40 w-full bg-stack'></div>
                    <div className='bg-stack'></div>
                    <div className='bg-stack'></div>
                    <div className='bg-stack'></div>
                </div>
                
                </div>
            </div>

            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
            <div className='container'>
                 <h3 className='Gilroy-Bold lg:text-4xl text-3xl text-white pt-8'>We are trusted by brands you believe in</h3>
                 {/* <p className=' pb-8 pt-2 color-light'>We are a partner and a collaborator- not a vendor. We know how to strike a balance between business needs, teams and partners, and we understand the <br/> transparency it requires.</p> */}
            
              <div className='grid lg:grid-cols-4 grid-cols-2 gap-6 mt-8'>
                 <div className='h-40 w-full bg-stack'></div>
                 <div className='bg-stack'></div>
                 <div className='bg-stack'></div>
                 <div className='bg-stack'></div>
              </div>
            
            </div>
        </div>
        </>
    );
}

export default Partner;