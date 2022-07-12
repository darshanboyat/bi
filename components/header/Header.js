import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';


const Header = () => {
  const config = {
    companyChildren: CompanyChildren,
    servicesChildren: ServicesChildren,
  };
  const [navOpen, setNavOpen] = useState(false);
  const [blockName, setBlockName] = useState("companyChildren");
  let Block = config.companyChildren;
  useEffect(() => {
    Block = React.createElement(config[blockName]);
  }, [blockName]);
  useEffect(() => {
    navOpen
      ? document.getElementById("sidenav").classList.remove("-translate-y-full")
      : document.getElementById("sidenav").classList.add("-translate-y-full");
  }, [navOpen]);

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
                  <Image src={"/images/" + "Logobg.png"} className="cursor-pointer" alt="it service company offers web and app design and development" layout="fill" />
                </div>
              )}
            </span>
          </Link>
          <div className="dropdown dropdown-hover">
            <label className="btn bg-transparent outline-none border-0 hover:bg-transparent m-1">
              <div className="flex justify-between align-middle items-center bg-case-blue-request h-11 z-[100]">
                <p className="px-4 text-xs Gilroy-Light lowercase">
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
            <ul className="dropdown-content mt-0 ml-5 bg-base-blue-1 p-2 shadow bg-base-100 w-[168px]">
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
            </ul>
          </div>

          {/* {
                    navOpen
                    ? (
                        <span onClick={() => {setNavOpen(false)}} className="2xl:p-4 p-3 bg-white text-black z-[100]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="2xl:h-8 xl:h-6 h-4 2xl:w-8 xl:w-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                    ) 
                    : (
                        <span onClick={() => {setNavOpen(true)}} className="bg-base-blue-1 text-white 2xl:p-4 p-3 z-[100]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="2xl:h-8 xl:h-6 h-4 2xl:w-8 xl:w-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </span>
                    )
                } */}
        </div>
        <div
          id="sidenav"
          className="fixed inset-0 overflow-hidden bg-gradient-4 z-40 transition-transform duration-300 flex gap-10"
        >
          <div className="grid grid-cols-5 gap-10 px-8 py-16 lg:px-28 lg:py-24 w-full">
            <div className="space-y-12 col-span-1">
              <h1 className="stroke-text text-5xl Gilroy-Bold">Company</h1>
              <h3
                onClick={() => {
                  setBlockName("servicesChildren");
                }}
                className="stroke-text text-5xl Gilroy-Bold"
              >
                Services
              </h3>
              <h3 className="stroke-text text-5xl Gilroy-Bold">Forte</h3>
              <h3 className="stroke-text text-5xl Gilroy-Bold">Portfolio</h3>
              <h3 className="stroke-text text-5xl Gilroy-Bold">Blog</h3>
              <h3 className="stroke-text text-5xl Gilroy-Bold">Contacts</h3>
            </div>
            <Block></Block>
          </div>
        </div>
      </nav>
    </>
  );
};

const CompanyChildren = () => {
  return (
    <div className="col-span-4 grid grid-cols-3">
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">About Us</h2>
        <ul className="space-y-2 text-xl">
          <li>Company Overview</li>
          <li>Career</li>
          <li>Contact Us</li>
          <li>How we work</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl Gilroy-Bold">About Us</h3>
        <ul className="space-y-2 text-xl list-inside list-disc">
          <li>Company Overview</li>
          <li>Career</li>
          <li>Contact Us</li>
          <li>How we work</li>
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
        <ul className="space-y-2 text-xl">
          <li>Company Overview</li>
          <li>Career</li>
          <li>Contact Us</li>
          <li>How we work</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl Gilroy-Bold">Web Development</h2>
        <ul className="space-y-2 text-xl list-inside list-disc">
          <li>Company Overview</li>
          <li>Career</li>
          <li>Contact Us</li>
          <li>How we work</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
