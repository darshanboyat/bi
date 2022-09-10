import React, {useState} from 'react';
import Head from 'next/head'
import HomeButton from '../components/buttons/HomeButton';
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

function ReactnativeDevelopment(props) {
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
           <title>Brain Inventory | Custom Software Development Company in India & UK</title>

           </Head>
         <div>
           <Header></Header>     
            <div className="h-screen min-h-[100vh] items-center relative">
            <h2 className="2xl:px-14 xl:px-12 px-10 pt-32 text-9xl stroke-text-mobile Gilroy-Bold">
                React Native
            </h2>
            <div className="md:flex block items-center relative">
                <div className="lg:w-[40%] w-full  md:h-full">
                <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full">
                    <div className="2xl:text-9xl lg:text-9xl text-4xl Gilroy-Bold text-white">
                    Development
                    </div>
                    <div className="flex flex-col">
                    <div className="mt-8">
                        <HomeButton>
                        <span>our concepts</span>
                        </HomeButton>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
           {/* <Abouttechnology/> */}
           <OurWork/>
           <ReasonSection/>
           <Choose/>
           <Engagementmodal/>
           <Newsletter/>
           <Uses/>
           <Industries/>
           {/* <Faqs/> */}
           <LocateUs />
           <LetsKick />
           <Footer />
         </div>
        </div>
        }
       </>
    );
}

export default ReactnativeDevelopment;