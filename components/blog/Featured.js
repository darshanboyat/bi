import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import HomeButton from '../buttons/HomeButton';


export default function Featured({ post }) {
    // const [publishing, setPublishing] = useState(false);
    // const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    const truncate = (str, n) => {
        return str.length > 50 ? str.substring(0, 70) + "..." : str;
    };

    return (
        <>
            <div className='flex item-center mb-4'>
                <div className='flex-none w-24 h-14'>
                    <img src={post.image} className='set-width' alt="brain inventory best rating and reviews on Good Firm" />
                </div>
                <div className='pl-2 pr-2'>
                    <h3 className='text-lg Gilroy-Bold'>{post.title}</h3>
                </div>
            </div>
        </>
    );
}