import HomeButton from "../buttons/HomeButton";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

const logos = [
    'logo1', 'logo2', 'logo3', 'logo4', 'logo5', 'logo6', 'logo7', 'logo8'
]

const HomeSectionEleven = () => {
    return (
        <div className="2xl:p-10 p-8 2xl:space-y-10 xl:space-y-8 space-y-6 flex flex-col justify-center">
            <div className="container">   
            <AnimationOnScroll animateIn="animate__fadeInUp">     
            <h1 className="text-heading-1 2xl:pt-20 xl:pt-16 pt-14 2xl:pb-10 pb-8 Gilroy-Bold">we&apos;d love to add your logo here.</h1>
            </AnimationOnScroll>
            <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 2xl:gap-20 xl:gap-12 gap-12">
                {
                    logos.map((el) => (
                        <AnimationOnScroll duration={el.duration} animateIn="animate__fadeInUp">     
                        <div key={el} className="border border-blue 2xl:h-60 xl:h-52 lg:h-48 h-36 2xl:p-12 lg:p-10 p-4">
                            <div className="relative h-full">
                                <Image src={'/images/' + el+'.svg'} layout='fill'></Image>
                            </div>
                        </div>
                        </AnimationOnScroll>
            
                    ))
                }
            </div>
            <AnimationOnScroll animateIn="animate__fadeInUp">     

            <div className="mt-6">
            <HomeButton>we have more!</HomeButton>
            </div>
            </AnimationOnScroll>

            </div>
        </div>
    );
}

export default HomeSectionEleven;