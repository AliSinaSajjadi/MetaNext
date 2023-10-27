import React from 'react';

import style from "../styles/Navbar.module.css"

//imgs
import logo from "../images/logo.png"
import arrowDown from "../images/arrow-down.png"
import dial from "../images/Dial.svg"
import chart from "../images/presention-chart.png"
import earth from "../images/earth.png"

const Navbar = () => {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <div className={style.logoImage}>
                    <img src={logo} />

                </div>
                <div>
                <h2>متانکست</h2>
                <p>جایگاه خود را بهتر کنید</p>
                </div>
            </div>
            <div>
                <ul className={style.list}>
                    <li>صفحه اصلی</li>
                    <li> <img src={arrowDown} />سرویس ها</li>
                    <li>قیمت ها</li>
                    <li><img src={arrowDown} />بلاگ متانکست</li>
                    <li><img src={arrowDown} />لینک های مفید</li>
                </ul>
            </div>
            <div className={style.dial}>
                <img src={dial} />
                <div>
                <p>تماس با ما</p>
                <h3>09152663045</h3>
                </div>
            </div>
            <div className={style.demo}>
                <img src={chart} />
                <h3>دمو رایگان</h3>
            </div>
            <div className={style.language}>
                <img src={arrowDown} />
                <p>En</p>
                <img src={earth} />
            </div>
        </div>
    );
};

export default Navbar;