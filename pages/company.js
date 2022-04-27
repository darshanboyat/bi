import React from 'react';
import Header from '../components/header/Header';
import BlogsArticles from '../components/common/BlogsArticles';
import BigHeadingScroll from '../components/common/BigHeadingScroll';
import KeepInTouch from '../components/common/keepInTouch';
import LocateUs from '../components/common/locateUs';
import LetsKick from '../components/common/LetsKick';
import Footer from '../components/common/Footer';
import Video from '../components/company/video';
import Summary from '../components/company/summary';
import Mission from '../components/company/mission';
import Ethos from '../components/company/ethos';
import Experience from '../components/company/experience';
import Choose from '../components/company/choose';
import MeetCrew from '../components/company/meetCrew';
import Process from '../components/company/process';
import UnderHood from '../components/company/underHood';
function company(props) {
    return (
        <div>
          <Header></Header>
          <Video></Video>
          <Summary></Summary>
          <Mission></Mission>
          <Ethos></Ethos>
          <Process></Process>
        
          <Experience></Experience>
          <MeetCrew></MeetCrew>
          <UnderHood></UnderHood>
          <Choose></Choose>
          <BlogsArticles></BlogsArticles>
          <BigHeadingScroll text={'Perfectly balanced as all things should be.'}/>
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />

        </div>
    );
}

export default company;