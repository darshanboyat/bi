import React, { Component } from 'react';
import $ from 'jquery';

class Industries extends Component {
    componentDidMount = () => {
        $('.industries_list li').hover(function () {
            var tab_id = $(this).attr('data-tab');
            $('.industries_list li').removeClass('current');
            $('.tab-content_i').removeClass('current');
            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });
    }
    render() {
        return (
            <div className='2xl:p-10 p-8 2xl:space-y-8 space-y-6'>
                <div className='container padding-left-all-section relative'>
                <div>
                    <h2 className='Gilroy-Bold text-4xl'>industries we serve</h2>
                </div>
                     <div className=''>
                         <div className=''>
                        <div id="tab-1" className="tab-content_i current">  
                            <img src="/images/I-1.png" className="img_industry_1" />
                        </div>
                      <div id="tab-2" className="tab-content_i">
                        <img src="/images/I-2.png" className="img_industry_1" />     
                      </div>
                      <div id="tab-3" className="tab-content_i">
                       <img src="/images/I-3.png" className="img_industry_1" />                    
                      </div>
                      <div id="tab-4" className="tab-content_i">
                       <img src="/images/I-4.png" className="img_industry_1" />                    
                      </div>
                      <div id="tab-5" className="tab-content_i">
                       <img src="/images/I-5.png" className="img_industry_1" />                    
                      </div>
                      <div id="tab-6" className="tab-content_i">
                       <img src="/images/I-5.png" className="img_industry_1" />                    
                      </div>
                         </div>
                         <div className=''>
                            <ul className="industries_list absolute top-0 left-[30rem]">
                                <li data-tab="tab-1" className="hover-link current">
                                    Custom Fantasy Sports
                                </li>
                                <li data-tab="tab-2" className="hover-link">
                                    Sports Betting Solution
                                </li>
                                <li data-tab="tab-3" className="hover-link">
                                    Custom Social Networks
                                </li>
                                <li data-tab="tab-4">
                                    Healthcare Solutions
                                </li>
                                <li data-tab="tab-5">
                                    eLearning & Lms
                                </li>
                                <li data-tab="tab-6">
                                    On-Demand Solution
                                </li>

                            </ul>
                         </div>
                     </div>
                </div>
            </div>
        );
    }
}

export default Industries;