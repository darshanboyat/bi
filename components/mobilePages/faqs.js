import React, { Component } from 'react';

class Faqs extends Component {
    render() {
        return (
         <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
            <div className='container padding-left-all-section'>
              <h2 className='text-4xl pb-8 Gilroy-Bold'>faq's</h2> 

              <div>
                  <div className='mb-6'>
                      <h2 className='text-xl text-white Gilroy-Bold border-color-purple border-b-2 pb-6'>I want to keep my iOS app idea confidential. Will you sign an NDA with me?</h2>
                  </div>

                  <div className='mb-6'>
                      <h2 className='text-xl text-white Gilroy-Bold border-color-purple border-b-2 pb-6'>Do I own the ownership and the code of my application?</h2>
                  </div>

                  <div className='mb-6'>
                      <h2 className='text-xl text-white Gilroy-Bold border-color-purple border-b-2 pb-6'>Do you have flexible hiring models?</h2>
                  </div>

                  <div className='mb-6'>
                      <h2 className='text-xl text-white Gilroy-Bold border-color-purple border-b-2 pb-6'>How do you allocate the resources for my app development in iOS?</h2>
                  </div>

                  <div className='mb-6'>
                      <h2 className='text-xl text-white Gilroy-Bold border-color-purple border-b-2 pb-6'>What are some of the top iOS apps developed by you?</h2>
                  </div>
                  

                  
              </div>
            </div>
         </div>
        );
    }
}

export default Faqs;