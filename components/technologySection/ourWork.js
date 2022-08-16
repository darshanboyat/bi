import React from "react";
import HomeButton from "../buttons/HomeButton";

function OurWork(props) {
  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6 bg-light-blue">
      <div className="container padding-left-all-section">
        <div className="flex">
            <div className="w-[25%]">
              <h2 className="text-work">Our <br/> Work</h2>
              <h3 className="text-4xl text-white Gilroy-Bold">500+</h3>
              <p className="mb-8">projects delivered</p> 
              <h3 className="text-4xl text-white Gilroy-Bold">300+</h3>
              <p>happy clients</p>
            </div>
            <div className="w-[75%]">
              <div className="relative">
                <video
                  src="/images/Video-Station-1.mp4"
                  muted
                  loop
                  controls={false}
                  autoPlay={true}
                ></video>

                <div className="absolute bottom-4 left-4">
                    <h3 className="Gilroy-Bold text-3xl text-white">think. make. solve.</h3>
                    <p className="py-4">We’re a tight-knit, skilled team with a working culture built on trust, respect and passion</p>
                    <HomeButton>
                      <span>watch full video</span>
                    </HomeButton>
                </div>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default OurWork;
