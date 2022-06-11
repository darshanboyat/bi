import Image from "next/image";

const FooterSections = [
    {
        title: 'Web App Development',
        links: [
            {
                name: 'Angular JS Development',
                path: ''
            },
            {
                name: 'React JS Development',
                path: ''
            },
            {
                name: 'Node JS Development',
                path: ''
            },
            {
                name: 'Vue JS Development',
                path: ''
            },
            {
                name: 'MEAN Development',
                path: ''
            },
            {
                name: 'MERN Development',
                path: ''
            },
            {
                name: 'LAMP Development',
                path: ''
            }
        ]
    },
    {
        title: 'Staff Augmentation',
        links: [
            {
                name: 'Hire Angular JS Developer',
                path: ''
            },
            {
                name: 'React JS Developer',
                path: ''
            },
            {
                name: 'Node JS Developer',
                path: ''
            },
            {
                name: 'Vue Js Developer',
                path: ''
            },
            {
                name: 'MEAN Developer',
                path: ''
            },
            {
                name: 'MERN Developer',
                path: ''
            },
            {
                name: 'LAMP Developer',
                path: ''
            },
            {
                name: 'Flutter app development',
                path: ''
            }
        ]
    },
    {
        title: 'Mobile App Development',
        links: [
            {
                name: 'iOS App Development',
                path: ''
            },
            {
                name: 'Android App Development',
                path: ''
            },
            {
                name: 'React Native App Development',
                path: ''
            },
            {
                name: 'Flutter App Development',
                path: ''
            },
            {
                name: 'Swift App Development',
                path: ''
            }
        ]
    },
    {
        title: 'Industries',
        links: [
            {
                name: 'Food',
                path: ''
            },
            {
                name: 'Health Care',
                path: ''
            },
            {
                name: 'Ecommerce',
                path: ''
            },
            {
                name: 'Real Estate',
                path: ''
            },
            {
                name: 'Education',
                path: ''
            },
            {
                name: 'Finance',
                path: ''
            }
        ]
    },
    {
        title: 'Solutions',
        links: [
            {
                name: 'Custom Software Development',
                path: ''
            },
            {
                name: 'NFT Marketplace',
                path: ''
            },
            {
                name: 'Blockchain Solution',
                path: ''
            },
            {
                name: 'Metaverse Application',
                path: ''
            },
            {
                name: 'Accounting Application',
                path: ''
            },
            {
                name: 'Sports Betting Platform',
                path: ''
            },
            {
                name: 'Custom Fantasy Sports Solution',
                path: ''
            },
            {
                name: 'Social Media Applications',
                path: ''
            },
            {
                name: 'Online Learning Solutions',
                path: ''
            }
        ]
    },
    {
        title: 'Portfolio',
        links: [
            {
                name: 'Numetric - Online Accounting Software similar to QuickBooks',
                path: ''
            },
            {
                name: 'Skedy - School/Institute Management Solution',
                path: ''
            },
            {
                name: 'Virifi - Blockchain Powered Document Certification & Signing Platform',
                path: ''
            },
            {
                name: 'Revolution Travel CRM - Custom CRM Built for Travel Agents',
                path: ''
            },
            {
                name: 'Fatoura - Online Invoicing Platform',
                path: ''
            },
            {
                name: 'Craftwills - Wealth Management & Will Creation Platform',
                path: ''
            },
            {
                name: 'UpScaler - Online Learning Platform similar to Udemy',
                path: ''
            },
            {
                name: 'Hub1 - VOIP powered Web Application',
                path: ''
            },
            {
                name: 'MVP Notes - Online Cornell Notes Taking Application',
                path: ''
            }
        ]
    },
    {
        title: '',
        links: [
            {
                name: 'About',
                path: '',
            },
            {
                name: 'Our Company',
                path: '',
            },
            {
                name: 'How we work',
                path: '',
            },
            {
                name: 'Careers',
                path: '',
            },
            {
                name: 'Blog',
                path: ''
            },
            {
                name: 'Contact Us',
                path: ''
            }
        ]
    }   
]

export default function Footer() {
    return (
        <div className="py-10 mx-10 border-t">
            <div className="container">
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">
                
                {
                    FooterSections.map((section, index) => {
                        return (
                            <div key={index} className="col-span-1">
                                <h3 className="text-xl Gilroy-Bold mb-4">{section.title}</h3>
                                <ul className="space-y-2">
                                    {
                                        section.links.map((link, index) => {
                                            return (
                                                <li key={index}>{link.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col md:flex-row md:items-center py-16 space-y-6 md:space-y-0">
                    {/* <div className="relative h-28">
                        <Image src={'/images/logo.svg'} width={300} height={150}></Image>
                    </div> */}
                    <div className="text-lg Gilroy-Bold"> © 2022 Brain Inventory - All rights reserved.</div>
                    <div className="flex flex-col space-y-4 md:ml-auto">
                        <p>Follow us:</p>
                        <div className="flex space-x-3 items-center ">
                            <a>
                                <Image src={'/images/meta.svg'} width={28} height={28}></Image>
                            </a>
                            <a>
                                <Image src={'/images/twitter.svg'} width={28} height={28}></Image>
                            </a>
                            <a>
                                <Image src={'/images/linkedIn.svg'} width={28} height={28}></Image>
                            </a>
                            <a>
                                <Image src={'/images/dribble.svg'} width={24} height={24}></Image>
                            </a>
                            <a>
                                <Image src={'/images/instagram.svg'} width={24} height={24}></Image>
                            </a>
                            <a>
                                <Image src={'/images/youtube.svg'} width={30} height={30}></Image>
                            </a>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}