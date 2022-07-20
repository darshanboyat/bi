import React, { Component } from 'react';

class DesignTool extends Component {
    render() {
        return (
            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
            <div className='container'>
            <div>
               <h2 className='Gilroy-Bold lg:text-4xl pb-8 text-3xl text-white pt-8'>
               tools we use in designing
               </h2>
           </div>
           <div className='grid lg:grid-cols-5 grid-cols-1'>
               <div className='bg-stack lg:mb-0 mb-6 '>
                   <h2>UI/UX</h2>
                 <ul className='text-center'>
                    <li>Sketch</li>
                    <li>Adobe XD</li>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Figma</li>
                 </ul>
               </div>
               <div className='bg-stack lg:mb-0 mb-6'>
                   <h2>Prototyping</h2>
                   <ul className='text-center'>
                    <li>Adobe XD</li>
                    <li>Invision Studio</li>
                    <li>Sketch</li>
                    <li>Figma</li>
                 </ul>
                 
               </div>
               <div className='bg-stack lg:mb-0 mb-6'>
                   <h2>Motion Graphics</h2>
                   <ul className='text-center'>
                    <li>After Effects</li>
                    <li>Adobe Animate</li>
                    <li>Ionic</li>
                    <li>JavaScript</li>
                    <li>HTML5</li>
                 </ul>
               </div>
               <div className='bg-stack lg:mb-0 mb-6'>
                   <h2>Graphics Design</h2>
                   <ul className='text-center'>
                    <li>Illustrator</li>
                    <li>Photoshop</li>
                    <li>Sketch</li>
                
                 </ul>
               </div>
               <div className='bg-stack lg:mb-0 mb-6'>
                   <h2>Collaboration</h2>
                   <ul className='text-center'>
                    <li>Zeplin</li>
                    <li>Invision</li>
                    <li>Adobe Cloud</li>
                   
                 </ul>
               </div>
           </div>
            </div>
       </div>
        );
    }
}

export default DesignTool;