import React, { Component } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/common/Footer';
import KeepInTouch from '../components/common/keepInTouch';
import LetsKick from '../components/common/LetsKick';
import LocateUs from '../components/common/locateUs';
import HomeSectionSix from '../components/home/HomeSection-6';
import Newsletter from '../components/career/Newsletter';
import ChooseApp from '../components/mobilePages/chooseApp';
import SolutionLanguage from '../components/solution/solutionLanguage';
import WorkBanner from '../components/work/workBanner';
import Work from '../components/work/work';
import BigHeadingScroll from '../components/common/BigHeadingScroll';


class Solution extends Component {
    render() {
        return (
            <div>
                 <Header/>
                 <WorkBanner/>
                 <Work/>
                 <HomeSectionSix/>
                 <ChooseApp/>
                 <SolutionLanguage/>
                 <Newsletter/>
                 <BigHeadingScroll text={'Perfectly balanced as all things should be.'}/>
                 <KeepInTouch/>
                 <LocateUs/>
                 <LetsKick/>
                 <Footer/>
            </div>
        );
    }
}

export default Solution;