import React from 'react';
import './Header.css';

import { BsFillBellFill, BsFillCaretDownFill } from "react-icons/bs";
import avt from "../../assets/avt.png"

const Header = (props) => {
  return (
    <div className='Header'>
      {/* section */}
      <h1>{props.heading}</h1>

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