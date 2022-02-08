const HomeSectionSeven = () => {
    const addClass = () => {
        const text = document.getElementById('rolling');
        if (!text.classList.contains('rolling-animation')) {
            text.classList.add('rolling-animation')
            setTimeout(removeClass, 12000);
        }
    } 

    const removeClass = () => {
        const text = document.getElementById('rolling');
        text.classList.remove('rolling-animation')
    }

    return (
        <div>
            <div className="overflow-x-hidden">
                <div id="rolling" onMouseEnter={addClass} className="text-9xl pl-10 Gilroy-Bold stroke-text translate-x-1 whitespace-nowrap">Design interaction betweens humans and brans</div>
            </div>
            <p className="text-4xl Gilroy-Light leading-relaxed p-10">
                at development, we go beyond boundaries in everything we do. by constantly pushing limits and exploring new territory, we help ambitious partners succeed in multi-platform software development and branding.
            </p>
            <p className="mt-28 text-8xl p-10 leading-tight">
            There is no singular <br/> process that fits <br/> every challenge — <br/> there are no silver bullets. <br/>Organizations are different. <br/> People are <br/> different. Business <br/> challenges are different. <br/> And that shapes <br/> how we work.
            </p>
        </div>
    )
}

export default HomeSectionSeven;