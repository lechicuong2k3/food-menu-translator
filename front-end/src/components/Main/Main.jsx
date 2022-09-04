import React from 'react';
import './Main.css';
import Table from '../Table/Table';

const Main = (props) => {
  return (
    <div className='Main'>
      <Table data={props.restaurantData}/>
    </div>
  )
}

export default Main