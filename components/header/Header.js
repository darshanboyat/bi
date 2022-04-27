import React, { useEffect, useState } from "react"
import Image from "next/image";

const Header = () => {
    const config = {
        companyChildren: CompanyChildren,
        servicesChildren: ServicesChildren
    }
    const [navOpen, setNavOpen] = useState(false);
    const [blockName, setBlockName] = useState('companyChildren');
    let Block = config.companyChildren;
    useEffect(() => {
        Block = React.createElement(config[blockName]);
    }, [blockName])
    useEffect(() => {
        navOpen
        ? document.getElementById('sidenav').classList.remove('-translate-y-full')
        : document.getElementById('sidenav').classList.add('-translate-y-full')
    }, [navOpen])

    return (
        <nav>
            <div className="fixed top-0 flex justify-between items-center w-full py-3 px-3  lg:py-10 lg:px-8 z-50">
                
                <span className="text-4xl Gilroy-Bold z-30">
                 { !navOpen &&
                 <div className="relative w-52 h-16">
                    <Image src={'/images/' + 'Logobg.png' }  layout="fill"/>
                 </div>
                 }
                </span>
                {
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
                }
            </div>
            <div id='sidenav' className="fixed inset-0 overflow-hidden bg-gradient-4 z-40 transition-transform duration-300 flex gap-10">
                <div className="grid grid-cols-5 gap-10 px-8 py-16 lg:px-28 lg:py-24 w-full">
                    <div className="space-y-12 col-span-1">
                        <h1 className="stroke-text text-5xl Gilroy-Bold">Company</h1>
                        <h1 onClick={() => {setBlockName('servicesChildren')}} className="stroke-text text-5xl Gilroy-Bold">Services</h1>
                        <h1 className="stroke-text text-5xl Gilroy-Bold">Forte</h1>
                        <h1 className="stroke-text text-5xl Gilroy-Bold">Portfolio</h1>
                        <h1 className="stroke-text text-5xl Gilroy-Bold">Blog</h1>
                        <h1 className="stroke-text text-5xl Gilroy-Bold">Contacts</h1>
                    </div>
                    <Block></Block>
                </div>
            </div>
        </nav>
    )
}

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
                <h2 className="text-2xl Gilroy-Bold">About Us</h2>
                <ul className="space-y-2 text-xl list-inside list-disc">
                    <li>Company Overview</li>
                    <li>Career</li>
                    <li>Contact Us</li>
                    <li>How we work</li>
                </ul>
            </div>
        </div>
    )
}

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
    )
}

export default Header