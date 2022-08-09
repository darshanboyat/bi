import HomeButton from "../buttons/HomeButton";
import Link from 'next/link';


const HomeSectionThree = () => {
    return (
            <div className="container padding-left-all-section">
        <div className=" lg:flex items-start pt-12">
            <div className="w-full p-6 lg:p-10 pr-0 2xl:pb-16 xl:pb-12 pb-10 2xl:space-y-20 xl:space-y-16 space-y-12">
                <p className="text-heading-2 Gilroy-Bold lg:whitespace-nowrap">work that make you say woww!</p>
                <div className="lg:flex justify-between 2xl:space-y-15 xl:space-y-12 space-y-10">
                    <div className="lg:flex 2xl:space-y-20 xl:space-y-16 space-y-12">
                        <div>
                        <p className="text-heading-4 leading-loose mb-4">Namaste! here you can discover who we are, how we work and what we love. We approach all our projects with our 4 core values:</p>
                        <Link href="/portfolio">
                        <button className="inline-flex items-center bg-transparent transition-all hover-bg-yellow-h">
            <span className="2xl:w-14 lg:w-12 w-10 2xl:h-14 color-hover lg:h-12 h-10 transition-all relative bg-base-blue-1 rounded-full mr-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="2xl:h-10 transition-all lg:h-8 h-6 2xl:w-10 lg:w-8 w-6 absolute -left-1 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>
            <span className="2xl:text-2xl text-xl transition-all">see our concepts</span>
        </button>
                        </Link>
                        </div>
                        <div className="md:space-y-0 mt-0" style={{marginTop: '0px'}}>
                        <video src="/videos/squen.mp4" className="md:w-full w-[94%]" muted loop controls={false} autoPlay={true} />

                    {/* <img src='/images/HomeSectionThree.png' className="ml-10 w-[1200px]"></img> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-[80%] w-full lg:grid grid-cols-2 2xl:gap-4 xl:gap-4 gap-4 2xl:py-4 xl:py-14 py-6 lg:py-12 pb-16 2xl:h-[85%] h-[90%]">
                <Box title='focus' textColor='black' color='orange' summary='We always have our eye on the prize'></Box>
                <Box title='passion' color='blue' summary='We love to develop amazing stuff.'></Box>
                <Box title='creativity' color='blue' summary='We all are about the creative vision.'></Box>
                <Box title='community' color='orange' summary='Our doors are always open to everyone.'></Box>
            </div>
            </div>
        </div>
    )
}

const Box = ({title, summary, color, textColor}) => (
    <div className={'bg-base-'+color+'-1'+' 2xl:p-8 xl:p-6 p-4 h-48 mb-4 lg:h-[18rem] 3xl:h-[16rem] overflow-x-hidden relative group' + ' text-'+ textColor}>
        <p className="2xl:text-7xl xl:text-7xl text-6xl Gilroy-Bold stroke-text-2 md:translate-x-28 translate-x-18 group-hover:-translate-x-full transition-transform ease-linear duration-[4000ms]">{title}</p>
        <div className= "absolute xl:bottom-5 bottom-3 pr-8">
            <p className="uppercase 2xl:text-3xl xl:text-2xl text-xl 2xl:mb-4 mb-2 Gilroy-SemiBold">{title}</p>
            <p className="xl:text-lg text-base Gilroy-Light">{summary}</p>
        </div>
</div>
)
export default HomeSectionThree;