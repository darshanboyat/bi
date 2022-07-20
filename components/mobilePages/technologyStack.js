import React, { Component } from 'react';

class TechnologyStack extends Component {
    render() {
        return (
            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
                 <div className='container'>
                 <div>
                    <h2 className='Gilroy-Bold lg:text-4xl pb-8 text-3xl text-white pt-8'>
                    our technology stack
                    </h2>
                </div>
                <div className='grid lg:grid-cols-5 grid-cols-1'>
                    <div className='bg-stack lg:mb-0 mb-4'>
                        <h2>iOS</h2>
                      <ul className='text-center'>
                         <li>Swift</li>
                         <li>Objective-c</li>
                         <li>X-Code</li>
                      </ul>
                    </div>
                    <div className='bg-stack lg:mb-0 mb-4'>
                        <h2>Android</h2>
                        <ul className='text-center'>
                         <li>Java</li>
                         <li>Kotlin</li>
                         <li>Android Studio</li>
                      </ul>
                      
                    </div>
                    <div className='bg-stack lg:mb-0 mb-4'>
                        <h2>Cross platform</h2>
                        <ul className='text-center'>
                         <li>Flutter</li>
                         <li>React Native</li>
                         <li>Ionic</li>
                         <li>JavaScript</li>
                         <li>HTML5</li>
                      </ul>
                    </div>
                    <div className='bg-stack lg:mb-0 mb-4'>
                        <h2>Database</h2>
                        <ul className='text-center'>
                         <li>Firebase</li>
                         <li>Redis</li>
                         <li>PostgreSQL</li>
                         <li>MongoDB</li>
                         <li>DynamoDB</li>
                         <li>Oracle</li>
                         <li>SQLite</li>
                      </ul>
                    </div>
                    <div className='bg-stack lg:mb-0 mb-4'>
                        <h2>Design Tools</h2>
                        <ul className='text-center'>
                         <li>Illustrator</li>
                         <li>Adobe XD</li>
                         <li>Photoshop</li>
                         <li>After Effects</li>
                         <li>Sketch</li>
                         <li>Figma</li>
                         <li>InVision</li>
                         <li>Zeplin</li>
                      </ul>
                    </div>
                </div>
                 </div>
            </div>
        );
    }
}

export default TechnologyStack;