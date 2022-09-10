import React, {useState} from 'react';
import Head from 'next/head'
import ChooseApp from '../components/mobilePages/chooseApp';
import SolutionLanguage from '../components/solution/solutionLanguage';
import BigHeadingScroll from '../components/common/BigHeadingScroll';
import Partner from '../components/solution/partner';
import SolutionBanner from '../components/solution/solutionBanner';
import SolutionServices from '../components/solution/solutionServices';
import Project from '../components/solution/project';
// 
import KeepInTouch from '../components/common/keepInTouch';
import Header from '../components/header/Header';
import LocateUs from '../components/common/locateUs';
import LetsKick from '../components/common/LetsKick';
import Newsletter from '../components/career/Newsletter';
import Footer from '../components/common/Footer';
import Loader from '../components/common/loader';


function Solution(props) {
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
                 <Header/>
                 <SolutionBanner/>
                 <SolutionServices/>
                 <Project/>
                 <ChooseApp/>
                 <Newsletter/>
                 <SolutionLanguage/>
                 <Partner/>
                 <BigHeadingScroll text={'Perfectly balanced as all things should be.'}/>
                 <KeepInTouch/>
                 <LocateUs/>
                 <LetsKick/>
                 <Footer/>
            </div>
        </div>
        }
       </>
    );
}

export default Solution;