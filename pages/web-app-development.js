import React , {useState} from 'react';
import Head from 'next/head';
import Footer from '../components/common/Footer';
import Loader from '../components/common/loader';
import Header from '../components/header/Header';
import WebBanner from '../components/webPages/webBanner';
import Industries1 from '../components/mobilePages/industries';
import Engagementmodal from '../components/mobilePages/engagementModal';
import TechnologyStackWeb from '../components/webPages/technologyStackWeb';
import WebAboutUs from '../components/webPages/WebAboutUs';
import ChooseWeb from '../components/webPages/chooseWeb';
import Newsletter from '../components/career/Newsletter';
import Faqs from '../components/mobilePages/faqs';
import KeepInTouch from '../components/common/keepInTouch';
import LocateUs from '../components/common/locateUs';
import WebServices from '../components/webPages/webServices';
function WebAppDevelopment(props) {

    const [loading, setLoading] = useState(true);
    React.useEffect(() => {
      setTimeout(() => setLoading(false), 2000);
    }, []);

    return (
      <>
       {loading ? 
        <Loader/> 
       :
       <div>
          <Head>
            <title>Web Application Development Services with Brain Inventory</title>
            {/* <meta name="description" content="Brain Inventory is a leading web application development company in India offering professional website and web application development services worldwide." /> */}
          </Head>
        <div>
          <Header></Header>
          <WebBanner/>
          <WebAboutUs/>
          <TechnologyStackWeb/>
          <ChooseWeb/>
          <Newsletter/>
          <WebServices/>
          <Engagementmodal/>
          <Newsletter/>
          {/* <Industries1/> */}
          <Faqs/>
          <KeepInTouch/>
          <LocateUs/>
          <Footer />
        </div>
       </div>
       }
      </>
    );
}

export default WebAppDevelopment;