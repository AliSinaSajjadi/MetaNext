import React from 'react';

//components

import Home from "./Home"
import Login from "./assets/components/login/Index";
import Otp from "./assets/components/login/Otp"
import Password from './assets/components/login/Password';
import Successfull from "./assets/components/login/Successfull"

//styles

import "./assets/styles/App.css"
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
        <Route index element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/login/otp' element={<Otp/>}/>
        <Route path='/login/password' element={<Password/>}/>
        <Route path="/login/password/successfull" element={<Successfull/>}/>
        
    </Routes>
  );
};

export default App;