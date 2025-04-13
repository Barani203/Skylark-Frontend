
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserSreen from './pages/UserSreen';



function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserSreen/>}> 
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
