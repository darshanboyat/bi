import { useState } from 'react';
import { useRouter } from 'next/router';
import HomeButton from '../buttons/HomeButton';
import moment from "moment";

export default function PostCard({ post }) {
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    console.log('sasd', post)

    // Publish post
    const publishPost = async (postId) => {
        setPublishing(true);
        try {
            await fetch('/api/posts', {
                method: 'PUT',
                body: postId,
            });
            setPublishing(false);
            return router.push(router.asPath);
        } catch (error) {
            return setPublishing(false);
        }
    };
    // Delete post
    const deletePost = async (postId) => {
        //change deleting state
        setDeleting(true);

        try {
            // Delete post
            await fetch('/api/posts', {
                method: 'DELETE',
                body: postId,
            });

            // reset the deleting state
            setDeleting(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // stop deleting state
            return setDeleting(false);
        }
    };

    const truncate = (str, n) => {
        return str.length > 250 ? str.substring(0, 170) + "..." : str;
	};

    const detail =(_id)=>{
        console.log(_id)
        router.push(`/blog/${_id}`)
   }

    return (
        <>
            <div className=''>
                <div className='flex custom-class'>
                <div className='w-1/2 mr-4'>
                    {/* <p>{post.image}</p> */}
                    <img src={post.image}
                     className='w-full h-68 object-cover rounded-lg' alt="brain inventory best rating and reviews on Good Firm" 
                     />

                </div>
                <div className='w-1/2'>
                <li>
                    <div className=''>
                        <div className=''>
                            <h3 className='text-2xl Gilroy-Bold'>{post.title}</h3>
                            <p className='text-sm mt-2'>
                            {truncate(post.content)}
                                </p>
                            <small className='text-sm color-gray'>{moment(post.createdAt).fromNow()}</small>
                            <br />
                            <div className='mt-4' onClick={()=>detail(post._id)}>
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

                </li>
                </div>
                </div>

              
            
            </div>
        </>
    );
}