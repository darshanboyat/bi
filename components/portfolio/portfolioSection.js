import React, { Component } from "react";

const portfolioDetail = [
  {
    id: "1",
    title: "Revolution Travel Planner",
    subtitle: "Itinerary Management & Communication Software",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    image: '/images/rtc-1.png'
  },
  {
    id: "2",
    title: "Hub 1",
    subtitle: "User Management Software",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    image: '/images/hub-1.png'  
  },
  {
    id: "3",
    title: "Bloomia",
    subtitle: "Kegel Exercise Software",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    image: '/images/bloomia-1.jpg'
},
  {
    id: "4",
    title: "Fatoura",
    subtitle: "Online Invoice Generation Software",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    image: '/images/fatoura.jpg'  
},
{
  id: "5",
  title: "Numetric",
  subtitle: "Online Accounting Software",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
  image: ''  
},
{
  id: "6",
  title: "Virifi",
  subtitle: "Document verification Software",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
  image: ''  
},
{
  id: "7",
  title: "Skedy",
  subtitle: "Online Invoice Generation Software",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
  image: ''  
},
{
  id: "8",
  title: "Craft Wills",
  subtitle: "Online Invoice Generation Software",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
  image: ''  
},
{
  id: "9",
  title: "Kekoa Tree",
  subtitle: "Online Invoice Generation Software",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
  image: ''  
},

];
class PortfolioSection extends Component {
  render() {
    return (
      <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
        <div className="container padding-left-all-section">
          <h2 className="2xl:px-14 xl:px-12 px-10 pt-20 pb-12 text-7xl stroke-text-mobile Gilroy-Bold">
            our website portfolio
          </h2>
          {portfolioDetail.map((el) => {
            return (
              <div key={el.title} className="grid lg:grid-cols-2 grid-cols-1 gap-8 mb-12">
                <div className="flex items-center">
                  <div className="flex">
                    <div>
                      <p className="text-2xl mr-3 numbers-yellow">0{el.id}.</p>
                    </div>
                    <div>
                      <h3 className="text-2xl Gilroy-Bold mb-1">{el.title}</h3>
                      <p className="">{el.subtitle}</p>
                      <p className="color-light text-lg mt-8">{el.description}</p>
                      <button className="mt-8 flex justify-between align-middle items-center bg-case-blue-request px-10  h-11 z-[100]">
                        learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                 {el.image.length !== 0 
                 ?  
                   <img src={el.image} className="h-[400px] w-full object-cover" />
                   :
                    <div className="h-[400px] bg-stack"></div>
                 }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PortfolioSection;
