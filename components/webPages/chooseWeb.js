import React, { Component } from 'react';

class ChooseWeb extends Component {
    render() {
        return (
            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
            <div className='container'>
            <div>
                <h2 className='Gilroy-Bold lg:text-4xl pb-8 text-3xl text-white pt-8'>
                why choose brain inventory for <br/> web application development
                </h2>
                <p className='mb-8'>We have successfully delivered 4000+ web development projects and know how the web development process works. Hidden Brains offers web application development services to help clients connect with customers and improve efficiency with speed and certainty.</p>
            </div>
            <div className='lg:grid lg:grid-cols-4 gap-0'>

                <div className='bg-development-simply-culture mb-4 lg-mb-0'>
                    <h2>90% On time Delivery</h2>
                    <p>
                    We work on the latest frameworks and technologies to deliver you user-friendly, scalable, secure, and new business solutions as per your need.
                    </p>
                </div>

                <div className='bg-development-simply-culture mb-4 lg-mb-0'>
                    <h2>20+ Industries Served</h2>
                    <p>We work on the latest frameworks and technologies to deliver you user-friendly, scalable, secure, and new business solutions as per your need.</p>
                </div>

                <div className='bg-development-simply-culture mb-4 lg-mb-0'>
                    <h2>17+ Years of exprience</h2>
                    <p>
                    We have a dedicated team of mobile app developers who are well versed in delivering high-end business solutions on several frameworks and technologies.
                    </p>
                </div>

                <div className='bg-development-simply-culture mb-4 lg-mb-0'>
                    <h2>170+ Experts for web apps</h2>
                    <p>
                    We respect your ideas and vision, provide you every small project detail regularly, and consider your worthy advice when and as needed.
                    </p>
                </div>
   
            </div>
            </div>
        </div>
        );
    }
}

export default ChooseWeb;