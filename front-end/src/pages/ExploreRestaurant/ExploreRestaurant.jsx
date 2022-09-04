import React from 'react'
import './ExploreRestaurant.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

const ExploreRestaurant = (props) => {
  return (
    <div className='AppGlass'>
      <Sidebar 
          // section={section} 
          // onChangeSection={setSection()} 
          // data={SidebarData}
        />
        <Header 
          // section={section}
          // sectionData={SidebarData}
        />
        <Main 
          // section={section}
          restaurantData={props.data}
        />
        <Footer/>
    </div>
  )
}

export default ExploreRestaurant