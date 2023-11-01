import React from 'react';

//components

import Navbar from "./assets/components/Navbar"
import Discription from './assets/components/discription';
import Section2 from './assets/components/Section2';
import Section3 from './assets/components/Section3';
import Card from './assets/components/Card';
import Section4 from './assets/components/Section4';
import Swiper from './assets/components/Swiper';
import Section5 from './assets/components/Section5';
import Counseling from './assets/components/Counseling';
import Footer from './assets/components/Footer';

//styles

import "./assets/styles/App.css"


const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Discription/>
      <Section2/>
      <Section3/>
      <Card/>
      <Section4/>
      <Section5/>
      <Counseling/>
      <Footer/>
    </div>
  );
};

export default App;