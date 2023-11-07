import React from 'react';
import style from "../../styles/discription.module.css"
import Arrow from "../../images/arrow-left.png"
import Vector from "../../images/Vector.svg"
import line from "../../images/Vector (1).png"
import eclipse from"../../images/Ellipse 361.png"
import round from "../../images/Ellipse 363.png"
import Pround from "../../images/Ellipse 364.png"
import Ground from "../../images/Ellipse 362.png"

const Discription = () => {
    return (
        <div className={style.container}>
            <h3>
                سیستم <span>CRM</span> متانکست
            </h3>
            <h1>
                یک پلتفرم برای تمامی نیاز ها کسب و کار
            </h1>
            <p>
                سی ار ام یک سیستم نرم افزاری است که به صاحبان کسب و کار کمک میکند تا به راحتی تمام ارتباطات را ردیابی کند و روابط را با سرنخ ها وت مشتریان خود تقویت کند.سی ار ام جایگزین تعداد زیادی از صفحات گسترده ، پایگاه های داده و برنامه هایی است که بسیاری از کسب و کار ها برای ردیابی داده های مشتری با هم وصله میکنند.نتیجه: سازماندهی ، کارایی ، مدیریت زمان بهتر
            </p>
            <div className= {style.buttonContainer}>
                <img src={Vector} className={style.vector}  />
                <div className={style.button}><p>رایگان شروع کنید</p> <img src={Arrow} /></div>
                <img src={Vector} className={style.vector} />
            </div>
            <img className={style.line} src={line}/>
            <img className={style.eclipse} src={eclipse}/>
            <img className={style.round} src={round}/>
            <img className={style.Pround} src={Pround}/>
            <img className={style.Ground} src={Ground}/>
        </div>
    );
};

export default Discription;