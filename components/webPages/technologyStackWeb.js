import React, { Component } from 'react';

class TechnologyStackWeb extends Component {
    render() {
        return (
            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
            <div className='container'>
            <div>
               <h2 className='Gilroy-Bold lg:text-4xl pb-8 text-3xl text-white pt-8'>
               our technology stack
               </h2>
           </div>
           <div className='grid lg:grid-cols-4 grid-cols-1'>
               <div className='bg-stack lg:mb-0 mb-6'>
                   <h2>Back-end:</h2>
                 <ul className='text-center'>
                    <li>Laravel</li>
                    <li>Ruby</li>
                    <li>Python</li>
                    <li>Node.JS</li>
                    <li>PHP</li>
                    <li>Java</li>
                 </ul>
               </div>
               <div className='bg-stack lg:mb-0 mb-6'>
                   <h2>Front-end:</h2>
                   <ul className='text-center'>
                    <li>AngularJS</li>
                    <li>ReactJS</li>
                    <li>VueJS</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                 </ul>
                 
               </div>
               <div className='bg-stack lg:mb-0 mb-6'>
                   <h2>Database:</h2>
                   <ul className='text-center'>
                  
                    <li>MongoDB</li>
                    <li>Mysql</li>
                    <li>PostgreSQL</li>
                    <li>Firebase</li>
                 </ul>
               </div>
               <div className='bg-stack lg:mb-0 mb-6'>
                   <h2>OpenSource:</h2>
                   <ul className='text-center'>
                    <li>Drupal</li>
                    <li>Magento</li>
                    <li>Wordpress</li>                   
                 </ul>
               </div>
           </div>
            </div>
       </div>
        );
    }
}

export default TechnologyStackWeb;