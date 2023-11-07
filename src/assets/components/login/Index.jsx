import React from 'react';
import Navbar from '../home/Navbar';
import Image from "../../images/Login.png" 
import style from "../../styles/Login.module.css"
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className={style.container} >
            <Navbar/>
            <div className={style.login}>
                <img className={style.image} src={Image}/>
                <div className={style.text}>
                <h1 className={style.title}>ورود - ثبت نام</h1>
                <h3 className={style.page}>شماره خود را وارد کنید</h3>
                <input className={style.number}/>
                <Link className={style.link} to= "otp">
                <button className={style.button}>تایید شماره</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;