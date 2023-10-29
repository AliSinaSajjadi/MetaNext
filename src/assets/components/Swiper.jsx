import React, { useState } from 'react';
import style from "../styles/Swiper.module.css"
import Option from './option';
import Calc from "../images/calc.png"
import explore from "../images/explore.png"
import Managment from "../images/managmentGray.png"
import Chat from "../images/ChatGray.svg"
import Mobile from "../images/mobile.png"
import exploreC from "../images/global-searchC.png"
import ManagmentC from "../images/managmentC.png"
import ChatC from "../images/CRMC.png"
import MobileC from "../images/MobileC.png"

const Swiper = () => {
    const [click , Setclick ] = useState({1 : false, 2 : false, 3 : false, 4 : false, 5 : false})
    const clickHandler= (e) =>{
        e.target=MobileC
    }
    return (
        <div className={style.container}>
            <p>یک پلتفرم برای تمامی نیاز ها</p>
            <h3 className={style.title}>خدمات ما در متانکست</h3>
            <div  className={style.options}>
                <div className={style.options} >
                    <div onClick={clickHandler}>
                    <Option  img= {Calc} text="حسابداری آنلاین" />
                    </div><div>
                    <Option img= {Managment} text="مدیریت نیروی کار" />
                    </div><div>
                    <Option img= {Chat} text="گفتوگو با مشتریان" />
                    </div><div>
                    <Option img= {Mobile} text="اپلیکیشن فروش" />
                    </div><div>
                    <Option img= {explore} text="سایت فروش" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Swiper;