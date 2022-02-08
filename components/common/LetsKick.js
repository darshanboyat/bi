import HomeButton from "../buttons/HomeButton";

export default function LetsKick() {
    return (
        <div className="p-10 py-20">
            <div className="flex justify-between">
                <div className="space-y-6">
                    <h2 className="text-6xl Gilroy-Bold">let&apos;s kick some ass together</h2>
                    <HomeButton>hop in!</HomeButton>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="text-lg">career@braininventory.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg">+917722885755</span>
                    </div>
                </div>
            </div>
            <div className="py-20">
                <div className="flex justify-center">
                    <h1 className="xl:text-8xl 2xl:text-9xl lg:text-7xl md:text-6xl text-5xl Gilroy-Bold hover:underline underline-offset-2 decoration-8">
                        <span className="stroke-text mr-2">if it&apos;s digital,</span>
                        <span className="">we&apos;ll make it.</span>
                    </h1>
                </div>
            </div>
        </div>
    )
}