import React from 'react';
import style from "../styles/Counseling.module.css"
import Dial from "../images/Dial.svg"
const Counseling = () => {
    return (
        <div className={style.container}>
            <div className={style.info}>
                <div className={style.title}>
                    <div>
                        <p>همراه شما هستیم برای یک شروع تازه</p>
                        <h3>دریافت<span> مشاوره رایگان</span></h3>
                    </div>
                        <img src={Dial} />
                </div>
            </div>

        </div>
    );
};

export default Counseling;