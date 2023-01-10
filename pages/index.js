import Head from "next/head";
import React, { useState } from "react";
import Header from "../components/header/Header";
import HomeSectionTen from "../components/home/HomeSection-10";
import HomeSectionThree from "../components/home/HomeSection-3";
import HomeSectionFour from "../components/home/HomeSection-4";
import HomeSectionFive from "../components/home/HomeSection-5";
import HomeSectionSix from "../components/home/HomeSection-6";
import HomeSectionEight from "../components/home/HomeSection-8";
import HomeSectionOne from "../components/home/HomeSection-1";
import HomeSectionNine from "../components/home/HomeSection-9";
import HomeSectionEleven from "../components/home/HomeSection-11";
import KeepInTouch from "../components/common/keepInTouch";
import LocateUs from "../components/common/locateUs";
import LetsKick from "../components/common/LetsKick";
import HireDedicatedDeveloper from "../components/common/HireDedicatedDeveloper";
import Footer from "../components/common/Footer";
import Loader from "../components/common/loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    // setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      <Head>
        <title>
          Brain Inventory: Staff Augmentation | Custom Software Development
          Company
        </title>
        <meta
          name="google-site-verification"
          content="/google0f5d76b9c6c1d8b3.html"
        />
        <meta name="p:domain_verify" content="/pinterest-551ed.html" />

        <meta
          name="description"
          content="Brain Inventory is a culture-rich custom web & mobile app development company from India with a presence in India, Jordan, Canada & UK."
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://braininventory.com/" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7M1747GSHC"
        ></script>
        
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative">
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
      )}
    </>
  );
}
