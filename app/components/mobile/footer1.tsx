import React from "react";
import Image from "next/image";

function Footer2 () {
  return (
    <div className="grid w-[428px] h-auto p-[80px] gap-12 pt-12 pb-12 pl-6 pr-6 bg-white">

        <div className=" grid-rows-3 w-[380px] h-auto gap-12 justify-between">
       
         {/* newsletter */}
         <div className="grid grid-rows-2 w-auto h-auto gap-6 justify-between">
           {/* content */}
           <div className="place-items-center w-auto h-auto gap-4 ">
           <p className="w-[287px] h-[27px]font-semibold text-lg leading-[27px] text-black text-center">
                    Subscribe to our newsletter
                    </p>
                <p className="place-content-center grid w-[287px] h-12 font-normal text-base leading-6 text-black  text-center">
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit.

                </p>          
           </div>
          
             {/* action */}
             <div className=" w-auto h-auto gap-4 ">
                {/* form */}
                <div className="grid  grid-rows-2 w-auto h-auto gap-4 ">
             
                {/* text */}    
          
           <div className="w-[380px] h-12 rounded-[5px] border p-3 gap-2 border-black">     
                   <p className="w-[241px] h-6 font-normal text-base leading-6 text-place ">
                    Enter your email
                    </p>               
                </div>
              
                {/* button */}
                <button  className="w-[380px] h-12 rounded-[5px] border pt-3 pb-3 pr-6 pl-6 gap-2 border-black justify-center flex">
                    <p className="w-[71px] h-6 font-normal text-basa leading-6">
                    Subscribe
                    </p>
                </button>
                </div>
         
              <div className="w-[380px] justify-center gap-[4px] flex">
                <p className=" h-[18px] font-normal text-[12px]  leading-[18px] text-center">
                    By subscribing you agree to with our
                </p>  <p className="underline h-[18px] font-normal text-[12px]  leading-[18px]">Privacy Policy

                </p>
                </div>
        
         
         </div>
         </div>
    
         {/* links */}
         <div className=" place-items-center grid-rows-4 w-auto h-auto gap-[32px] ">
            {/* col1 */}
            <div className="flex w-[172px] h-auto">

                <div className="w-auto flex justify-center items-center h-[40px] pt-[29px] pb-[29px] gap-[10.5px] ">
             
                <div className="flex grid-cols-2 w-auto h-auto gap-[8.02px] ">
                   <Image 
                   src="./images/frame.svg"
                   alt=""
                  width={32.58}
                  height={30.38}                
                   />
                    <p className=" w-[90px] h-[30px] font-bold text-[25.07px] leading-[30.34px]">
                      Ddsgnr
                      
                    </p>
                 
                 </div>
                 
                </div>
            </div>

            {/* col2 */}
            <div className="w-[172px] h-auto g-4 ">
                {/* text */}
                <p className="w-[172px] h-6 font-semibold text-base leading-6 text-center">Course</p>
                {/* f link */}
                <div className="w-[172px] h-auto grid grid-rows-5">
                    {/* link 1 */}
                    <div className="w-[172px] h-auto pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Business</p>  
                    </div>
                   {/* link 2 */}
                   <div className="w-[172px] h-auto pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px]  ">
                        development</p>  
                    </div>
                       {/* link 3 */}
                       <div className="w-[172px] h-auto pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Technology</p>  
                    </div>
                       {/* link 4 */}
                       <div className="w-[172px] h-auto pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Design</p>  
                    </div>
                       {/* link 5 */}
                       <div className="w-[172px] h-auto pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Programming</p>  
                    </div>         
                </div>
            </div>
            {/* col3 */}
            <div className="w-[172px] h-auto g-4 ">
                {/* text */}
                <p className="w-[172px] text-center h-6 font-semibold text-base leading-6">Resources</p>
                {/* f link */}
                <div className="w-[172px] h-auto grid grid-rows-5">
                    {/* link 1 */}
                    <div className="w-[172px] h-auto pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Career 
                        </p>  
                    </div>
                   {/* link 2 */}
                   <div className="w-[172px] h-auto] pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Resume 
                        </p>  
                    </div>
                       {/* link 3 */}
                       <div className="w-[172px] h-auto pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Learning 
                        </p>  
                    </div>
                       {/* link 4 */}
                       <div className="w-[172px] h-auto pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Interview Preparation 
                        </p>  
                    </div>
                       {/* link 5 */}
                       <div className="w-[172px] h-auto pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Jobs
                        </p>  
                    </div>         
                </div>
            </div>
            {/* col4 */}
            <div className="w-[172px] h-auto g-4 ">
                {/* text */}
                <p className="w-[172px] text-center h-6 font-semibold text-base leading-6">About Us</p>
                {/* f link */}
                <div className="w-[172px] h-auto grid grid-rows-5">
                    {/* link 1 */}
                    <div className="w-[172px] h-auto pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Contact
                        </p>  
                    </div>
                   {/* link 2 */}
                   <div className="w-[172px] h-auto pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Help/Support
                        </p>  
                    </div>
                       {/* link 3 */}
                       <div className="w-[172px] h-auto pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px] ">                
                        FAQ
                        </p>  
                    </div>
                       {/* link 4 */}
                       <div className="w-[172px] h-auto pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Terms and Conditions
                        </p>  
                    </div>
                       {/* link 5 */}
                       <div className="w-[172px] h-auto pt-2 pb-2 ">
                      <p className="w-[172px] text-center h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Partners</p>  
                    </div>         
                </div>
            </div>



        </div>
      
         {/* credits */}
         <div className="  w-[380px] h-auto justify-between gap-6 ">
         
          <div className=" bg-black w-[380px] h-[1px]"></div>
          {/* row */}
          <div className=" p-5 grid-rows-2 w-[380px] h-auto place-items-center"
          >
            {/* credit */}
            <div className="w-auto place-items-center h-auto  gap-6">
            
              <p className="w-[195px] h-[21px] font-normal text-[14px] leading-[21px] ">2023 Ddsgnr. All right reserved.</p>
              {/* footer2 */}
              <div className="w-auto h-auto gap-6 grid grid-cols-3">
                <p className="w-[87px] h-[21px] font-normal text-[14px] leading-21 underline">
                  Privacy Policy

                </p>
                <p className="underline w-[105px] h-[21px]  font-normal text-[14px] leading-21 ">
                 Terms of Service
                 </p>
                <p className="w-[105px] underline h-[21px] font-normal text-[14px] leading-21 ">
                  Cookies Settings
                  </p>
              </div>

            </div>
             
             {/* social link */}
             <div className="flex grid-cols-4 w-auto h-auto gap-3 p-4">
             <div className="w-6 h-6 top-[3px] left-[7px]">
              <Image
              src="./images/fb.svg"
              alt=""
              width={10}
              height={18}/>
              </div>
                 <div className="w-6 h-6 top-[3px] left-[3px]">
               <Image
              src="./images/instagram.svg"
              alt=""
              width={18}
              height={18}/>
              </div>
                 <div className="w-6 h-6 top-[4.5px] left-[3px]">
               <Image
              src="./images/linkin.svg"
              alt=""
              width={18}
              height={15.3}/>
              </div>
                 <div className="w-6 h-6 top-[3px] left-[3px]">
               <Image
              src="./images/twitter.svg"
              alt=""
              width={18}
              height={18}/>
              </div>

             </div>
          </div>

        
         </div>


        </div>
      
    </div>
  );
}

export default Footer2 ;
