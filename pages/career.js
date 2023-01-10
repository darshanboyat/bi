import React, { useState } from "react";
import Head from "next/head";
import LetsKick from "../components/common/LetsKick";
import Footer from "../components/common/Footer";
import KeepInTouch from "../components/common/keepInTouch";
import LocateUs from "../components/common/locateUs";
import Header from "../components/header/Header";
import Banner from "../components/career/banner";
import Opening from "../components/career/opening";
import Culture from "../components/career/culture";
import Newsletter from "../components/career/Newsletter";
import MeetCrew from "../components/company/meetCrew";
import WhyWork from "../components/contacts/whyWork";
// import "animate.css/animate.min.css";
import Loader from "../components/common/loader";
import Stepper from "../components/career/stepper";
import InterviewProcess from "../components/career/interviewProcess";

function Carrer(props) {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    // setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      <Head>
        <title>The Right Place For You | Career at Brain Inventory</title>
        <meta
          name="description"
          content="Onboard with us for a thrilling journey which will have Growth, Challenges, Free Speech, Upskilling, and Support for you."
        />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header></Header>
          <Banner></Banner>
          <WhyWork></WhyWork>
          <Stepper></Stepper>
          <MeetCrew></MeetCrew>
          <Culture></Culture>
          <Newsletter></Newsletter>
          <InterviewProcess></InterviewProcess>
          <Opening></Opening>
          <KeepInTouch />
          <LocateUs />
          {/* <LetsKick/> */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default Carrer;
