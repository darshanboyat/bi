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
        <div className="p-10 space-y-8">
            <h1 className="text-5xl Gilroy-Bold">blogs & articles</h1>
            <div className="snap-x snap-mandatory overflow-x-auto flex no-scrollbar space-x-8 scroll-p-10">
                {
                    blogs.map((el) => (
                        <div key={el.id} className="snap-start flex flex-col space-y-4">
                            <div className="w-[450px] relative h-[250px]">
                                <Image src={'/images/' + el.image}  layout="fill" objectFit="cover" />
                            </div>
                            <p className="text-xl Gilroy-Light">{el.summary}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}