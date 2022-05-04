import Image from "next/image"
import { AnimationOnScroll } from "react-animation-on-scroll";

const locations = [
    {
        placeName: 'India (HQ)',
        address: '618, Shekhar Central, Palasia Square, A.B Road, Indore, Madhya Pradesh, 452001',
        image: 'india.svg',
        phone: '+918109561401',
    },
    {
        placeName: 'United Kingdom',
        address: 'Brain Inventory, SBVS, 8 Roundhay Road, Leeds, UK, LS7 1AB',
        image: 'unitedKindom.svg',
        phone: '+18008209286',
    },
    {
        placeName: 'Canada',
        address: '44 Main Street East Milton, ONCanada L9T 1N3',
        image: 'canada.svg',
        phone: '+4166696505',
    },
    {
        placeName: 'Jordan',
        address: '185 Wasfi Al-Tal Street, Ammon Oasis Complex P.O Box 4724 Amman 11953 Jordan ',
        phone: '+962790961000',
        image: 'canada.svg'
    }
]

export default function LocateUs() {
    
    return (
        <div className="2xl:py-32 xl:py-28 py-24 2xl:px-10 lg:px-8 mobile-padding">
            <div className="container">
            <div className="2xl:py-20 py-12 2xl:px-28 lg:px-16 border border-blue bg-base-blue-2 2xl:space-y-8 xl:space-y-6 space-y-4">
            <AnimationOnScroll delay={100} animateIn="animate__fadeInUp">
                <h2 className="text-heading-1 Gilroy-Bold mobile-padding">locate us</h2>
                    </AnimationOnScroll>
                <div className="lg:grid xl:grid-cols-4 grid-cols-2 2xl:gap-8 gap-4">
                    {
                        locations.map((el) => {
                            return (<Card key={el.placeName} info={el} />)
                        })
                    }
                </div>
            </div>
        </div>
         </div>
    )
}

const Card = ({info}) => {
    return (
        <>
         <AnimationOnScroll delay={100} animateIn="animate__fadeInUp">
            <div className="grid grid-cols-2 gap-2 mb-6 items-start">
                <div className="relative place-self-center">
                    <Image src={'/images/' + info.image} width={138} height={167} ></Image>
                </div>
                <div className="flex flex-col">
                    <h3 className="2xl:text-xl text-lg Gilroy-Bold">{info.placeName}</h3>
                    <p className="2xl:text-base text-[11px]">{info.address}</p>
                    <p className="2xl:text-base text-sm mt-2">{info.phone}</p>
                </div>
            </div>
          </AnimationOnScroll>
        </>
    )
}