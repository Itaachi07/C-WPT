import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Updateuser from "./components/updateuser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function app(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/signin" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/getalluser" element={<Home/>}/>
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
    );
}
export default App;