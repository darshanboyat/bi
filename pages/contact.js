import React from 'react';
import Head from 'next/head'
import Header from '../components/header/Header';
// import "animate.css/animate.min.css";
import KeepInTouch from '../components/common/keepInTouch';
import LocateUs from '../components/common/locateUs';
import LetsKick from '../components/common/LetsKick';
import Footer from '../components/common/Footer';
import Contact from '../components/contacts/contact'
import ContactBanner from '../components/contacts/contactBanner'

function contact(props) {
    return (
      <>
          <Head>
            <title>Contact Brain Inventory to Kickstart Your Digital Journey Today</title>
          </Head>
        <div>
          <Header></Header>
          <ContactBanner></ContactBanner>
          <Contact></Contact>
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
      </>
    );
}

export default contact;