import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from "react-animation-on-scroll";


class Newsletter extends Component {
    
    render() {
        return (
            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
                <div className='container'>
                 <div className='newsletter-project'>
                     <div className='pb-20'>
                     <AnimationOnScroll delay={100} animateIn="animate__fadeInUp">
                        <h3 className='Gilroy-Bold text-3xl text-white'>lets discuss your project</h3>
          </AnimationOnScroll>
          <AnimationOnScroll delay={200} animateIn="animate__fadeInUp">
                        <p>Get free consultation and let us know your project idea to turn it into an amazing digital product.</p>
          </AnimationOnScroll>
                     </div>
                     <div className='lg:flex items-center justify-between'>
                     <AnimationOnScroll delay={200} animateIn="animate__fadeInUp">
                         <div>
                         <input type="text" placeholder="enter your email address" className="email-newsletter" />
                         <button className='btn-send-us'>Send us</button>
                         </div>
          </AnimationOnScroll>

          <AnimationOnScroll delay={200} animateIn="animate__fadeInUp">
                        
                         <div>
                          <p className='Gilroy-Bold text-lg underline'>Contact us!</p>
                         </div>
          </AnimationOnScroll>
          
                     </div>
                 </div> 
                </div>
            </div>
        );
    }
}

Newsletter.propTypes = {

};

export default Newsletter;