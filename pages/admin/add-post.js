import { useState } from 'react';
import HomeButton from '../../components/buttons/HomeButton';
import styles from '../../styles/Home.module.css';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

export default function AddPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [tag, setTag] = useState('');
    const [heading1, setHeading1] = useState('')
    const [heading2, setHeading2] = useState('')
    const [pdescription, setPdescription ] = useState('')
    const [pdescription1, setPdescription1 ] = useState('')
    const [blogimage, setBlogimage] = useState('')
    const [blogimage1, setBlogimage1] = useState('')
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handlePost = async (e) => {
      
        // reset error and message
        setError('');
        setMessage('');

        // fields check
        if (!title || !content) return setError('All fields are required');

        // post structure
        let post = {
            title,
            content,
            published: false,
            tag,
            image: image,
            heading1,
            pdescription,
            heading2,
            pdescription1,
            blogimage: blogimage,
            blogimage1: blogimage1,
            createdAt: new Date().toISOString(),
        };

  
        let response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(post),
        });

        // get the data
        let data = await response.json();
        if (data.success) {
            // reset the fields
            setTitle('');
            setContent('');
            setTag('');
            setImage('');
            setHeading1('');
            setHeading2('');
            setPdescription('');
            setPdescription1('');
            setBlogimage('')
            // set the message
            return setMessage(data.message);
        } else {
            // set the error
            return setError(data.message);
        }
    };

    const handleChange = (e) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        // reader.onloadend = () => {
        //     const base64String = reader.result
        //         .replace('data:', '')
        //         .replace(/^.+,/, '');
        //     console.log(base64String);
        //     setImage(base64String)
        // };
        
        reader.onloadend = () => {
            console.log(reader.result);
            setImage(reader.result)
            // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
        };
        reader.readAsDataURL(file);

        

    }

    const handleChange1 = (e) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            console.log(reader.result);
            setBlogimage(reader.result)
        };
        reader.readAsDataURL(file);

        

    }
    const handleChange2 = (e) =>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            console.log(reader.result);
            setBlogimage1(reader.result)
        };
        reader.readAsDataURL(file);

        

    }

    return (
        <div>
            <h1 className='text-center text-xl Gilroy-Bold pt-4'>Brain Inventory Blog upload page</h1>
            <div className={styles.container}>
                <form onSubmit={handlePost} className={styles.form}>
                    {error ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.error}>{error}</h3>
                        </div>
                    ) : null}
                    {message ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.message}>{message}</h3>
                        </div>
                    ) : null}
                    <div className={styles.formItem}>
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            placeholder="title"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Content</label>
                        {/* <ReactQuill theme="snow"  value={content} onChange={(e) => setContent(e.target.value)} /> */}
                         <textarea
                            name="content"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            className="h-40"
                            placeholder="Post content"
                        /> 
                    </div>

                    <div className={styles.formItem}>
                        <label>Tag</label>
                        <input
                            type="text"
                            name="tag"
                            onChange={(e) => setTag(e.target.value)}
                            value={tag}
                            placeholder="tag"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Upload Image</label>
                        <input type='file'
                        name='image'
                        required
                        accept="image/png, image/gif, image/jpeg"
                        onChange={(e)=> handleChange(e)}
                        />
                        
                    </div>

                         <p className='Gilroy-Bold text-2xl pt-2 pb-2'>Blog Decriptiion Content</p>
                    <div className={styles.formItem}>
                         <label>Blog Heading 1</label>
                        <input
                            type="text"
                            name="heading1"
                            onChange={(e) => setHeading1(e.target.value)}
                            value={heading1}
                            placeholder=""
                        />
                    </div>
                    <div className={styles.formItem}>
                         <label>Blog description</label>
                         <textarea
                            name="pdescription"
                            onChange={(e) => setPdescription(e.target.value)}
                            value={pdescription}
                            className="h-40"
                            placeholder="Post content"
                        /> 
                    </div>
                    <div className={styles.formItem}>
                         <label>Blog Heading 1</label>
                        <input
                            type="text"
                            name="heading2"
                            onChange={(e) => setHeading2(e.target.value)}
                            value={heading2}
                            placeholder=""
                        />
                    </div>
                    <div className={styles.formItem}>
                         <label>Blog description</label>
                         <textarea
                            name="pdescription1"
                            onChange={(e) => setPdescription1(e.target.value)}
                            value={pdescription1}
                            className="h-40"
                            placeholder="Post content"
                        /> 
                    </div>
                    <div className={styles.formItem}>
                        <label>Image</label>
                        <input type='file'
                        name='blogimage'
                        
                        accept="image/png, image/gif, image/jpeg"
                        onChange={(e)=> handleChange1(e)}
                        />
                        
                    </div>
                    <div className={styles.formItem}>
                        <label>Image</label>
                        <input type='file'
                        name='blogimage1'
                        
                        accept="image/png, image/gif, image/jpeg"
                        onChange={(e)=> handleChange2(e)}
                        />
                        
                    </div>
                    <div className={styles.formItem}>
                        <HomeButton  type="submit">
                            <span>Add Post</span>
                        </HomeButton>
                    </div>
                </form>
            </div>
        </div>
    );
}