import React from "react";
import Image from "next/image";
import HomeButton from "../buttons/HomeButton";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useForm } from "react-hook-form";
import Link from 'next/link';


function Contact(props) {
  const { register, handleSubmit } = useForm();

  const sumbitContact = (data) => {
    console.log(data);
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6 pt-24 pb-24">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 gap-2 pt-8 lg:pt-24">
          <div className="">
            <h2 className="Gilroy-Bold text-3xl text-white leading-10">
              awesomeness awaits!
            </h2>
            <p className="text-xl text-white Gilroy-light pb-4">
              Connect with our experts.
            </p>

            <form onSubmit={handleSubmit(sumbitContact)}>
              <div className="flex flex-col xl:space-y-8 pt-8 space-y-6 lg:w-4/5">
                <input
                  {...register("name")}
                  type="text"
                  className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
                  placeholder="You should have a name"
                ></input>
                <div className="flex lg:flex-row flex-col xl:space-x-8 lg:space-x-6 lg:space-y-0 space-y-6">
                  <input
                    {...register("email")}
                    type="email"
                    className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] flex-1 placeholder-[#ffffffd7]"
                    placeholder="Obviously, an email"
                  ></input>
                  <input
                    {...register("number")}
                    type="number"
                    className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] flex-1 placeholder-[#ffffffd7]"
                    placeholder="Your contact number"
                  ></input>
                </div>
                <input
                  {...register("companyName")}
                  type="text"
                  className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
                  placeholder="What's your company name?"
                ></input>
                <input
                  {...register("feedback")}
                  type="text"
                  className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
                  placeholder="Tell us, Everything!"
                ></input>
                <HomeButton type="submit">
                  <span className="text-base">Submit</span>
                </HomeButton>
              </div>
            </form>
          </div>
          <div className="blue-section lg:mt-0 mt-16">
            <h3 className="Gilroy-Bold text-3xl text-white leading-10">
              Got a startup idea & need to get it <br /> validated?
            </h3>

            <p className="text-xl text-white Gilroy-light pt-2 pb-4">
            Let us give you our honest opinion.
            </p>

            <div className="relative w-60 h-60">
              <Image
                src={"/images/sufiyan.png"}
                className="w-60 h-60"
                layout="fill"
              />
            </div>

            <p className="Gilroy-Bold text-lg mt-3">Sufiyan Rao I Co founder</p>

            {/* <p className="Gilroy-light pt-3 pb-3 text-gray-50">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p> */}

            <h3 className="Gilroy-Bold text-lg pb-1">
              Email: sufiyan@braininventory.com
            </h3>

            <h3 className="Gilroy-Bold text-lg">Phone: +91-810-956-1401</h3>
          </div>
        </div>

        <div className="pt-40">
          <h2 className="Gilroy-Bold text-5xl">
            want to be a part of our team?
          </h2>

          <p className="pt-4 pb-4 text-xl">
            If you have got powerful skills, we will pay your bills. Contact our
            HR at:
          </p>

          <div className="md:flex block">
            <a
              className="btn-career"
              href="mailto:career@braininventory.com?subject=Me&body=Hello!"
            >
              career@braininventory.com
            </a>
            <a className="btn-contact" href="tel:+91-810-956-1401">
              +91-810-956-1401
            </a>
          </div>
          <Link className="cursor-pointer" href="/career">
          <p className="view-opening cursor-pointer">View openings</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
