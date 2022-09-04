import React from 'react';
import './Header.css';

import { BsFillBellFill, BsFillCaretDownFill } from "react-icons/bs";
import avt from "../../assets/avt.png"

const Header = (props) => {
  return (
    <div className='Header'>
      {/* section */}
      {/* {props.sectionData.map((item) => {
        if (item.key===props.section) {
          return (
            <h2>{item.heading}</h2>
          )
        }
        return <h2>Unexpected Error</h2>
      })} */}

      <h2>Restaurant</h2>

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