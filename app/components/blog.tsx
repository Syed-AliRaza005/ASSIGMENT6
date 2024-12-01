import React from "react";
import Image from "next/image";

function Blog () {
    return (
            <div className="blog  bg-white  w-[1280px] h-[1742px] top-[3326px] left-[100px] pt-[112px] pb-[112px] pr-[64px] pl-[64px] gap-[60px]">
        
        
                <div className="section mx-auto place-items-center grid grid-cols-1 w-[768px] h-[118] gap-4 ">

                    <div className="content  grid grid-rows-2 w-[768px] h-[118px] gap-6">
                        <h1 className="w-[768px] h-[67px] font-bold text-[56px] leading-[67.2px] text-center text-black">Courses </h1>

                        <p className="w-[768px] h-[27px] font-normal text-[18px] leading-[27px] text-center text-black">Your Ultimate Guide to learning </p>

                    </div>
                </div>


                <div className="content grid place-items-center mx-auto w-[1152px] gap-16 ">

                    <div className="categories grid grid-cols-3  w-[336px] h-[40px]">
                            {/* button1 */}
                    
                        <button className="button1 w-[87px] h-[40px] border-b pt-2 pb-2 pr-4 pl-4 gap-2 border-ali">

                            <p className="w-[55px] h-6 font-normal text-[16px] leading-6 text-black">Popular</p>
                        </button>
                              {/* button2 */}
                              <button className="button1 w-[140px] h-[40px] pt-2 pb-2 pr-4 pl-4 gap-2">
                            <p className="w-[108px] h-6 font-normal text-[16px] leading-6 text-black">Recommended</p>

                        </button>
                              {/* button3 */}
                              <button className="button1 w-[109px] h-[40px]  pt-2 pb-2 pr-4 pl-4 gap-2">
                            <p className="w-[77px] h-6 font-normal text-[16px] leading-6 text-black">Best Price</p>

                        </button>
                          

                    </div>
                    
                    <div className="content grid grid-rows-2 w-[1280px] h-[1132px] gap-16">

                        {/* rows1 */}
                    <div className="row1 grid grid-cols-3  w-[1312px] h-[543px] gap-8">
                     
                        {/* card1 */}
                        <div className=" card1 w-[416px] h-[534px] rounded-[5px] gap-6 bg-card">
                            <Image 
                            src="./images/bc11.svg"
                            alt=""
                            width={416}
                            height={300}                           
                            />
                                {/* frame */}
                            <div className="frame w-[416] h-[210px] pr-4 pl-4 pb-6 gap-6">
                         {/* content */}
                            <div className="content w-[382px] h-[122px] gap-2">
                                {/* rating */}
                             
                                <div className=" flex  w-[382px] h-6 gap-2">
                                 
                                    <p className="w-[326px] h-[21px] font-semibold text-sm leading-[21px]">Design</p>
                                    {/* stars */}
                                    <div className="stars flex justify-center  w-12 h-6 gap-1">
                                        <Image
                                        src="./images/star.svg"
                                        alt="star"
                                        width={24}
                                        height={24}
                                          />
                                          {/* rating */}
                                          <p className="w-[20px] h-6 font-semibold text-sm leading-[21px] text-right text-black">5.0</p>
                                    </div>
                                </div>
                                <h5 className=" w-[382px] h-[34px] font-bold text-base leading-[33.6px] text-black"
                                > UX/UI Design 201</h5>
                                <p className="w-[382px] h-12 font-normal text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            </div>


                          {/*avatar  */}
                            <div className="avatar w-[382px] h-[40px] 4">
                                
                                <button className=" w-[177px]  place-items-center text-center  h-[40px] rounded-[5px] gap-2 pt-2 pb-2 pl-5 pr-5 border border-black">
                                    <p className="flex w-screenjusitify-center h-6 font-normal  text-base leading-6 text-black ">Enroll Now</p>
                                </button>

                                <button className="  w-[77px] h-[40px] rounded-[5px] gap-2 pt-2 pb-2 pl-5 pr-5">
                                    <p className="flex w-[37px] h-6 font-medium text-base leading-6 text-black "> $400 </p>
                                </button>
                                
                                 </div> 
                            </div>
                        </div>


                          {/* card2 */}
                          <div className=" card2 w-[416px] h-[534px] rounded-[5px] gap-6 bg-card">
                            <Image 
                            src="./images/bc12.svg"
                            alt=""
                            width={416}
                            height={300}                           
                            />
                                {/* frame */}
                            <div className="frame w-[416] h-[210px] pr-4 pl-4 pb-6 gap-6">
                         {/* content */}
                            <div className="content w-[382px] h-[122px] gap-2">
                                {/* rating */}
                             
                                <div className=" flex  w-[382px] h-6 gap-2">
                                 
                                    <p className="w-[326px] h-[21px] font-semibold text-sm leading-[21px]">Programming</p>
                                    {/* stars */}
                                    <div className="stars flex justify-center  w-12 h-6 gap-1">
                                        <Image
                                        src="./images/star.svg"
                                        alt="star"
                                        width={24}
                                        height={24}
                                          />
                                          {/* rating */}
                                          <p className="w-[20px] h-6 font-semibold text-sm leading-[21px] text-right text-black">5.0</p>
                                    </div>
                                </div>
                                <h5 className=" w-[382px] h-[34px] font-bold text-base leading-[33.6px] text-black"
                                > Introduction to Python</h5>
                                <p className="w-[382px] h-12 font-normal text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            </div>


                          {/*avatar  */}
                            <div className="avatar w-[382px] h-[40px] 4">
                                
                                <button className=" w-[177px]  place-items-center text-center  h-[40px] rounded-[5px] gap-2 pt-2 pb-2 pl-5 pr-5 border border-black">
                                    <p className="flex w-screenjusitify-center h-6 font-normal  text-base leading-6 text-black ">Enroll Now</p>
                                </button>

                                <button className="  w-[77px] h-[40px] rounded-[5px] gap-2 pt-2 pb-2 pl-5 pr-5">
                                    <p className="flex w-[37px] h-6 font-medium text-base leading-6 text-black "> $400 </p>
                                </button>
                                
                                 </div> 
                            </div>
                        </div>
                            {/* card3 */}
                            <div className=" card1 w-[416px] h-[534px] rounded-[5px] gap-6 bg-card">
                            <Image 
                            src="./images/bc13.svg"
                            alt=""
                            width={416}
                            height={300}                           
                            />
                                {/* frame */}
                            <div className="frame w-[416] h-[210px] pr-4 pl-4 pb-6 gap-6">
                         {/* content */}
                            <div className="content w-[382px] h-[122px] gap-2">
                                {/* rating */}
                             
                                <div className=" flex  w-[382px] h-6 gap-2">
                                 
                                    <p className="w-[326px] h-[21px] font-semibold text-sm leading-[21px]">Business</p>
                                    {/* stars */}
                                    <div className="stars flex justify-center  w-12 h-6 gap-1">
                                        <Image
                                        src="./images/star.svg"
                                        alt="star"
                                        width={24}
                                        height={24}
                                          />
                                          {/* rating */}
                                          <p className="w-[20px] h-6 font-semibold text-sm leading-[21px] text-right text-black">5.0</p>
                                    </div>
                                </div>
                                <h5 className=" w-[382px] h-[34px] font-bold text-base leading-[33.6px] text-black"
                                > DATA Analysis for Beginners</h5>
                                <p className="w-[382px] h-12 font-normal text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            </div>


                          {/*avatar  */}
                            <div className="avatar w-[382px] h-[40px] 4">
                                
                                <button className=" w-[177px]  place-items-center text-center  h-[40px] rounded-[5px] gap-2 pt-2 pb-2 pl-5 pr-5 border border-black">
                                    <p className="flex w-screenjusitify-center h-6 font-normal  text-base leading-6 text-black ">Enroll Now</p>
                                </button>

                                <button className="  w-[77px] h-[40px] rounded-[5px] gap-2 pt-2 pb-2 pl-5 pr-5">
                                    <p className="flex w-[37px] h-6 font-medium text-base leading-6 text-black "> $400 </p>
                                </button>
                                
                                 </div> 
                            </div>
                        </div>
                    </div>                  
                        {/* rows2 */}
                        <div className="row1 grid grid-cols-3  w-[1312px] h-[543px] gap-8">
                     
                     {/* card1 */}
                     <div className=" card1 w-[416px] h-[534px] rounded-[5px] gap-6 bg-card">
                         <Image 
                         src="./images/bc21.svg"
                         alt=""
                         width={416}
                         height={300}                           
                         />
                             {/* frame */}
                         <div className="frame w-[416] h-[210px] pr-4 pl-4 pb-6 gap-6">
                      {/* content */}
                         <div className="content w-[382px] h-[122px] gap-2">
                             {/* rating */}
                          
                             <div className=" flex  w-[382px] h-6 gap-2">
                              
                                 <p className="w-[326px] h-[21px] font-semibold text-sm leading-[21px]">Art</p>
                                 {/* stars */}
                                 <div className="stars flex justify-center  w-12 h-6 gap-1">
                                     <Image
                                     src="./images/star.svg"
                                     alt="star"
                                     width={24}
                                     height={24}
                                       />
                                       {/* rating */}
                                       <p className="w-[20px] h-6 font-semibold text-sm leading-[21px] text-right text-black">5.0</p>
                                 </div>
                             </div>
                             <h5 className=" w-[382px] h-[34px] font-bold text-base leading-[33.6px] text-black"
                             > Art Specialization</h5>
                             <p className="w-[382px] h-12 font-normal text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         </div>


                       {/*avatar  */}
                         <div className="avatar w-[382px] h-[40px] 4">
                             
                             <button className=" w-[177px]  place-items-center text-center  h-[40px] rounded-[5px] gap-2 pt-2 pb-2 pl-5 pr-5 border border-black">
                                 <p className="flex w-screenjusitify-center h-6 font-normal  text-base leading-6 text-black ">Enroll Now</p>
                             </button>

                             <button className="  w-[77px] h-[40px] rounded-[5px] gap-2 pt-2 pb-2 pl-5 pr-5">
                                 <p className="flex w-[37px] h-6 font-medium text-base leading-6 text-black "> $400 </p>
                             </button>
                             
                              </div> 
                         </div>
                     </div>


                       {/* card2 */}
                       <div className=" card2 w-[416px] h-[534px] rounded-[5px] gap-6 bg-card">
                         <Image 
                         src="./images/bc22.svg"
                         alt=""
                         width={416}
                         height={300}                           
                         />
                             {/* frame */}
                         <div className="frame w-[416] h-[210px] pr-4 pl-4 pb-6 gap-6">
                      {/* content */}
                         <div className="content w-[382px] h-[122px] gap-2">
                             {/* rating */}
                          
                             <div className=" flex  w-[382px] h-6 gap-2">
                              
                                 <p className="w-[326px] h-[21px] font-semibold text-sm leading-[21px]">Law</p>
                                 {/* stars */}
                                 <div className="stars flex justify-center  w-12 h-6 gap-1">
                                     <Image
                                     src="./images/star.svg"
                                     alt="star"
                                     width={24}
                                     height={24}
                                       />
                                       {/* rating */}
                                       <p className="w-[20px] h-6 font-semibold text-sm leading-[21px] text-right text-black">5.0</p>
                                 </div>
                             </div>
                             <h5 className=" w-[382px] h-[34px] font-bold text-base leading-[33.6px] text-black"
                             > Rule of Law</h5>
                             <p className="w-[382px] h-12 font-normal text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         </div>


                       {/*avatar  */}
                         <div className="avatar w-[382px] h-[40px] 4">
                             
                             <button className=" w-[177px]  place-items-center text-center  h-[40px] rounded-[5px] gap-2 pt-2 pb-2 pl-5 pr-5 border border-black">
                                 <p className="flex w-screenjusitify-center h-6 font-normal  text-base leading-6 text-black ">Enroll Now</p>
                             </button>

                             <button className="  w-[77px] h-[40px] rounded-[5px] gap-2 pt-2 pb-2 pl-5 pr-5">
                                 <p className="flex w-[37px] h-6 font-medium text-base leading-6 text-black "> $400 </p>
                             </button>
                             
                              </div> 
                         </div>
                     </div>
                         {/* card3 */}
                         <div className=" card1 w-[416px] h-[534px] rounded-[5px] gap-6 bg-card">
                         <Image 
                         src="./images/bc23.svg"
                         alt=""
                         width={416}
                         height={300}                           
                         />
                             {/* frame */}
                         <div className="frame w-[416] h-[210px] pr-4 pl-4 pb-6 gap-6">
                      {/* content */}
                         <div className="content w-[382px] h-[122px] gap-2">
                             {/* rating */}
                          
                             <div className=" flex  w-[382px] h-6 gap-2">
                              
                                 <p className="w-[326px] h-[21px] font-semibold text-sm leading-[21px]">Tech</p>
                                 {/* stars */}
                                 <div className="stars flex justify-center  w-12 h-6 gap-1">
                                     <Image
                                     src="./images/star.svg"
                                     alt="star"
                                     width={24}
                                     height={24}
                                       />
                                       {/* rating */}
                                       <p className="w-[20px] h-6 font-semibold text-sm leading-[21px] text-right text-black">5.0</p>
                                 </div>
                             </div>
                             <h5 className=" w-[382px] h-[34px] font-bold text-base leading-[33.6px] text-black"
                             >Introduction to Webflow</h5>
                             <p className="w-[382px] h-12 font-normal text-base text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         </div>


                       {/*avatar  */}
                         <div className="avatar w-[382px] h-[40px] 4">
                             
                             <button className=" w-[177px]  place-items-center text-center  h-[40px] rounded-[5px] gap-2 pt-2 pb-2 pl-5 pr-5 border border-black">
                                 <p className="flex w-screenjusitify-center h-6 font-normal  text-base leading-6 text-black ">Enroll Now</p>
                             </button>

                             <button className="  w-[77px] h-[40px] rounded-[5px] gap-2 pt-2 pb-2 pl-5 pr-5">
                                 <p className="flex w-[37px] h-6 font-medium text-base leading-6 text-black "> $400 </p>
                             </button>
                             
                              </div> 
                         </div>
                     </div>
                 </div>

                    </div>
                 

                <button className="w-[152px] h-[40px] rounded-[5px] border border-black pt-2 pb-2 pl-4 pr-4 gap-2"> <p className="w-[120px] h-[24px] font-normal text-base leading-6 text-black">View All Courses</p></button>
                    
                </div>

            </div>
    );
}
export default Blog ;