import React from "react";
import Image from "next/image";

function Footer () {
  return (
    <div className="grid w-[1280px] h-[684px] top-[6824px] p-[80px] gap-[80px] ">

        <div className="grid grid-rows-3 justify-between w-[1120px] h-[524px] gap-[80px] ">
       
         {/* newsletter */}
         <div className="grid grid-cols-2 w-[1120px] h-[82px] justify-between">
           {/* content */}
           <div className="w-[500px] h-51px] ">
           <p className="w-[500px] h-[27px]      font-semibold text-lg leading-[27px] text-black">
                    Subscribe to our newsletter
                    </p>
                <p className="w-[500px] h-6 font-normal text-base leading-6 text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                </p>          
           </div>
          
             {/* action */}
             <div className=" w-[400px] h-[82px] gap-4 ">
                {/* form */}
                <div className="flex grid-cols-2 w-[400px] h-12 gap-4 ">
             
                {/* text */}    
          
           <div className="w-[265px] h-12 rounded-[5px] border p-3 gap-2 border-black">     
                   <p className="w-[241px] h-6 font-normal text-base leading-6 text-place ">
                    Enter your email
                    </p>               
                </div>
              
                {/* button */}
                <button  className="w-[119px] h-12 rounded-[5px] border pt-3 pb-3 pr-6 pl-6 gap-2 border-black">
                    <p className="w-[71px] h-6 font-normal text-basa leading-6">
                    Subscribe
                    </p>
                </button>
                </div>
              <div className="flex">
                <p className="w-[400px] h-[18px] font-normal text-[12px]  leading-[18px]">
                    By subscribing you agree to with our 
                </p>  <p className="underline w-[400px] h-[18px] font-normal text-[12px]  leading-[18px]"> Privacy Policy</p>
                </div>
        
         
         </div>
         </div>
    
         {/* links */}
         <div className="grid grid-cols-4 w-[1120px] h-[225px] gap-[40px] ">
            {/* col1 */}
            <div className="w-[250px] h-[40px]">

                <div className="w-[130.6px] flex justify-center items-center h-[40px]  gap-[10.5px] ">
             
                <div className="flex grid-cols-2 w-[130.6px] h-[30.38px] gap-[8.02px] ">
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
            <div className="w-[250px] h-[225px] g-4 ">
                {/* text */}
                <p className="w-250px] h-6 font-semibold text-base leading-6">Course</p>
                {/* f link */}
                <div className="w-[250px] h-[185px] grid grid-rows-5">
                    {/* link 1 */}
                    <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Business</p>  
                    </div>
                   {/* link 2 */}
                   <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px]  ">
                        development</p>  
                    </div>
                       {/* link 3 */}
                       <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Technology</p>  
                    </div>
                       {/* link 4 */}
                       <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Design</p>  
                    </div>
                       {/* link 5 */}
                       <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Programming</p>  
                    </div>         
                </div>
            </div>
            {/* col3 */}
            <div className="w-[250px] h-[225px] g-4 ">
                {/* text */}
                <p className="w-250px] h-6 font-semibold text-base leading-6">Resources</p>
                {/* f link */}
                <div className="w-[250px] h-[185px] grid grid-rows-5">
                    {/* link 1 */}
                    <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Career 
                        </p>  
                    </div>
                   {/* link 2 */}
                   <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Resume 
                        </p>  
                    </div>
                       {/* link 3 */}
                       <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Learning 
                        </p>  
                    </div>
                       {/* link 4 */}
                       <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Interview Preparation 
                        </p>  
                    </div>
                       {/* link 5 */}
                       <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Jobs
                        </p>  
                    </div>         
                </div>
            </div>
            {/* col4 */}
            <div className="w-[250px] h-[225px] g-4 ">
                {/* text */}
                <p className="w-250px] h-6 font-semibold text-base leading-6">About Us</p>
                {/* f link */}
                <div className="w-[250px] h-[185px] grid grid-rows-5">
                    {/* link 1 */}
                    <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Contact
                        </p>  
                    </div>
                   {/* link 2 */}
                   <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Help/Support
                        </p>  
                    </div>
                       {/* link 3 */}
                       <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px] ">                
                        FAQ
                        </p>  
                    </div>
                       {/* link 4 */}
                       <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Terms and Conditions
                        </p>  
                    </div>
                       {/* link 5 */}
                       <div className="w-[250px] h-[37px] pt-2 pb-2 ">
                      <p className="w-[250px] h-[21px] font-normal text-[14px] leading-[21px]  ">
                        Partners</p>  
                    </div>         
                </div>
            </div>



        </div>
      
         {/* credits */}
         <div className="grid grid-rows-2 w-[1120px] h-[57px] gap-8 ">
          <div className=" bg-black w-[1120px] h-[1px]"></div>
          {/* row */}
          <div className="flex grid-cols-2 w-[1120px] h-6 justify-between"
          >
            {/* credit */}
            <div className="flex w-[566px] h-[21px] gap-6">
              <p className="w-{195px] h-[21px] font-normal text-[14px] leading-[21px] ">2023 Ddsgnr. All right reserved.</p>
              {/* footer */}
              <div className="w-[345px] h-[21px] gap-6 grid grid-cols-3">
                <p className="w-[87px] h-[21px] font-normal text-[14px] leading-21 underline">Privacy Policy</p>
                <p className="underline w-[105px] h-[21px]  font-normal text-[14px] leading-21 "> Terms of Service</p>
                <p className="w-[105px] underline h-[21px] font-normal text-[14px] leading-21 ">Cookies Settings</p>
              </div>

            </div>
             {/* social link */}
             <div className="flex grid-cols-4 w-[132px] h-6 gap-3 ">
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


         {/* example */}
         {/* <div className="flex flex-col md:flex-row  justify-center items-center h-screen sm:text-4xl  bg-yellow-400 max-mobil:bg-green-500"> 
       
  
   <div className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] bg-slate-400 flex justify-center items-center ">
            box 1
          </div>
          <div className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] bg-violet-400 flex justify-center items-center">
            box 2
          </div>
          
          <div className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] bg-slate-400 justify-center items-center hidden md:flex">
            box 3
          </div>
          <div className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] bg-violet-400  justify-center items-center hidden md:flex">
            box 4
   </div>
     </div> */}



        </div>
      
    </div>
  );
}

export default Footer ;
