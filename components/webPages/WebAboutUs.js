import React, { Component } from 'react';

class WebAboutUs extends Component {
    render() {
        return (
            <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
            <div className="container">
                <div>
                    <h2 className="Gilroy-Bold text-xl pb-4">what we do?</h2>
                    <h3 className="Gilroy-Bold text-4xl pb-12">top web development company specialized to create robust website and applications.</h3>
    
                    <h4 className="Gilroy-Bold text-xl">Trusted Web App Development Company</h4>
                    <p className="text-sm pt-1 color-light">As a leading web development company, we always create robust, secure, custom web application with high scalability. According to the need of product, we use open source technology to develop a product with high quality standard. We help you stand out in this digital world by providing bespoke web development solutions.</p>
                    <p className="text-sm pt-6 color-light">Since 2011, MindInventory has been developing futuristic website and web applications that take businesses to greater heights. Our highly skilled web developers adopted a customer focused approach by upgrading their self to latest web technology like ReactJS, Angular, Node.js, Laravel, Golang and many others.</p>
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
                      <h2 className="Gilroy-Bold text-2xl">Front End Web Development</h2>
                      <p className="text-lg color-light">Front end or client-side development is the practice of managing everything that users visually see first in their application or browser.</p>
                   <div className="grid grid-cols-3 mt-4">
                        <div>
                        <img src="/images/w-3.svg" className="h-20" />
    
                           <h2 className="color-light w-28 mt-2">react Js Developemt</h2>
                        </div>
                        <div>
                        <img src="/images/w-2.svg" className="h-20" />
                           <h2 className="color-light w-28 mt-2">vue Js Developemt</h2>
                        </div>
                        <div>
                        <img src="/images/w-5.svg" className="h-20" />
                           <h2 className="color-light w-28 mt-2">angular Js Developemt</h2>
                        </div>
                   </div>
                   </div>
                   <div>
                      <h2 className="Gilroy-Bold text-2xl">Back End Web Development</h2>
                      <p className="text-lg color-light">Backend or server-side development is responsible for managing data to ensure everything on the client-side actually works.</p>
                      <div className="grid grid-cols-3 mt-4">
                        <div>
                        <img src="/images/w-1.svg" className="h-20" />
    
                           <h2 className="color-light w-28 mt-2">node.Js development</h2>
                        </div>
                        <div>
                        <img src="/images/w-6.svg" className="h-20" />
                           <h2 className="color-light w-28 mt-2">laravel development</h2>
                        </div>
                        <div>
                        <img src="/images/w-4.svg" className="h-20 w-28" />
                           <h2 className="color-light w-28 mt-2">golang development</h2>
                        </div>
                   </div>
                   </div>
               </div>
            </div>
            <div className="container">
              <div>
                <h2 className="Gilroy-Bold text-xl mb-2">
                Cutting-edge Web Development Services You Need for Your Business Growth.
                </h2>
                <p className="text-base color-light pb-4">
                MindInventory offers high-quality web app development services by keeping targeted customers in mind for startups, mid-sized companies, and enterprises. As a reputed web development company in India, we have a dedicated team of web developers who can work with latest technology and you can hire web developer for your project need.
                </p>
                <p className="text-base color-light">
                We are renowned custom web app development company, offering wide range of web development services that caters to all your business needs:


                </p>
              </div>
              <div className="grid grid-cols-3 mt-6">
                <div>
                  <ul>
                    <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                      <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                      Website Design and Development
                    </li>
                    <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                      <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                      Ecommerce Development
                    </li>
                    <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                      <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                      Maintenance and Support
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className="inline-flex items-center align-middle text-xl  leading-[55px]">
                      <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                      Web Portal Development
                    </li>
                    {/* <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                      <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                      CMS Development
                    </li> */}
                
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                      <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                      Custom Application Development
                    </li>
                    <li className="inline-flex items-center align-middle text-xl leading-[55px]">
                      <img src="/images/BulletIcon.png" className="h-4 mr-2" />
                      ERP Solutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default WebAboutUs;