const HomeSectionTen = () => {
    return (
        <div className="flex justify-center pt-40">
            <div className="flex w-4/5 lg:flex-row flex-col gap-10 p-10">
                <div className="lg:space-y-12 space-y-8 flex-1">
                    <p className="lg:text-6xl text-4xl Gilroy-Bold">our portfolio</p>
                    <div className="flex lg:space-x-10 space-x-8">
                        <CounterBox counterInfo={{count: '100', message: 'Projects Delivered'}}></CounterBox>
                        <CounterBox counterInfo={{count: '50', message: 'Happy Clients'}}></CounterBox>
                    </div>
                    <ProjectBox info={{name: 'Numetric Software', summary: 'UI/UX Design. Mobile & Web App Development.'}}></ProjectBox>
                    <div className="w-[30vw] h-[30vw] lg:mx-auto rounded-full border border-[#ffffff86] flex items-center">
                        <span className="w-[28vw] h-[28vw] mx-auto rounded-full border border-[#ffffffc2] flex items-center">
                            <span className="w-[26vw] h-[26vw] mx-auto rounded-full border"></span>
                        </span>
                    </div>
                    <div className="flex lg:justify-center items-center space-x-8">
                        <div className="2xl:text-7xl lg:text-6xl text-5xl Gilroy-Bold stroke-text">wanna see <br/> more</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
                <div className="lg:space-y-8 space-y-6 flex-1">
                    <div className="lg:h-40 h-10"></div>
                    <div className="stroke-text Gilroy-Bold 2xl:text-9xl lg:text-8xl text-7xl">dribble</div>
                    <div className="stroke-text Gilroy-Bold 2xl:text-9xl lg:text-8xl text-7xl">behance</div>
                    <ProjectBox info={{name: 'Skedy Software', summary: 'UI/UX Design. Mobile & Web App Development.'}}></ProjectBox>
                    <ProjectBox info={{name: 'Revolution Travel CRM', summary: 'UI/UX Design. Mobile & Web App Development.'}}></ProjectBox>
                </div>
            </div>
        </div>
    )
}

const CounterBox = ({counterInfo}) => {
    return (
        <div>
            <div className="Gilroy-Bold text-base-orange-1 lg:text-7xl text-5xl mb-4">{counterInfo.count}+</div>
            <span className="lg:text-4xl text-2xl">{counterInfo.message}</span>
        </div>
    )
}

const ProjectBox = ({info}) => {
    return (
        <div className="lg:space-y-12 space-y-8">
            <div className="min-h-[350px] h-[30vw] lg:w-full w-[30vw] min-w-[350px] border"></div>
            <div>
                <h2 className="Gilroy-Bold lg:text-5xl text-3xl">{info.name}</h2>
                <p className="lg:text-2xl text-xl">{info.summary}</p>
            </div>
        </div>
    )
}

export default HomeSectionTen;