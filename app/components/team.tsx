import React from "react";
import Image from "next/image";
function Team() {
    return (

        <div className="justify-between place-items-center w-[1280px] h-[1049px] top-[1266px] left-[100px] pt-[122px] pb-[122px] pl-[64px] pr-[64px] gap-[80px]">
          
            {/* top */}
            <div className=" text-center w-[768px] h-[109px] gap-[357px]">
                <div className="bg- w-[768px] h-[109px] gap-6">
                    <h2 className="w-[768px] h-[58px] text-5xl font-bold leading-[57.6px] ">
                    Explore Courses By Category
                    </h2> 
                    <p className="w-[768px] h-[27x] text-lg font-normal leading-[27px] pt-6 ">
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                    </p>
                </div>
            </div>

            {/* bottom */}
            <div className=" flex bg-white w-[1280px] h-[636px]  gap-24 ">
         
           <div className="place-items-center grid grid-rows-3 mx-auto w-[1280px] h-[636px] gap-16 ">
   
                {/* row1 */}
           <div className=" grid grid-cols-3 grid-flow-row w-[1280px] h-[132px] gap-6">

          {/* card1 */}
          <div className="flex place-items-center w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-card ">

           {/* image */}
            <div className="w-[100px] h-[100px] rounded-   [5px] p-[34px] gap-[10px] bg-white">
                <Image
                src="./images/tr1,1.svg"
                alt="ter1.1"
                width={32}
                height={32}
                  />
            </div>
                {/* text */}
            <div className="w-[246.67px] h-auto   gap-6 ">
            <div className="w-[246.67px] h-auto   gap-4 ">
            <div className="w-[246.67px] h-auto   ">
             
                <p className="w-[256.67px] h-[30px] font-semibold text-[20px] leading[30px] text-black">    
                    Design & Development
                </p>

                <p className="w-[256.67px] h-[27px] font-normal text-[18px] leading[27px] text-black"> 
                50+ Courses Available
                </p>
            </div>
            </div>
            </div>

          </div>
          {/* card2 */}
          <div className="flex place-items-center w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-card">
                    {/* image */}
          <div className="w-[100px] h-[100px] rounded-   [5px] p-[34px] gap-[10px] bg-white">
                <Image
                src="./images/tr1,2.svg"
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
          <div className="flex place-items-center w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-card">
                         {/* image */}
                         <div className="w-[100px] h-[100px] rounded-   [5px] p-[34px] gap-[10px] bg-white">
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
           
                      {/* row2 */}
        
           <div className="grid grid-cols-3 w-[1280px] grid-flow-row h-[132px] gap-6">
          
          {/* card1 */}
          <div className="flex place-items-center w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-card">
                             {/* image */}
          <div className="w-[100px] h-[100px] rounded-   [5px] p-[34px] gap-[10px] bg-white">
                <Image
                src="./images/tr2,1.svg"
                alt="teamr2,1"
                width={32}
                height={32}
                  />
            </div>
                {/* text */}
            <div className="w-[246.67px] h-auto   gap-6 ">
            <div className="w-[246.67px] h-auto   gap-4 ">
            <div className="w-[246.67px] h-auto   ">
             
                <p className="w-[256.67px] h-[30px] font-semibold text-[20px] leading[30px] text-black">    
                Communication
                </p>
                <p className="w-[256.67px] h-[27px] font-normal text-[18px] leading[27px] text-black"> 
                50+ Courses Available
                </p>
            </div>
            </div>
            </div>
         
          </div>

          {/* card2 */}
          <div className="flex place-items-center w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-card">
                          {/* image */}
          <div className="w-[100px] h-[100px] rounded-   [5px] p-[34px] gap-[10px] bg-white">
                <Image
                src="./images/tr2,2.svg"
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
                Digital Marketing
                </p>
                <p className="w-[256.67px] h-[27px] font-normal text-[18px] leading[27px] text-black"> 
                50+ Courses Available
                </p>
            </div>
            </div>
            </div>

          </div>
          {/* card3 */}
          <div className="flex place-items-center w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-card">
                             {/* image */}
             <div className="w-[100px] h-[100px] rounded-   [5px] p-[34px] gap-[10px] bg-white">
                <Image
                src="./images/tr2,3.svg"
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
                Self Development
                </p>
                <p className="w-[256.67px] h-[27px] font-normal text-[18px] leading[27px] text-black"> 
                50+ Courses Available
                </p>
            </div>
            </div>
            </div>

          </div>
           </div>

                 {/* row3 */}
          <div className="grid grid-cols-3 w-[1280px] grid-flow-row h-[132px] gap-6">
          
          {/* card1 */}
          <div className="flex place-items-center w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-card">
                    {/* image */}
          <div className="w-[100px] h-[100px] rounded-   [5px] p-[34px] gap-[10px] bg-white">
                <Image
                src="./images/tr3,1.svg"
                alt="teamr3,1"
                width={32}
                height={32}
                  />
            </div>
                {/* text */}
            <div className="w-[246.67px] h-auto     gap-6 ">
            <div className="w-[246.67px] h-auto   gap-4 ">
            <div className="w-[246.67px] h-auto   ">
             
                <p className=" w-[256.67px] h-[30px] font-semibold text-[20px] leading[30px] text-black">    
                Business
                </p>
                <p className="w-[256.67px] h-[27px] font-normal text-[18px] leading[27px] text-black"> 
                50+ Courses Available
                </p>
            </div>
            </div>
            </div>
          </div>
          {/* card2 */}
          <div className="flex place-items-center w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-card">
                    {/* image */}
          <div className="w-[100px] h-[100px] rounded-   [5px] p-[34px] gap-[10px] bg-white">
                <Image
                src="./images/tr3,2.svg"
                alt="teamr3.2"
                width={32}
                height={32}
                  />
            </div>
                {/* text */}
            <div className="w-[246.67px] h-auto   gap-6 ">
            <div className="w-[246.67px] h-auto   gap-4 ">
            <div className="w-[246.67px] h-auto   ">
             
                <p className="w-[256.67px] h-[30px] font-semibold text-[20px] leading[30px] text-black">    
                Finance
                </p>
                <p className="w-[256.67px] h-[27px] font-normal text-[18px] leading[27px] text-black"> 
                50+ Courses Available
                </p>
            </div>
            </div>
            </div>
          </div>
          {/* card3 */}
          <div className="flex place-items-center w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-card">
                    {/* image */}
          <div className="w-[100px] h-[100px] rounded-   [5px] p-[34px] gap-[10px] bg-white">
                <Image
                src="./images/tr3,3.svg"
                alt="teamr3.3"
                width={32}
                height={32}
                  />
            </div>
                {/* text */}
            <div className="w-[246.67px] h-auto   gap-6 ">
            <div className="w-[246.67px] h-auto   gap-4 ">
            <div className="w-[246.67px] h-auto   ">
             
                <p className="w-[256.67px] h-[30px] font-semibold text-[20px] leading[30px] text-black">    
                Consulting
                </p>
                <p className="w-[256.67px] h-[27px] font-normal text-[18px] leading[27px] text-black"> 
                50+ Courses Available
                </p>
            </div>
            </div>
            </div>
          </div>
           </div> 
     
        
           <button className=" w-[155px] h-12 rounded-[5px] border pt-3 pb-3 pr-6 pl-6 gap-2">
            <p className="w-[120px] h-6 font-normal text-[16px] leading-6 text-black">
            View All Courses
            </p>
           </button>         

            </div>                            
           </div>
        </div>
    );
}
export default Team ;