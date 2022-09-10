import React , {useState} from 'react';
import Head from 'next/head'
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
// import InstagramEmbed from "react-instagram-embed";
import Loader from "../components/common/loader";

function Company() {
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
        ) : (
          <div>
          <Head>
            <title>Current Openings at Brain Inventory</title>
          </Head>
          <script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js"></script>
          <div>
            <Header></Header>
            <Video></Video>
            <Summary></Summary>
            <Mission></Mission>
            <Ethos></Ethos>
            <Process></Process>

            <Experience></Experience>
            <MeetCrew></MeetCrew>
            {/* <InstagramEmbed
              url="https://www.instagram.com/braininventory_com"
              clientAccessToken="IGQVJYLTNVSVZALbVJiRmpYbzJuV3BoSm1ISE81bXBSNlB5N3dob1BMQ0RTOVhZAb245U0w5SnVteGQ5MkI1cFVndEJvd3ZA6SnQzSmxMSzE0X0pZAcXdZAMldpZAkxKU1NyUDliMU5CSENIbWFnanJ3WmdmSgZDZD"
              maxWidth={320}
              hideCaption={false}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            /> */}
            <h1 style="text-align: center">
              Show Instagram Feed on your Website
            </h1>
            <div id="instafeed-container"></div>
          </div>
          <UnderHood></UnderHood>
          <Choose></Choose>
          {/* <BlogsArticles></BlogsArticles> */}
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
