import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveAppBar from "./components/Navbar";
import Register from "./pages/Register";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";

<Route path="/projects" element={<ProjectsCard />} />
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Gallery from "./pages/users/Gallery";
import ProjectsCard from "./pages/products/ProjectsCard";
import NewProducts from "./pages/products/NewProducts";
import Topbar from "./components/Topbar";
import AllProducts from "./pages/users/Dashboard";
import Cardmore from "./pages/products/SingleConst";
import Notfound from "./components/Notfound";
function App() {
  const dispatch = useDispatch();
  const [data, setDate] = useState([]);
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
    <BrowserRouter>
    <ResponsiveAppBar />

   <Routes>
   <Route path='/' element={<Home/>}/>
    <Route path='/services' element={<Services/>}/>
   </Routes>
    </BrowserRouter>
      {/* <BrowserRouter>
        <ToastContainer />
        <ResponsiveAppBar />
        <div style={{marginTop:'3.5rem'}}>
          <Topbar/>
        </div>
        
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/photos" element={<Gallery />} />
        <Route path="/projects" element={<ProjectsCard />} />
        <Route path="/new-product" element={<NewProducts />} />
        <Route path="/dashboard" element={<AllProducts />} />
        <Route path="/single-project/:id" element={<Cardmore />} />
        <Route path="*" element={<Notfound />} />
         
          <Route path="/login" element={<Login />} />
         
        </Routes>
        <Footer/>
      </BrowserRouter> */}
    </>
  );
}

export default App;
