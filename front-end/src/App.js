import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import ExploreRestaurant from './pages/ExploreRestaurant/ExploreRestaurant';
import ExtractMenu from './pages/ExtractMenu/ExtractMenu';
import Favorite from './pages/Favorite/Favorite';
import FindRestaurant from './pages/FindRestaurant/FindRestaurant';

import { Restaurant } from './components/Data/Restaurant';

const App = () => {

  const [RestaurantData, setRestaurantData] = useState(Restaurant);
  
  const changeData = (e) => setRestaurantData(e);

  return (
    <div className="App">
      {/* <div className="AppGlass"> */}
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<ExploreRestaurant data={RestaurantData} changeData={(e)=>changeData(e)}/>}/>
              <Route path='favorite' element={<Favorite data={RestaurantData} changeData={(e)=>changeData(e)}/>}/>
              <Route path='extractmenu' element={<ExtractMenu/>}/>
              <Route path='findrestaurant' element={<FindRestaurant/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      {/* </div> */}
    </div>
  );
}

export default App;
