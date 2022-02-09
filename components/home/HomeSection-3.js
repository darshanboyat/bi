import HomeButton from "../buttons/HomeButton";

const HomeSectionThree = () => {
    return (
        <div className="h-screen flex items-end">
            <div className="w-3/5 p-10 pr-0 2xl:pb-16 xl:pb-12 pb-10 2xl:space-y-20 xl:space-y-16 space-y-12">
                <p className="text-heading-2 Gilroy-Bold">work that make you say woww!</p>
                <div className="flex justify-between 2xl:space-y-15 xl:space-y-12 space-y-10">
                    <div className="flex flex-col 2xl:space-y-20 xl:space-y-16 space-y-12">
                        <p className="text-heading-4 leading-loose">Namaste! here you can discover who we are, how we work and what we love. We approach all our projects with our 4 core values:</p>
                        <HomeButton>see our concepts</HomeButton>
                    </div>
                    <img src='/images/HomeSectionThree.png' className="w-[40%]"></img>
                </div>
            </div>
            <div className="w-2/5 grid grid-cols-2 2xl:gap-16 xl:gap-10 gap-10 2xl:p-16 xl:p-14 p-12 pb-16 2xl:h-[85%] h-[90%]">
                <Box title='focus' textColor='black' color='orange' summary='We always have our eye on the prize'></Box>
                <Box title='passion' color='blue' summary='We love to develop amazing stuff.'></Box>
                <Box title='creativity' color='blue' summary='We all are about the creative vision.'></Box>
                <Box title='community' color='orange' summary='Our doors are always open to everyone.'></Box>
            </div>
        </div>
    )
}

const Box = ({title, summary, color, textColor}) => (
    <div className={'bg-base-'+color+'-1'+' 2xl:p-8 xl:p-6 p-4 overflow-x-hidden relative group' + ' text-'+ textColor}>
        <p className="2xl:text-7xl text-6xl Gilroy-Bold stroke-text-2 translate-x-28 group-hover:-translate-x-full transition-transform ease-linear duration-[4000ms]">{title}</p>
        <div className= "absolute xl:bottom-5 bottom-3 pr-8">
            <p className="uppercase 2xl:text-3xl xl:text-2xl text-xl 2xl:mb-4 mb-2 Gilroy-SemiBold">{title}</p>
            <p className="xl:text-lg text-base Gilroy-Light">{summary}</p>
        </div>
    </div>
)

export default HomeSectionThree;