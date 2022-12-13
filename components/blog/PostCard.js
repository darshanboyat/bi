import { useState } from 'react';
import { useRouter } from 'next/router';
import HomeButton from '../buttons/HomeButton';
import moment from "moment";

export default function PostCard({ post }) {
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    console.log('sasd', post)



    // const truncate = (str, n) => {
    //     return str.length > 250 ? str.substring(0, 170) + "..." : str;
    // };

    const detail = (_id) => {
        router.push(`/blog/blog-detail-1`)
    }

    const detail1 = (_id) => {
        router.push(`/blog/blog-detail-2`)
    }

    const detail2 = (_id) => {
        router.push(`/blog/blog-detail-3`)
    }

    return (
        <>
            <div className=''>
                <div className='flex custom-class'>
                    <div className='w-1/2 mr-4'>
                        {/* <p>{post.image}</p> */}
                        <img src="/images/Thumbnail.png"
                            className='w-full h-68 object-cover rounded-lg' alt="brain inventory best rating and reviews on Good Firm"
                        />

                    </div>
                    <div className='w-1/2'>

                        <div className=''>
                            <div className=''>
                                <h3 className='text-2xl Gilroy-Bold'>How to Build and Manage An Effective Product Development Team
                                </h3>
                                <p className='text-sm mt-2'>
                                    {/* {truncate(post.content)} */}
                                    At the center of every company, product development is a crucial component that helps it achieve long-term success. No matter what industry you are in, your ability....
                                </p>
                                <small className='text-sm color-gray'>5 hours ago</small>
                                <br />
                                <div className='mt-4' onClick={detail}>
                                    <HomeButton >
                                        <span className='text-sm'>Read More</span>
                                    </HomeButton>
                                </div>
                                {/* {!post.published ? (
                    <button type="button" onClick={() => publishPost(post._id)}>
                        {publishing ? 'Publishing' : 'Publish'}
                    </button>
                ) : null}
                <button type="button" onClick={() => deletePost(post['_id'])}>
                    {deleting ? 'Deleting' : 'Delete'}
                </button> */}
                            </div>
                            <div></div>
                        </div>

                        {/* </li> */}
                    </div>
                </div>



            </div>
            <div className=''>
                <div className='flex custom-class'>
                    <div className='w-1/2 mr-4'>
                        {/* <p>{post.image}</p> */}
                        <img src="/images/blog-2.png"
                            className='w-full h-68 object-cover rounded-lg' alt="brain inventory best rating and reviews on Good Firm"
                        />

                    </div>
                    <div className='w-1/2'>

                        <div className=''>
                            <div className=''>
                                <h3 className='text-2xl Gilroy-Bold'>A Brief Overview of IT Staff Augmentation</h3>
                                <p className='text-sm mt-2'>
                                    {/* {truncate(post.content)} */}
                                    This blog discusses IT staff augmentation as an effective means of improving an organization's IT capabilities and ensuring your organization receives the best IT personnel when needed and continues achieving ambitious growth...                                </p>
                                <small className='text-sm color-gray'>1 hours ago</small>
                                <br />
                                <div className='mt-4' onClick={detail1}>
                                    <HomeButton >
                                        <span className='text-sm'>Read More</span>
                                    </HomeButton>
                                </div>

                            </div>
                            <div></div>
                        </div>

                        {/* </li> */}
                    </div>
                </div>



            </div>
            <div className=''>
                <div className='flex custom-class'>
                    <div className='w-1/2 mr-4'>
                        {/* <p>{post.image}</p> */}
                        <img src="/images/Thumbnail-3.png"
                            className='w-full h-68 object-cover rounded-lg' alt="brain inventory best rating and reviews on Good Firm"
                        />

                    </div>
                    <div className='w-1/2'>

                        <div className=''>
                            <div className=''>
                                <h3 className='text-2xl Gilroy-Bold'>IT Staff Augmentation vs Outsourcing: Which Is the Best Option for Your Business

                                </h3>
                                <p className='text-sm mt-2'>
                                    {/* {truncate(post.content)} */}
                                    Many businesses face the same dilemma when it comes to IT solutions: should you opt for staff augmentation or outsourcing...
                                </p>
                                <small className='text-sm color-gray'>1 hours ago</small>
                                <br />
                                <div className='mt-4' onClick={detail2}>
                                    <HomeButton >
                                        <span className='text-sm'>Read More</span>
                                    </HomeButton>
                                </div>

                            </div>
                            <div></div>
                        </div>

                        {/* </li> */}
                    </div>
                </div>



            </div>
        </>
    );
}