import React from 'react';

//style
import style from "../styles/Footer.module.css"

//imgs
import logo from "../images/logo.png"
import Dial from "../images/DialW.png"
import telegram from "../images/Telegram.png"
import instagram from "../images/Instagram.png"
import LinkedIn from "../images/Linked In.png"
import facebook from "../images/Facebook.png"
import enamad from "../images/enamad.png"
import calcGreen from "../images/calcGreen.png"
import calcOrange from "../images/calcOrange.png"
import calcPink from "../images/calcPink.png"
import calcPurule from "../images/calcPurple.png"
import calcRed from "../images/calcRed.png"
import location from "../images/location.png"
import DialSmall from "../images/DialSmall.png"
import Message from "../images/Message.png"
import demo from "../images/presention-chart-blue.png"
import background from "../images/Sec4back.png"
import copyright from "../images/copyright.png"



const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.section1}>
                <div className={style.text}>
                    <img src={Dial} />
                    <div>
                        <h2>تماس با ما</h2>
                        <p>در تمامی روز های هفته 24 ساعته در خدمتیم </p>
                    </div>
                </div>
                <div className={style.number}>
                    <h2>09152663045</h2>
                </div>

            </div>
            <div className={style.section2}>
                <div className={style.logo}>
                    <div className={style.logoImage}>
                        <img src={logo} />

                    </div>
                    <div>
                        <h2>متانکست</h2>
                        <p>جایگاه خود را بهتر کنید</p>
                    </div>
                </div>
                <div className={style.links}>
                    <img src={telegram} />
                    <img src={instagram} />
                    <img src={LinkedIn} />
                    <img src={facebook} />

                </div>
            </div>
            <div className={style.section3}>
                <div>
                    <h3>متانکست</h3>
                    <ul className={style.metanext}>
                        <li>صفحه اصلی</li>
                        <li>قیمت ها</li>
                        <li>خدمات</li>
                        <li>بلاگ</li>
                        <li>درباره ما</li>
                    </ul>
                </div>
                <div >
                    <h3>خدمات ما</h3>
                    <ul className={style.services}>
                        <li><img src={calcGreen} />حسابداری آنلاین</li>
                        <li><img src={calcOrange} />مدیریت نیروی کار</li>
                        <li><img src={calcPink} />گفتوگو با مشتریان</li>
                        <li><img src={calcPurule} />اپلیکیشن فروشگاهی</li>
                        <li><img src={calcRed} />سایت فروش</li>
                    </ul>

                </div>
                <div>
                    <h3>خدمات مشتریان</h3>
                    <ul className={style.customersservice}>
                        <li>تماس با ما</li>
                        <li>سوالات متداول</li>
                        <li>همکاری در فروش</li>
                    </ul>
                </div>
                <div>
                    <h3>راه های ارتباطی</h3>
                    <ul className={style.contact}>
                        <li className={style.firstlist}>
                            <div className={style.locationtext}>
                                <img src={location} />
                                <p>آدرس</p>
                            </div>
                            <h4>مشهد بابانظر 77 ، عزیزی 3، پلاک 8</h4>
                        </li>
                        <li>
                            <img src={DialSmall} />
                            <p>شماره تماس</p>
                            <h4>02136160800</h4>
                        </li>
                        <li>
                            <img src={Message} />
                            <p>ایمیل</p>
                            <h4>Metanext.com</h4>
                        </li>
                    </ul>
                </div>
                <img className={style.enamad} src={enamad} />
            </div>
            <div className={style.section4}>
                <img className={style.background} src={background} />
                <div className={style.demotext}>
                    <h2>دریافت دمو رایگان</h2>
                    <div>
                        <img src={demo} />
                        <p>دمو رایگان</p>
                    </div>
                </div>
            </div>
            <div className={style.copyright}>
                <div className={style.textc}>
                    <img src={copyright} />
                    <p>تمامی حقوق مادی و معنوی این سایت نزد متانکست محفوظ است و هر گونه کپی برداری پیگرد قانونی دارد</p>
                </div>
                <p>1400-1401</p>
            </div>
        </div>
    );
};

export default Footer;