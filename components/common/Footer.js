import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';

const FooterSections = [
    {
        title: 'About',
        link: '/how-we-work',
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
        link: '/solution',
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
        link: '/web-app-development',
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
        link: '/mobile-app-development',
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
        link: '/portfolio',
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
        link: '/staff-augmentation',
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
    setaddClick
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
                                <a
                                    href={section.link} 
                                    className="cursor-pointer">  
                                    <h3 className="text-xl Gilroy-Bold mb-4 cursor-pointer">{section.title}</h3>
                                </a>
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
            <div className="flex flex-col md:flex-row md:items-center py-16 space-y-6 md:space-y-0">
                    <div>
                        <ul className="text-sm space-x-6">
                            <li className="inline-flex items-center align-middle cursor-pointer">
                                <a href="https://www.goodfirms.co/company/brain-inventory" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/footer-firm1.png" alt="brain inventory best rating and reviews on Good Firm" />
                                </a>
                            </li>        
                            <li className="inline-flex items-center align-middle cursor-pointer">
                              <a href="https://clutch.co/profile/brain-inventory" target="_blank" rel="noopener noreferrer">
                                <img src="/images/footer-firm3.png" alt="brain inventory best rating and reviews on Clutch" />
                              </a>
                            </li>
                            <li className="inline-flex items-center align-middle cursor-pointer" >
                                <a href="https://www.trustpilot.com/review/braininventory.com" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/footer-firm4.png" alt="brain inventory best rating and reviews on Trust Pilot" />
                                </a>
                            </li>
                            <li className="inline-flex items-center align-middle cursor-pointer" >                       
                                <a href="https://www.upwork.com/ag/braininventory/" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/footer-firm5.png" alt="brain inventory best rating and reviews on Upwork" />
                                </a>       
                            </li>
                        </ul>
                    <div className="text-lg Gilroy-Bold my-6 md:my-0"> © 2022 Brain Inventory - All rights reserved.</div>
                    </div>
                    <div className="flex flex-col space-y-4 md:ml-auto">
                        <p>Follow us:</p>
                        <div className="flex space-x-3 items-center ">
                            <a className="cursor-pointer">
                                <a href="https://www.facebook.com/BrainInventoryIndia/" target="_blank" rel="noopener noreferrer">                               
                                <Image src={'/images/meta.svg'} width={28} height={28}></Image>
                                </a>
                            </a>
                            {/* <a className="cursor-pointer">
                                <Image src={'/images/twitter.svg'} width={28} height={28}></Image>
                            </a> */}
                            <a className="cursor-pointer">
                              <a  href="https://in.linkedin.com/company/braininventory" target="_blank" rel="noopener noreferrer">
                                <Image src={'/images/linkedIn.svg'} width={28} height={28}></Image>
                              </a>
                            </a>
                            <a className="cursor-pointer">
                                <a  href="https://dribbble.com/brain_inventory" target="_blank" rel="noopener noreferrer">
                                    <Image src={'/images/dribble.svg'} width={24} height={24}></Image>
                                </a>
                            </a>
                            <a className="cursor-pointer">
                                <a href="https://www.instagram.com/braininventory_com/" target="_blank" rel="noopener noreferrer">
                                <Image src={'/images/instagram.svg'} width={24} height={24}></Image>
                                </a>
                            </a>
                            <a className="cursor-pointer">
                                <a href="https://www.youtube.com/channel/UCmBF3Fito6xxYWyomJ-ittw" target="_blank" rel="noopener noreferrer">
                                    <Image src={'/images/youtube.svg'} width={30} height={30}></Image>
                                </a>
                            </a>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}