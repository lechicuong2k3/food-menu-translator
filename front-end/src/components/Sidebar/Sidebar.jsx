import React from 'react';
import './Sidebar.css';
import Logo from "../../assets/5fm.png";

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      {/* logo */}
      <div className='Logo'>
        <img src={Logo} alt='logo'/>
      </div>
    </div>
  )
}

export default Sidebar