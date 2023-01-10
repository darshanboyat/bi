import React, { useState } from "react";
import Head from "next/head";

import Header from "../components/header/Header";
import Footer from "../components/common/Footer";
import LocateUs from "../components/common/locateUs";
import KeepInTouch from "../components/common/keepInTouch";
import StaffBanner from "../components/staffAugmentation/staffBanner";
import Staform from "../components/staffAugmentation/staform";
import OurProcess from "../components/staffAugmentation/ourProcess";
import HireRemote from "../components/staffAugmentation/hireRemote";
import OnboardingProcess from "../components/staffAugmentation/onboardingProcess";
import Hiringbenifit from "../components/staffAugmentation/hiringbenifit";
import StaffPratice from "../components/staffAugmentation/staffPratice";
import Logo from "../components/staffAugmentation/logo";
import StafFaq from "../components/staffAugmentation/stafffaq";
import Loader from "../components/common/loader";

export default function Hirededicatedremotedevelopers(props) {
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    // setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      <Head>
        <title>Hire Dedicated Remote Developer | Brain Inventory</title>
        <meta
          name="description"
          content="Brain Inventory is a leading IT Staff Augmentation company. Use our IT augmentation services to get professional specialists on your project."
        />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <StaffBanner />
          <Staform />
          <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
            <div className="container">
              <img src="/images/something.png" className="w-full" />
            </div>
          </div>
          <OurProcess />
          <HireRemote />
          <OnboardingProcess />
          <div className="">
            <div className="">
              <img src="/images/comp1.gif" className="w-full" />
            </div>
          </div>
          <Hiringbenifit />
          <HireRemote />
          <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
            <div className="container">
              <img src="/images/staff-image.png" className="w-full" />
            </div>
          </div>
          <StaffPratice />
          <Logo />
          <StafFaq />
          <KeepInTouch />
          <LocateUs />
          <Footer />
        </div>
      )}
    </>
  );
}
