import React from "react";
import Image from "next/image";

function Logo() {
    return (
        <div className=" flex bg-white w-[1280px] h-[228px] top-[1038px] left[100px] pt-[80px] pr-[64px] pb-[80px] pl-[64px] gap-16">
       
            {/* left */}
                        <p className=" text-balance w-[320px] h-[68px] font-bold text-2xl leading-[33.6px] text-black ">Trusted by 2000+ companies worldwide. </p>

                        {/* right */}
            <div className="flex w-[880px] h-[56px] pt-[8.74px] pb-[8.74px] gap-[19.12px] ">
              
              
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
export default Logo;