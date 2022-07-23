import React, { Component } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/common/Footer';
import KeepInTouch from '../components/common/keepInTouch';
import LetsKick from '../components/common/LetsKick';
import LocateUs from '../components/common/locateUs';
import Newsletter from '../components/career/Newsletter';
import ChooseApp from '../components/mobilePages/chooseApp';
import SolutionLanguage from '../components/solution/solutionLanguage';
import WorkBanner from '../components/work/workBanner';
import BigHeadingScroll from '../components/common/BigHeadingScroll';
import Partner from '../components/solution/partner';
import SolutionBanner from '../components/solution/solutionBanner';
import SolutionServices from '../components/solution/solutionServices';
import Project from '../components/solution/project';

class Solution extends Component {
    render() {
        return (
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
        );
    }
}

export default Solution;