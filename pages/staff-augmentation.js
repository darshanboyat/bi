import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/common/Footer';
import LocateUs from '../components/common/locateUs';
import KeepInTouch from '../components/common/keepInTouch';
import StaffBanner from '../components/staffAugmentation/staffBanner';
import Staform from '../components/staffAugmentation/staform';
import OurProcess from '../components/staffAugmentation/ourProcess';
import HireRemote from '../components/staffAugmentation/hireRemote';
import OnboardingProcess from '../components/staffAugmentation/onboardingProcess';
import Hiringbenifit from '../components/staffAugmentation/hiringbenifit';
import StaffPratice from '../components/staffAugmentation/staffPratice';
import Logo from '../components/staffAugmentation/logo';
import StafFaq from '../components/staffAugmentation/stafffaq';

function StaffAugmentation(props) {

    return (
        <div>
            <Header/>
            <StaffBanner/>
            <Staform/>
            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
                <div className='container'>
                  <img src='/images/something.png' className='w-full' />
                </div>
            </div>
            <OurProcess/>
            <HireRemote/>
            <OnboardingProcess/>
            <div className=''>
                <div className=''>
                  <img src='/images/comp1.gif' className='w-full' />
                </div>
            </div>
            <Hiringbenifit/>
            <HireRemote/>
            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
                <div className='container'>
                  <img src='/images/staff-image.png' className='w-full' />
                </div>
            </div>
            <StaffPratice/>
            <Logo/>
            <StafFaq/>
            <KeepInTouch/>
            <LocateUs/>
            <Footer/>
        </div>
    );
    
}

export default StaffAugmentation;