import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, cc_name, icon, img_src, cause, wallet_id }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    {/* <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      
    </div> */}
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{cc_name}</h3><br></br>
      <img src={img_src} width="200px" ></img><br></br>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {cause} <br></br>
        {wallet_id}<br></br>

        <p>Total : $ 500</p>
      <br></br>
      <span className={`w-40 h-10 rounded-full flex justify-center items-center ${color}`}>
        Donate
      </span> 
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-col flex-row items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2  ">
          Services that we continue to improve
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>
      <br></br>
      <div className="flex-1 flex flex-row justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          cc_name="Content creator 1"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          img_src="../../images/hello.svg"
          cause="Content 1"
          wallet_id="wallet id 1"          
        />
        <ServiceCard
          color="bg-[#8945F8]"
          cc_name="Content creator 2"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          img_src="../../images/hello.svg"
          cause="content 2"
          wallet_id="wallet id 2" 
        />
        <ServiceCard
          color="bg-[#F84550]"
          cc_name="Content creator 3"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          img_src="../../images/hello.svg"
          cause="Content 3"
          wallet_id="wallet id 3" 
        />
        
      </div>
    </div>
  </div>
);

export default Services;
