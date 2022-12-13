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


export default function BlogDetail3({ post }) {

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
                        <title></title>
                    </Head>
                    <Header></Header>

                    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
                        <div className="container pt-12 padding-left-all-section">
                            <div className='grid grid-cols-3 gap-4'>
                                <div className='col-span-2 mt-8'>
                                    <h3 className='text-2xl Gilroy-Bold mb-4'>IT Staff Augmentation vs Outsourcing: Which Is the Best Option for Your Business</h3>
                                    <img src="/images/Thumbnail-3.png" className="w-full" />
                                    <span className='flex mt-2 mb-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                        </svg>
                                        <label className='pl-2'>
                                            <small className='text-sm color-gray'>5 hours ago</small>
                                        </label>
                                    </span>

                                    <p className='mb-3'>Many businesses face the same dilemma when it comes to IT solutions: should you opt for staff augmentation or outsourcing? Although both of these strategies can be beneficial in certain contexts, they are not the same. Staff augmentation involves bringing on temporary employees to help with specific projects. On the other hand, outsourcing involves enlisting third-party services to handle your company’s entire IT infrastructure. In this blog, we will describe the differences between staff augmentation and outsourcing, as well as their pros and cons. It is important that before making such an important decision, businesses carefully weigh up all of their options - and make sure that whatever method they choose is best for them long term. </p>


                                    <p className='Gilroy-Bold text-lg mb-4'>IT Staff Augmentation vs Outsourcing: Which Is the Best Option for Your Business?
                                    </p>
                                    <p>
                                        The IT industry has grown significantly in the post-COVID era. As technology and software evolve, companies are looking for ways to reduce costs and increase efficiency.  According to Statista, outsourcing generated about $395 billion in revenue in 2022. There has been an upward trend towards outsourcing your IT team or augmenting staff with temporary or contract workers. This can be seen as a way to cut costs and improve efficiency and increase flexibility. There are pros and cons to both outsourcing and staffing augmentation. In this blog, we have compared the two outsourcing strategies most frequently used by businesses staff augmentation and outsourcing. Let’s find out which is best for your business.

                                    </p>
                                    <p className='Gilroy-Bold text-lg mb-4 mt-4'>What Sets Staff Augmentation And Outsourcing Apart?

                                    </p>
                                    <p>IT&nbsp;<a className='hightlight_1' href="https://braininventory.com/hire-dedicated-remote-developers">staff augmentation</a> is a form of outsourcing that is used to upgrade and upskill your software development team and increase their ability to meet business objectives. Without the liabilities associated with contract employees, you can increase the number of dedicated professionals in your development team on a short- and long-term contract basis.</p>
                                    <p><br /></p>
                                    <p>Whereas, the practice of hiring a third party from outside a business to carry out tasks or create products previously completed in-house by the business&apos;s employees and staff is known as outsourcing. Outsourcing companies are more accountable for the project&apos;s quality and outcome. To achieve a successful relationship while outsourcing, it is crucial for both businesses to function on a foundation of mutual trust.</p>

                                    <p>
                                        <br />
                                    </p>
                                    <img src='/images/blog_34.png' className='w-full mb-4' />
                                    <p className='Gilroy-Bold text-lg'>
                                        <strong>Pros and Cons Of Staff Augmentation Services</strong>
                                    </p>

                                    <p className='mt-3 mb-4 Gilroy-Bold text-xl'>Pros:</p>
                                    <ol className='under-list-para'>
                                        <li>
                                            <p className='Gilroy-Bold'>Cost-Effective:</p>
                                            <p>
                                            The cost of a software engineer is expensive, so augmenting it can be a
                                            great way to reduce costs.
                                            </p>
                                        </li>
                                      
                                    </ol>
                                    <p />
                                    <ol className='under-list-para' start={2}>
                                        <li>
                                            <p className='Gilroy-Bold'>Efficient Work:</p>
                                            <p >   IT staff needs to learn new skills, especially in areas that are not
                                            their core product knowledge. Adding more people to the training will
                                            help them improve their product knowledge faster.</p>
                                        </li>
                                    
                                    </ol>
                                    <p />
                                    <ol className='under-list-para' start={3}>
                                        <li>
                                            <p className='Gilroy-Bold'>Managing Workload:</p>
                                            <p>IT staff is not always available when needed, so adding more people to
                                            the team can help with the workload.</p>
                                        </li>
                                      
                                    </ol>
                                    <p />
                                    <p>
                                        <br />
                                    </p>
                                    <p className='mb-4 Gilroy-Bold text-xl'>Cons:</p>
                                    <ol className='under-list-para'>
                                        <li>
                                            <p className='Gilroy-Bold'>Lengthy Training Process:</p>
                                            <p>  <a className='hightlight_1' href="https://braininventory.com/hire-dedicated-remote-developers">
                                                Staff augmentation services
                                            </a>{" "}
                                            are beneficial, but it takes time to train someone new on how to use
                                            your systems, and that training process can be costly in terms of both
                                            money and manpower.</p>
                                        </li>
                                      
                                    </ol>
                                    <p />
                                    <ol className='under-list-para' start={2}>
                                        <li>
                                            <p className='Gilroy-Bold'>Impulse Hiring:</p>
                                            <p>     IT&nbsp;<a className='hightlight_1' href="https://braininventory.com/">staff augmentation</a> can
                                            also lead you to hire people who are not as qualified as they first
                                            appear. You may end up with someone who has no idea how to do their job
                                            well—or perhaps even worse, someone who's not willing or able to learn
                                            what they need to know.</p>
                                        </li>
                                     
                                    </ol>
                                    <p />
                                    <ol className='under-list-para' start={3}>
                                        <li>
                                            <p className='Gilroy-Bold'>Cost Over Time:</p>
                                            <p>  Increasing your capacity could result in higher labor costs if it turns
                                            out to be a longer-term undertaking than you had anticipated.</p>
                                        </li>
                                      
                                    </ol>
                                    <p />
                                    <p>
                                        <br />
                                    </p>
                                    <img src='/images/blog_33.png' className='w-full mb-4' />
                                    <p className='Gilroy-Bold text-lg'>Pros and Cons Of&nbsp;IT Staff Outsourcing Services</p>
                                    <p>
                                        <br />
                                    </p>
                                    <p className='mb-4 Gilroy-Bold text-xl'>Pros:</p>
                                    <ol className='under-list-para'>
                                        <li>
                                            <p className='Gilroy-Bold'>Low Investment Costs:&nbsp;</p>
                                            <p>  You don't have to buy the equipment, software, and services that you
                                            need. Instead, you can rent these things from a vendor that specializes
                                            in IT outsourcing. This can help you save your business a lot.&nbsp;</p>
                                        </li>
                                     
                                    </ol>
                                    <p />
                                    <ol  className='under-list-para' start={2}>
                                        <li>
                                            <p className='Gilroy-Bold'>Saves Time:&nbsp;</p>
                                            <p>  With outsourcing, you don't need to worry about finding people who are
                                            good at what they do—the vendor does it for you! You just have to focus
                                            on making sure that your company is running smoothly and that your
                                            employees have everything they need to do their jobs well.</p>
                                        </li>
                                       
                                    </ol>
                                    <p />
                                    <ol  className='under-list-para' start={3}>
                                        <li>
                                            <p className='Gilroy-Bold'>Reduces Risk:&nbsp;</p>
                                            <p>
                                            In&nbsp;
                                            <a className='hightlight_1' href="https://braininventory.com/hire-dedicated-remote-developers">
                                                IT staff outsourcing services
                                            </a>
                                            , there is less chance that something will go wrong because fewer people
                                            are involved in the process. For example, if an employee fails to
                                            perform his duties, it would be easier to fix this mistake with help
                                            from someone else who understands how things work at your business.
                                            </p>
                                        </li>
                                      
                                    </ol>
                                    <p />
                                    <p>
                                        <br />
                                    </p>
                                    <p className='Gilroy-Bold text-lg'>Cons:</p>
                                    <ol  className='under-list-para'>
                                        <li>
                                            <p className='Gilroy-Bold'>Quality:&nbsp;</p>
                                            <p>  IT staff outsourcing services will only sometimes result in high-quality
                                            and timely services, as there are many factors that affect the quality
                                            of a service provider. This includes their experience and how much time
                                            they spend on research and development before starting work on your
                                            project.</p>
                                        </li>
                                      
                                    </ol>
                                    <p />
                                    <ol  className='under-list-para' start={2}>
                                        <li>
                                            <p className='Gilroy-Bold'>Flexibility:</p>
                                            <p> A change in your outsourcing agreement may cause disagreements between
                                            the client and the service provider.</p>
                                        </li>
                                   
                                    </ol>
                                    <p />
                                    <ol  className='under-list-para' start={3}>
                                        <li>
                                            <p className='Gilroy-Bold'>Communication Problems:</p>

                                            <p>      Considering everything is discussed over audio and video calls,
                                            communication might be challenging. Any connectivity issue might result
                                            in a communication gap between the parties.</p>
                                        </li>
                                     
                                    </ol>
                                    <p />
                                    <p>
                                        <br />
                                    </p>


                                    <p>
                                        <br />
                                    </p>
                                    <p className='Gilroy-Bold text-lg  mb-4'>
                                        <strong>In conclusion:</strong>
                                    </p>

                                    <p>
                                        There is no one-size-fits-all answer to the question of whether IT staff augmentation or outsourcing is the best option for your business. However, there are a few factors to consider when making this decision. From the size of the project to your budget, to the experience you require. Weigh the pros and cons of each option and make the decision that is best for you.

                                    </p>

                                    <p className='mt-3'>If you&apos;re looking to expand your IT team, or find top talent to join your organization, book a call with<a className='hightlight_1' href="https://braininventory.com/">&nbsp;BrainInventory&nbsp;</a>today! Our team can help match you with the perfect candidates for the job.</p>
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
