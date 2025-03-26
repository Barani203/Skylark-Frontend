import React from 'react'
import logo from '../../assets/skylarklogo.png'
import '../Navbar/navbar.css'
import { MdCorporateFare } from "react-icons/md";
import CompanyLogin from '../../Login/CompanyLogin';
import '../../Login/companylogin.css'
import UserLogin from '../../Login/UserLogin';

export default function Navbar() {
  return (
   <>

<nav class="navbar navbar-expand-lg bg-white">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   <img src={logo} className='image'></img>
    <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" id='nav-link' aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Job</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " >Contact US</a>
        </li>
      </ul>
  <div className='btn-login'>
     <p  className='hover-underline text-primary'><UserLogin/> </p>
    <span>/</span>
    <a className='hover-underline text-dark'><CompanyLogin/><MdCorporateFare /></a>
  </div>
  
    </div>
  </div>
</nav>

   </>
  )
}


// group button

{/* <div class="btn-group" role="group" aria-label="Basic example">
<button type="button" class="btn btn-dark">Login</button>
<button type="button" class="btn btn-primary">Empolye Login</button>

</div> */}
