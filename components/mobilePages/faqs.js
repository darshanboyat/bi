import React, { Component } from 'react';

class Faqs extends Component {
    render() {
        return (
         <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
            <div className='container padding-left-all-section'>
              <h2 className='text-4xl pb-8 Gilroy-Bold'>faq&rsquo;s</h2> 
              
              <div>
                  <div className='mb-6  border-color-purple border-b-2 pb-6 flex justify-between items-center'>
                      <h2 className='text-xl text-white Gilroy-Bold '>I want to keep my iOS app idea confidential. Will you sign an NDA with me?</h2>
                      <img src='/images/faq-arrow.svg' />
                  </div>

                  <div className='mb-6 border-color-purple border-b-2 pb-6 flex justify-between items-center'>
                      <h2 className='text-xl text-white Gilroy-Bold'>Do I own the ownership and the code of my application?</h2>
                      <img src='/images/faq-arrow.svg' />
                  </div>

                  <div className='mb-6 border-color-purple border-b-2 pb-6 flex justify-between items-center'>
                      <h2 className='text-xl text-white Gilroy-Bold'>Do you have flexible hiring models?</h2>
                      <img src='/images/faq-arrow.svg' />
                  </div>

                  <div className='mb-6 border-color-purple border-b-2 pb-6 flex justify-between items-center'>
                      <h2 className='text-xl text-white Gilroy-Bold'>How do you allocate the resources for my app development in iOS?</h2>
                      <img src='/images/faq-arrow.svg' />
                  </div>

                  <div className='mb-6 border-color-purple border-b-2 pb-6 flex justify-between items-center'>
                      <h2 className='text-xl text-white Gilroy-Bold'>What are some of the top iOS apps developed by you?</h2>
                      <img src='/images/faq-arrow.svg' />
                  </div>

              </div>
            </div>
         </div>
        );
    }
}

export default Faqs;