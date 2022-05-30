import Head from 'next/head'
import { useEffect } from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';
import Header from '../components/header/Header'
import HomeSectionTen from '../components/home/HomeSection-10';
import HomeSectionThree from '../components/home/HomeSection-3';
import HomeSectionFour from '../components/home/HomeSection-4';
import HomeSectionFive from '../components/home/HomeSection-5';
import HomeSectionSix from '../components/home/HomeSection-6';
import HomeSectionSeven from '../components/home/HomeSection-7';
import HomeSectionEight from '../components/home/HomeSection-8';
import HomeSectionOne from '../components/home/HomeSection-1';
import HomeSectionEleven from '../components/home/HomeSection-11';
import KeepInTouch from '../components/common/keepInTouch';
import LocateUs from '../components/common/locateUs';
import LetsKick from '../components/common/LetsKick';
import Footer from '../components/common/Footer';
// import "animate.css/animate.min.css";


export default function Home() {

  // const updateProperties = (elem, state) => {
  //   elem.style.setProperty('--x', `${state.x}px`)
  //   elem.style.setProperty('--y', `${state.y}px`)
  //   elem.style.setProperty('--width', `${state.width}px`)
  //   elem.style.setProperty('--height', `${state.height}px`)
  //   elem.style.setProperty('--radius', state.radius)
  //   elem.style.setProperty('--scale', state.scale)
  // }
  
  // document.querySelectorAll('.cursor').forEach(cursor => {
  //   let onElement
  
  //   const createState = e => {
  //     const defaultState = {
  //       x: e.clientX,
  //       y: e.clientY,
  //       width: 40,
  //       height: 40,
  //       radius: '50%'
  //     }
  
  //     const computedState = {}
  
  //     if (onElement != null) {
  //       const { top, left, width, height } = onElement.getBoundingClientRect()
  //       const radius = window.getComputedStyle(onElement).borderTopLeftRadius
  
  //       computedState.x = left + width / 2
  //       computedState.y = top + height / 2
  //       computedState.width = width
  //       computedState.height = height
  //       computedState.radius = radius
  //     }
  
  //     return {
  //       ...defaultState,
  //       ...computedState
  //     }
  //   }
  
  //   document.addEventListener('mousemove', e => {
  //     const state = createState(e)
  //     updateProperties(cursor, state)
  //   })
  
  //   document.querySelectorAll('a, button').forEach(elem => {
  //     elem.addEventListener('mouseenter', () => (onElement = elem))
  //     elem.addEventListener('mouseleave', () => (onElement = undefined))
  //   })
  // })
  

  return (
        <div className='relative'>
          <Head>
            <title>Brain Inventory</title>
            <meta name="description" content="We are a digital production company" />
            <link rel="icon" href="/favicon.ico" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></script>
          </Head>

          <Header></Header>
          <HomeSectionOne></HomeSectionOne>
           {/* <HomeSectionTwo></HomeSectionTwo> */}
          <HomeSectionThree></HomeSectionThree>
          <HomeSectionFour></HomeSectionFour>
          <HomeSectionFive></HomeSectionFive>
          <HomeSectionSix></HomeSectionSix>
          <HomeSectionSeven></HomeSectionSeven>
          <HomeSectionEight></HomeSectionEight>
          {/* <HomeSectionNine></HomeSectionNine> */}
          <HomeSectionTen></HomeSectionTen>
          <HomeSectionEleven></HomeSectionEleven>
          {/* <HomeSectionTwelwe></HomeSectionTwelwe> */}
          {/* <BlogsArticles></BlogsArticles> */}
          {/* <BigHeadingScroll text={'Perfectly balanced as all things should be.'}/>  */}
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
  )
}
