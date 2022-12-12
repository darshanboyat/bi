import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import HomeButton from '../buttons/HomeButton';
import moment from "moment";


export default function PopularBlog({ post }) {
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();
    // Publish post
    const publishPost = async (postId) => {
        setPublishing(true);
        try {
            // Update post
            await fetch('/api/posts', {
                method: 'PUT',
                body: postId,
            });

            // reset the publishing state
            setPublishing(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // Stop publishing state
            return setPublishing(false);
        }
    };

    const truncate = (str, n) => {
        return str.length > 50 ? str.substring(0, 70) + "..." : str;
	};

    const detail =(_id)=>{
         console.log(_id)
         router.push(`/blog/${_id}`)
    }
    return (
        <>
        
             
              <div className='relative'>
                
                <div className='overlay'>
                <img src={post.image} className='' alt="brain inventory best rating and reviews on Good Firm" />
                    
                </div>
        
                    <div className='absolute bottom-0'>
                        <div className='pl-2 pr-2'>
                            <h3 className='text-lg Gilroy-Bold'>{post.title}</h3>
                            <p className='text-sm mt-2 long-text'style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                {/* {post.content} */}
                                {truncate(post.content)}
                            </p>
                            <small className='text-sm color-gray'>{moment(post.createdAt).fromNow()}</small>
                            <br />
                            <div className='mt-1' onClick={()=>detail(post._id)}>
                                 <HomeButton>
                                    <span className='text-sm'>Read More</span>
                                </HomeButton> 
                            </div>
                      
                        </div>
                    </div>
              </div>

         

        </>
    );
}