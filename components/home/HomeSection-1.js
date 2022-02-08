import HomeButton from "../buttons/HomeButton";

const HomeSectionOne = () => {
    return (
        <div className='h-screen flex items-center'>
        <div className='w-1/2 bg-gradient-1 h-full  relative'>
          <div className='py-10 px-14 flex flex-col justify-center space-y-5 h-full'>
            <div className='text-3xl Gilroy-Bold'>We are a</div>
            <div className='text-7xl Gilroy-Bold'>digital production</div>
            <div className='text-7xl Gilroy-Bold'>Company</div>
            <div className='flex flex-col'>
              <div className='text-2xl'>focusing heavily on design & developement based in indore.</div>
              <div className='text-2xl'>we create products that make people say oh damn!</div>
            </div>
            <HomeButton>request a quote</HomeButton>
          </div>
          <div className='absolute bottom-0 py-10 px-14 bg-base-blue-1 flex justify-between w-full text-5xl font-bold'>
              <span className='stroke-text'>websites</span>
              <span className='stroke-text'>applications</span>
              <span className='stroke-text'>branding</span>
          </div>
        </div>
        <div className='hero-bg-1 w-1/2 h-full'></div>
      </div>  
    );
}

export default HomeSectionOne;