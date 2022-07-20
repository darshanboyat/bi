import React , {useState} from 'react';
import Head from 'next/head';
import Footer from '../components/common/Footer';
import Loader from '../components/common/loader';
import Header from '../components/header/Header';
import Banner from '../components/uiuxPages/banner';
import Industries1 from '../components/mobilePages/industries';
import Engagementmodal from '../components/mobilePages/engagementModal';
import Newsletter from '../components/career/Newsletter';
import Faqs from '../components/mobilePages/faqs';
import KeepInTouch from '../components/common/keepInTouch';
import LocateUs from '../components/common/locateUs';
import WebServices from '../components/webPages/webServices';
import DesignTool from '../components/uiuxPages/designTool';
import Uiabout from '../components/uiuxPages/uiabout';
import ChooseApp from '../components/mobilePages/chooseApp';
import Magic from '../components/uiuxPages/magic';


function UiUxServices(props) {
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
               <Uiabout/>
               <DesignTool/>
               <ChooseApp/>
               <Newsletter/> 
               <WebServices/>
               <Magic/>
               <Engagementmodal/>
               <Newsletter/>
               <Industries1/>
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

export default UiUxServices;