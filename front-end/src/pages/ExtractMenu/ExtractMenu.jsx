import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ExtractMenu = () => {
  return (
    <div className='AppGlass'>
      <Sidebar heading={"Menu Extraction"}/>
      <Header heading={"Menu Extraction"}/>
      <h2>ExtractMenu</h2>
      <Footer/>
    </div>
  )
}

export default ExtractMenu