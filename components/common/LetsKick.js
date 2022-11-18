import HomeButton from "../buttons/HomeButton";
import Link from 'next/link';


export default function LetsKick() {
    return (
        <div className="2xl:p-10 p-8 2xl:py-20 py-14">
            <div className="container padding-left-all-section">
            <div className="lg:flex justify-between">
                <div className="2xl:space-y-6 space-y-4">
                  
                      <h2 className="text-heading-1 Gilroy-Bold">let&apos;s kick some ass together</h2>
                    
              

                  <Link
                  href="/career"
                  className="text-white block cursor-pointer hover:bg-case-blue-request"
                >
                  <button className="inline-flex items-center bg-transparent transition-all hover-bg-yellow-h">
            <span className="2xl:w-14 lg:w-12 w-10 2xl:h-14 color-hover lg:h-12 h-10 transition-all relative bg-base-blue-1 rounded-full mr-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="2xl:h-10 transition-all lg:h-8 h-6 2xl:w-10 lg:w-8 w-6 absolute -left-1 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>
            <span className="2xl:text-2xl text-xl transition-all">hop in!</span>
        </button>
                </Link>
                  
                  
                </div>
                <div className="flex flex-col space-y-4">
                  
                    <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="text-lg">career@braininventory.com</span>
                
                    </div>
          
                 
                    <div className="flex items-center space-x-4">
               
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg">+917722885755</span>
                    </div>
                </div>
            </div>
            <div className="2xl:py-20 py-14">
            
               
                <div className="flex justify-center">
                    <h1 className="xl:text-[6rem] 2xl:text-[6rem] lg:text-6xl md:text-6xl text-5xl Gilroy-Bold underline-offset-[10px] decoration-4">
                        <span className="stroke-text mr-2">if it&apos;s digital,</span>
                        <span className="">we&apos;ll make it.</span>
                    </h1>
                </div>
                    
            </div>
            </div>
        </div>
    )
}