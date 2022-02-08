import HomeButton from "../buttons/HomeButton";
import Image from "next/image";
const logos = [
    'logo1', 'logo2', 'logo3', 'logo4', 'logo5', 'logo6', 'logo7', 'logo8'
]

const HomeSectionEleven = () => {
    return (
        <div className="lg:h-screen p-10 space-y-10 flex flex-col justify-center">
            <h1 className="2xl:text-5xl lg:text-4xl text-3xl pt-20 pb-10 Gilroy-Bold">we&apos;d love to add your logo here.</h1>
            <div className="grid grid-cols-4 gap-20 flex-1">
                {
                    logos.map((el) => (
                        <div key={el} className="border max-h-60 p-5">
                            <div className="relative h-full">
                                <Image src={'/images/' + el+'.svg'} layout='fill'></Image>
                            </div>
                        </div>
                    ))
                }
            </div>
            <HomeButton>we have more!</HomeButton>
        </div>
    );
}

export default HomeSectionEleven;