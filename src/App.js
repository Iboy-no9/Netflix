import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPoster from './Components/RowPoster/RowPoster';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      {/* <RowPoster title='Netflix Originals'/>
      <RowPoster title='Action' isSmall/> */}
    </div>
  );
}

export default App;
