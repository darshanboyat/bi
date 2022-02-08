const HomeButton = ({children}) => {
    return (
        <button className="inline-flex items-center bg-transparent">
            <span className="w-16 h-16 relative bg-base-blue-1 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 absolute -left-1 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>
            <span className="text-2xl">{children}</span>
        </button>
    )
}

export default HomeButton;