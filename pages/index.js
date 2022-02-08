import Head from 'next/head'
import { useEffect } from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';
import Header from '../components/header/Header'
import HomeSectionTen from '../components/home/HomeSection-10';
import HomeSectionTwo from '../components/home/HomeSection-2';
import HomeSectionThree from '../components/home/HomeSection-3';
import HomeSectionFour from '../components/home/HomeSection-4';
import HomeSectionFive from '../components/home/HomeSection-5';
import HomeSectionSix from '../components/home/HomeSection-6';
import HomeSectionSeven from '../components/home/HomeSection-7';
import HomeSectionEight from '../components/home/HomeSection-8';
import HomeSectionNine from '../components/home/HomeSection-9';
import HomeSectionOne from '../components/home/HomeSection-1';
import HomeSectionEleven from '../components/home/HomeSection-11';
import HomeSectionTwelwe from '../components/home/HomeSection-12';
import BlogsArticles from '../components/common/BlogsArticles';
import BigHeadingScroll from '../components/common/BigHeadingScroll';

export default function Home() {

  return (
        <div className='relative'>
          <Head>
            <title>Brain Inventory</title>
            <meta name="description" content="We are a digital production company" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header></Header>
          <HomeSectionOne></HomeSectionOne>
          <HomeSectionTwo></HomeSectionTwo>
          <HomeSectionThree></HomeSectionThree>
          <HomeSectionFour></HomeSectionFour>
          <HomeSectionFive></HomeSectionFive>
          <HomeSectionSix></HomeSectionSix>
          <HomeSectionSeven></HomeSectionSeven>
          <HomeSectionEight></HomeSectionEight>
          <HomeSectionNine></HomeSectionNine>
          <HomeSectionTen></HomeSectionTen>
          <HomeSectionEleven></HomeSectionEleven>
          <HomeSectionTwelwe></HomeSectionTwelwe>
          <BlogsArticles></BlogsArticles>
          <BigHeadingScroll />
        </div>
  )
}
