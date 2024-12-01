import React from "react"
import Image from "next/image";

function Test() {
  return (
    <div className="w-[428px] h-auto pt-12 pb-12 pl-6 pr-6 gap-12 bg-white">
        {/* section */}
        <div className="place-items-center  w-auto h-auto gap-6 "> 
           <h4 className="w-[315px] h-[42px] font-bold  text-[32px] text-nowrap leading-[41.6px]  text-black">
                What Our Student Say
           </h4>    
           <p className="w-[361px] h-[54px] font-normal text-[18px] leading-[27px] text text-center text-black">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           </p>     
        </div>
        {/* content */}
        <div className="grid w-[380px] h-auto gap-12 ">           
          {/* content1 */}
          <div className="grid grid-cols-3 justify-center w-auto h-auto gap-8">
            {/* cbox */}
            <div className="grid w-[380px] h-auto p-8 gap-6 border-black border">
              {/* star */}
              <div className="flex w-auto h-auto gap-1">
                <Image 
                src="./images/bstar.svg"
                alt=""
                width={20}
                height={18.89}/>
                <Image 
                src="./images/bstar.svg"
                alt=""
                width={20}
                height={18.89}/>
                <Image 
                src="./images/bstar.svg"
                alt=""
                width={20}
                height={18.89}/>
                <Image 
                src="./images/bstar.svg"
                alt=""
                width={20}
                height={18.89}/>
                <Image 
                src="./images/bstar.svg"
                alt=""
                width={20}
                height={18.89}/>

              </div>
              {/* content */}
              <div className="w-[316px] h-auto gap-6"> 
            
               {/* text */}
                <p className="w-[316px] h-[135px] font-normal text-[18px] leading-[27px]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                </p>
                 {/* avatar */}
                 <div className="flex w-auto h-auto gap-[20px]
                 ">
                  {/* image */}
                  <Image 
                  src="./images/ai1.svg"
                  alt=""
                  width={56}
                  height={56}/>
                  
                  {/* content */}
                  <div className="w-auto h-auto">
                    <p className="w-[96px] h-6 font-semibold text-[16px] leading-6 text-nowrap">Wade Warren</p>
                   
                    <p className="w-[178px] h-6 font-normal text-[16px] leading-6">Position, Company name</p>
                  </div>

                 </div>
              </div>

            </div>
         
          </div>
         
         
           {/* content2 */}
           <div className=" flex  w-[380px] h-auto justify-between">
         {/* dots */}
            <Image className="gap-2"
            src="./images/dots.svg"
            alt=""
            width={72}
            height={8}
            />
            {/* slider button */}
            <div className=" grid grid-cols-2 w-[111px] h-12 gap-[15px] ">
              <button className="w-12 h-12 rounded-[50px] border border-black p-3 gap-2">
               <div className="w-6 h-6 flex">
                <Image className="top-1 l-1"
                src="./images/left.svg"
                alt=""
                width={16}
                height={16}/>
                </div>
              </button>

              <button className="w-12 h-12 rounded-[50px] border border-black p-3 gap-2">
              <div className="w-6 h-6">
              <Image className="top-1 l-1"
                src="./images/right.svg"
                alt=""
                width={16}
                height={16}/>
                </div>
              </button>
            </div>
           </div>
        </div>


    </div>
  );
}
export default Test ;
