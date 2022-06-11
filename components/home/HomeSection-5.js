import { AnimationOnScroll } from "react-animation-on-scroll";

const HomeSectionFive = () => {
    return (
        <div className=" relative flex flex-col p-10">
            <div className="container padding-left-all-section">
          
            <p className="text-heading-1 Gilroy-Bold mb-8">our forte</p>
         
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 2xl:gap-20 gap-8 flex-1">
          
                <div className="relative ">
                   <img src='/images/forte-1.png' className="w-full"></img>
                   <div className="mt-2">
                      <h1 className="Gilroy-Bold text-white text-xl text-stroke-forte">NFT</h1>
                   </div>
                </div>
         
        
                <div className="relative ">
                <img src='/images/forte-6.png' className="w-full"></img>
                <div className="mt-2">
                <h1 className="Gilroy-Bold text-white text-xl text-stroke-forte">Blockchain</h1>
                   </div>
                </div>
         
                <div className="relative">
                <img src='/images/forte-5.png' className="w-full"></img>
                <div className="mt-2">
                <h1 className="Gilroy-Bold text-white text-xl text-stroke-forte">Metaverse</h1>
                   </div>
                </div>
         
                <div className="relative">
                <img src='/images/forte-3.png' className="w-full"></img>
                <div className="mt-2">
                <h1 className="Gilroy-Bold text-white text-xl text-stroke-forte">Sports Betting Solutions</h1>
                   </div>
                </div>
         
                <div className="relative">
                <img src='/images/forte-4.png' className="w-full"></img>
                <div className="mt-2">
                <h1 className="Gilroy-Bold text-white text-xl text-stroke-forte">Custom Social Networks</h1>
                   </div>
                </div>
         
                <div className="relative">
                <img src='/images/forte-2.png' className="w-full"></img>
                <div className="mt-2">
                <h1 className="Gilroy-Bold text-white text-xl text-stroke-forte">elearning & LMS</h1>
                   </div>
                </div>
         
             
            </div>

            </div>
        </div>
    )
}

export default HomeSectionFive;