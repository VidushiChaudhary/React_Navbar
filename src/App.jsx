import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Navbar  from "./Components/Navbar";
import  About  from "./Components/about";
import  Home  from "./Components/home";
import  Contact  from "./Components/contact";
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
