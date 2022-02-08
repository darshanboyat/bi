import Marquee from "react-easy-marquee";

export default function BigHeadingScroll({duration, text, reverse}) {
    return (
        <Marquee height="250px" background="#fafafa00" duration={duration || 15000} reverse={reverse || true}>
            <h2 className="text-9xl px-20 Gilroy-Bold stroke-text whitespace-nowrap">{text}</h2>
        </Marquee>
    )
}