import React from "react";
import HomeButton from "../buttons/HomeButton";

function Banner(props) {
  return (
    <div className="h-screen min-h-[100vh] items-center relative">
      <h2 className="2xl:px-14 xl:px-12 px-10 pt-32 text-9xl stroke-text-mobile Gilroy-Bold">
        React.Js
      </h2>
      <div className="md:flex block items-center relative">
        <div className="lg:w-[40%] w-full  md:h-full">
          <div className="3xl:py-10 2xl:py-6 xl:py-6 2xl:px-14 xl:px-12 px-10 flex flex-col justify-center 2xl:space-y-5 xl:space-y-4 space-y-3 h-full">
            <div className="2xl:text-9xl lg:text-9xl text-4xl Gilroy-Bold text-white">
              Development
            </div>
            <div className="flex flex-col">
              <div className="mt-8">
                <HomeButton>
                  <span>our concepts</span>
                </HomeButton>
                {/* <button className="bg-case-blue-request h-11 px-8 mt-6 text-sm">
                    
                  </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <span id='circle' className="border absolute p-8 rounded-full border-blue -left-24 pointer-events-none"></span> */}
    </div>
  );
}

export default Banner;
