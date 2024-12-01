import React from "react";
import Image from "next/image";

function Header2() {
  return (
        <div>
                  <div className="flex place-items-center w-[1280px] h-[72px] top-[170px] left-[100px] border-y border-black pr-16 pl-16 max-md:w-[428px] max-md:h-[72px] max-md:border-b max-md:pr-6 max-md:pl-6 bg-white ">

      <div className="w-[1152px] h-[44px] max-md:w-[380px] max-md:h-screen max-md:gap-8 justify-between flex place-items-center max-md:flex  max-md:grid-cols-2  ">

    {/* left */}
    <div className="flex w-[130.6px] h-[41px] gap-[10.5px] text-end place-items-center "> 
       
       <div className="flex place-items-center  w-[130.6px] h-[30.38px] gap-[8.02px] max-md:w-screen max-md:h-[41px] max-md:gap-[10.5px] max-md:pt-[29px] max-md:pb-[29px] ">    
     <Image 
     src="\images\Frame.svg"
     alt="img"
     width={32.58}
     height={30.38}
     />
     <p className=" w-[90px] h-[30px] font-bold text-[25.07] leading-[30.34px]"> 
      Ddsgnr

     </p>
    

     </div>       

    </div>

        {/* right*/}   
    
    <div className="bg-white w-[910px] h-11 gap-8 flex  ">
   
    <div className="  "> 
      <button className="w-[88px] h-[40px]  rounded-[5px] border pr-[20px] pl-[20px] pt-2 pb-2 gap-2 ">
        <div className="w-screen h-screen p-3">         
        <div className="w-6 h-6 ">  
          <Image className="top-[6px] left-[3px]"
          src="./images/lines.svg"
          alt=""
          width={18}
          height={12}/>       
        </div>
        </div>
      </button>
    </div>
      {/* c1 */}
      <div className="flex w-[687px] h-11 gap-8  max-md:hidden ">
       
        {/* f1 */}
        <div className="w-16 h-11 p-[10px] gap-[10px] border-b ">
        <p className="w-11 h-6 font-normal leading-6 text-base ">
        HOME
        </p>
        </div>

        {/* f2 */}                             
         <div className="w-[79px] h-11 p-[10px] gap-[10px] border-b ">
         <p className="w-[59px] h-6 font-normal leading-6 text-base ">
        Course
        </p>
        </div>

        {/* f3 */}
        <div className="w-[81px] h-11 p-[10px] gap-[10px] border-b  ">
        <p className="w-[61px] h-6 font-normal leading-6 text-base ">
        Services
        </p>
        </div>

        {/* f4 */}
        <div className="w-[113px] h-11 p-[10px] gap-[10px] border-b  ">
        <p className="w-[93px] h-6 font-normal leading-6 text-base ">
        Achievement
        </p>
        </div>

        {/* f5 */}
        <div className="w-[86px] h-11 p-[10px] gap-[10px] border-b  ">
        <p className="w-[66px] h-6 font-normal leading-6 text-base ">
        About Us
        </p>
        </div>

        {/* f6 */}
        <div className="w-[104px] h-11 p-[10px] gap-[10px] border-b ">
        <p className="w-[84px] h-6 font-normal leading-6 text-base ">
        Testimonial
        </p>
        </div>


      </div>

      {/* c2 */}
      <div className="flex w-[191px] h-[40px] gap-4 max-md:hidden ">
        <button className="flex place-items-center w-[80px] h-[40px] border border-black rounded-[5px] pt-2 pr-5 pb-2 pl-5 gap-2">
          <p className="w-[40px] h-6 font-normal text-sm leading-6">Login</p>
        </button>

        <button className="bg-black flex place-items-center w-[95px] h-[40px] border border-black rounded-[5px] pt-2 pr-5 pb-2 pl-5 gap-2">
          <p className="text-white w-[40px] h-6 font-normal text-sm leading-6">Signup</p>
        </button>

      </div>

    </div>

</div>




</div>

        </div>
  );

}
export default Header2;