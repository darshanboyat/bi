import HomeButton from "../buttons/HomeButton";
import Image from "next/image";
import Link from 'next/link'

import { AnimationOnScroll } from "react-animation-on-scroll";

const logos = [
    'logo8', 'logo7', 'logo3', 'logo5', 'logo4', 'logo1', 'logo6', 'logo2'
]

const HomeSectionEleven = () => {
    return (
        <div className="2xl:p-10 p-8 2xl:space-y-10 xl:space-y-8 space-y-6 flex flex-col justify-center">
            <div className="container padding-left-all-section">   
               
            <h1 className="text-heading-1 2xl:pt-20 xl:pt-16 pt-14 2xl:pb-10 pb-8 Gilroy-Bold">we&apos;d love to add your logo here.</h1>
          
            <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 2xl:gap-20 xl:gap-12 gap-12">
                {
                    logos.map((el) => (
                        <div key={el} className="border border-blue h-40 2xl:p-12 lg:p-10 p-4">
                            <div className="relative h-full">
                                <Image src={'/images/' + el+'.svg'} layout='fill'></Image>
                            </div>
                        </div>
                    ))
                }
            </div>
               

            <div className="mt-6">
                <Link href="/portfolio">
            <button className="inline-flex items-center bg-transparent transition-all hover-bg-yellow-h">
            <span className="2xl:w-14 lg:w-12 w-10 2xl:h-14 color-hover lg:h-12 h-10 transition-all relative bg-base-blue-1 rounded-full mr-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="2xl:h-10 transition-all lg:h-8 h-6 2xl:w-10 lg:w-8 w-6 absolute -left-1 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>
            <span className="2xl:text-2xl text-xl transition-all">we have more!</span>
        </button>
                </Link>

            </div>
          

            </div>
        </div>
    );
}

export default HomeSectionEleven;