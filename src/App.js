import React from 'react';
import FullPage from './site/FullPage';
import './site/App.css';
import background from "./site/img/background.png";
function App() {
  return (
    <div className="App -z-50">
      <FullPage />
      <img className=" hidden sm:block absolute left-0 bottom-0 z-0" src={background} alt='img' />
    </div>
  );
}

export default App;
