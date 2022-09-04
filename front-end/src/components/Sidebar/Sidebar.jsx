import React from 'react';
import {Link} from "react-router-dom";
import './Sidebar.css';
import Logo from "../../assets/5fm.png";

import { SidebarData } from '../Data/SidebarData';
import { InfoData } from '../Data/InfoData';

const Sidebar = (props) => {

  return (
    <div className='Sidebar'>
      {/* logo */}
      <div className='Logo'>
        <img src={Logo} alt='logo'/>
      </div>

      {/* menu */}
      <div className='Menu'>
        {SidebarData.map((item, index) => {
          return(
            <Link to={`/${item.path}`}
              className={item.heading===props.heading?"MenuItem Active":"MenuItem"}
              key={index}
            >
              <item.icon/>
              <span>
                {item.heading}
              </span>
            </Link>
          )
        })}
      </div>

      {/* info */}
      <div className='Info'>
        {InfoData.map((item) => {
          return(
            <div className='InfoItem'>
              <item.icon/>
              <span>
                {item.heading}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar