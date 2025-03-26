import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { BsGithub } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import '../Login/companylogin.css'
import image from '../assets/digital.webp'
export default function CompanyLogin() {
  return (
    <>
    
<a data-bs-toggle="modal" data-bs-target="#staticBackdrop">
Company Login
</a>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl modal-dialog-centered ">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
       

       {/* companyLogin */}
       <div className=" d-flex items-start bg-white rounded-3  mx-5 my-5 "
style={{ margin: 50 }}>
<div className="container-fluid ">
<div className="col-6 relative w-1/2  h-full d-flex  ">
<img src={image} alt="professional" className=" rounded-3"  style={{width:500}}/>
</div>
</div>

 <div className="col-6 ">
 <form className="from">
{/* <!-- Email input --> */}
<div  class="form-outline  mx-5 ">
<label class="form-label text-dark m-2 d-flex justify-content-start" for="form2Example1" placeholder ="Email ">Email address</label>
<input type="email" id="form2Example1" class="form-control bg-light" />


</div>

{/*  Password input / */}
<div  class="form-outline mb-4 mx-5">
<label class="form-label" for="form2Example2">Password</label>
<input type="password" id="form2Example2" class="form-control bg-light "  />

</div>

{/*  2 column grid layout for inline styling  */}


{/*  Submit button  */}
<button  type="button"  class="btn btn-primary btn-block mb-4">Sign in</button>

{/*  Register buttons  */}
{/* <div class="text-center">
<p>Not a member? <a href="#!">Register</a></p>
<p>or sign up with:</p>
<button  type="button" class="btn btn-link btn-floating mx-1">
<FaFacebook />
</button>

<button  type="button"  class="btn btn-link btn-floating mx-1">
<FcGoogle />
</button>

<button  type="button"  class="btn btn-link btn-floating mx-1">
<FaSquareXTwitter />
</button>

<button  type="button"  class="btn btn-link btn-floating mx-1">
<BsGithub />
</button>
</div> */}
</form>
 </div>

</div>

       {/* ---------------- */}
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div> */}
    </div>
  </div>
</div>
    </>
  )
}





