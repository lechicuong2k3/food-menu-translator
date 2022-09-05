import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const FindRestaurant = () => {
  return (
    <div className='AppGlass'>
      <Sidebar heading={"Find Restaurant"}/>
      <Header heading={"Find Restaurant"}/>
      <h2>FindRestaurant</h2>
      <Footer/>
    </div>
  )
}

export default FindRestaurant