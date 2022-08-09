import React, { Component } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/common/Footer';
import KeepInTouch from '../components/common/keepInTouch';
import LetsKick from '../components/common/LetsKick';
import LocateUs from '../components/common/locateUs';
import Faqs from '../components/mobilePages/faqs';
import HomeSectionSix from '../components/home/HomeSection-6';
import LanguageTool from '../components/work/languageTool';
import Newsletter from '../components/career/Newsletter';
import Engagementmodal from '../components/mobilePages/engagementModal';
import ChooseApp from '../components/mobilePages/chooseApp';
import WorkBanner from '../components/work/workBanner';
import Work from '../components/work/work';
import Cycle from '../components/work/cycle';

class HowWeWork extends Component {
    render() {
        return (
            <div>
                 <Header/>
                 <WorkBanner/>
                 <Work/>
                 <HomeSectionSix/>
                 {/* <Cycle/> */}
                 <ChooseApp/>
                 <LanguageTool/>
                 <Newsletter/>
                 <Engagementmodal/>
                 <Faqs/>
                 
                 <KeepInTouch/>
                 <LocateUs/>
                 <LetsKick/>
                 <Footer/>
            </div>
        );
    }
}

export default HowWeWork;