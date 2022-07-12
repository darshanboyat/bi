import React , {useState} from 'react';
import Head from 'next/head'
import Header from '../components/header/Header';
// import "animate.css/animate.min.css";
import KeepInTouch from '../components/common/keepInTouch';
import LocateUs from '../components/common/locateUs';
import LetsKick from '../components/common/LetsKick';
import Footer from '../components/common/Footer';
import Contact1 from '../components/contacts/contact';
import ContactBanner from '../components/contacts/contactBanner';
import Loader from '../components/common/loader';

function Contact(props) {
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
            <title>Contact Brain Inventory to Kickstart Your Digital Journey Today</title>
          </Head>
        <div>
          <Header></Header>
          <ContactBanner></ContactBanner>
          <Contact1></Contact1>
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
       </div>
       }
      </>
    );
}

export default Contact;