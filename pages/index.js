import Head from 'next/head'
import React, {useState} from 'react';
import Header from '../components/header/Header'
import HomeSectionTen from '../components/home/HomeSection-10';
import HomeSectionThree from '../components/home/HomeSection-3';
import HomeSectionFour from '../components/home/HomeSection-4';
import HomeSectionFive from '../components/home/HomeSection-5';
import HomeSectionSix from '../components/home/HomeSection-6';
import HomeSectionEight from '../components/home/HomeSection-8';
import HomeSectionOne from '../components/home/HomeSection-1';
import HomeSectionNine from '../components/home/HomeSection-9';
import HomeSectionEleven from '../components/home/HomeSection-11';
import KeepInTouch from '../components/common/keepInTouch';
import LocateUs from '../components/common/locateUs';
import LetsKick from '../components/common/LetsKick';
import HireDedicatedDeveloper from '../components/common/HireDedicatedDeveloper';
import Footer from '../components/common/Footer';
import Loader from '../components/common/loader';

export default function Home() {
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    // setLoading(true);
  setTimeout(() => 
    setLoading(false), 2000);
  },
  []);
  return (
    <>
      {loading?
            <Loader/>
            :
            <div className='relative'>
              <Head>
                <title>Brain Inventory | Custom Software Development Company in India & UK</title>
                <meta name="google-site-verification" content="/google47adff3c89209e12.html" />

                <meta name="description" content="Brain Inventory is a new-age Custom Software Development company with offices in India, Canada, Jordan & UK. We offer innovative digital solutions to Startups, Unicorns & Enterprise clients across Industries with our Top 4% of Industry Experts." />
                <link rel="icon" href="/favicon.png" />
                <script async src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js" crossOrigin="anonymous"></script>
                <script async src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js" crossOrigin="anonymous"></script>
                <script async src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js" crossOrigin="anonymous"></script>
              </Head>
              <Header></Header>
              <HomeSectionOne></HomeSectionOne>
              <HomeSectionThree></HomeSectionThree>
              <HomeSectionFour></HomeSectionFour>
              <HireDedicatedDeveloper></HireDedicatedDeveloper>
              <HomeSectionFive></HomeSectionFive>
              <HomeSectionSix></HomeSectionSix>
              {/* <HomeSectionSeven></HomeSectionSeven> */}
              <HomeSectionEight></HomeSectionEight>
              <HomeSectionNine></HomeSectionNine>
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
      }
    </>
  )
}
