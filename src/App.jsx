
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from './Login/UserLogin';
import CompanyLogin from './Login/CompanyLogin';
import Navbar from './components/Navbar/Navbar';
import Otp from './Login/Otp';


function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompanyLogin/>}>

          {/* <Route index element={<Navbar />} /> */}
          
          {/* <Route path="/login" element={<Navbar />} /> */}
         
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
{/* <div>
     
<UserNavbar/>
     </div> */}