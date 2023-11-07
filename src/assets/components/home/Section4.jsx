import React from 'react';
import Image from "../../images/Section4img.png"
import style from "../../styles/Section4.module.css"
const Section4 = () => {
    return (
        <div className={style.container}>
            <div>
            <h2>در هر کجایی دنیا که هستی کسب و کارت رو آنلاین مدیریت کن</h2>
            <p className={style.text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربر</p>
            <div className={style.button}><p>دریافت مشاوره رایگان</p></div>
            </div>
            <img src={Image}/>
        </div>
    );
};

export default Section4;