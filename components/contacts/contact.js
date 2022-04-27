import React from 'react';
import Image from "next/image";
import HomeButton from '../buttons/HomeButton'



function contact(props) {
    return (
        <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6 pt-24 pb-24'>          
              <div className="lg:grid lg:grid-cols-2 gap-2 pt-8 lg:pt-24">
                    <div className=''> 
                      <h2 className='Gilroy-Bold text-3xl text-white leading-10'>awesomeness awaits!</h2>
                      <p className='text-xl text-white Gilroy-light pb-4'>Connect with our experts.</p>
                      <form>
                      <div className="flex flex-col xl:space-y-8 pt-8 space-y-6 lg:w-4/5">
                    <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]" placeholder="You should have a name"></input>
                    <div className="flex lg:flex-row flex-col xl:space-x-8 lg:space-x-6 lg:space-y-0 space-y-6">
                        <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] flex-1 placeholder-[#ffffffd7]" placeholder="Obviously, an email"></input>
                        <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] flex-1 placeholder-[#ffffffd7]" placeholder="Your contact number"></input>            
                    </div>
                    <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]" placeholder="What’s your company name?"></input>
                    <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]" placeholder="Tell us, Everything!"></input>
                    <HomeButton><span className="text-xl">Submit</span></HomeButton>
                </div>
                      </form>
                    </div>
                    <div className="blue-section lg:mt-0 mt-16">
                        <h3 className='Gilroy-Bold text-3xl text-white leading-10'>Got a startup idea & need to get it <br/> validated?</h3>
                        <p className='text-xl text-white Gilroy-light pt-2 pb-4'>Got a startup idea & need to get  it validated?</p>
                        <div className="relative w-60 h-60">
                        <Image src={'/images/sufiyan.png'} className="w-60 h-60" layout='fill' />
                        </div>
                        <p className='Gilroy-Bold text-lg mt-3'>Sufiyan Rao I Co founder</p>
                        <p className='Gilroy-light pt-3 pb-3 text-gray-50'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                         <h3 className='Gilroy-Bold text-lg pb-1'>Email: sufiyan@braininventory.com</h3>
                         <h3 className='Gilroy-Bold text-lg'>Phone: +91-810-956-1401</h3>
                    </div>
                   
               </div>

               <div className='pt-20 pb-20'>
                   <h2 className='Gilroy-Bold text-5xl'>want to be a part of our team?</h2>
                   <p className='pt-4 pb-4 text-xl'>If you have got powerful skills, we will pay your bills. Contact our HR at:</p>
                  <div>
                      <button className='btn-career'>career@braininventory.com</button>
                      <button className='btn-contact'>+91-810-956-1401</button>
                  </div>
                  <p className='view-opening'>View openings</p>
               </div>
        </div>
    );
}

export default contact;