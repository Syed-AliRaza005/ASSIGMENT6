import React from "react";
import Image from "next/image";

function Team51() {
  return (
    <div className=" bg-card grid-rows-3 justify-items-center w-[428px] h-auto pt-12 pb-12 pr-6 pl-6 gap-2">
      {/* section */}
        <div className="w-auto h-auto gap-4">
      
       <div className=" w-[363px] h-auto gap-6">
        <h2 className="w-[363px] h-[42px] font-bold text-[32px] text-center leading-[41.6px]">Our Team</h2>
      
        <p className="w-[363px] h-[54px] font-normal text-[18px] text-center leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

       </div>
        </div>
    
        {/* content */}
      <div className=" w-auto  h-auto gap-24" >

            {/* sub1 */}
            <div className="w-[380px] h-auto gap-16" >
             {/* row1 */}
             <div className="row1 place-content-center place-items-center grid grid-rows-3 w-[380px] h-auto gap-12">
                
                   {/* card1 */}
                   <div className=" card1 justify-items-center grid grid-rows-2 w-[394.67px] h-auto  gap-6">
                            <Image 
                            src="./images/tc11.svg"
                            alt=""
                            width={80}
                            height={80}                           
                            />
                                {/* content */}
                         <div className="card1 w-[394.67px] h-auto  gap-4">
                            {/* text */}
                            <div className="w-[394.67px] h-auto">

                                <p className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px] text-center">James Nduku</p>
                                <p className="w-[394.67px] h-[27px]font-normal text-[20px] leading-[27px] text-center">Markeing Coordinator</p>


                             </div>

                         </div>
                           {/* social link */}
                           <div className="flex w-auto h-auto gap-[14px]">
                            
                              <Image                    
                               src="./images/linkin.svg"
                               alt=""
                               width={24}
                               height={24}/>

                            <Image                    
                               src="./images/twitter.svg"
                               alt=""
                               width={24}
                               height={24}/>

                                <Image                    
                               src="./images/dribble.svg"
                               alt=""
                               width={24}
                               height={24}/>
   
                         </div>
                   </div>

                       {/* card2 */}
                       <div className="card1 justify-items-center grid grid-rows-2 w-[394.67px] h-auto  gap-6">
                            <Image 
                            src="./images/tc12.svg"
                            alt=""
                            width={80}
                            height={80}                           
                            />
                                {/* content */}
                         <div className="card1 w-[394.67px] h-auto gap-4">
                            {/* text */}
                            <div className="w-[394.67px] h-auto">
                                <p className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px] text-center">Joseph Munyambu</p>
                                <p className="w-[394.67px] h-[27px] font-normal text-[18px] leading-[27px] text-center">Nursing Assistance</p>


                             </div>

                         </div>
                           {/* social link */}
                           <div className="flex w-[100px]  h-6 gap-[14px]">
                              <Image                    
                               src="./images/linkin.svg"
                               alt=""
                               width={24}
                               height={24}/>

                            <Image                    
                               src="./images/twitter.svg"
                               alt=""
                               width={24}
                               height={24}/>

                                <Image                    
                               src="./images/dribble.svg"
                               alt=""
                               width={24}
                               height={24}/>
   
                         </div>
                   </div>

                       {/* card3 */}
                       <div className="card3 justify-items-center grid grid-rows-2 w-[394.67px] h-auto  gap-6 ">
                            <Image 
                            src="./images/tc13.svg"
                            alt=""
                            width={80}
                            height={80}                           
                            />
                                {/* content */}
                         <div className="card1 w-[394.67px] h-auto  gap-4">
                            {/* text */}
                            <div className="w-[394.67px] h-auto">
                                <p className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px] text-center">Joseph Nigumbau</p>
                                <p className="w-[394.67px] h-[27px] font-normal text-[18px] leading-[27px] text-center"> Medical Assistance</p>


                             </div>

                         </div>
                           {/* social link */}
                           <div className="flex w-[100px]  h-6 gap-[14px]">
                              <Image                    
                               src="./images/linkin.svg"
                               alt=""
                               width={24}
                               height={24}/>

                            <Image                    
                               src="./images/twitter.svg"
                               alt=""
                               width={24}
                               height={24}/>

                                <Image                    
                               src="./images/dribble.svg"
                               alt=""
                               width={24}
                               height={24}/>
   
                         </div>
                   </div>            
            </div>                    
      </div>



    </div>
    {/*  button */}
    <button className="w-auto bg-slate-700 h-auto rounded-[5px] border pt-2 pb-2 pr-6 pl-6 gap-2 ">
      <p className="w-[57px] h-6 font-normal text-xs leading-6">View All</p>
    </button>
    </div>
  );
}


export default Team51 ;
