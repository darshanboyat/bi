import React, { Component } from 'react';
import ScrollSpy from 'react-scrollspy-navigation';


class Cycle extends Component {
    render() {
        return (
            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
            <div className='container'>
            <div>
                <h2 className='Gilroy-Bold lg:text-4xl pb-8 text-3xl text-white pt-8'>
              our product development cycle-we take <br/> care of you at every step.
                </h2>
             </div>
             <div className='flex cycle-active mt-6'>
                 <div className='w-[25%] top-0'>
                    <ScrollSpy>
                        <a href="#box-1" className='block color-light mb-4' ref={React.createRef()}>
                            1. define your idea
                        </a>
                        <a href="#box-2" className='block color-light mb-4' ref={React.createRef()}>
                            2. find the best solution
                        </a>
                        <a href="#box-3" className='block color-light mb-4' ref={React.createRef()}>
                            3. start your project
                        </a>
                        <a href="#box-4" className='block color-light mb-4' ref={React.createRef()}>
                            4. get product done
                        </a>
                    </ScrollSpy>
                 </div>
                 <div className='w-[75%] h-screen overflow-y-scroll custom-class'>
                    <section id="box-1" className='	'>
                         <div>
                             <p className='text-lg'>Fill our product canvas and we will connect you with our experts for overall planning & project estimations.</p>
                            <h3 className='text-2xl Gilroy-Bold pt-6'>what you get:</h3>

                            <ul className='discoluser-name'>
                                <li>Non Disclosure Agreement (NDA)</li>
                                <li>Product Canvas</li>
                                <li>Business Proposal</li>
                            </ul>
                            <div className='flex '>
                            <div>
                                <img src='/images/icon-right.svg' className='h-[300px] mr-3 mt-4' />
                            </div>
                            <div>
                                <ul className='mt-4'>
                                     <li>
                                        <div>
                                            <p className='color-light text-base'>You and your new business developer</p>
                                            <h3 className='text-xl pt-1 pb-1 Gilroy-Bold '>First Contact</h3>
                                            <p className='color-light text-base'>Share your vision and goals</p>
                                        </div>
                                     </li>

                                     <li className='mt-12'>
                                        <div>
                                            <p className='color-light text-base'>You and your new business developer</p>
                                            <h3 className='text-xl pt-1 pb-1 Gilroy-Bold '>Fill Up The Product Canvas</h3>
                                            <p className='color-light text-base'>Together we create a description of your product that is short, precise, and relatively painless to write.</p>
                                        </div>
                                     </li>

                                     <li className='mt-12'>
                                        <div>
                                            <p className='color-light text-base'>You and your new business developer</p>
                                            <h3 className='text-xl pt-1 pb-1 Gilroy-Bold '>Business Proposal</h3>
                                            <p className='color-light text-base'>We send you a business proposal outlining cost estimates, scope of work and much more.</p>
                                        </div>
                                     </li>
                                </ul>
                            </div>
                            </div>
                          
                         </div>
                    </section>
                    <section id="box-2" className='	'>
                    <div>
                             <p className='text-lg'>Fill our product canvas and we will connect you with our experts for overall planning & project estimations.</p>
                            <h3 className='text-2xl Gilroy-Bold pt-6'>what you get:</h3>

                            <ul className='discoluser-name'>
                                <li>Non Disclosure Agreement (NDA)</li>
                                <li>Product Canvas</li>
                                <li>Business Proposal</li>
                            </ul>
                            <div className='flex '>
                            <div>
                                <img src='/images/icon-right.svg' className='h-[300px] mr-3 mt-4' />
                            </div>
                            <div>
                                <ul className='mt-4'>
                                     <li>
                                        <div>
                                            <p className='color-light text-base'>You and your new business developer</p>
                                            <h3 className='text-xl pt-1 pb-1 Gilroy-Bold '>First Contact</h3>
                                            <p className='color-light text-base'>Share your vision and goals</p>
                                        </div>
                                     </li>
                                     <li className='mt-12'>
                                        <div>
                                            <p className='color-light text-base'>You and your new business developer</p>
                                            <h3 className='text-xl pt-1 pb-1 Gilroy-Bold '>Fill Up The Product Canvas</h3>
                                            <p className='color-light text-base'>Together we create a description of your product that is short, precise, and relatively painless to write.</p>
                                        </div>
                                     </li>

                                     <li className='mt-12'>
                                        <div>
                                            <p className='color-light text-base'>You and your new business developer</p>
                                            <h3 className='text-xl pt-1 pb-1 Gilroy-Bold '>Business Proposal</h3>
                                            <p className='color-light text-base'>We send you a business proposal outlining cost estimates, scope of work and much more.</p>
                                        </div>
                                     </li>
                                </ul>
                            </div>
                            </div>
                          
                         </div>
                    </section>
                    <section id="box-3" className=''>
                    <div>
                             <p className='text-lg'>Fill our product canvas and we will connect you with our experts for overall planning & project estimations.</p>
                            <h3 className='text-2xl Gilroy-Bold pt-6'>what you get:</h3>

                            <ul className='discoluser-name'>
                                <li>Non Disclosure Agreement (NDA)</li>
                                <li>Product Canvas</li>
                                <li>Business Proposal</li>
                            </ul>
                            <div className='flex '>
                            <div>
                                <img src='/images/icon-right.svg' className='h-[300px] mr-3 mt-4' />
                            </div>
                            <div>
                                <ul className='mt-4'>
                                     <li>
                                        <div>
                                            <p className='color-light text-base'>You and your new business developer</p>
                                            <h3 className='text-xl pt-1 pb-1 Gilroy-Bold '>First Contact</h3>
                                            <p className='color-light text-base'>Share your vision and goals</p>
                                        </div>
                                     </li>

                                     <li className='mt-12'>
                                        <div>
                                            <p className='color-light text-base'>You and your new business developer</p>
                                            <h3 className='text-xl pt-1 pb-1 Gilroy-Bold '>Fill Up The Product Canvas</h3>
                                            <p className='color-light text-base'>Together we create a description of your product that is short, precise, and relatively painless to write.</p>
                                        </div>
                                     </li>

                                     <li className='mt-12'>
                                        <div>
                                            <p className='color-light text-base'>You and your new business developer</p>
                                            <h3 className='text-xl pt-1 pb-1 Gilroy-Bold '>Business Proposal</h3>
                                            <p className='color-light text-base'>We send you a business proposal outlining cost estimates, scope of work and much more.</p>
                                        </div>
                                     </li>
                                </ul>
                            </div>
                            </div>
                         </div>
                    </section>
                 </div>
             </div>
          
            </div>
        </div>
        );
    }
}

export default Cycle;