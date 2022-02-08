import Image from "next/image";

const FooterSections = [
    {
        title: 'About',
        links: [
            {
                name: 'Company',
                path: ''
            },
            {
                name: 'How we work',
                path: ''
            },
            {
                name: 'Agile Development',
                path: ''
            },
            {
                name: 'Full cycle product development',
                path: ''
            },
            {
                name: 'Carrers',
                path: ''
            },
            {
                name: 'Contact Us',
                path: ''
            }
        ]
    },
    {
        title: 'Services',
        links: [
            {
                name: 'Product discovery workshops',
                path: ''
            },
            {
                name: 'User experience design',
                path: ''
            },
            {
                name: 'User interface design',
                path: ''
            },
            {
                name: 'UX review',
                path: ''
            },
            {
                name: 'iOS app development',
                path: ''
            },
            {
                name: 'Android app development',
                path: ''
            },
            {
                name: 'Blockchain development',
                path: ''
            },
            {
                name: 'Flutter app development',
                path: ''
            },
            {
                name: 'React native app development',
                path: ''
            },
        ]
    },
    {
        title: 'Industries',
        links: [
            {
                name: 'Healthcare apps',
                path: ''
            },
            {
                name: 'On demand apps',
                path: ''
            },
            {
                name: 'eScooter apps',
                path: ''
            },
            {
                name: 'Social networking apps',
                path: ''
            },
            {
                name: 'Entertainment apps',
                path: ''
            },
            {
                name: 'Restaurant apps',
                path: ''
            },
            {
                name: 'Real estate apps',
                path: ''
            },
            {
                name: 'Event apps',
                path: ''
            }
        ]
    },
    {
        title: 'Portfolio',
        links: [
            {
                name: 'Domino’s - Pizza Delivery',
                path: ''
            },
            {
                name: 'Vitality- Bio-acoustics analysis',
                path: ''
            },
            {
                name: 'Gully Beat - Movie promotion',
                path: ''
            },
            {
                name: 'Empire - Blockchain solution',
                path: ''
            },
            {
                name: 'Acti Drive - IoT based solution',
                path: ''
            },
            {
                name: 'IKEA - ERP app development',
                path: ''
            }
        ]
    },
    {
        title: 'Resources',
        links: [
            {
                name: 'Blog',
                path: ''
            },
            {
                name: 'Press Releases',
                path: ''
            },
            {
                name: 'Guides',
                path: ''
            }
        ]
    },
    
]

export default function Footer() {
    return (
        <div className="py-10 mx-10 border-t">
            <div className="grid grid-cols-7">
                <div className="col-span-2 space-y-4">
                    <div className="relative h-28">
                        <Image src={'/images/logo.svg'} width={300} height={150}></Image>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <p>Follow us:</p>
                        <div className="flex space-x-2">
                            <span>
                                <Image src={'/images/meta.svg'} width={28} height={28}></Image>
                            </span>
                            <span>
                                <Image src={'/images/twitter.svg'} width={28} height={28}></Image>
                            </span>
                            <span>
                                <Image src={'/images/linkedIn.svg'} width={28} height={28}></Image>
                            </span>
                        </div>
                    </div>
                </div>
                {
                    FooterSections.map((section) => {
                        return (
                            <div className="col-span-1">
                                <h3 className="text-xl Gilroy-Bold mb-4">{section.title}</h3>
                                <ul className="space-y-2">
                                    {
                                        section.links.map((link) => {
                                            return (
                                                <li>{link.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <div className="text-center mt-5 text-lg Gilroy-Bold py-4">
            © 2022 Brain Inventory - All rights reserved.
            </div>
        </div>
    )
}