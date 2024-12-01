import React from "react";
import Image from "next/image";

function Logo1() {
  return (
    <div className="w-[428px] h-auto  pt-12 pb-12 pl-6 pr-6 gap-6 grid grid-rows-2">
          
       
       {/* text */}
           <p className=" text-balance w-[327px] h-[54px] font-bold text-[18px] leading-[27px] text-black ">
           Trusted by the world's best companies [social proof to build credibility]
           </p>

                   {/* logo */}
       <div className="flex w-[1376px] h-[65.34px] pt-4 pb-4  gap-4 ">
         
         
           <Image
           src="/images/Logo1.svg" 
           alt="logo1"
           width={123.8}
           height={38.52}/>
           
           <Image
           src="/images/Logo2.svg" 
           alt="logo2"
           width={123.8}
           height={38.52}/>
               
               <Image
           src="/images/Logo3.svg" 
           alt="logo3"
           width={123.8}
           height={38.52}/>
               
               <Image
           src="/images/Logo4.svg" 
           alt="logo4"
           width={123.8}
           height={38.52}/>
               
               <Image
           src="/images/Logo5.svg" 
           alt="logo5"
           width={123.8}
           height={38.52}/>
               
               <Image
           src="/images/Logo6.svg" 
           alt="logo6"
           width={123.8}
           height={38.52}/>
               
       </div>


 
      
    </div>
  );
}
export default Logo1;