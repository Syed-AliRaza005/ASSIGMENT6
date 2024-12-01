import React from "react";
import Image from "next/image";

function Header1() {
  return (
        <div>
            <div className=" w-[1280px] h-[54px] top-[100px] left-[100px] border-[1px]   pr-16 pl-[62px] shadow-black shadow-sm max-md:hidden">

<div className="flex  w-[1154px] h-[54px] gap-8 pt-3 pb-3">

 
    {/* left */}
  <div className="flex w-[386px] h-[30px] gap-4">
 <p className=" w-[205px] h-[21px] text-sm font-normal leading-[21px] text-black">Phone Number: 956 742 455 678</p>
      <div className="bg-black w-[1px] h-[30px]">
  <br />
      </div>
 <p className=" w-[149px] h-[21px] text-sm font-normal leading-[21px] text-black">Email:info@ddsgnr.com</p>
  </div>

    {/* right */}
  <div className=" relative w-[736px] h-[24px] gap-4 ">
{/*social link */} 
      <div className="flex absolute top-0 right-0 w-[132px] h-[24px]  gap-3">
    {/*fb  */}
   <div className=" w-6 h-6 top-[3px] left-[7px]">
      <Image 
    src="./images/fb.svg"
    alt="fb dp"
    width={10}
    height={18} 
   
    />
   </div>
   {/* insta */}
   <div className="w-6 h-6 top-[3px] left-[3px]">
      <Image 
    src="./images/instagram.svg"
    alt="fb dp"
    width={18}
    height={18}  
    />
   </div>
   {/* twiiter */}
   <div className="w-6 h-6 top-[4.5px] left-[3px]">
      <Image 
    src="./images/twitter.svg"
    alt="fb dp"
    width={18}
    height={15.3}  
    />
   </div>
   {/* link */}
   <div className="w-6 h-6 top-[3px] left-[3px]">
      <Image 
    src="./images/linkin.svg"
    alt=""
    width={18}
    height={18}  
    />
   </div>

 
      </div>  
  </div>
 



  </div>
  </div>
        </div>
  );

}
export default Header1;