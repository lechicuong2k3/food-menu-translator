import React, {useState} from 'react';
import './Sidebar.css';
import Logo from "../../assets/5fm.png";

import { SidebarData } from '../Data/SidebarData';
import { InfoData } from '../Data/InfoData';

const Sidebar = () => {

  const [selected, setSelected] = useState(0);

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
            <div className={selected===index?"MenuItem Active":"MenuItem"}
            key={index}
            onClick={()=>setSelected(index)}
            >
              <item.icon/>
              <span>
                {item.heading}
              </span>
            </div>
          )
        })}
      </div>

      {/* info */}
      <div className='Info'>
        {InfoData.map((item, index) => {
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