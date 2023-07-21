import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import {acitons,horror,orginals} from './urls'
import Banner from './Components/Banner/Banner';
import RowPoster from './Components/RowPoster/RowPoster';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Banner/>
      <RowPoster url={orginals} title='Netflix Originals'/>
      <RowPoster url={acitons} title='Action' isSmall/>
      <RowPoster url={horror} title='Horror' isSmall/> */}
    </div>
  );
}

export default App;
