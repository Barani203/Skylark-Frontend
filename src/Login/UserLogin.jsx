import React from "react";
import { FcGoogle } from "react-icons/fc";
import image from '../assets/professional.jpg'
import '../Login/userlogin.css'
import Otp from "./Otp";
export default function UserLogin() {
  return (
    <>
<a  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
Candidate Login
</a>


<div class="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl  ">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
       
       {/* UserLogin*/}
         
       <div className=" d-flex items-start bg-white rounded-3  mx-5 my-5 "
         >
         <div className="container ">
         <div className=" col-6 relative    h-full d-flex   ">
         <img src={image} alt="professional" className=" rounded-3"  style={{width:400}}/>
         </div>
         </div>
         
          <div className="col-6  ">
          <form className="from">
         {/* <!-- Email input --> */}
         <div  class="form-outline mx-5  ">
         <label class="form-label text-dark m-2 d-flex justify-content-start" for="form2Example1" placeholder ="Email ">Email address</label>
         <input type="email" id="form2Example1" class="form-control  text-dark bg-whitet "placeholder="Gmail Address" />
        
         </div>
         
         
         
         {/*  2 column grid layout for inline styling  */}
        
         
         {/*  Submit button  */}
         <button  type="button"  class="btn btn-primary btn-block mb-4"><Otp/></button>
         
         {/*  Register buttons  */}
         <div class="text-center">
         
         <p className='text-dark'>or sign up with:</p>
         
         <button  type="button"  class="btn btn-dark  ">
         <FcGoogle /><i>Signed in Via Gmail</i>
         </button>
         
         
         </div>
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
  );
}



