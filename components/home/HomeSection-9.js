import { useEffect } from "react";
import HomeButton from "../buttons/HomeButton";
import Image from "next/image";

const HomeSectionNine = () => {
    useEffect(() => {
        const parent = document.getElementById('parent')
        const child = document.getElementById('child')
        const parentAb = document.getElementById('parent-ab');
        const childHeight = getComputedStyle(child).height
        parent.style.height = childHeight;
        const innerHeight = window.innerHeight;
        parentAb.style.height = (Number(childHeight.split('px')[0]) - innerHeight) + 'px';
    }, [])
    return (
        <div>
            <div id='parent' className="relative">
                <div id='parent-ab' className="absolute top-0 w-full">
                    <div className="sticky top-0 z-20">
                        <div className="absolute w-full top-0 p-10 space-y-8 h-[75vh] bg-gradient-5">
                            <p className="Gilroy-Bold text-6xl">lets discuss your project</p>
                            <p className="text-2xl Gilroy-SemiBold">Get free consultation and let us know your project idea to turn it into an amazing digital product.</p>
                            <HomeButton>talk to our experts</HomeButton>
                        </div>
                    </div>
                    <div id='child' className="overflow-x-hidden">
                        <div className="h-[25vh]"></div>
                        <Image width={1833} height={1425} src='/images/groupImage.png' />
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default HomeSectionNine;