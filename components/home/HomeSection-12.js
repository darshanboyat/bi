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
        <div className="space-y-6 p-10">
            <h1 className="2xl:text-5xl lg:text-4xl text-3xl pt-20 Gilroy-Bold">we crafted it for you</h1>
            <h3 className="2xl:text-2xl text-xl Gilroy-Light">We believe in going the extra mile and thus we tend to not only over-deliver, but exceed expectations!</h3>
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
                        <span key={el.id} onClick={() => intoView(el.id)} className="bg-white p-2 rounded-full"></span>
                    ))
                }
            </div>
            <div className="grid grid-cols-4 gap-10">
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
        <div className="flex flex-col p-5 border border-blue bg-base-blue-2 space-y-4 min-h-[350px]">
            <p className="text-center text-xl">{info.feedback}</p>
            <h3 className="text-center text-2xl Gilroy-Bold">{info.name}</h3>
            <h4 className="text-center text-xl Gilroy-Light">{info.designation}</h4>
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



