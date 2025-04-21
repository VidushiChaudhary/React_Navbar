import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar =() =>{
    return(
        <div className='navbar'>
            <img src='' alt='' className='logo'/>
            <ul>
                <li><Link to='/'>Home</Link> </li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/product'>Product</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>

            <div className='search-box'>
                <input type='text' placeholder='Search'/>
                <img src="" alt=""/>
            </div>

            <img src="" alt="" className='toggle-icon'/>
            
            
        </div>
       );
};
export default Navbar;
