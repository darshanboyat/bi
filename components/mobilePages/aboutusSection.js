import React, { Component } from "react";

class AboutusSection extends Component {
  render() {
    return (
      <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
        <div className="container">
            <div>
                <h2 className="Gilroy-Bold text-xl pb-4">what we do?</h2>
                <h3 className="Gilroy-Bold text-4xl pb-12">we are mobile app development company to <br/> design & develop your custom mobile application.</h3>

                <h4 className="Gilroy-Bold text-xl">Trusted Mobile Application Development Company</h4>
                <p className="text-sm pt-1 color-light">Mobile app development is indeed nowadays necessary for all the business. We, as a mobile application development company can provide high quality standard mobile app of any category. We have worked with diverse brands, organizations, startups and individuals to create powerful apps from excellent idea.</p>
                <p className="text-sm pt-6 color-light"> Our team of mobile app developers is capable of creating apps for multiple-platforms like iOS, Android and cross-platform solutions in Flutter, React Native & Ionic. Being one of the top-rated mobile application development companies, we have expertise in developing mobile app development solutions to meet your business requirements.</p>
            </div>

            <div className="flex items-center">
                 <div className="bg-services-div">
                     <h2>160+</h2>
                     <h3>Professionals</h3>
                 </div>
                 <div className="bg-services-div">
                     <h2>5+</h2>
                     <h3>Years of Average Experience</h3>
                 </div>
                 <div className="bg-services-div">
                     <h2>100M+</h2>
                     <h3>Investment Received Clients</h3>
                 </div>
            </div>
        </div>
        <div className="container pt-10 pb-10">
           <div className="grid grid-cols-2 gap-8">
               <div>
                  <h2 className="Gilroy-Bold text-2xl">Native App Development</h2>
                  <p className="text-lg color-light">Native mobile apps are developed for specific mobile OS such as iOS or Android and users can access them from dedicated app stores.</p>
               <div className="grid grid-cols-3 mt-4">
                    <div>
                    <img src="/images/Apple_logo.svg" className="h-20" />

                       <h2 className="color-light w-28 mt-2">iPhone App Developemt</h2>
                    </div>
                    <div>
                    <img src="/images/android-logo.svg" className="h-20" />
                       <h2 className="color-light w-28 mt-2">Android App Developemt</h2>
                    </div>
                    <div>
                    <img src="/images/swift-logo.svg" className="h-20" />
                       <h2 className="color-light w-28 mt-2">Swift App Developemt</h2>
                    </div>
               </div>
               </div>
               <div>
                  <h2 className="Gilroy-Bold text-2xl">Cross-platform App Development</h2>
                  <p className="text-lg color-light">Cross-platform mobile apps are developed to function for multiple mobile platforms like iOS, Android, etc. without changing the codebase.</p>
                  <div className="grid grid-cols-3 mt-4">
                    <div>
                    <img src="/images/flutter-logo.svg" className="h-20" />

                       <h2 className="color-light w-28 mt-2">Flutter App Development</h2>
                    </div>
                    <div>
                    <img src="/images/react-logo.svg" className="h-20" />
                       <h2 className="color-light w-28 mt-2">React Native Development</h2>
                    </div>
                    <div>
                    <img src="/images/ionic-logo.svg" className="h-20" />
                       <h2 className="color-light w-28 mt-2">Ionic App Development</h2>
                    </div>
               </div>
               </div>
           </div>
        </div>
        <div className="container">
          <div>
            <h2 className="Gilroy-Bold text-xl mb-2">
              End-to-End Mobile App Development Services for iOS, Android and
              Cross-platform
            </h2>
            <p className="text-base color-light pb-4">
              We have been providing world-class mobile app development services
              for Startups, mid-scale businesses, and enterprises since 2011.
              Our highly skilled mobile app developers will work on transforming
              your app idea into an innovative and secure mobile application.
            </p>
            <p className="text-base color-light">
              Whether you require native mobile app or cross-platform apps, our
              superior mobile app development services are designed to deliver
              cutting-edge mobility solutions tailored to your business needs.
              As a leading mobile app development company, MindInventory offers
              a complete range of mobile application development services to the
              clients worldwide:
            </p>
          </div>
          <div className="grid grid-cols-3 mt-6">
            <div>
              <ul>
                <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                  <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                  Mobile App UI/UX Design
                </li>
                <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                  <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                  Progressive Web App Development
                </li>
                <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                  <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                  IoT App Development
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="inline-flex items-center align-middle text-xl  leading-[55px]">
                  <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                  Native App Development
                </li>
                <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                  <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                  Enterprise Mobility Solutions
                </li>
                <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                  <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                  Maintenance and Support
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                  <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                  Cross-platform App Development
                </li>
                <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                  <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                  Wearable App Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutusSection;