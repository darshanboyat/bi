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
        <div className="relative h-[250vh]">
            <div className="absolute h-[150vh] w-full snap-y snap-mandatory">
                <div className="sticky top-0 z-40">
                    <div className="absolute w-full top-0 z-40 bg-black p-10">
                        <p className="2xl:text-6xl xl:text-5xl text-4xl Gilroy-Bold mb-8 2xl:mt-16 xl:mt-14 mt-12">what are you looking up-to?</p>
                        <p className="2xl:text-2xl xl:text-xl text-lg Gilroy-Light leading-loose">Mobile app development indeed nowadays necessary for all the business. We, as a mobile application development company can provide high quality standard mobile app of any category. We have worked with diverse brands, organizations, start-ups and individuals to create powerful apps from excellent idea.</p>
                    </div>
                </div>
                <div className="h-[25vh]"></div>
                {
                    info.map((el) => {
                        return (
                            <Section className='snap-start' key={el.id} info={el}></Section>
                        )
                    })
                }
            </div>
        </div>
    )
}

const Section = ({info}) => {
    return (
        <div className="h-[75vh] relative">
            <div className="absolute w-full 2xl:bottom-20 xl:bottom-16 lg:bottom-14 bottom-12 p-10  flex items-center justify-between">
                <div className="flex-col flex 2xl:space-y-16 xl:space-y-12 space-y-8">
                    <p className="2xl:text-5xl xl:text-4xl text-3xl Gilroy-Bold 2xl:mb-8 xl:mb-6 mb-4"><span className="text-base-orange-1">{info.title.orange}</span> {info.title.white}</p>
                    <ul className="2xl:text-2xl xl:text-xl text-lg 2xl:space-y-4 space-y-2">
                        {
                            info.techList.map((el) => {
                                return (<li key={el.name}>{el.name}</li>)
                            })
                        }
                    </ul>
                    <HomeButton>learn more</HomeButton>
                </div>
                <div className="w-1/2">
                    <div className="h-[450px] w-full border border-blue bg-base-blue-2 p-8"></div>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionFour;