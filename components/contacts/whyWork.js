import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from "react-animation-on-scroll";


class whyWork extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
  <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6 pb-24'> 
        <div className='container'>
              <div className="lg:pt-24 lg:pb-24 w-8/12">
                    <div className=''> 
                    <AnimationOnScroll delay={200} animateIn="animate__fadeInUp">
                      <h2 className='Gilroy-Bold text-6xl text-white'>why work with <br/> brain inventory?</h2>
          </AnimationOnScroll>
          <AnimationOnScroll delay={500} animateIn="animate__fadeInUp">
                  <p className='pt-8 text-gray-300 text-base'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <p className='pt-8 text-gray-300 text-base'> It was popularised in the 1960s with the release of Letraset sheets containing. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
          </AnimationOnScroll>
                    </div>
               </div>

        </div>         
        </div>
            </div>
        );
    }
}


export default whyWork;