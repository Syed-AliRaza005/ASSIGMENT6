import React from "react";
import Herol from "../mobile/hero1";
import Header1 from "../mobile/header1";
import Logo1 from "../mobile/logo1";
import Team1 from "../mobile/team1";
import Ach1 from "../mobile/ach";
import Blog1 from "../mobile/blog1";
import Team51 from "../mobile/team51";
import Test from "../mobile/test";
import Footer2 from "../mobile/footer1";

function Mobile() {
  return (
 
   <div className="um:hidden h-screen w-sceen  ">
   {/* header */}
    <div>
        <Header1 />
    </div>
    {/* hero */}
    <div>
    <Herol />
    </div>
    {/* logo1 */}
    <div>
        <Logo1 />
    </div>
    {/* team1 */}
    <div>
    <Team1 />
    </div>
    {/* achievement */}
    <div>
      <Ach1 />
    </div>
    {/* blog */}
  
  <div> 
     <Blog1 />
   </div>   
   {/* team5 */}
   <div>
    <Team51 />
   </div>
   {/* testimonial  */}
   <div>
    < Test />
    </div>
    {/* footer */}
    <div>
      <Footer2 />
    </div>
   </div>
  );
}

export default Mobile ;