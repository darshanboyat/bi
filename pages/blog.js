import React, { useState } from 'react';
import Head from 'next/head';
import LetsKick from '../components/common/LetsKick';
import Footer from '../components/common/Footer';
import KeepInTouch from '../components/common/keepInTouch'
import LocateUs from '../components/common/locateUs'
import Header from '../components/header/Header';
import Loader from '../components/common/loader'
import PostCard from '../components/blog/PostCard';
import PopularBlog from '../components/blog/popularblog';
import Featured from '../components/blog/Featured';

export default function Blog({  }) {
    
    const [loading, setLoading] = useState(true);
    React.useEffect(() => {
        // setLoading(true);
    //    posts.sort((a, b)=>{
    //           if(a.createdAt < b.createdAt ){
    //             return 1
    //           }else{
    //             return -1
    //           }
    //    })

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

                    <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
                        <div className='container padding-left-all-section'>
                            <h3 className='text-6xl pt-12 Gilroy-Bold'>Get inspired</h3>
                            <p className='text-sm pt-4'>We write about things that matter. Brain Inventory Blog is a compilation of expert articles that highlight the most important aspects of today‘s tech industry. Trends, reviews, analysis, issues - fresh and unbiased content that unites tech enthusiasts, IT decision-makers, and tech-savvy readers.</p>

                            <div>
                                 <h3 className='text-xl Gilroy-Bold mt-8 mb-3'>Popular Blogs</h3>

                                 <div className='grid grid-cols-3 gap-4'>
                                

                                 {/* {posts.length === 0 ? (
                                        <h2>No added posts</h2>
                                    ) : (
                                        <>
                                            {posts.slice(0,3).map((post, i) => ( */}
                                                <PopularBlog />
                                            {/* ))}
                                        </>
                                    )} */}
                                  
                                 </div>
                            </div>
                        </div>
                    </div>

                    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
                        <div className="container padding-left-all-section">
                            <div className='grid grid-cols-3 gap-4'>
                                <div className='col-span-2 '>
                                    {/* {posts.length === 0 ? (
                                        <h2>No added posts</h2>
                                    ): (
                                        <ul>
                                            {posts.map((post, i) => ( */}
                                                <PostCard/>
                                            {/* ))}
                                         </ul>
                                    )} */}
                                </div>
                                <div>
                                    <div className='p-6 bg-gray-dc mt-8'>
                                        <h3 className='text-xl Gilroy-Bold mb-4'>Hire Dedicated Remote Developers from Brain Inventory</h3>
                                        <p className='text-sm'>Onboard   <a className='' href="https://braininventory.com/hire-dedicated-remote-developers"><span className='color-hightlight'>dedicated remote developers</span></a> to your project as quickly as in 2 days. If at any point in time, you feel the developer is not performing as per expectation, you can ask for replacement or end the contract with 0 penalty.</p>
                                    </div>

                                    {/* <div className='p-6 bg-gray-dc mt-8'>
                                        <h3 className='text-xl Gilroy-Bold mb-4'>Popular Blogs</h3>
                                        {posts.length === 0 ? (
                                        <h2>No added posts</h2>
                                    ) : (
                                        <ul>
                                              {posts.slice(0,6).map((post, i) => (
                                                <Featured/> 
                                            ))}
                                        </ul>
                                    )} 
                                    </div> */}
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
//     let response = await fetch(`https://braininventory.com/api/posts`);
//     // extract the data
//     let data = await response.json();

//     return {
//         props: {
//             posts: data['message'],
//         },
//     };
// }
