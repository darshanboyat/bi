import { useEffect } from "react";
import HomeButton from "../buttons/HomeButton";
import Image from "next/image";
import Link from "next/link";

const HomeSectionNine = () => {
  // useEffect(() => {
  //     const parent = document.getElementById('parent')
  //     const child = document.getElementById('child')
  //     const parentAb = document.getElementById('parent-ab');
  //     const childHeight = getComputedStyle(child).height
  //     parent.style.height = childHeight;
  //     const innerHeight = window.innerHeight;
  //     parentAb.style.height = (Number(childHeight.split('px')[0]) - innerHeight) + 'px';
  // }, [])
  return (
    <div>
      <div className="relative">
        <div className="w-full">
          <div className="">
            <div className="sticky top-0 z-20">
              <div className=" w-full  p-10 2xl:space-y-8 xl:space-y-6 space-y-4  bg-gradient-5">
                <p className="Gilroy-Bold text-heading-1">
                  lets discuss your project
                </p>
                <p className="text-heading-4 Gilroy-SemiBold">
                  Get free consultation and let us know your project idea to
                  turn it into an amazing digital product.
                </p>
                <Link href="/contact" className="mt-8 block">
                  <button className="inline-flex items-center bg-transparent transition-all hover-bg-yellow-h">
                    <span className="2xl:w-14 lg:w-12 w-10 2xl:h-14 color-hover lg:h-12 h-10 transition-all relative bg-base-blue-1 rounded-full mr-4 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="2xl:h-10 transition-all lg:h-8 h-6 2xl:w-10 lg:w-8 w-6 absolute -left-1 top-1/2 -translate-y-1/2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                    <span className="2xl:text-2xl text-xl transition-all">
                      talk to our experts
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="overflow-x-hidden relative bottom-24">
              <div className=""></div>
              <Image width={1833} height={1425} src="/images/groupImage.png" />
              <div className="absolute bottom-0 2xl:h-40 h-28 w-full bg-gradient-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionNine;
