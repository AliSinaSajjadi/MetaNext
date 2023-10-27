import React from 'react';


import Navbar from "./assets/components/Navbar"
import Discription from './assets/components/discription';

import "./assets/styles/App.css"
import Section2 from './assets/components/section2';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Discription/>
      <Section2/>
      
    </div>
  );
};

export default App;