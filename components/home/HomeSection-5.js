import { AnimationOnScroll } from "react-animation-on-scroll";

const HomeSectionFive = () => {
    return (
        <div className="h-screen relative flex flex-col p-10">
            <div className="container">
            <AnimationOnScroll delay={200} animateIn="animate__fadeInUp">
            <p className="text-heading-1 Gilroy-Bold mb-8">our forte</p>
          </AnimationOnScroll>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 2xl:gap-20 gap-16 flex-1">
            <AnimationOnScroll delay={200} animateIn="animate__fadeInUp">
                <div className="border h-52"></div>
          </AnimationOnScroll>
          <AnimationOnScroll delay={400} animateIn="animate__fadeInUp">
                <div className="border h-52"></div>
          </AnimationOnScroll>
          <AnimationOnScroll delay={600} animateIn="animate__fadeInUp">
                <div className="border h-52"></div>
          </AnimationOnScroll>
          <AnimationOnScroll delay={800} animateIn="animate__fadeInUp">
                <div className="border h-52"></div>
          </AnimationOnScroll>
          <AnimationOnScroll delay={1000} animateIn="animate__fadeInUp">
                <div className="border h-52"></div>
          </AnimationOnScroll>
          <AnimationOnScroll delay={1200} animateIn="animate__fadeInUp">
                <div className="border h-52"></div>
          </AnimationOnScroll>
             
            </div>

            </div>
        </div>
    )
}

export default HomeSectionFive;