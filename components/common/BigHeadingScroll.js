import Marquee from "react-easy-marquee";

export default function BigHeadingScroll() {
    return (
        <Marquee height="250px" background="#fafafa00" duration={15000} reverse={true}>
            <h2 className="text-9xl pl-10 Gilroy-Bold stroke-text whitespace-nowrap">Perfectly balanced as all things should be</h2>
        </Marquee>
    )
}