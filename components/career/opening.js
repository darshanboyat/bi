import React, { Component } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react/cjs/react.production.min";



const OpeningJob = [
  {
    JobTitle: "Full Stack Developer",
    Position: "2",
    Experience: "1 to 2 Years",
    // phone: '+918109561401',
  },

  {
    JobTitle: "React Developer",
    Position: "3",
    Experience: "1 to 4 Years",
    // phone: '+918109561401',
  },
  {
    JobTitle: "UI Developer",
    Position: "2",
    Experience: "1 to 5 Years",
    // phone: '+918109561401',
  },
  {
    JobTitle: "Mean Stack Developer",
    Position: "2",
    Experience: "1 to 5 Years",
    // phone: '+918109561401',
  },
  {
    JobTitle: "Mern Stack Developer",
    Position: "2",
    Experience: "1 to 5 Years",
    // phone: '+918109561401',
  },
  {
    JobTitle: "Digital Marketing",
    Position: "2",
    Experience: "1 to 5 Years",
    // phone: '+918109561401',
  },
];
function Opening() {
  const { register, handleSubmit, reset } = useForm();
  // const [role, setrole] = useState(null);

  const sumbitContact = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("doc", data.file[0]);
    formData.append("email", data.email);
    formData.append("number", data.number);
    formData.append("exp", data.exp);
    formData.append("role", data.role);
    axios
      .post("/api/career", formData)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const roleShowing = (role) => {
    reset({ role: role });
  };
   const collapsed =() =>{

   }

  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container">
        <div>
          <h2 className="text-6xl Gilroy-Bold ">Current</h2>
          <h4 className="openings-title">Openings</h4>
        </div>
        <div>
          {OpeningJob.map((el) => {
            return (
              <>
                <div key={el.key} className="collapse bg-opening mb-6">
                  {/* <input type="checkbox" /> */}
                  <div className="collapse-title text-xl font-medium">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-2xl text-white Gilroy-Bold">
                          {el.JobTitle}
                        </h2>
                      </div>
                      <div>
                        <button  onClick={() => collapsed()}  className="btn-details">view details</button>
                        <label
                          onClick={() => roleShowing(el.JobTitle)}
                          className="btn-apply inline-block leading-[55px] cursor-pointer modal-button"
                        >
                          apply now
                        </label>
                        {/* <button className="btn-apply">apply now</button> */}
                      </div>
                    </div>
                    <div className="flex">
                      <div>
                        <label className="experiene-label">Experience</label>
                        <h4>{el.Experience}</h4>
                      </div>
                      <div className="ml-5">
                        <label className="experiene-label">Positions</label>
                        <h4>{el.Position}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <form onSubmit={handleSubmit(sumbitContact)}>
            <div className="modal-box w-full max-w-5xl">
              <div className="flex justify-end w-full">
                <label
                  for="my-modal"
                  className="bg-black rounded-full w-10 h-10 block text-center leading-[40px] text-xl mt-[-15px] mb-2 text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative top-2 left-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path d="M6 18L18 6M6 6l12 12" />
</svg>
                </label>
              </div>
              <div>
                <label className="text-black mb-2">Job Title</label>

                <select
                  {...register("role")}
                  className="w-full text-black h-12 border focus:outline-0 px-2 mb-4"
                  required
                >
                  {OpeningJob.map((el) => {
                    return <option value={el.JobTitle}>{el.JobTitle}</option>;
                  })}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-black mb-2">Firstname</label>
                  <input
                    {...register("firstName")}
                    type="text"
                    required
                    className="w-full text-black h-12 border focus:outline-0 px-2 mb-4"
                    placeholder="Firstname"
                  />
                </div>
                <div>
                  <label className="text-black mb-2">Lastname</label>
                  <input
                    {...register("lastName")}
                    type="text"
                    required
                    className="w-full text-black h-12 border focus:outline-0 px-2 mb-4"
                    placeholder="Lastname"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="text-black mb-2">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    required
                    className="w-full text-black h-12 border focus:outline-0 px-2 mb-4"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-black mb-2">Mobile Number</label>
                  <input
                    {...register("number")}
                    type="number"
                    required
                    className="w-full text-black h-12 border focus:outline-0 px-2 mb-4"
                    placeholder="Number"
                  />
                </div>
              <div className="">
                <div>
                  <label className="text-black mb-2">No year of Experience</label>
                  <input
                    {...register("exp")}
                    type="text"
                    required
                    className="w-full text-black h-12 border focus:outline-0 px-2 mb-4"
                    placeholder="Experience"
                  />
                </div>
              </div>
              </div>
              <div>
                <label className="text-black mb-2">Attachment</label>
                <input
                  type="file"
                  {...register("file")}
                  className="w-full text-black h-12 border focus:outline-0 px-2 mb-4"
                  required
                  placeholder="Experience"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="m-auto text-center block bg-purple-theme h-12 w-40 rounded-lg mt-4"
                >
                  Submit
                </button>
              </div>
              {/* <div className="modal-action">
      <label for="my-modal" className="btn">Yay!</label>
    </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Opening;
