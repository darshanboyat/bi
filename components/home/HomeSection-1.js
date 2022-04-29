import { useEffect, useState } from "react";
import HomeButton from "../buttons/HomeButton";
import { AnimationOnScroll } from "react-animation-on-scroll";


const HomeSectionOne = () => {

  const [mouseExpanded, setMouseExpanded] = useState(false);


  useEffect(() => {
    const circle = document.getElementById('circle');
    document.addEventListener('mousemove', (e) => {
      circle.style.left = e.pageX-28 + 'px';
      circle.style.top = e.pageY-28 + 'px';
    })
    if (mouseExpanded) {
      circle.style.padding = '4em';
    } else {
      circle.style.padding = '2em';
    }
  }, [])

  
  return (
        <div className='h-screen flex items-center relative'>
        <div className='lg:w-1/2 w-full bg-gradient-1 h-full  relative'>
          <div className='3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full'>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className='2xl:text-3xl lg:text-2xl text-xl Gilroy-Bold'>We are a</div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className='text-heading-1 Gilroy-Bold'>digital production</div>
            <div className='text-heading-1 Gilroy-Bold'>Company</div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <div className='flex flex-col'>
              <div className='text-heading-4'>focusing heavily on design & developement based in indore.</div>
              <div className='text-heading-4'>we create products that make people say oh damn!</div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <HomeButton>request a quote</HomeButton>
          </AnimationOnScroll>
          </div>
          <div onMouseEnter={() => setMouseExpanded(true)} onMouseLeave={() => setMouseExpanded(false)} className='absolute bottom-0 3xl:py-10 py-8 2xl:px-14 xl:px-12 px-2 lg:px-10 bg-base-blue-1 flex justify-between w-full text-heading-3 Gilroy-Bold'>
          <AnimationOnScroll animateIn="animate__fadeInUp">
              <span className='stroke-text'>websites</span>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
              <span className='stroke-text'>applications</span>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp">
              <span className='stroke-text'>websites</span>
          </AnimationOnScroll>
          </div>
        </div>
        <div className='hero-bg-1 w-1/2 h-full lg:block hidden'></div>
        <span id='circle' className="border absolute p-8 rounded-full border-blue -left-24 pointer-events-none"></span>
      </div>  
    );
}

export default HomeSectionOne;