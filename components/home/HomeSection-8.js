import Image from "next/image"
import HomeButton from "../buttons/HomeButton"

const info = [
    {
        title: 'discovery workshop',
        details: 'We give the utmost importance to understand and document client’s inputs, design, and branding preferences. And clarify all the open-ended points to establish a precise and clear idea about both clients’ and project’s goals. We work in a collaborative approach involving key stakeholders to bring alignment in the business process.',
        image: 'discovery.png'
    },
    {
        title: 'planning',
        details: 'Our services emphasize on well-defined project planning and leave nothing for assumption to avoid miscommunication. We jot down how we are going to proceed further, define detailed technical specifications, devise the design & branding guidelines of the project, and get confirmation and approval from the clients’ end on the documents and materials.',
        image: 'planning.png'
    },
    {
        title: 'design',
        details: 'We provide clients with Web, Tablet, and Mobile-specific UI designs of the projects based on the approved wireframes and design guidelines. As a trusted entity, we deliver clickable prototypes on Invision platform and the source files in either Photoshop or Sketch format. Getting system UI designs approved and confirmed by the client is one of our objectives at this stage.',
        image: 'design.png'
    },
    {
        title: 'development',
        details: 'At this stage, we cater requirements for frontend, backend, web services, and API development integration. Along with preparing a strategy for Agile Scrum methodology, we factor the aspects of scalability, multi-tenancy, 3rd party integration, and craft an optimized clean code structure using cutting-edge technologies. We make sure to involve and implement clients’ reviews in each sprint/milestone.',
        image: 'development.png'
    },
    {
        title: 'testing',
        details: 'We test each sprint manually, report bugs and add those to product backlog. Once the bug fixing is done, we provide the quality release and then the final demo of the sprint is sent for clients’ approval. We make sure to do regression testing to ensure proper functioning of the previously approved milestones/sprints.',
        image: 'testing.png'
    },
    {
        title: 'maintainance',
        details: 'Our work doesn’t end with development, we go the extra mile for our clients. Through an Agile approach, we ensure product enhancement. We do regular Security Audits, Brain Inventory-weekly code backups, and constant system upgradation. Along with testing the entire system each month to find any incompatibility or error, we monitor the traffic and server load and accordingly optimize it.',
        image: 'maintainance.png'
    }
]

const HomeSectionEight = () => {
    return (
        <div className="p-10 pb-40">
            <div className="divide-y">
                {
                    info.map((el) => <Section key={el.title} info={el}></Section>)
                }
            </div>
            <HomeButton>Explore more</HomeButton>
        </div>
    )
}

const Section = ({info}) => {
    return (
        <div className="grid grid-cols-5 gap-10 py-10">
            <span className="col-span-5 stroke-text Gilroy-Bold text-6xl">{info.title}</span>
            <div className="col-span-2 relative">
                <Image src={'/images/' + info.image} width={609} height={351} />
            </div>
            <p className="text-3xl Gilroy-Light leading-loose col-span-3">{info.details}</p>
        </div>
    )
}

export default HomeSectionEight;