import React , {useState} from 'react';
import Head from 'next/head'
import Header from '../components/header/Header';
import KeepInTouch from '../components/common/keepInTouch';
import LocateUs from '../components/common/locateUs';
import LetsKick from '../components/common/LetsKick';
import Footer from '../components/common/Footer';
import Loader from '../components/common/loader';
import Banner from '../components/mobilePages/banner';
import Newsletter from '../components/career/Newsletter';
import ChooseApp from '../components/mobilePages/chooseApp';
import TechnologyStack from '../components/mobilePages/technologyStack';
import Mobileservices from '../components/mobilePages/mobileservices';
import Industries from '../components/mobilePages/industries';
import AboutusSection from '../components/mobilePages/aboutusSection';
import Engagementmodal from '../components/mobilePages/engagementmodal';
import Pratice from '../components/mobilePages/pratice';
import Faqs from '../components/mobilePages/faqs';
import Standard from '../components/mobilePages/standard';

function MobileAppDevelopment(props) {

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
            <title>Contact Brain Inventory to Kickstart Your Digital Journey Today</title>
          </Head>
        <div>
          <Header></Header>
          <Banner/>
          <AboutusSection/>
          <TechnologyStack/>
          <ChooseApp/>
          <Newsletter/>
          <Mobileservices/>
          <Standard/>
          <Engagementmodal/>
          <Pratice/>
          <Newsletter/>
          <Industries/>
          <Faqs/>
          <KeepInTouch/>
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
       </div>
       }
      </>
    );
}

export default MobileAppDevelopment;