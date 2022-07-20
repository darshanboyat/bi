import React, { useState } from 'react';



const praticeDetail = [
    {
      id: '1',
      title: 'Attention to Memory Limitations',
      description: 'Mobile devices don’t come with the kind of high memory limitations like desktops. Which is why for mobile programming, we use codes with smaller memory limitations in mind. This is how we prevent the apps from crashing due to “out of memory”.     '
    },
    {
     id: '2',
     title: 'Ease of Default Keyboard',
     description: 'The keyboard should have the compatible characters for the input text box in an app. When the reader has to write numbers, they should get the numerical keyboard, not the alphabetical one.” '
   },
   {
     id: '3',
     title: 'Attention to Security',
     description: 'More people use their phone to access the internet than desktops. That is why phones are now more vulnerable to cyber attacks. As a mobile application development company, security is always our first priority while developing a mobile app.'
   },
   {
     id: '4',
     title: 'Using Optimized Images',
     description: 'Mobile devices don’t come with the kind of high memory limitations like desktops. Which is why for mobile programming, we use codes with smaller memory limitations in mind. This is how we prevent the apps from crashing due to “out of memory”.     '
   },
   {
     id: '5',
     title: 'Convenient UI Elements',
     description: 'Not everyone has access to high bandwidth internet, and we know that. Which is why our mobile app developers use optimized images while developing apps for the low bandwidth internet users. Specifically sized images only enhance the user experience.'
   },
   {
     id: '6',
     title: 'Optimized Battery Consumption',
     description: 'Mobile devices don’t come with the kind of high memory limitations like desktops. Which is why for mobile programming, we use codes with smaller memory limitations in mind. This is how we prevent the apps from crashing due to “out of memory”.     '
   },
   {
     id: '7',
     title: 'Version Support',
     description: 'Mobile devices don’t come with the kind of high memory limitations like desktops. Which is why for mobile programming, we use codes with smaller memory limitations in mind. This is how we prevent the apps from crashing due to “out of memory”.     '
   },
   {
     id: '8',
     title: 'Screen Variance & Compatibility',
     description: 'Mobile devices don’t come with the kind of high memory limitations like desktops. Which is why for mobile programming, we use codes with smaller memory limitations in mind. This is how we prevent the apps from crashing due to “out of memory”.     '
   },
   {
     id: '9',
     title: 'High & Quality Performance',
     description: 'Mobile devices don’t come with the kind of high memory limitations like desktops. Which is why for mobile programming, we use codes with smaller memory limitations in mind. This is how we prevent the apps from crashing due to “out of memory”.     '
   },
   {
     id: '10',
     title: 'Offline Mode Importance',
     description: 'Mobile devices don’t come with the kind of high memory limitations like desktops. Which is why for mobile programming, we use codes with smaller memory limitations in mind. This is how we prevent the apps from crashing due to “out of memory”.     '
   },
]  


function Pratice() {  
const [data , setdata] = useState(
    {
        id: '1',
        title: 'Attention to Memory Limitations',
        description: 'Mobile devices don’t come with the kind of high memory limitations like desktops. Which is why for mobile programming, we use codes with smaller memory limitations in mind. This is how we prevent the apps from crashing due to “out of memory”.     '
    },
);

return (
    <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
        <div className='container padding-left-all-section'>
            <h2 className='text-4xl pb-6 Gilroy-Bold'>best practices that we follow</h2>
            <p className='text-2xl Gilroy-Bold'>The way we design to engage users</p>
            <div className='flex items-center'>
                <div className='list-under-1'>
                  <ul className='pt-8 pb-8 mr-20 list-under'>
                    {praticeDetail.map((el, index)=>{
                        return (
                            <li className={`Gilroy-Medium mb-4 whitespace-nowrap text-lg cursor-pointer color-light ${data.id == el.id ? 'active-color' : 'active-2'}`} key={el.id} onClick={()=>setdata(el)}>{el.title}</li>
                        )
                    })}
                    </ul>
                </div>
                <div className='mr-10 w-[37%]'>
                    <img src='https://www.unifiedinfotech.net/assets/images/mobile-app-ready@1.5x.jpg'/>
                </div>
                <div className='pt-8 animation-effect'>
                <h3 className='text-xl Gilroy-Bold pb-2'>{data.title}</h3>
                <p className='text-base'>{data.description}</p>
                <button className='bg-case-blue-request h-11 px-8 mt-6 text-sm mb-6'>get in touch</button>
                </div>
            </div>
        </div>
    </div>
);

}
export default Pratice;