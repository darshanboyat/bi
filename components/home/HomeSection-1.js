import HomeButton from "../buttons/HomeButton";

const HomeSectionOne = () => {
    return (
        <div className='h-screen flex items-center'>
        <div className='lg:w-1/2 w-full bg-gradient-1 h-full  relative'>
          <div className='3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full'>
            <div className='2xl:text-3xl lg:text-2xl text-xl Gilroy-Bold'>We are a</div>
            <div className='text-heading-1 Gilroy-Bold'>digital production</div>
            <div className='text-heading-1 Gilroy-Bold'>Company</div>
            <div className='flex flex-col'>
              <div className='text-heading-4'>focusing heavily on design & developement based in indore.</div>
              <div className='text-heading-4'>we create products that make people say oh damn!</div>
            </div>
            <HomeButton>request a quote</HomeButton>
          </div>
          <div className='absolute bottom-0 3xl:py-10 py-8 2xl:px-14 xl:px-12 px-10 bg-base-blue-1 flex justify-between w-full text-heading-3 Gilroy-Bold'>
              <span className='stroke-text'>websites</span>
              <span className='stroke-text'>applications</span>
              <span className='stroke-text'>branding</span>
          </div>
        </div>
        <div className='hero-bg-1 w-1/2 h-full lg:block hidden'></div>
      </div>  
    );
}

export default HomeSectionOne;