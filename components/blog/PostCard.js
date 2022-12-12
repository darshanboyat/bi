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

    const detail =(_id)=>{
        console.log(_id)
        router.push(`/blog/blog-detail`)
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
                            At the center of every company, product development is a crucial component that helps it achieve long-term success. No matter what industry you are in, your ability to develop, validate, and launch new products is crucial.
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
        </>
    );
}