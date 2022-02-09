import Image from "next/image"

const locations = [
    {
        placeName: 'India (HQ)',
        address: '618, Shekhar Central, Palasia Square, A.B Road, Indore, Madhya Pradesh, 452001 +918109561401',
        image: 'india.svg'
    },
    {
        placeName: 'United Kingdom',
        address: 'Brain Inventory, SBVS, 8 Roundhay Road, Leeds, UK, LS7 1AB +18008209286',
        image: 'unitedKindom.svg'
    },
    {
        placeName: 'Canada',
        address: '44 Main Street East Milton, ONCanada L9T 1N3 +4166696505',
        image: 'canada.svg'
    },
    {
        placeName: 'Jordan',
        address: '185 Wasfi Al-Tal Street, Ammon Oasis Complex P.O Box 4724 Amman 11953 Jordan +962790961000',
        image: 'canada.svg'
    }
]

export default function LocateUs() {
    return (
        <div className="py-32 px-10">
            <div className="2xl:py-20 py-12 2xl:px-28 lg:px-16 border border-blue bg-base-blue-2 space-y-8">
                <h2 className="text-6xl Gilroy-Bold">locate us</h2>
                <div className="grid xl:grid-cols-4 grid-cols-2 2xl:gap-8 gap-4">
                    {
                        locations.map((el) => {
                            return (<Card key={el.placeName} info={el} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const Card = ({info}) => {
    return (
        <div className="grid grid-cols-2 gap-2">
            <div className="relative place-self-center">
                <Image src={'/images/' + info.image} width={138} height={167} ></Image>
            </div>
            <div className="flex flex-col">
                <h3 className="text-xl Gilroy-Bold">{info.placeName}</h3>
                <p className="">{info.address}</p>
            </div>
        </div>
    )
}