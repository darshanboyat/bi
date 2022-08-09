import { useEffect } from "react";
import HomeButton from "../buttons/HomeButton";
import Image from "next/image";

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
            <div  className="relative">
                <div className="w-full">
                    <div className="">
                    <div className="sticky top-0 z-20">
                        <div className=" w-full  p-10 2xl:space-y-8 xl:space-y-6 space-y-4  bg-gradient-5">
                            <p className="Gilroy-Bold text-heading-1">lets discuss your project</p>
                            <p className="text-heading-4 Gilroy-SemiBold">Get free consultation and let us know your project idea to turn it into an amazing digital product.</p>
                             <a href="/contact" className="mt-8 block">
                              <HomeButton>talk to our experts</HomeButton>
                             </a>
                        </div>
                    </div>
                    <div className="overflow-x-hidden relative bottom-24">
                        <div className=""></div>
                        <Image width={1833} height={1425} src='/images/groupImage.png' />
                        <div className="absolute bottom-0 2xl:h-40 h-28 w-full bg-gradient-6"></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default HomeSectionNine;