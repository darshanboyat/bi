import Image from "next/image";
import HomeButton from "../buttons/HomeButton";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'


function Staform(props) {
    const router = useRouter()
    const { register, handleSubmit, reset } = useForm();
    const sumbitContact = (data) => {
      console.log(data);
      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      reset();
      router.push('/thank-you');
    };
    return (
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
        <div className="container bg-staff padding-left-all-section">
                
    <div className="mobile-padding grid lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col space-y-8">
            <h3 className="text-2xl Gilroy-Bold mt-4 mb-8">Get in touch with us</h3>  
            
            <h2 className="text-4xl leading-10 Gilroy-Bold w-4/5">Are you looking to add Expert it resources to Help deliver your project Smoothly?</h2>      
            <p className="2xl:text-xl xl:text-lg text-base Gilroy-Light leading-normal w-4/5">Scale high-performing teams with top-notch industry experts And trained professionals from Brain Inventory, a leading IT staff augmentation company.</p>
        </div>
       
        <div className="flex lg:justify-end justify-start ">
            
            <div className="flex flex-col xl:space-y-8 space-y-6 w-full">
                
        <form onSubmit={handleSubmit(sumbitContact)}>
          <div className="flex flex-col xl:space-y-8 pt-8 space-y-6">
            <input
              {...register("name")}
              type="text"
              required
              className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
              placeholder="You should have a name"
            ></input>
            <div className="flex lg:flex-row flex-col xl:space-x-8 lg:space-x-6 lg:space-y-0 space-y-6">
              <input
                {...register("email")}
                type="email"
                required
               className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] flex-1 placeholder-[#ffffffd7]"
                placeholder="Obviously, an email"
              ></input>
              <input
                {...register("number")}
                type="number"
                required
                className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] flex-1 placeholder-[#ffffffd7]"
                placeholder="Your contact number"
              ></input>
            </div>
            <input
              {...register("companyName")}
              type="text"
              required
              className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
              placeholder="What's your company name?"
            ></input>
            <input
              {...register("feedback")}
              type="text"
              required
              className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
              placeholder="Tell us, Everything!"
            ></input>
            <HomeButton type="submit">
              <span className="text-base">Submit</span>
            </HomeButton>
          </div>
        </form>
                {/* <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]" placeholder="You should have a name"></input>
                <div className="flex lg:flex-row flex-col xl:space-x-8 lg:space-x-6 lg:space-y-0 space-y-6">
                    <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] flex-1 placeholder-[#ffffffd7]" placeholder="Obviously, an email"></input>
                    <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] flex-1 placeholder-[#ffffffd7]" placeholder="Your contact number"></input>            
                </div>
                <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]" placeholder="What’s your company name?"></input>
                <input className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]" placeholder="Tell us, Everything!"></input>
                <HomeButton><span className="text-xl">Submit</span></HomeButton> */}
            </div>
        </div>
           
        </div>
    </div>
            </div>
    );
}

export default Staform;