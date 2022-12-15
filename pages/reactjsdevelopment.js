import React, {useState} from 'react';
import Head from 'next/head'
import Header from '../components/header/Header';
import LocateUs from '../components/common/locateUs';
import LetsKick from '../components/common/LetsKick';
import Newsletter from '../components/career/Newsletter';
import Footer from '../components/common/Footer';
import Banner from '../components/technologySection/banner';
import Loader from '../components/common/loader';
import Faqs from '../components/mobilePages/faqs';
import Industries from '../components/mobilePages/industries';
import Engagementmodal from '../components/mobilePages/engagementModal';
import Choose from '../components/technologySection/choose';
import Abouttechnology from '../components/technologySection/abouttechnology';
import ReasonSection from '../components/technologySection/reasonSection';
import OurWork from '../components/technologySection/ourWork';
import Uses from '../components/technologySection/uses';

function Reactjsdevelopment(props) {
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
           <title>React.js Development Company - Brain Inventory</title>
           <meta name='description' content='Hire the best & vetted NodeJS developers from Brain Inventory. Our NodeJS developers are skilled in API Development to AWS Deployment. Hire Now' />
           </Head>
         <div>
           <Header></Header>
           <Banner/>
           <Abouttechnology/>
           <OurWork/>
           <ReasonSection/>
           <Choose/>
           <Engagementmodal/>
           <Newsletter/>
           <Uses/>
           <Industries/>
           <Faqs/>
           <LocateUs />
           <LetsKick />
           <Footer />
         </div>
        </div>
        }
       </>
    );
}

export default Reactjsdevelopment;