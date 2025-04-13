import React from "react";
import "../ourclients/jobportal.css";
import homeimg from "../../assets/homeintro.jpg";
export default function Jobportal() {
  return (


    <div className="container my-4 ">
    <div class="box">
    <span></span>
    <div class="content">
      <h6>Job Portal</h6>
      <h2>Mid & Senior Level Management</h2>
      <p>Skylarkjobs.com is a leading job portal specializing in exclusive
            listings for mid-level and senior-level management positions. Our
            platform caters to the needs of professionals seeking challenging
            and rewarding career opportunities. With our extensive network of
            employers and recruiters, we ensure our users have access to the
            best jobs available..</p>
      <a href="#">Explore Job</a>
    </div>
  </div>
   
    {/* <div className="image-section">
        <img src={homeimg} alt="Job Portal"/>
    </div> */}
</div>
  );
}


