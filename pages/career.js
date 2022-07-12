import React, {useState} from 'react';
import Head from 'next/head';
import LetsKick from '../components/common/LetsKick';
import Footer from '../components/common/Footer';
import KeepInTouch from '../components/common/keepInTouch'
import LocateUs from '../components/common/locateUs'
import Header from '../components/header/Header';
import Banner from '../components/career/banner';
import Opening from '../components/career/opening';
import Culture from '../components/career/culture';
import Newsletter from '../components/career/Newsletter';
import MeetCrew from '../components/company/meetCrew';
import WhyWork from '../components/contacts/whyWork';
// import "animate.css/animate.min.css";
import Loader from '../components/common/loader'
import Stepper from '../components/career/stepper';

function carrer(props) {
  
const [loading, setLoading] = useState(true);

React.useEffect(() => {
  // setLoading(true);
  setTimeout(() => setLoading(false), 2000);
}, []);
    return (
         <>
           {loading ? 
           <Loader/>
           :
        <div>
          <Head>
              <title>Current Openings at Brain Inventory</title>
          </Head>
          <Header></Header>
          <Banner></Banner>
          <WhyWork></WhyWork>
          <Stepper></Stepper>
          <MeetCrew></MeetCrew>
          <Culture></Culture>
          <Newsletter></Newsletter>
          <Opening></Opening>
          <KeepInTouch/>
          <LocateUs/>
          {/* <LetsKick/> */}
          <Footer/>
        </div>

            }
         </>
    );
}

export default carrer;