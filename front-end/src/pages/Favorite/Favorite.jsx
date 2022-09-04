import React from 'react';
import './Favorite.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

const Favorite = (props) => {

  const favoriteData = props.data.filter(item => item.favorite === 1);

  return (
    <div className='AppGlass'>
      <Sidebar heading={"Your Favorite"}/>
      <Header heading={"Your Favorite"}/>
      <Main restaurantData={favoriteData}/>
      <Footer/>
    </div>
  )
}

export default Favorite