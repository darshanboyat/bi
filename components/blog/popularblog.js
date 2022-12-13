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
         router.push(`/blog/how-to-build-and-manage-an-effective-product-development-team`)
    }

    const detail1 =()=>{
        router.push(`/blog/a-brief-overview-of-it-staff-augmentation`)
    }
    
    const detail2 =()=>{
        router.push(`/blog/it-staff-augmentation-vs-outsourcing-which-is-the-best-option-for-your-business`)
    }

    return (
        <>     
              <div onClick={detail} className='relative hover-overlay cursor-pointer'>
                
                <div className='overlay'>
                <img src="/images/Thumbnail.png" className='' alt="brain inventory best rating and reviews on Good Firm" />
                    
                </div>
        
                    <div className='absolute top-12'>
                        <div className='pl-2 pr-2'>
                            <h3 className='text-lg Gilroy-Bold'>How to Build and Manage An Effective Product Development Team
</h3>
                            <p className='text-sm mt-2 long-text'style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                {/* {post.content} */}
                                Building an effective product development team is essential to creating successful products...
                                {/* {truncate(post.content)} */}
                            </p>
                            <small className='text-sm color-gray'>5 hours ago</small>

                            <br />
                            <div className='mt-1' onClick={detail}>
                                 <HomeButton>
                                    <span className='text-sm'>Read More</span>
                                </HomeButton> 
                            </div>
                      
                        </div>
                    </div>
              </div>
              <div  onClick={detail1} className='hover-overlay relative cursor-pointer'>
                
                <div className='overlay'>
                <img src="/images/blog-2.png" className='' alt="brain inventory best rating and reviews on Good Firm" />
                    
                </div>
        
                    <div className='absolute  top-12'>
                        <div className='pl-2 pr-2'>
                            <h3 className='text-lg Gilroy-Bold'>A Brief Overview of IT Staff Augmentation

</h3>
                            <p className='text-sm mt-2 long-text'style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                This blog discusses IT staff augmentation as an effective means of improving an organization&lsquo;s...
                            </p>
                            <small className='text-sm color-gray'>1 hours ago</small>

                            <br />
                            <div className='mt-1' onClick={detail1}>
                                 <HomeButton>
                                    <span className='text-sm'>Read More</span>
                                </HomeButton> 
                            </div>
                      
                        </div>
                    </div>
              </div>
              <div  onClick={detail2} className='hover-overlay relative cursor-pointer'>
                
                <div className='overlay'>
                <img src="/images/Thumbnail-3.png" className='' alt="brain inventory best rating and reviews on Good Firm" />
                    
                </div>
        
                    <div className='absolute  top-12'>
                        <div className='pl-2 pr-2'>
                            <h3 className='text-lg Gilroy-Bold'>IT Staff Augmentation vs Outsourcing: Which Is the Best Option for Your Business

</h3>
                            <p className='text-sm mt-2 long-text'style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                {/* {post.content} */}
                                Many businesses face the same dilemma when it comes to IT solutions: should you opt for staff...
                                {/* {truncate(post.content)} */}
                            </p>
                            <small className='text-sm color-gray'>1 hours ago</small>

                            <br />
                            <div className='mt-1' onClick={detail2}>
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