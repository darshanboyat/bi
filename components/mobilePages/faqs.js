import React, { Component } from "react";

const faqdetails = [
  {
    id: "1",
    title:"I want to keep my iOS app idea confidential. Will you sign an NDA with me?",
    description: "",
  },
  {
    id: "2",
    title: "Do I own the ownership and the code of my application?",
    description: "",
  },
  {
    id: "3",
    title: "Do you have flexible hiring models?",
    description: "",
  },
  {
    id: "4",
    title: "How do you allocate the resources for my app development in iOS?",
    description: "",
  },
  {
    id: "5",
    title: "What are some of the top iOS apps developed by you?",
    description: "",
  },
];
function Faqs() {

    const collapsed =(id) =>{
        const element = document.getElementById(id);
        element.classList.toggle('collapse-open');
    }

    return (
      <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
        <div className="container padding-left-all-section">
          <h2 className="text-4xl pb-8 Gilroy-Bold">faq&rsquo;s</h2>

          <div>
            {faqdetails.map((el) => {
              return (
                <div key={el.id} className="collapse bg-opening mb-6">
                  <div className="collapse-title text-xl font-medium">
                    <div className="md:flex block justify-between items-center">
                      <div>
                        <h2 className="text-2xl text-white Gilroy-Bold">
                          {el.title}
                        </h2>
                      </div>
                      <div className="flex md:block my-4 md:my-0">
                        <button
                        onClick={() => collapsed(el.id)}
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

export default Faqs;
