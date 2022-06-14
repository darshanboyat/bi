import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';

const FooterSections = [
    {
        title: 'About',
        links: [
          
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
        title: 'Portfolio',
        className: 'md:col-span-2',
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
 
]
// const [addClick, setaddClick] = useState('');
const viewMore = () =>{
    alert('test');
}

export default function Footer() {
    return (
        <div className="py-10 mx-10 border-t">
            <div className="container">
            <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                
                {
                    FooterSections.map((section, index) => {
                        return (
                            <div key={index} className={section.className? section.className:'md:col-span-1'   }>
                                <h3 className="text-xl Gilroy-Bold mb-4">{section.title}</h3>
                                <ul className="space-y-2">
                                    {
                                        section.links.map((link, index) => {
                                            return (
                                                <li className="color-gray" key={index}>{link.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                          
                            
                        )
                    })
                }
            </div>
                {/* <div>
                     <button onClick={() => viewMore}>
                         View More
                     </button>
                </div> */}
            <div className="flex flex-col md:flex-row md:items-center py-16 space-y-6 md:space-y-0">
                    {/* <div className="relative h-28">
                        <Image src={'/images/logo.svg'} width={300} height={150}></Image>
                    </div> */}
                    <div>
                        <ul className="text-sm space-x-6">
                            <li className="inline-flex items-center align-middle cursor-pointer">
                                <Link href="https://www.goodfirms.co/company/brain-inventory">
                                  <img src="/images/footer-firm1.png" />
                                </Link>
                            </li>
                     
                            <li className="inline-flex items-center align-middle cursor-pointer">
                            <Link href="https://clutch.co/profile/brain-inventory">
                                <img src="/images/footer-firm3.png" />
                                </Link>
                            </li>
                            <li className="inline-flex items-center align-middle cursor-pointer">
                                <Link href="https://www.trustpilot.com/review/braininventory.com">
                                <img src="/images/footer-firm4.png" />
                                </Link>
                            </li>
                            <li className="inline-flex items-center align-middle cursor-pointer">
                            <Link href="https://www.upwork.com/ag/braininventory/">
                                <img src="/images/footer-firm5.png" />
                                </Link>
                            </li>
                        </ul>
                    <div className="text-lg Gilroy-Bold my-6 md:my-0"> © 2022 Brain Inventory - All rights reserved.</div>
                    </div>
                    <div className="flex flex-col space-y-4 md:ml-auto">
                        <p>Follow us:</p>
                        <div className="flex space-x-3 items-center ">
                            <a className="cursor-pointer">
                                <Link href="https://www.facebook.com/BrainInventoryIndia/">                               
                                <Image src={'/images/meta.svg'} width={28} height={28}></Image>
                                </Link>
                            </a>
                            {/* <a className="cursor-pointer">
                                <Image src={'/images/twitter.svg'} width={28} height={28}></Image>
                            </a> */}
                            <a className="cursor-pointer">
                            <Link href="https://in.linkedin.com/company/braininventory">
                                <Image src={'/images/linkedIn.svg'} width={28} height={28}></Image>
                                </Link>
                            </a>
                            <a className="cursor-pointer">
                            <Link href="https://dribbble.com/brain_inventory">
                                <Image src={'/images/dribble.svg'} width={24} height={24}></Image>
                                </Link>
                            </a>
                            <a className="cursor-pointer">
                                <Link href="https://www.instagram.com/braininventory_com/">
                                <Image src={'/images/instagram.svg'} width={24} height={24}></Image>
                                </Link>
                            </a>
                            <a className="cursor-pointer">
                            <Link href="https://www.youtube.com/channel/UCmBF3Fito6xxYWyomJ-ittw">
                                <Image src={'/images/youtube.svg'} width={30} height={30}></Image>
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
}