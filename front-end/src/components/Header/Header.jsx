import React from 'react';
import './Header.css';

import { BsFillBellFill, BsFillCaretDownFill } from "react-icons/bs";
import avt from "../../assets/avt.png"

const Header = () => {
  return (
    <div className='Header'>
      {/* section */}
      <h2>Explore Restaurant</h2>

      {/* notification */}
      <BsFillBellFill size={20}/>
      
      {/* user information */}
      <div className='User'>
        <img src={avt} alt="avt"/>
        <span>Techainer Admin</span>
        <BsFillCaretDownFill/>
      </div>
    </div>
  )
}

export default Header