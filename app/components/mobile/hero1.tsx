import React from "react";
import Image from "next/image";
function Herol() {
  return (
   
   
  
     <div className="  bg-white w-[428px] h-auto  ">
     {/* content */}
     <div className="place-items-center w-[428px] h-[380px] pl-6 pt-16 pb-16 pr-6 gap-6 grid grid-rows-2">

      {/* content */}
      <div className=" justify-between grid grid-rows-2 w-[380px] h-[174px]  gap-12">
        <h3 className="w-[380px] h-[96px] text-[40px] font-bold leading-11 text-black ">
           Learn new skills online with ease
    </h3>
        
        <p  className="w-[380px] h-[54px] text-[18px] font-normal leading-[27px] text-black ">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>
      
      {/* action */} 
      <div className="w-[358px] h-16 gap-4 pt-4 flex  grid-cols-2 ">
    
    
      <button className="text-center p bg-black w-[164px] h-12 rounded-[5px] border border-black gap-2 pt-3 pb-3 pl-6 pr-6">
        <p className="w-[130px] h-6 text-[16px] font-normal leading-6 text-white">
          Start learning now
          </p>
      </button>

      <button className="text-center justify-center w-[178px] h-12 rounded-[5px] border gap-2 border-black pt-6 pb-6 pl-3 pr-3 ">
        <p className="  text-center  w-[116px] h-6 text-[16px] font-normal leading-6 text-black">
          Explore Courses
          </p>
      </button>
      </div>

    
     </div>

      {/* image */}
      <div >
      <Image 
        src="./images/hero.svg"
          alt="hero"
        width={428}
        height={390}
        
        />
      </div>
      

    </div>




);
}
export default Herol ;