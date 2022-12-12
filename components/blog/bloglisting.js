import React, { useState } from 'react';
import PostCard from './PostCard';

// const BlogsL = [
//     {
//         id: '1',
//         title: ' ',
//         description: 'The crypto market is flourishing. With increased awareness and a shift to the digital currency realm, there’s no denying that crypto traders can easily make a living by trading their investments.',
//         time: '8 hours ago',
//     }

// ]
export default function BlogListing({posts}) {


    return (

        <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
            <div className='container padding-left-all-section'>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <div className='flex'>
                            <div></div>
                            <div>
                                {posts.length === 0 ? (
                                    <h2>No added posts</h2>
                                ) : (
                                    <ul>
                                        {posts.map((post, i) => (
                                            <PostCard post={post} key={i} />
                                        ))}
                                    </ul>
                                )}
                           
                            </div>
                        </div>
                    </div>
                    <div className="">03</div>
                </div>
            </div>

        </div>


    )
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
            posts: data['message'],
        },
    };
}