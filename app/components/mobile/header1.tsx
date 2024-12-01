import React from "react";
import Image from "next/image";

function Header1() {
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
      

    </div>

</div>




</div>

        </div>
  );

}
export default Header1;