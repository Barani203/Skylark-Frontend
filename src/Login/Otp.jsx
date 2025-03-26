import React, { useState } from "react";

import '../Login/otpverify.css'
export default function Otp() {
    // const [token, setTokens] = useState();

    return (
        <>
          
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Login
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      {/* <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> */}
      <div class="modal-body">
        {/* -------------- */}
        <div class="container height-100 d-flex justify-content-center align-items-center ">
                <div class="position-relative ">
                    <div class="cursor-box zoom-in p-2 text-center">
                        <h6>
                            Please enter the one time password
                            <br /> to verify your account
                        </h6>
                        <div>
                            {" "}
                            <span>A code has been sent to</span>
                        </div>
                        <div
                            id="otp"
                            class="inputs d-flex flex-row justify-content-center mt-2"
                        >
                            <input
                                class="m-2  text-center form-control rounded"
                                type="text"
                                id="first"
                                maxlength="1"
                            />
                            <input
                                class="m-2 text-center form-control rounded"
                                type="text"
                                id="second"
                                maxlength="1"
                            />
                            <input
                                class="m-2 text-center form-control rounded"
                                type="text"
                                id="third"
                                maxlength="1"
                            />
                            <input
                                class="m-2 text-center form-control rounded"
                                type="text"
                                id="fourth"
                                maxlength="1"
                            />
                        </div>{" "}
                        <div class="mt-4 ">
                            {" "}
                            <button class="btn btn-danger px-4 validate">Verify OTP</button>
                        </div>{" "}
                    </div>{" "}
                    {/* <div class="card-2">
                        <div class="content d-flex justify-content-center align-items-center">
                            <span>Didn't get the code</span>
                            <a href="#" class="text-decoration-none ms-3">
                                Resend(1/3)
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>

        {/* --------------- */}
      </div>
     
    </div>
  </div>
</div>
        </>
    );
}


