import React from 'react';

//components

import Navbar from "./assets/components/Navbar"
import Discription from './assets/components/discription';
import Section2 from './assets/components/Section2';
import Section3 from './assets/components/Section3';
import Card from './assets/components/Card';
import Section4 from './assets/components/Section4';
import Swiper1 from './assets/components/Swiper1';
import Section5 from './assets/components/Section5';
import Counseling from './assets/components/Counseling';
import Footer from './assets/components/Footer';
import Swiper2 from './assets/components/Swiper2';

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
      <Swiper1/>
      <Section4/>
      <Section5/>
      <Counseling/>
      <Footer/>
      <Swiper2/>
    </div>
  );
};

export default App;