import Image from "next/image"


const testimonials = [
    {
        type: 'image',
        image: 'testing.png'
    },
    {
        type: 'feedback',
        name: 'Krishna',
        designation: 'Project Manager',
        feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        type: 'image',
        image: 'testing.png'
    },
    {
        type: 'feedback',
        name: 'Shivani',
        designation: 'Project Manager',
        feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        type: 'image',
        image: 'testing.png'
    },
    {
        type: 'feedback',
        name: 'Sidra',
        designation: 'Project Manager',
        feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        type: 'image',
        image: 'testing.png'
    },
    {
        type: 'feedback',
        name: 'Puneet',
        designation: 'Project Manager',
        feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
]

const videoFeedbacks = [
    {
        type: 'feedback',
        id: 'video1',
        name: 'Krishna',
        designation: 'Project Manager',
        feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        type: 'feedback',
        id: 'video2',
        name: 'Krishna',
        designation: 'Project Manager',
        feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        type: 'feedback',
        id: 'video3',
        name: 'Krishna',
        designation: 'Project Manager',
        feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    }
]


const HomeSectionTwelwe = () => {

    const intoView = (id) => {
        const sections = document.getElementById('sections');
        const left = document.getElementById(id).getBoundingClientRect().left;
        sections.scrollTo({
            behavior: 'smooth',
            left
        })
    }
    return (
        <div className="2xl:space-y-6 space-y-4 2xl:p-10 p-8">
            <h1 className="text-heading-1 pt-20 Gilroy-Bold">we crafted it for you</h1>
            <h3 className="2xl:text-2xl xl:text-xl text-lg Gilroy-Light">We believe in going the extra mile and thus we tend to not only over-deliver, but exceed expectations!</h3>
            <div id='sections' className="snap-x snap-mandatory overflow-x-auto flex no-scrollbar">
                {
                    videoFeedbacks.map((el) => (
                        <div id={el.id} key={el.id} className="flex bg-opacity-50 snap-start w-full flex-shrink-0">
                            <div className="w-1/2 bg-base-blue-2"></div>
                            <div className="w-1/2">
                                <FeedbackBox info={el} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center w-full justify-center space-x-4">
                {
                    videoFeedbacks.map((el) => (
                        <span key={el.id} onClick={() => intoView(el.id)} className="bg-white p-1 rounded-full"></span>
                    ))
                }
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 2xl:gap-10 gap-8">
                {
                    testimonials.map((el, index) => {
                        return el.type === 'image' ? (<ImageBox key={index} info={el} />) : (<FeedbackBox  key={index} info={el} />)
                    })
                }
            </div>
        </div>
    )
}

const FeedbackBox = ({info}) => {
    return (
        <div className="flex flex-col 2xl:p-5 p-4 justify-center items-center border border-blue bg-base-blue-2 2xl:space-y-4 space-y-2 h-[35vh] overflow-y-auto no-scrollbar">
            <div className="relative xl:h-12 w-full">
                <Image  src={'/images/comma.svg'} layout="fill"/>
            </div>
            <p className="text-center text-base pt-4">{info.feedback}</p>
            <h3 className="text-center text-lg Gilroy-Bold">{info.name}</h3>
            <h4 className="text-center text-base Gilroy-Light">{info.designation}</h4>
        </div>
    )
}

const ImageBox = ({info}) => {
    return (
        <div className="relative">
            <Image src={'/images/' + info.image} layout="fill" objectFit="cover" />
        </div>
    )
}

export default HomeSectionTwelwe;



