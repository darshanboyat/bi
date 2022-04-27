import React, { Component } from "react";
import Image from "next/image";
import carrer from "../../pages/carrer";

class banner extends Component {
  render() {
    return (
      <div className="bg-gradient-career">
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
          <div>
            <h2 className="text-center mt-4 lg:mt-8 text-4xl lg:text-5xl Gilroy-Bold">
              the right place <br /> for the right people
            </h2>
            <p className="text-center lg:w-2/3 mt-8 m-auto block text-base Gilroy-Light text-gray-50">
              We are always looking for talented people to join our team and
              bring their unique vision into the picture. We thrive because of
              our investment in finding the best talents in the industry. We
              have created a great place to work, as we acknowledge that a
              successful company is built around talented people who deliver
              tremendous results.{""}
            </p>
            <p className="text-center lg:w-2/3 pt-8  m-auto block text-base Gilroy-Light text-gray-50">
              Here at Forty Two, the team members have a unique opportunity to
              grow both personally and professionally. We facilitate our
              employees’ development and introduce them to various educational
              courses and programs. Also, we have an amazing vibe in the office,
              as we play great music. And last but not least, there is a happy
              hour every week, so people can bond with each other and establish
              strong relationships
            </p>
          </div>

          <div className="lg:flex hidden items-center justify-between">
            <div>
              <div className="relative w-[750px] h-[450px]">
                <Image src={"/images/" + "carrer1.png"}  layout="fill" />
              </div>
            </div>
            <div>
              <div className="relative w-[450px] h-[450px]">
                <Image src={"/images/" + "carrer2.png"}  layout="fill" />
              </div>
            </div>
            <div>
              <div className="relative w-[220px] h-[450px]">
                <Image src={"/images/" + "carrer3.png"}  layout="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
banner.propTypes = {};
export default banner;
