import Image from "next/image";

const blogs = [
    {
        id: 1,
        image: 'blog1.png',
        summary: 'Dear Sophie: How does the International Entrepreneur Parole program work?'
    },
    {
        id: 2,
        image: 'blog2.png',
        summary: 'Dear Sophie: How does the International Entrepreneur Parole program work?'
    },
    {
        id: 3,
        image: 'blog3.png',
        summary: 'Dear Sophie: How does the International Entrepreneur Parole program work?'
    },
    {
        id: 4,
        image: 'blog4.png',
        summary: 'Dear Sophie: How does the International Entrepreneur Parole program work?'
    },
    {
        id: 5,
        image: 'blog1.png',
        summary: 'Dear Sophie: How does the International Entrepreneur Parole program work?'
    },
    {
        id: 6,
        image: 'blog2.png',
        summary: 'Dear Sophie: How does the International Entrepreneur Parole program work?'
    }
]

export default function BlogsArticles() {
    return (
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
            <h1 className="text-heading-1 Gilroy-Bold">blogs & articles</h1>
            <div className="snap-x snap-mandatory overflow-x-auto flex no-scrollbar space-x-8 scroll-p-10">
                {
                    blogs.map((el) => (
                        <div key={el.id} className="snap-start flex flex-col space-y-4">
                            <div className="2xl:w-[450px] xl:w-[400px] w-[375px]  relative 2xl:h-[250px] xl:h-[225px] h-[200px]">
                                <Image src={'/images/' + el.image}  layout="fill" objectFit="cover" />
                            </div>
                            <p className="2xl:text-xl xl:text-lg text-base Gilroy-Light">{el.summary}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}