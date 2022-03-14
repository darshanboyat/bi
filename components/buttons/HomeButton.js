const HomeButton = ({children}) => {
    return (
        <button className="inline-flex items-center bg-transparent">
            <span className="2xl:w-14 lg:w-12 w-10 2xl:h-14 lg:h-12 h-10 relative bg-base-blue-1 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="2xl:h-10 lg:h-8 h-6 2xl:w-10 lg:w-8 w-6 absolute -left-1 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>
            <span className="2xl:text-2xl text-xl">{children}</span>
        </button>
    )
}
export default HomeButton;