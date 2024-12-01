import React from "react";
import Image from "next/image";
function Hero() {
  return (
   
   
  
     <div className="max-mo:hidden flex place-items-center bg-white w-[1280px] h-[800px]  top-[141px] ">
     {/* left */}
     <div className="place-items-center top-[150px] bg-white w-[640px] h-[300px] pl-[80px] pr-[60px] gap-6">

      {/* content */}
      <div className=" w-[580px] h-[239px] gap-6">
        <h2 className="w-[580px] h-[134px] text-[56px] font-bold leading-[67.2px] text-black "> Learn new skills online with ease</h2>
        <p  className="w-[580px] h-[81px] text-[18px] font-normal leading-[27px] text-black ">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>
      
      {/* action */} 
      <div className="flex place-items-end mr-[372.5px] w-[208px] h-16 gap-4 top-4 ">
    
    
      <button className="flex place-content-center bg-black w-[96px] h-12 rounded-[5px] border border-black gap-2">
        <p className=" w-[48px] h-[24px] text-[16px] font-normal leading-[14px] text-white">Start learning now</p>
      </button>

      <button className="flex place-content-center w-[96px] h-12 rounded-[5px] border gap-2 border-black">
        <p className=" w-[48px] h-[24px] text-[16px] font-normal leading-[20px] text-black">Explore Courses</p>
      </button>
      </div>

     </div>

      {/* image */}
      <div className="justify-items-end">
        <Image 
        src="./images/hero.svg"
          alt="hero"
        width={640}
        height={900}
        
        />

       
      </div>
      

    </div>




);
}
export default Hero ;