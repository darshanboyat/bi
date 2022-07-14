import React, { Component } from 'react';

class Pratice extends Component {
    render() {
        return (
            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
               <div className='container padding-left-all-section'>
                 <h2 className='text-4xl pb-6 Gilroy-Bold'>best practices that we follow</h2>
                 <p className='text-2xl Gilroy-Bold'>The way we design to engage users</p>
                 <div className='grid grid-cols-3'>
                     <div>
                         <ul>
                             <li>Attention to Memory Limitations</li>
                             <li>Ease of Default Keyboard</li>
                             <li>Attention to Security</li>
                             <li>Using Optimized Images</li>
                             <li>Convenient UI Elements</li>
                             <li>Optimized Battery Consumption</li>
                             <li>Version Support</li>
                             <li>Screen Variance & Compatibility</li>
                             <li>High & Quality Performance</li>
                             <li>Offline Mode Importance</li>
                         </ul>
                     </div>
                 </div>
               </div>
            </div>
        );
    }
}
export default Pratice;