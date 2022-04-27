import Image from "next/image";
import HomeButton from "../buttons/HomeButton";

export default function KeepInTouch() {
    return (
        <div className="lg:p-10 mobile-padding grid lg:grid-cols-2 grid-cols-1">
            <div className="flex flex-col space-y-8">
                <div className="relative h-[100px] w-full lg:w-1/2">
                    <Image src={'/images/keepInTouch.svg'} layout="fill" objectFit="contain"></Image>
                </div>
                <h2 className="text-heading-1 Gilroy-Bold leading-normal w-4/5">Have an idea? <br /> Get in touch, we’d be <br/> happy to hear from you</h2>
                <p className="2xl:text-2xl xl:text-xl text-lg Gilroy-Light leading-normal w-4/5">We are always looking out for new collaborations, whether you are a client who is passionate about a project or a talent who is interested in joining our team, our doors are always open.</p>
            </div>
            <div className="flex lg:justify-end justify-start ">
                <div className="flex flex-col xl:space-y-8 space-y-6 pt-20 w-full lg:w-4/5">
                    <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]" placeholder="You should have a name"></input>
                    <div className="flex lg:flex-row flex-col xl:space-x-8 lg:space-x-6 lg:space-y-0 space-y-6">
                        <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] flex-1 placeholder-[#ffffffd7]" placeholder="Obviously, an email"></input>
                        <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] flex-1 placeholder-[#ffffffd7]" placeholder="Your contact number"></input>            
                    </div>
                    <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]" placeholder="What’s your company name?"></input>
                    <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]" placeholder="Tell us, Everything!"></input>
                    <HomeButton><span className="text-xl">Submit</span></HomeButton>
                </div>
            </div>
        </div>
    )
}