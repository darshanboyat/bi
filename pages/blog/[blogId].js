import React, { useState } from 'react';
import Head from 'next/head';
import LetsKick from '../../components/common/LetsKick';
import Footer from '../../components/common/Footer';
import KeepInTouch from '../../components/common/keepInTouch'
import LocateUs from '../../components/common/locateUs'
import Header from '../../components/header/Header';
import Loader from '../../components/common/loader'
import { useRouter } from 'next/router'
import moment from "moment";

import Featured from '../../components/blog/Featured'


export default function BlogDetail({ post }) {

    const [loading, setLoading] = useState(true);
    const router = useRouter()
    const [data, setData] = useState([])
    // Publish post




    React.useEffect(() => {
        // setLoading(true);
        console.log(router.query.blogId)
        var check = post.filter(post => post._id == router.query.blogId)
        console.log(check[0])
        setData(check[0])
        setTimeout(() => setLoading(false), 2000);
    }, []);

    return (
        <>
            {loading ?
                <Loader />
                :
                <div>
                    <Head>
                        <title></title>
                    </Head>
                    <Header></Header>

                    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
                        <div className="container pt-12 padding-left-all-section">
                            <div className='grid grid-cols-3 gap-4'>
                                <div className='col-span-2 mt-8'>
                                    <h3 className='text-2xl Gilroy-Bold mb-4'>{data.title}</h3>
                                    <img src={data.image} classname="w-full" />
                                    <span className='flex mt-2 mb-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                        </svg>



                                        <label className='pl-2'>
                                            <small className='text-sm color-gray'>{moment(data.createdAt).fromNow()}</small>

                                        </label>

                                    </span>
                                    <p>
    <span style={{ fontWeight: 400 }}>
      At the center of every company, product development is a crucial component
      that helps it achieve long-term success. No matter what industry you are
      in, your ability to develop, validate, and launch new products is crucial.
      A study by the 280 Group showed that optimizing the product development
      process itself could increase company profits by 34.2%.{" "}
    </span>
    <span style={{ fontWeight: 400 }}>&nbsp;</span>
    <a className='hightlight_1' href="https://braininventory.com/hire-dedicated-remote-developers">
      <span style={{ fontWeight: 400 }}>
        Dedicated software development teams
      </span>
    </a>
    <span style={{ fontWeight: 400 }}>
      {" "}
      are often the key to this. This article discusses how to build and manage
      a product development team that can effectively support you in the product
      development journey. Let’s dive right in!&nbsp;
    </span>
  </p>
                                    <>
                                        <p className='Gilroy-Bold text-xl pt-4'>
                                            <strong>
                                                The Essential Steps to Build and Manage a Product Development Team
                                            </strong>
                                        </p>
                                        <p>&nbsp;</p>
                                        <img src='/images/blog_2.png' />
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                From hiring and leadership to career progression, there are a few things
                                                that you need to consider as you go through this process.
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <ol>
                                            <li className='custom-line'>
                                                <strong> Hiring</strong>
                                            </li>
                                        </ol>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                When it comes to your product development team, it goes without saying
                                                that you want to assemble the best possible people.{" "}
                                            </span>
                                            <span style={{ fontWeight: 400 }}>
                                                Provide your outsourcing partner with your business idea so they can
                                                help you with the project requirements and technology stack you need for
                                                the project. By documenting your requirements and providing general
                                                information about your organization, the IT provider can find{" "}
                                            </span>
                                            <a className='hightlight_1' href="https://braininventory.com/hire-dedicated-remote-developers">
                                                <span style={{ fontWeight: 400 }}>dedicated software developers</span>
                                            </a>
                                            <span style={{ fontWeight: 400 }}>
                                                {" "}
                                                who are a good cultural and technical fit.
                                            </span>
                                            <span style={{ fontWeight: 400 }}>
                                                {" "}
                                                Here are some principles regarding hiring you need to consider-
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <ul>
                                            <li aria-level={1}>
                                                <strong>Hire for Both Hard and Soft Skills</strong>
                                            </li>
                                        </ul>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                In the ever-changing world of technology, it's not enough to just hire
                                                technical wunderkind. Besides first-class hard skills, they should also
                                                possess excellent communication, teamwork, and problem-solving skills.
                                                This will help them positively contribute to product and design
                                                development.
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <ul>
                                            <li aria-level={1}>
                                                <strong>Inventory Your Skills</strong>
                                            </li>
                                        </ul>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Work on identifying the skills you currently possess and those you lack.
                                                By doing this exercise, you will gain a better understanding of the type
                                                of skills that you should be seeking from prospective hires.
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <ul>
                                            <li aria-level={1}>
                                                <strong>Assess Skills in the Right Way</strong>
                                            </li>
                                        </ul>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                You must use the right skills assessment test for the specific use case
                                                when evaluating
                                            </span>{" "}
                                            <a className='hightlight_1' href="https://braininventory.com/">
                                                <span style={{ fontWeight: 400 }}>dedicated software developers</span>
                                            </a>
                                            <span style={{ fontWeight: 400 }}>
                                                . This ensures that you aren't wasting time and resources on irrelevant
                                                assessments or candidates who aren't fit for the role.&nbsp;
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <p>
                                            <strong>
                                                The 4 Most Important Things to Consider Before Hiring a Dedicated Team
                                            </strong>
                                        </p>
                                        <p>&nbsp;</p>
                                        <ul>
                                            <li>
                                                <strong>i) Understand the Product Development Processes</strong>
                                            </li>
                                        </ul>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                The importance of understanding all the small details involved in
                                                software development cannot be overstated. Be clear about the
                                                responsibilities of your IT provider and your own to avoid conflicts or
                                                misunderstandings.
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <ul>
                                            <li>
                                                <strong>ii) Learn What Your Experts Can Do</strong>
                                            </li>
                                        </ul>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Learn about your remote experts' skills during interviews and actual
                                                work on the project. As with your in-house team, they can be useful in
                                                other projects as well. Getting to know your team member's skills and
                                                experience can save you time in the future.
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <p>
                                            <strong>iii)Always Sign An NDA</strong>
                                        </p>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Intellectual property protection and the protection of confidential
                                                information will be crucial in 2021. Security and trust are two major
                                                concerns when it comes to outsourcing partnerships. Review your IT
                                                provider's intellectual property policies and NDAs before the start of
                                                the development process to make sure this won't be a problem. It is
                                                important to remember that when you{" "}
                                            </span>
                                            <a  className='hightlight_1' href="https://braininventory.com/hire-dedicated-remote-developers">
                                                <span style={{ fontWeight: 400 }}>hire dedicated developers</span>
                                            </a>
                                            <span style={{ fontWeight: 400 }}>, </span>
                                            <span style={{ fontWeight: 400 }}>
                                                you have the option of signing an NDA with each of them.
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <ul>
                                            <li>
                                                <strong>iv) Get a Detailed and Transparent Contract</strong>
                                            </li>
                                        </ul>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                There must be a clear description of the following in the contract you
                                                sign:
                                            </span>
                                        </p>
                                        <ul>
                                            <li style={{ fontWeight: 400 }} aria-level={1}>
                                                <span style={{ fontWeight: 400 }}>
                                                    Development rates with detailed breakdowns based on the expertise
                                                    required
                                                </span>
                                            </li>
                                            <li style={{ fontWeight: 400 }} aria-level={1}>
                                                <span style={{ fontWeight: 400 }}>Possible discounts</span>
                                            </li>
                                            <li style={{ fontWeight: 400 }} aria-level={1}>
                                                <span style={{ fontWeight: 400 }}>Invoices and payment protocols</span>
                                            </li>
                                            <li style={{ fontWeight: 400 }} aria-level={1}>
                                                <span style={{ fontWeight: 400 }}>Periods and limits of credit</span>
                                            </li>
                                            <li style={{ fontWeight: 400 }} aria-level={1}>
                                                <span style={{ fontWeight: 400 }}>
                                                    Conditions and periods of warranty
                                                </span>
                                            </li>
                                        </ul>
                                        <p>
                                            <br />
                                            <br />
                                        </p>
                                        <ol start={2}>
                                            <li className='custom-line'>
                                                <strong> Leadership</strong>
                                            </li>
                                        </ol>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                When you’re building a product, it can be hard to know exactly what the
                                                right steps are. But some general rules will help you get there every
                                                time.
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                First and foremost, you need to make sure your team is aligned with a
                                                shared vision. Without this alignment, everyone is working in silos and
                                                everything takes longer than necessary because people aren’t talking to
                                                each other. A good leader knows how to create this alignment by
                                                communicating clearly about where he wants the product and the team to
                                                go.
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Another important rule is creating the right product culture and
                                                empowering your team rather than micromanaging them.&nbsp; The best
                                                designers and developers don't want to be watched over all the time.
                                                Ideally, they would like to be able to work independently and feel that
                                                their leaders trust them. A good leader provides resources, direction,
                                                and incentives, but then steps back so that everyone can do what they do
                                                best.
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <ol start={3}>
                                            <li className='custom-line'>
                                                <strong> Internal Processes</strong>
                                            </li>
                                        </ol>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                The next step is to make sure your internal operations are set up
                                                efficiently and effectively to enable smooth product planning and
                                                development. Here are some things to consider:
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <ul>
                                            <li aria-level={1}>
                                                <strong>Decide on the Right Team Structure</strong>
                                            </li>
                                        </ul>
                                        <img src="/images/blog_3.png" />
                                        <p className='mb-4'>
                                            <span style={{ fontWeight: 400 }}>
                                                Your product development team needs a solid structure that creates the
                                                space where everyone can do what they do best. Get it wrong and your
                                                progress will be significantly impeded. Listed below are three
                                                structures that might work for your team:
                                            </span>
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>i) Centralized Team Structure</strong>
                                            </li>
                                        </ul>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>Your </span>
                                            <a className='hightlight_1' href="https://braininventory.com/hire-dedicated-remote-developers">
                                                <span style={{ fontWeight: 400 }}>
                                                    dedicated product development team
                                                </span>
                                            </a>
                                            <span style={{ fontWeight: 400 }}>
                                                {" "}
                                                works under one key decision-maker in this setup. You assign your
                                                developers to various projects based on their needs as and when needed.
                                                Your developers work as mini-agencies. As a result, you benefit from
                                                shared knowledge and experiences. Additionally, you achieve a unified
                                                approach to product development throughout the organization.&nbsp; A
                                                downside is that your team is somewhat isolated from the rest of the
                                                company, resulting in misalignment.
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <ul>
                                            <li>
                                                <strong>ii) Embedded Team Structure</strong>
                                            </li>
                                        </ul>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                In this structure, individual product developers are integrated into
                                                cross-functional teams across the organization. This means that each
                                                individual is deeply embedded in specific products which are great for
                                                focus, but it does result in some duplicated work because other
                                                developers might not know exactly what you’re working on.
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <p>
                                            <strong>iii) Flexible Team Structure</strong>
                                        </p>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Embedded and centralized approaches are combined here. The developers
                                                are still integrated into specific teams, but they also report to a head
                                                of product development who aims to unify the approach and align
                                                everyone. Flexibility can be very valuable, but it can also cause wires
                                                to be crossed when team members aren't sure who should report to and who
                                                should make the final decision.
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <ul>
                                            <li aria-level={1}>
                                                <strong>
                                                    Use Tools That Improve Design-Development Team Collaboration
                                                </strong>
                                            </li>
                                        </ul>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Great software can be an asset for improving collaboration between your
                                                design and development teams.&nbsp; Look out for gaps in your processes,
                                                and see if there are solutions to help you tighten them up with other
                                                technological tools.
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <ul>
                                            <li aria-level={1}>
                                                <strong>Create Product Briefs</strong>
                                            </li>
                                        </ul>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Without the right context and guardrails in place, product development
                                                can quickly expand beyond its original scope. A comprehensive product
                                                brief is one of the best ways to do this. They align everyone's
                                                expectations and record the direction in which the product is heading.
                                            </span>
                                        </p>
                                        <p>&nbsp;</p>
                                        <ul>
                                            <li aria-level={1}>
                                                <strong>Organize Regular Meetings</strong>
                                            </li>
                                        </ul>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                Throughout your product development journey, you should organize regular
                                                meetings for your development team to keep everyone informed about
                                                what's going on. As part of the project management process, these
                                                meetings serve as a valuable check and balance to ensure all is on
                                                track.
                                            </span>
                                        </p>
                                        <p>
                                            <br />
                                            <br />
                                        </p>
                                        <p>
                                            <strong>Final Thoughts</strong>
                                        </p>
                                        <p>&nbsp;</p>
                                        <p>
                                            <span style={{ fontWeight: 400 }}>
                                                There you have it, some core principles for building and managing an
                                                effective product development team.&nbsp; Implementing these and
                                                focusing on the key action steps will elevate your digital product
                                                development to a whole new level. Operationally, few things will deliver
                                                a better return on investment than getting your product development team
                                                on the same page.&nbsp; We recommend rethinking your processes and
                                                implementing these best practices as soon as possible. If you're looking
                                                for a tool that will help you optimize your product and design
                                                development, then check out{" "}
                                            </span>
                                            <a className='hightlight_1' href="https://braininventory.com/">
                                                <span style={{ fontWeight: 400 }}>BrainInventory</span>
                                            </a>
                                            <span style={{ fontWeight: 400 }}>!</span>
                                        </p>
                                    </>
                                </div>
                                <div>
                                    <div className='p-6 bg-gray-dc mt-8'>
                                        <h3 className='text-xl Gilroy-Bold mb-4'>Hire Dedicated Remote Developers from Brain Inventory</h3>
                                        <p className='text-sm'>Onboard <span className='color-hightlight'>dedicated remote developers</span> to your project as quickly as in 2 days. If at any point in time, you feel the developer is not performing as per expectation, you can ask for replacement or end the contract with 0 penalty.</p>
                                    </div>

                                    <div className='p-6 bg-gray-dc mt-8'>
                                        <h3 className='text-xl Gilroy-Bold mb-4'>Popular Blogs</h3>
                                        {post.length === 0 ? (
                                            <h2>No added posts</h2>
                                        ) : (
                                            <ul>
                                                {post.slice(0, 6).map((post, i) => (
                                                    <Featured post={post} key={i} />
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <KeepInTouch />
                    <LocateUs />
                    <LetsKick />
                    <Footer />
                </div>

            }
        </>
    );
}

export async function getServerSideProps(ctx) {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    // request posts from api
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`);
    // extract the data
    let data = await response.json();

    return {
        props: {
            post: data['message'],
        },
    };
}
