import React from 'react';


function Abouttechnology(props) {
    return (
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
        <div className="container padding-left-all-section">
            <div>
                <h2 className="Gilroy-Bold text-xl pb-4">what we do?</h2>
                <h3 className="Gilroy-Bold text-4xl pb-12">we create high-performing web applications <br/> with reactjs front-end development library.</h3>

                <h4 className="Gilroy-Bold text-xl">ReactJS Web Development</h4>
                <p className="text-sm pt-1 color-light">Mobile app development is indeed nowadays necessary for all the business. We, as a mobile application development company can provide high quality standard mobile app of any category. We have worked with diverse brands, organizations, startups and individuals to create powerful apps from excellent idea.</p>
                <p className="text-sm pt-6 color-light"> Our team of mobile app developers is capable of creating apps for multiple-platforms like iOS, Android and cross-platform solutions in Flutter, React Native & Ionic. Being one of the top-rated mobile application development companies, we have expertise in developing mobile app development solutions to meet your business requirements.</p>
            </div>

            <div className="lg:flex block items-center">
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

        <div className="container padding-left-all-section">
          <div>
            <h2 className="Gilroy-Bold text-xl mb-2">
            Best-in-class ReactJS Development Services to Build Futuristic and Dynamic Web Apps
            </h2>
            <p className="text-base color-light pb-4">
              We have been providing world-class mobile app development services
              for Startups, mid-scale businesses, and enterprises since 2011.
              Our highly skilled mobile app developers will work on transforming
              your app idea into an innovative and secure mobile application.
            </p>
            
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1  mt-6">
            <div>
              <ul>
                <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                  <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                  Custom ReactJS Web Development
                </li>
                <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                  <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                  App Migration to React
                </li>
            </ul>
            </div>
            <div>
              <ul>
                <li className="inline-flex items-center align-middle text-xl  leading-[55px]">
                  <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                  Interactive UI Development
                </li>
                <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                  <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                  Enterprise Web Development
                </li>
                
              </ul>
            </div>
            <div>
              <ul>
                <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                  <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                  Web Application Development
                </li>
                <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                  <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                  Maintenance and Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Abouttechnology;