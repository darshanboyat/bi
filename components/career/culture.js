import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from "react-animation-on-scroll";


class culture extends Component {
    render() {
        return (
            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
                <div className='container'>
                <div>
                <AnimationOnScroll delay={100} animateIn="animate__fadeInUp">
                    <h2 className='Gilroy-Bold lg:text-4xl pb-8 text-3xl text-white pt-8'>work culture at its best</h2>
          </AnimationOnScroll>
                </div>
                <div className='lg:grid lg:grid-cols-4 gap-6'>
                <AnimationOnScroll delay={100} animateIn="animate__fadeInUp">
                    <div className='bg-development-simply mb-4 lg-mb-0'>
                        <h2>Learning & Development</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
          </AnimationOnScroll>
          <AnimationOnScroll delay={400} animateIn="animate__fadeInUp">
                   
                    <div className='bg-development-simply mb-4 lg-mb-0'>
                        <h2>Mindful Personal Guidance</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
          </AnimationOnScroll>
          <AnimationOnScroll delay={600} animateIn="animate__fadeInUp">
            
                    <div className='bg-development-simply mb-4 lg-mb-0'>
                        <h2>Constructive Feedback</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
         </AnimationOnScroll>
         <AnimationOnScroll delay={800} animateIn="animate__fadeInUp">
                    <div className='bg-development-simply mb-4 lg-mb-0'>
                        <h2>Constructive Feedback</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
         </AnimationOnScroll>
         <AnimationOnScroll delay={1200} animateIn="animate__fadeInUp">
                    <div className='bg-development-simply mb-4 lg-mb-0'>
                        <h2>Innovation & Quality First</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
         </AnimationOnScroll>
         <AnimationOnScroll delay={1400} animateIn="animate__fadeInUp">
                    <div className='bg-development-simply mb-4 lg-mb-0'>
                        <h2>Proactive Implementation</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
         </AnimationOnScroll>
         <AnimationOnScroll delay={1800} animateIn="animate__fadeInUp">
                    <div className='bg-development-simply mb-4 lg-mb-0'>
                        <h2>Best & Global Opportunities</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
         </AnimationOnScroll>
         <AnimationOnScroll delay={2000} animateIn="animate__fadeInUp">
                    <div className='bg-development-simply mb-4 lg-mb-0'>
                        <h2>Work with Latest Technology</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
         </AnimationOnScroll>
                </div>
                </div>
            </div>
        );
    }
}

export default culture;