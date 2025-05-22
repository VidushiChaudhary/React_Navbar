import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Navbar  from "./components_temp/Navbar";
import  About  from "./components_temp/About";
import  Home  from "./components_temp/Home"
import  Contact  from "./components_temp/Contact";
import Product from './Product';



const App=() => {
  return(
    <div className='container'>
    
    <BrowserRouter>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/product' element={<Product/>}/>
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </BrowserRouter>
      
      </div>
  );
  
};
export default App;
