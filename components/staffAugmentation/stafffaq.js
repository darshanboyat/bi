import React, { Component } from "react";
import { useState } from "react/cjs/react.production.min";

const faqdetails = [
  {
    id: "1",
    title:"How much does it cost to hire a Dedicated Developer from Brain Inventory?",
    description: "Cost necessarily varies based on the skills you require. We offer a closed set of technology at which we really excel. Starting price for a monthly contract with Graffersid is at $1000 per month. Cost increase with years of experience and the technology requirement. It is extremely easy to upscale your team with Graffersid. Within 7 days you can onboard our developer to your team and with 1-month notice, you can end the contract. Our policies are extremely startup-friendly.",
  },
  {
    id: "2",
    title: "How will I communicate with the Developer?",
    description: "",
  },
  {
    id: "3",
    title: "I live in a different timezone from India, How will the developer work with me?",
    description: "",
  },
  {
    id: "4",
    title: "What happens when a developer is not working as per expectation?",
    description: "",
  },
  {
    id: "5",
    title: "If I terminate the contract what will happen to my advance payment?",
    description: "",
  },
];
function StafFaq() {
    const collapsed =(id) =>{
        const element = document.getElementById(id);
        element.classList.toggle('collapse-open');
    }
    return (
      <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
        <div className="container padding-left-all-section">
          <h2 className="text-base Gilroy-Bold">FAQ&rsquo;s</h2>
          <h2 className="text-4xl pb-8 Gilroy-Bold">Do you have a Question for us?</h2>
          <div>
            {faqdetails.map((el) => {
              return (
                <div key={el.id} className="collapse bg-opening mb-6">
                  <div className="collapse-title text-xl font-medium">
                    <div className="md:flex block justify-between items-center">
                      <div>
                        <h2 className="text-xl text-white Gilroy-Bold">
                          {el.title}
                        </h2>
                      </div>
                      <div className="flex md:block my-4 md:my-0">
                        <button
                        //   onClick={() => collapsed(el.id)}
                          onClick={() => collapsed(el.title)} 
                          className=""
                        >
                          <img
                            src="/images/faq-arrow.svg"
                            className="cursor-pointer"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-content flex">
                    <div>
                      <p>
                        Skills: React.js, Redux, Angular.js, Node.js,
                        javascript, jquery, mongoDB, Express.js, Loopback.js,
                        GitLab, GitHub, Bitbucket, ESLint, JSLint, Karma,
                        Istanbul, Jenkins, Strider, unit tests (Jasmine/Mocha),
                        integration tests, Flux, JSON, HTML, CSS, JSX, ES6,
                        Babel, Webpack, NPM
                      </p>
                    </div>
                    <div></div>
                  </div>
                </div>

                // <div className='mb-6  border-color-purple border-b-2 pb-6 flex justify-between items-center'>
                //     <h2 className='text-xl text-white Gilroy-Bold '>{el.title}</h2>
                //     <img src='/images/faq-arrow.svg' className='cursor-pointer' />
                // </div>
              );
            })}
            
          </div>
        </div>
      </div>
    );
}
export default StafFaq;
