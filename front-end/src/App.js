import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import ExploreRestaurant from './pages/ExploreRestaurant/ExploreRestaurant';
import ExtractMenu from './pages/ExtractMenu/ExtractMenu';
import Favorite from './pages/Favorite/Favorite';
import FindRestaurant from './pages/FindRestaurant/FindRestaurant';

import { Restaurant } from './components/Data/Restaurant';

const App = () => {
  return (
    <div className="App">
      {/* <div className="AppGlass"> */}
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<ExploreRestaurant data={Restaurant} />}/>
              <Route path='favorite' element={<Favorite data={Restaurant} />}/>
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
