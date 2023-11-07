import React from 'react';

import style from "../styles/Navbar.module.css"

//imgs
import logo from "../images/logo.png"
import arrowDown from "../images/arrow-down.png"
import dial from "../images/Dial.svg"
import chart from "../images/presention-chart.png"
import earth from "../images/earth.png"
import vector from "../images/Vector 31.png"

const Navbar = () => {
    function toPersianNumerals(input) {
        const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    
        return input.replace(/\d/g, (match) => persianDigits[+match]);
      }
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <div className={style.logoImage}>
                    <img src={logo} />

                </div>
                <div>
                <h2>متانکست</h2>
                <p>جا یگاه خود را بهتر کنید</p>
                </div>
            </div>
            <div>
                <ul className={style.list}>
                    <li>صفحه اصلی</li>
                    <li> <img src={arrowDown} />سرویس ها</li>
                    <li>قیمت ها</li>
                    <li><img src={arrowDown} /><p>بلاگ متانکست</p></li>
                    <li><img src={arrowDown} /><p>لینک های مفید</p></li>
                </ul>
            </div>
            <div className={style.dial}>
                <img src={dial} />
                <div>
                <p>تماس با ما</p>
                <h3>{toPersianNumerals("09152663045")}</h3>
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
            <img className={style.vector} src={vector}/>
        </div>
    );
};

export default Navbar;