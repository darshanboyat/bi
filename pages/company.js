import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/header/Header";
import BigHeadingScroll from "../components/common/BigHeadingScroll";
import KeepInTouch from "../components/common/keepInTouch";
import LocateUs from "../components/common/locateUs";
import LetsKick from "../components/common/LetsKick";
import Footer from "../components/common/Footer";
import Video from "../components/company/video";
import Summary from "../components/company/summary";
import Mission from "../components/company/mission";
import Ethos from "../components/company/ethos";
import Experience from "../components/company/experience";
import Choose from "../components/company/choose";
import MeetCrew from "../components/company/meetCrew";
import Process from "../components/company/process";
import UnderHood from "../components/company/underHood";
import Loader from "../components/common/loader";

function Company() {
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      <Head>
        <title>About Brain Inventory</title>
        <meta
          name="description"
          content="We are Brain Inventory started in 2019 with a clear vision to build amazing products for our clients worldwide. We want to move the Digital Industry forward."
        />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <Header></Header>
            <Video></Video>
            <Summary></Summary>
            <Mission></Mission>
            <Ethos></Ethos>
            <Process></Process>

            <Experience></Experience>
            <MeetCrew></MeetCrew>
          </div>
          <UnderHood></UnderHood>
          <Choose></Choose>
          <BigHeadingScroll
            text={"Perfectly balanced as all things should be."}
          />
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Company;
