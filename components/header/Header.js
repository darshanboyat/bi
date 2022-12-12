import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [show, setShow] = useState(false);
  const config = {
    companyChildren: CompanyChildren,
    servicesChildren: ServicesChildren,
    solution: Solution,
  };
  const [navOpen, setNavOpen] = useState(false);
  const [blockName, setBlockName] = useState("companyChildren");
  const [serviceblock, setserviceblock] = useState("ServicesChildren");
  let Block = config.companyChildren;
  let Block2 = config.servicesChildren;

  useEffect(() => {
    Block = React.createElement(config[blockName]);
    Block2 = React.createElement(config[serviceblock]);
  }, [blockName]);

  useEffect(() => {
    // navOpen
    // ? document.getElementById("sidenav").classList.remove("-translate-y-full")
    // : document.getElementById("sidenav").classList.add("-translate-y-full");
  });

  const handlesidebar = () => {
    // document.getElementById("sidenav").classList.remove("-translate-y-full");
    if (navOpen) {
      document.getElementById("sidenav").classList.add("-translate-y-full");
    } else {
      document.getElementById("sidenav").classList.remove("-translate-y-full");
    }
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (window.pageYOffset > 50) {
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").classList.remove("scrollUp");
        } else {
          document.getElementById("navbar").classList.add("scrollUp");
        }
        prevScrollpos = currentScrollPos;
      }
    };
  }, []);

  return (
    <>
      <nav>
        <div
          id="navbar"
          className="fixed top-0 flex justify-between items-center w-full py-3 px-4 lg:px-8 z-50"
        >
          <Link href="/" className="cursor-pointer">
            <span className="text-4xl Gilroy-Bold z-30">
              {!navOpen && (
                <div className="relative w-36 h-12 cursor-pointer">
                  <Image
                    src={"/images/" + "Logobg.png"}
                    className="cursor-pointer"
                    alt="it service company offers web and app design and development"
                    layout="fill"
                  />
                </div>
              )}
            </span>
          </Link>

          {/* <div className="dropdown lg:hidden dropdown-hover">
            <label onClick={() => setShow(prev => !prev)} className="btn  bg-transparent outline-none border-0 hover:bg-transparent m-1">
              <div className="flex  justify-between align-middle items-center bg-case-blue-request h-11 z-[100]">
                <p className="px-4 text-xs Gilroy-Light lowercase mobile-none">
                  <Link href="/contact">
                   request A Quote
                  </Link>
                </p>
                <span
                 
                  className="bg-base-blue-1 items-center h-11 px-4 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 relative top-3"
                    width="15.5"
                    height="11.5"
                    viewBox="0 0 15.5 11.5"
                  >
                    <g
                      id="Group_3668"
                      data-name="Group 3668"
                      transform="translate(-1821.75 -41.75)"
                    >
                      <line
                        id="Line_181"
                        data-name="Line 181"
                        x2="14"
                        transform="translate(1822.5 42.5)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      />
                      <line
                        id="Line_182"
                        data-name="Line 182"
                        x2="8.326"
                        transform="translate(1822.5 47.5)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      />
                      <line
                        id="Line_226"
                        data-name="Line 226"
                        x2="14"
                        transform="translate(1822.5 52.5)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </label>
            
            {show && 
               <ul className="dropdown-content mt-0 lg:ml-5 -ml-[6rem] bg-base-blue-1 p-2 shadow bg-base-100 w-[168px]">
                 <li className="py-1 hover:bg-case-blue-request">
                   <Link
                     href="/contact"
                     className="text-white cursor-pointer hover:bg-case-blue-request"
                   >
                     Contact
                   </Link>
                 </li>   
                 <li className="pt-2 py-1 block hover:bg-case-blue-request">
                   <Link
                      href="/career"
                      className="text-white block cursor-pointer hover:bg-case-blue-request">
                      Career
                   </Link>
                 </li>
               </ul>
            }
            </div> */}
          {navOpen ? (
            <div className="dropdown lg:block hidden dropdown-hover">
              <label className="btn  bg-transparent outline-none border-0 hover:bg-transparent m-1">
                <div className="flex  justify-between align-middle items-center bg-case-blue-request h-11 z-[100]">
                  <p className="px-4 text-xs Gilroy-Light lowercase mobile-none">
                    <Link href="/contact">request A Quote</Link>
                  </p>
                  <span
                    onClick={() => {
                      handlesidebar();
                    }}
                    className="bg-base-blue-1 items-center h-11 px-4 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 relative top-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </div>
              </label>
              {/* <ul className="dropdown-content mt-0 lg:ml-5 -ml-[6rem] bg-base-blue-1 p-2 shadow bg-base-100 w-[168px]">
                           <li className="py-1 hover:bg-case-blue-request">
                             <Link
                               href="/contact"
                               className="text-white cursor-pointer hover:bg-case-blue-request"
                             >
                               Contact
                             </Link>
                           </li>
                           <li className="pt-2 py-1 block hover:bg-case-blue-request">
                             <Link
                               href="/career"
                               className="text-white block cursor-pointer hover:bg-case-blue-request"
                             >
                               Career
                             </Link>
                           </li>
                         </ul>  */}
            </div>
          ) : (
            // <span onClick={() => {setNavOpen(false)}} className="2xl:p-4 p-3 bg-white text-black z-[100]">
            //     <svg xmlns="http://www.w3.org/2000/svg" className="2xl:h-8 xl:h-6 h-4 2xl:w-8 xl:w-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            //     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            //     </svg>
            // </span>
            <div className="dropdown lg:block  dropdown-hover">
              <label className="btn  bg-transparent outline-none border-0 hover:bg-transparent m-1">
                <div className="flex  justify-between align-middle items-center bg-case-blue-request h-11 z-[100]">
                  <p className="px-4 text-xs Gilroy-Light lowercase mobile-none">
                    <Link href="/contact">request A Quote</Link>
                  </p>
                  <span
                    onClick={() => {
                      handlesidebar();
                    }}
                    className="bg-base-blue-1 items-center h-11 px-4 text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 relative top-3"
                      width="15.5"
                      height="11.5"
                      viewBox="0 0 15.5 11.5"
                    >
                      <g
                        id="Group_3668"
                        data-name="Group 3668"
                        transform="translate(-1821.75 -41.75)"
                      >
                        <line
                          id="Line_181"
                          data-name="Line 181"
                          x2="14"
                          transform="translate(1822.5 42.5)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                        />
                        <line
                          id="Line_182"
                          data-name="Line 182"
                          x2="8.326"
                          transform="translate(1822.5 47.5)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                        />
                        <line
                          id="Line_226"
                          data-name="Line 226"
                          x2="14"
                          transform="translate(1822.5 52.5)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </label>
              {/* <ul className="dropdown-content mt-0 lg:ml-5 -ml-[6rem] bg-base-blue-1 p-2 shadow bg-base-100 w-[168px]">
                           <li className="py-1 hover:bg-case-blue-request">
                             <Link
                               href="/contact"
                               className="text-white cursor-pointer hover:bg-case-blue-request"
                             >
                               Contact
                             </Link>
                           </li>
                           <li className="pt-2 py-1 block hover:bg-case-blue-request">
                             <Link
                               href="/career"
                               className="text-white block cursor-pointer hover:bg-case-blue-request"
                             >
                               Career
                             </Link>
                           </li>
                         </ul>  */}
            </div>
          )}
        </div>

        <div
          id="sidenav"
          className="fixed inset-0 overflow-hidden transition-transform -translate-y-full duration-300 bg-gradient-4 z-40 flex gap-10"
        >
          <div className="grid grid-cols-4 px-8 py-16 lg:px-28 lg:py-20 w-full">
            <div className="space-y-10">
              {/* <Link href="/company">        
              <h1 className="stroke-text text-3xl text-left Gilroy-Bold cursor-pointer">
                About us
              </h1>
              </Link> */}
              {/* <Link href="/how-we-work">         */}
              <h3
                onClick={() => {
                  setBlockName("companyChildren");
                }}
                className="stroke-text text-3xl text-left Gilroy-Bold cursor-pointer"
              >
                About us
              </h3>
              {/* </Link> */}
              {/* <Link href="/hire-dedicated-remote-developers"> */}
              <h3
                onClick={() => {
                  setBlockName("ServicesChildren");
                }}
                className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer"
              >
                Services
              </h3>
              {/* </Link> */}
              <Link href="/portfolio">
                <h3 className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer">
                  Portfolio
                </h3>
              </Link>

              <Link href="/career">
                <h3 className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer">
                  Careers
                </h3>
              </Link>
              {/* <Link href="/solution"> */}
              <h3 onClick={() => {
                  setBlockName("Solution");
                }} className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer">
                Solution
              </h3>
              {/* </Link> */}
              <Link href="/contact">
                <h3 className="stroke-text text-3xl Gilroy-Bold text-left cursor-pointer">
                  Contacts
                </h3>
              </Link>
            </div>
            <div className="col-span-3">
              {blockName === "companyChildren" && <CompanyChildren />}
              {blockName === "ServicesChildren" && <ServicesChildren />}
              {blockName === "Solution" && <Solution/>}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const CompanyChildren = () => {
  return (
    <div className="col-span-4 grid grid-cols-1">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">About</h2>
        <ul className="space-y-2">
  <li className="color-gray">
    <Link href="/company" className="cursor-pointer">Our Company</Link>
  </li>
  <li className="color-gray">
    <Link href="/how-we-work" className="cursor-pointer">How we work</Link>
  </li>
  <li className="color-gray">
    <Link href="/career" className="cursor-pointer">Careers</Link>
  </li>
  <li className="color-gray">
    <Link href="/blog" className="cursor-pointer">Blog</Link>
  </li>
  <li className="color-gray">
    <Link href="/contact" className="cursor-pointer">Contact Us</Link>
  </li>
</ul>
      </div>
    </div>
  );
};

const ServicesChildren = () => {
  return (
    <div className="col-span-4 grid grid-cols-3">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Mobile Development</h2>
        <ul className="space-y-2">
          <li className="color-gray">
            <Link href="/angularjs-development" className="cursor-pointer">
              Angular JS Development
            </Link>
          </li>
          <li className="color-gray">
            <Link href="/reactjsdevelopment" className="cursor-pointer">
              React JS Development
            </Link>
          </li>
          <li className="color-gray">
            <Link href="/nodejs-development" className="cursor-pointer">
              Node JS Development
            </Link>
          </li>
          <li className="color-gray">
            <Link href="" className="cursor-pointer">
              Vue JS Development
            </Link>
          </li>
          <li className="color-gray">
            <Link href="/mean-development" className="cursor-pointer">
              MEAN Development
            </Link>
          </li>
          <li className="color-gray">
            <Link href="/mern-development" className="cursor-pointer">
              MERN Development
            </Link>
          </li>
          <li className="color-gray">
            <Link href="/lamp-development" className="cursor-pointer">
              LAMP Development
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Web Development</h2>
        <ul className="space-y-2">
          <li className="color-gray">
            <Link href="/ios-app-development" className="cursor-pointer">
              iOS App Development
            </Link>
          </li>
          <li className="color-gray">
            <Link href="/android-app-development" className="cursor-pointer">
              Android App Development
            </Link>
          </li>
          <li className="color-gray">
            <Link href="/react-native-development" className="cursor-pointer">
              React Native App Development
            </Link>
          </li>
          <li className="color-gray">
            <Link href="/flutter-app-development" className="cursor-pointer">
              Flutter App Development
            </Link>
          </li>
          <li className="color-gray">
            <Link href="/swift-app-development" className="cursor-pointer">
              Swift App Development
            </Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Hire Dedicated Developer</h2>
        <ul className="space-y-2">
          <li className="color-gray">
            <Link href="" className="cursor-pointer">
              Hire Angular JS Developer
            </Link>
          </li>
          <li className="color-gray">
            <Link href="" className="cursor-pointer">
              React JS Developer
            </Link>
          </li>
          <li className="color-gray">
            <Link href="" className="cursor-pointer">
              Node JS Developer
            </Link>
          </li>
          <li className="color-gray">
            <Link href="" className="cursor-pointer">
              Vue Js Developer
            </Link>
          </li>
          <li className="color-gray">
            <Link href="" className="cursor-pointer">
              MEAN Developer
            </Link>
          </li>
          <li className="color-gray">
            <Link href="" className="cursor-pointer">
              MERN Developer
            </Link>
          </li>
          <li className="color-gray">
            <Link href="" className="cursor-pointer">
              LAMP Developer
            </Link>
          </li>
          <li className="color-gray">
            <Link href="" className="cursor-pointer">
              Flutter app development
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Solution = () => {
  return (
    <div className="col-span-4 grid grid-cols-1">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Solution</h2>
        <ul className="space-y-2">
  <li className="color-gray">
    <Link href="" className="cursor-pointer">Custom Software Development</Link>
  </li>
  <li className="color-gray">
    <Link href="" className="cursor-pointer">NFT Marketplace</Link>
  </li>
  <li className="color-gray">
    <Link href="" className="cursor-pointer">Blockchain Solution</Link>
  </li>
  <li className="color-gray">
    <Link href="" className="cursor-pointer">Metaverse Application</Link>
  </li>
  <li className="color-gray">
    <Link href="" className="cursor-pointer">Accounting Application</Link>
  </li>
  <li className="color-gray">
    <Link href="" className="cursor-pointer">Sports Betting Platform</Link>
  </li>
  <li className="color-gray">
    <Link href="" className="cursor-pointer">Custom Fantasy Sports Solution</Link>
  </li>
  <li className="color-gray">
    <Link href="" className="cursor-pointer">Social Media Applications</Link>
  </li>
  <li className="color-gray">
    <Link href="" className="cursor-pointer">Online Learning Solutions</Link>
  </li>
</ul>
      </div>
     
    </div>
  );
};
export default Header;