import Head from 'next/head'
import Header from '../components/header/Header'
import HomeSectionTen from '../components/home/HomeSection-10';
import HomeSectionThree from '../components/home/HomeSection-3';
import HomeSectionFour from '../components/home/HomeSection-4';
import HomeSectionFive from '../components/home/HomeSection-5';
import HomeSectionSix from '../components/home/HomeSection-6';
// import HomeSectionSeven from '../components/home/HomeSection-7';
import HomeSectionEight from '../components/home/HomeSection-8';
import HomeSectionOne from '../components/home/HomeSection-1';
import HomeSectionEleven from '../components/home/HomeSection-11';
import KeepInTouch from '../components/common/keepInTouch';
import LocateUs from '../components/common/locateUs';
import LetsKick from '../components/common/LetsKick';
import Footer from '../components/common/Footer';


export default function Home() {
  return (
        <div className='relative'>
          <Head>
            <title>Brain Inventory</title>
            <meta name="description" content="We are a digital production company" />
            <link rel="icon" href="/favicon.ico" />
            <script async src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js" crossOrigin="anonymous"></script>
            <script async src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js" crossOrigin="anonymous"></script>
            <script async src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js" crossOrigin="anonymous"></script>
          </Head>

          <Header></Header>
          <HomeSectionOne></HomeSectionOne>
           {/* <HomeSectionTwo></HomeSectionTwo> */}
          <HomeSectionThree></HomeSectionThree>
          <HomeSectionFour></HomeSectionFour>
          <HomeSectionFive></HomeSectionFive>
          <HomeSectionSix></HomeSectionSix>
          {/* <HomeSectionSeven></HomeSectionSeven> */}
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
