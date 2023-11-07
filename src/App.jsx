import React from 'react';

//components

import Home from "./Home"
import Login from "./assets/components/login/Index";
import Otp from "./assets/components/login/Otp"

//styles

import "./assets/styles/App.css"
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
        <Route index element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/login/otp' element={<Otp/>}/>
        
    </Routes>
  );
};

export default App;