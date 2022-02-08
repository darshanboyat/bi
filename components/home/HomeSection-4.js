import HomeButton from "../buttons/HomeButton";

const info = [
    {   
        id: 1,
        title: {
            orange: 'Web',
            white: 'Development'
        },
        techList: [
            {
                name: 'php',
                path: ''
            },
            {
                name: 'react.js',
                path: ''
            },
            {
                name: 'wordpress',
                path: ''
            }
        ]
    },
    {   
        id: 2,
        title: {
            orange: 'Mobile',
            white: 'Development'
        },
        techList: [
            {
                name: 'android native',
                path: ''
            },
            {
                name: 'ios native',
                path: ''
            },
            {
                name: 'react.native',
                path: ''
            }
        ]
    },
    {   
        id: 3,
        title: {
            orange: 'UI/UX',
            white: 'Design'
        },
        techList: [
            {
                name: 'product design',
                path: ''
            },
            {
                name: 'research',
                path: ''
            },
            {
                name: 'consulting',
                path: ''
            }
        ]
    }
]

const HomeSectionFour = () => {
    return (
        <div className="relative h-[300vh]">
            <div className="absolute h-[200vh] w-full">
                <div className="sticky top-0 z-40">
                    <div className="absolute w-full top-0 z-40 bg-black p-10">
                        <p className="text-6xl Gilroy-Bold mb-8 mt-16">what are you looking up-to?</p>
                        <p className="text-2xl Gilroy-Light leading-loose">Mobile app development indeed nowadays necessary for all the business. We, as a mobile application development company can provide high quality standard mobile app of any category. We have worked with diverse brands, organizations, start-ups and individuals to create powerful apps from excellent idea.</p>
                        <div className="w-1/2">
                        </div>
                        <div className="w-1/2 flex"></div>
                    </div>
                </div>
                {
                    info.map((el) => {
                        return (
                            <Section key={el.id} info={el}></Section>
                        )
                    })
                }
            </div>
        </div>
    )
}

const Section = ({info}) => {
    return (
        <div className="h-screen relative ">
            <div className="absolute w-full bottom-20 p-10 space-y-16">
                <p className="text-5xl Gilroy-Bold mb-8"><span className="text-base-orange-1">{info.title.orange}</span> {info.title.white}</p>
                <ul className="text-2xl space-y-4">
                    {
                        info.techList.map((el) => {
                            return (<li key={el.name}>{el.name}</li>)
                        })
                    }
                </ul>
                <HomeButton>learn more</HomeButton>
            </div>
        </div>
    )
}

export default HomeSectionFour;