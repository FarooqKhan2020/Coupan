import React from 'react'
import LogoBar1 from './Components/Home/LogoBar1';
import Navbar from './Components/Home/Navbar';
import Highlight from './Components/Home/Highlight';

import Footer from './Components/Home/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';
import ScrollToTop from './Components/Home/ScrollToTop';
function App() {
  
  return (

    <>
    
<ScrollToTop/>
    <LogoBar1/>
    <Navbar/>
    <Highlight/>
    <Outlet/>
    <Footer></Footer>
    </>
  )
}

export default App;