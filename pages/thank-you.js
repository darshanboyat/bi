import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/header/Header";
// import "animate.css/animate.min.css";
import KeepInTouch from "../components/common/keepInTouch";
import LocateUs from "../components/common/locateUs";
import LetsKick from "../components/common/LetsKick";
import Footer from "../components/common/Footer";
import Loader from "../components/common/loader";
import Timeline from "../components/portfolio/timeline";

function ThankYou(props) {
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <>
      <Head>
        <title>
          Brain Inventory | Custom Software Development Company in India & UK
        </title>
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <Header></Header>
            <div className="2xl:py-32 xl:py-28 py-24 2xl:px-10 lg:px-8 mobile-padding">
              <div className="container padding-left-all-section">
                <h2 className="text-center text-6xl text-white Gilroy-Bold">
                  Thank You
                </h2>
                <p className="text-center pt-6 text-lg pb-1">
                  Just A Short While.
                </p>
                <p className="text-center text-lg">
                  As we Make Sure The Right Person{" "}
                  <span className="color-light">Get Back to you ASAP</span>
                </p>
              </div>
            </div>
            <Timeline />
            <LocateUs />
            <LetsKick />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default ThankYou;
