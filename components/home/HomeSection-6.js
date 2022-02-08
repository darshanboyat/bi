import Marquee from "react-easy-marquee";

const HomeSectionSix = () => {
    return (
        <div className="h-screen flex flex-col justify-center">
                <Marquee duration={15000} background="#fafafa00" reverse={true} height="250px">
                    <div className="flex space-x-5 mr-10 text-5xl items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="underline pb-2 underline-offset-[12px] decoration-1">career@braininventory.com</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span>+917722885755</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="underline pb-2 underline-offset-[12px] decoration-1">askus@braininventory.com</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span>+918109561401</span>
                    </div>
                </Marquee>
                <div className="py-10 border-y">
                    <video src="/videos/Final.mp4" muted loop controls={false} autoPlay={true} />
                </div>
                <Marquee duration={15000} background="#fafafa00" height="250px">
                    <div className="flex space-x-10 mr-10 text-5xl items-center">
                        <span>We partner on big and small projects with all kinds of clients - from boutique brands to market leaders.</span>
                    </div>
                </Marquee>
        </div>
    )
}

export default HomeSectionSix;