import HomeButton from "../buttons/HomeButton";

const HomeSectionThree = () => {
    return (
        <div className="h-screen flex items-end">
            <div className="w-3/5 p-10 pr-0 pb-16 space-y-20">
                <p className="text-6xl Gilroy-Bold">work that make you say woww!</p>
                <div className="flex justify-between space-x-16">
                    <div className="flex flex-col space-y-20">
                        <p className="text-2xl leading-loose">Namaste! here you can discover who we are, how we work and what we love. We approach all our projects with our 4 core values:</p>
                        <HomeButton>see our concepts</HomeButton>
                    </div>
                    <img src='/images/HomeSectionThree.png' className="w-[40%]"></img>
                </div>
            </div>
            <div className="w-2/5 grid grid-cols-2 gap-16 p-16 pb-16 h-[85%]">
                <Box title='focus' textColor='black' color='orange' summary='We always have our eye on the prize'></Box>
                <Box title='passion' color='blue' summary='We love to develop amazing stuff.'></Box>
                <Box title='creativity' color='blue' summary='We all are about the creative vision.'></Box>
                <Box title='community' color='orange' summary='Our doors are always open to everyone.'></Box>
            </div>
        </div>
    )
}

const Box = ({title, summary, color, textColor}) => (
    <div className={'bg-base-'+color+'-1'+' p-8 overflow-x-hidden relative group' + ' text-'+ textColor}>
        <p className="text-8xl Gilroy-Bold stroke-text-2 translate-x-28 group-hover:-translate-x-full transition-transform duration-[4000ms]">{title}</p>
        <div className= "absolute bottom-5 pr-8">
            <p className="uppercase text-3xl mb-4 Gilroy-SemiBold">{title}</p>
            <p className="text-lg Gilroy-Light">{summary}</p>
        </div>
    </div>
)

export default HomeSectionThree;