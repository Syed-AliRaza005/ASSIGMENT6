import React from "react";
import Header1 from "../header1";
import Header2 from "../header2";
import Hero from "../hero";
import Logo from "../logo";
import Team from "../team";
import Layout240 from "../layout240";
import Layout241 from "../layout241";
import Blog from "../blog";
import Team5 from "../team5";
import Testimonial from "../testimonial";
import Footer from "../footer";
function Window() {
  return (
    <div className=" mo:hidden w-[1280px] h-screen border border-ali left-[100px] top-[100px] ">
  
   {/* header */}
   <div >
   <Header1 /> 
    <Header2 /> 
    </div>
     
   {/* hero */}
   <div>
      <Hero />
     
    </div>

    {/* logo */}
    <div>
      < Logo />
    </div>
    
    {/* team */}
    <div>
    <Team />
    </div>
    {/* layout240 */}
    <div>
      <Layout240 />
    </div>
        {/* layout241 */}
        <div>
      <Layout241 />
    </div>
    {/* blog */}
    <div>
      < Blog />
    </div>
    {/* team5 */}
    <div>
      < Team5 />
    </div>
    {/* testimonial */}
    <div>
      <Testimonial />
    </div>
    {/* footer */}
    <div>
      <Footer />
    </div>

    </div>
  );
}

export default Window ;