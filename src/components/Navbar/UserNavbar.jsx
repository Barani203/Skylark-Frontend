import React from 'react'
import logo from '../../assets/skylarklogo.png'
import '../Navbar/usernavbar.css'
export default function UserNavbar() {
  return (
   <>

<nav className="navbar navbar-expand-lg bg-light">
                            <div className="container px-0 ">
                              <a className="navbar-brand  "><img className='image ' src={logo} alt="skylarklogo" /></a>
                            
                              <div className="collapse navbar-collapse" id="navbar-default">
                                <ul className="navbar-nav mt-3 mt-lg-0 mx-xxl-auto">
                                  <li className="nav-item">
                                    <a className="nav-link " href="#" id="navbarBrowse"  data-bs-display="static">Home</a>
                                   
                                  </li>
                                  <li className="nav-item ">
                                    <a className="nav-link " href="#" id="navbarLanding"   >Job</a>
                                    
                                  </li>
                                
                          
                                  <li className="nav-item  ">
                                    <a className="nav-link " href="#" id="navbarAccount" >Contact Us</a>
                                    
                                  </li>

                                </ul>
                                <div className="ms-auto mr-10 ">
                                <div className="d-flex gap-4 " id='btn'>
                                  
                                <button className="btn btn-dark  p-3 " id='btn-login'>Login</button>
                                <button  className="btn btn-dark  d-md-block" id='btn-empoley'>Employer Login</button>
                                </div>
                              </div>
                              </div>
                            </div>
                          </nav>

   </>
  )
}
