import React, { useState } from 'react';
import Head from 'next/head';
import LetsKick from '../../components/common/LetsKick';
import Footer from '../../components/common/Footer';
import KeepInTouch from '../../components/common/keepInTouch'
import LocateUs from '../../components/common/locateUs'
import Header from '../../components/header/Header';
import Loader from '../../components/common/loader'
import { useRouter } from 'next/router'
// import moment from "moment";

import Featured from '../../components/blog/Featured'


export default function BlogDetail2({ post }) {

    const [loading, setLoading] = useState(true);
    const router = useRouter()
    // const [data, setData] = useState([])
    // Publish post




    React.useEffect(() => {
        // setLoading(true);
        // console.log(router.query.blogId)
        // var check = post.filter(post => post._id == router.query.blogId)
        // console.log(check[0])
        // setData(check[0])
        setTimeout(() => setLoading(false), 2000);
    }, []);

    return (
        <>
            {loading ?
                <Loader />
                :
                <div>
                    <Head>
                    <title>Brain Inventory Blogs</title>
                    </Head>
                    <Header></Header>

                    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
                        <div className="container pt-12 padding-left-all-section">
                            <div className='grid grid-cols-3 gap-4'>
                                <div className='col-span-2 mt-8'>
                                    <h3 className='text-2xl Gilroy-Bold mb-4'>A Brief Overview of IT Staff Augmentation</h3>
                                    <img src="/images/blog-2.png" className="w-full" />
                                    <span className='flex mt-2 mb-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                        </svg>



                                        <label className='pl-2'>
                                            <small className='text-sm color-gray'>5 hours ago</small>

                                        </label>

                                    </span>

                                    <p className='mb-3'> <strong className='Gilroy-Bold'>Quick Summary:</strong> This blog discusses IT staff augmentation as an effective means of improving an organization&lsquo;s IT capabilities and ensuring your organization receives the best IT personnel when needed and continues achieving ambitious growth objectives. Organizations can hire experienced professionals on demand without the costs associated with full-time employment through IT staff augmentation, a cost-effective and reliable staffing solution. Learn how companies can augment their IT staff when they need specialized skills or extra capacity. Also, discover the three main benefits companies can gain from IT staff augmentation. </p>

                                    <p>
                                        As emerging technologies are opening up newer possibilities for
                                        organizations, they are in the quest of hunting skilled professionals to
                                        leverage these new-age tools. According to Statista, 66% of enterprises
                                        have flagged talent shortage as a challenge to their growth. Under such
                                        circumstances,&nbsp;
                                        <a className='hightlight_1' href="https://braininventory.com/hire-dedicated-remote-developers">
                                            IT staff augmentation
                                        </a>{" "}
                                        has come up as a prominent and affordable solution to enable businesses to
                                        meet their IT needs.
                                    </p>
                                    <p>
                                        <br />
                                    </p>

                                    <p>
                                        IT staff augmentation provides a middle ground for businesses between
                                        recruiting full-time employees and outsourcing IT services. It is the
                                        process of integrating one or more outside specialists into your existing
                                        IT team on a contractual basis, which can be either long-term or
                                        short-term.
                                    </p>
                                    <p>
                                        <br />
                                    </p>
                                    <img src="/images/blog__2.png" className="w-full mb-3" />

                                    <p className='Gilroy-Bold text-lg'>Why Choose IT Staff Augmentation For Your Company?</p>
                                    <p>
                                        <br />
                                    </p>
                                    <p>
                                        When considering&nbsp;
                                        <a  className='hightlight_1' href="https://braininventory.com/hire-dedicated-remote-developers">
                                            IT staff augmentation
                                        </a>{" "}
                                        for your company, there are some advantages coming your way.
                                    </p>
                                    <p>
                                        <br />
                                    </p>
                                    <ul className='under-list-para'>
                                        <li>
                                            <p>
                                                <strong>Access To Global Talent</strong>:&nbsp;
                                                <a className='hightlight_1' href="https://braininventory.com/">Staff augmentation companies</a>{" "}
                                                offer IT professionals from across different corners of the world. It
                                                enables businesses to leverage the skills of professionals without
                                                being restricted to just local talents.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>Expertise</strong>:&nbsp;You may already have an IT team but
                                                you may need a specialist for a specific technological domain for a
                                                project.&nbsp;
                                                <a  className='hightlight_1' href="https://braininventory.com/hire-dedicated-remote-developers">
                                                    IT staff augmentation
                                                </a>{" "}
                                                enables you to hire a specialist for that specific domain without
                                                bearing the responsibility of a full-time employee.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>Flexibility</strong>:&nbsp;When companies require an IT
                                                professional for a certain project, this option provides them with the
                                                flexibility to hire talent for a number of months or until the project
                                                ends. The contract can be adjusted as per your business needs.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>Greater Control</strong>:&nbsp;A professional acquired
                                                through&nbsp;IT staff augmentation&nbsp;serves as your employee and
                                                has to abide by all the company rules. It also eliminates security
                                                issues.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>Cost-Savings</strong>:&nbsp;Although the professional acts as
                                                an employee of your company, you do not need to bear the extra
                                                expenses such as PF, allowances, etc. It indeed unleashes a great
                                                cost-saving opportunity.
                                            </p>
                                        </li>
                                    </ul>
                                    <p>
                                        <br />
                                    </p>
                                    <p className='Gilroy-Bold text-lg'>
                                        <strong>When To Consider IT Staff Augmentation For Your Company?</strong>
                                    </p>
                                    <p>You can opt for IT staff augmentation services when</p>
                                    <ul className='under-list-para mt-4'>
                                        <li>
                                            <p>You have a lower budget for specialized skill</p>
                                        </li>
                                        <li>
                                            <p>You desire to expand your IT team flexibly</p>
                                        </li>
                                        <li>
                                            <p>There is a lack of local talent</p>
                                        </li>
                                        <li>
                                            <p>You require specific skills for one or two projects</p>
                                        </li>
                                    </ul>
                                    <p>
                                        <br />
                                    </p>
                                    <p className='Gilroy-Bold text-lg'>
                                        <strong>3 Perks Of IT Staff Augmentation</strong>
                                    </p>
                                    <p>
                                        <br />
                                    </p>
                                    <p>
                                        A company gains a competitive edge through the flexibility&nbsp;IT staff
                                        augmentation&nbsp;services offer. Here are the top 3 advantages that a
                                        company enjoys with this outsourcing strategy.
                                    </p>
                                    <p>
                                        <br />
                                    </p>
                                    <ul className='under-list-para'>
                                        <li style={{ fontWeight: "bold" }}>
                                            <p>
                                                <strong>Accelerates Hiring Cycle</strong>
                                            </p>
                                        </li>
                                    </ul>
                                
                                    <p className='ml-8 mb-3'>
                                        You do not need to go through a lengthy hiring process to find an eligible
                                        candidate. It saves significant time and money as the staff augmentation
                                        company hands you the required talent.
                                    </p>
                                  
                                    <ul className='under-list-para'>
                                        <li style={{ fontWeight: "bold" }}>
                                            <p>
                                                <strong>Optimizes Resource Allocation</strong>
                                            </p>
                                        </li>
                                    </ul>
                                 
                                    <p className='ml-8 mb-3'>
                                        It unburdens your team from the extra tasks so that they can focus on
                                        their core duties. This brings greater productivity and enhanced
                                        efficiency.
                                    </p>
                                 
                                    <ul className='under-list-para'>
                                        <li style={{ fontWeight: "bold" }}>
                                            <p>
                                                <strong>Cuts Down Software Development Costs</strong>
                                            </p>
                                        </li>
                                    </ul>
                                  
                                    <p className='ml-8 mb-3'>
                                        With high-salaried full-time employees, software development costs also
                                        increase. Substituting with&nbsp;
                                        <a className='hightlight_1' href="https://braininventory.com/">
                                            software development staff augmentation
                                        </a>
                                        , you can lower the costs by saving more on contractual employees.
                                    </p>
                                    <p>
                                        <br />
                                    </p>
                                    <p className='Gilroy-Bold text-lg'>
                                        <strong>Final Thoughts</strong>
                                    </p>
                                    <p>
                                        <br />
                                    </p>
                                    <p>
                                        In the current business landscape, &nbsp;companies are striving to
                                        maximize their capabilities without straining their
                                        business. If you have been struggling to enhance your IT capabilities without hiring high-cost full-time IT professionals, IT staff augmentation
                                        is the ideal strategy.
                                    </p>
                                </div>
                                <div>
                                    <div className='p-6 bg-gray-dc mt-8'>
                                        <h3 className='text-xl Gilroy-Bold mb-4'>Hire Dedicated Remote Developers from Brain Inventory</h3>
                                        <p className='text-sm'>Onboard <span className='color-hightlight'>dedicated remote developers</span> to your project as quickly as in 2 days. If at any point in time, you feel the developer is not performing as per expectation, you can ask for replacement or end the contract with 0 penalty.</p>
                                    </div>

                                    <div className='p-6 bg-gray-dc mt-8'>
                                        <h3 className='text-xl Gilroy-Bold mb-4'>Popular Blogs</h3>
                                        {/* {post.length === 0 ? (
                                            <h2>No added posts</h2>
                                        ) : (
                                            <ul>
                                                {post.slice(0, 6).map((post, i) => (
                                                    <Featured post={post} key={i} />
                                                ))}
                                            </ul>
                                        )} */}
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

// export async function getServerSideProps(ctx) {
//     // get the current environment
//     let dev = process.env.NODE_ENV !== 'production';
//     let { DEV_URL, PROD_URL } = process.env;

//     // request posts from api
//     let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts`);
//     // extract the data
//     let data = await response.json();

//     return {
//         props: {
//             post: data['message'],
//         },
//     };
// }
