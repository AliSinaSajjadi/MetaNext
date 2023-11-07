import React from 'react';

//components


import Discription from './assets/components/home/Discription';
import Section2 from './assets/components/home/Section2';
import Section3 from './assets/components/home/Section3';
import Card from './assets/components/home/Card';
import Section4 from './assets/components/home/Section4';
import Swiper1 from './assets/components/home/Swiper1';
import Section5 from './assets/components/home/Section5';
import Counseling from './assets/components/home/Counseling';
import Footer from './assets/components/home/Footer';
import Swiper2 from './assets/components/home/Swiper2';
import Swiper3 from './assets/components/home/Swiper3';
import Navbar from './assets/components/home/Navbar';

//styles



const Home = () => {
  return (
    <div className="container">
      <Navbar/>
      <Discription/>
      <Section2/>
      <Section3/>
      <Card/>
      <Swiper1/>
      <Section4/>
      <Swiper2/>
      <Section5/>
      <Swiper3/>
      <Counseling/>
      <Footer/>
    </div>
  );
};

export default Home;