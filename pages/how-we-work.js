import React, { useState } from "react";
import Head from "next/head";

import Header from "../components/header/Header";
import Footer from "../components/common/Footer";
import KeepInTouch from "../components/common/keepInTouch";
import LetsKick from "../components/common/LetsKick";
import LocateUs from "../components/common/locateUs";
import Faqs from "../components/mobilePages/faqs";
import HomeSectionSix from "../components/home/HomeSection-6";
import LanguageTool from "../components/work/languageTool";
import Newsletter from "../components/career/Newsletter";
import Engagementmodal from "../components/mobilePages/engagementModal";
import ChooseApp from "../components/mobilePages/chooseApp";
import WorkBanner from "../components/work/workBanner";
import Work from "../components/work/work";
import Cycle from "../components/work/cycle";
import Loader from "../components/common/loader";

export default function HowWeWork() {
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    // setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      <Head>
        <title>How We Work | Brain Inventory</title>
        <meta
          name="description"
          content="Brain Inventory turns ideas into reality by getting involved with customers to create the best product. All steps from Ideation to Deployment/Maintenance are our forte in software development."
        />
        <link rel="icon" href="/favicon.png" />
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"
          crossOrigin="anonymous"
        ></script>
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative">
          <Header />
          <WorkBanner />
          <Work />
          <HomeSectionSix />
          {/* <Cycle/> */}
          <ChooseApp />
          <LanguageTool />
          <Newsletter />
          <Engagementmodal />
          <Faqs />

          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
      )}
    </>
  );
}
