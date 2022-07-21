import React , {useState} from 'react';
import Head from 'next/head';
import Footer from '../components/common/Footer';
import Loader from '../components/common/loader';
import Header from '../components/header/Header';
import KeepInTouch from '../components/common/keepInTouch';
import LocateUs from '../components/common/locateUs';
import BigHeadingScroll from '../components/common/BigHeadingScroll';
import PortfolioSection from '../components/portfolio/portfolioSection'



function Portfolio(props) {
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
                 <title>Portfolio</title>
               </Head>
             <div>
               <Header></Header>
               <PortfolioSection></PortfolioSection>
               <BigHeadingScroll text={'Perfectly balanced as all things should be.'}/>
               <KeepInTouch/>
               <LocateUs/>
               <Footer />
             </div>
            </div>
          }
          </>
        );
}

export default Portfolio;