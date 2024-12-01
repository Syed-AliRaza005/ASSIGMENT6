import React from "react";
import Image from "next/image";
function Team1() {
    return (

        <div className=" grid-rows-2 justify-center place-content-center
         w-[428px] h-[862px] pt-12 pb-12 pl-6 pr-6 gap-12">
          
            {/* top */}
            <div className="
             text-center w-[385px] h-[162px] gap-[357px] ">
             {/* frame */}
                <div className=" grid-rows-2 w-screen h-screen gap-6">

                    <h4 className="w-[385px] h-[84px] text-[32px] font-bold leading-[41.6px] text-center ">
                    Explore Courses By Category
                    </h4> 
                  
                    <p className="w-[385px] h-[54px] text-lg font-normal leading-[27px] text-center">
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                    </p>
                </div>
            </div>

            {/* bottom */}
            <div className=" w-[380px] h-[556px] gap-24 ">
         {/* frame */}
           <div className="justify-between place-items-center 
            grid-rows-2 w-[380px] h-[556px] gap-16 ">
               {/* row1 */}
               <div className="grid grid-rows-3 w-auto h-auto gap-6">

        {/* card1 */}
        <div className="card1 flex place-items-center w-[380px] h-auto rounded-[5px] p-4 gap-8 bg-card ">

    {/* image */}
    <div className="w-auto h-auto rounded-[5px] p-[34px] gap-[10px] bg-white">
      <Image
      src="./images/tr1,1.svg"
      alt="ter1.1"
      width={32}
      height={32}
        />
        </div>
      {/* text */}
  <div className="w-[216px] h-auto   gap-6 ">
  <div className="w-[216px] h-auto   gap-4 ">
  <div className="w-[216px] h-auto   ">
   
      <p className="w-[216px] h-[30px] font-semibold text-[20px] leading[30px] text-black">    
          Design & Development
      </p>

      <p className="w-[216px] h-[27px] font-normal text-[18px] leading[27px] text-black"> 
      50+ Courses Available
      </p>
  </div>
  </div>
  </div>

        </div>  
    {/* card2 */}
        <div className=" bg-card flex place-items-center w-[380px] h-auto rounded-[5px] p-4 gap-8 ">
          {/* image */}
        <div className="w-auto h-auto rounded-[5px] p-[34px] gap-[10px] bg-white">
      <Image
      src="./images/tr1,2.svg"
      alt="tcard2"
      width={32}
      height={32}
        />
    </div>
      {/* text */}
  <div className="w-[246.67px] h-auto   gap-6 ">
  <div className="w-[246.67px] h-auto   gap-4 ">
  <div className="w-[246.67px] h-auto   ">
   
      <p className="w-[256.67px] h-[30px] font-semibold text-[20px] leading[30px] text-black">    
      Marketing
      </p>
      <p className="w-[256.67px] h-[27px] font-normal text-[18px] leading[27px] text-black"> 
      50+ Courses Available
      </p>
  </div>
  </div>
  </div>

        </div>
        {/* card3 */}
        <div className="card1 flex place-items-center w-[380px] h-auto rounded-[5px] p-4 gap-8 bg-card">
               {/* image */}
       <div className="w-auto h-auto rounded-[5px] p-[34px] gap-[10px] bg-white">
              <Image
            src="./images/tr1,3.svg"
            alt="teamr1.2"
            width={32}
            height={32}
        />
            </div> 
      {/* text */}
            <div className="w-[246.67px] h-auto   gap-6 ">
        <div className="w-[246.67px] h-auto   gap-4 ">
        <div className="w-[246.67px] h-auto   ">
   
      <p className="w-[256.67px] h-[30px] font-semibold text-[20px] leading[30px] text-black">    
      Development
      </p>
      <p className="w-[256.67px] h-[27px] font-normal text-[18px] leading[27px] text-black"> 
      50+ Courses Available
      </p>
  </div>
  </div>
        </div>
  
        </div>
        </div>   

        <button className="w-[155px] h-12 rounded-[5px] border border-black pt-3 pb-3 pr-6 pl-6 gap-2">
        <p className="w-[120px] h-6 font-normal text-[16px] leading-6 text-black">
        View All Courses
        </p>
    </button>         

          
         
            </div>    
                                    
           </div>
        </div>
    );
}
export default Team1 ;