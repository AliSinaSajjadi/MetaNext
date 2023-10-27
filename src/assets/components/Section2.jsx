import React from 'react';

import style from "../styles/Section2.module.css"

import calculater from "../images/calculater.png"
import search from "../images/search.png"
import chat from "../images/chat.png"
import managment from "../images/managment.png"
import app from "../images/app.png"
import metanext from "../images/MetaNext.png"
import tablet from "../images/tablet.png"
const Section2 = () => {
    return (
        <div className={style.container}>
            <img src={metanext} />
            <div>
                <img src={tablet} className={style.tablet} />
                <img src={calculater} className={style.calculater}/>
                <img src={search} className={style.search}/>
                <img src={chat} className={style.chat}/>
                <img src={managment} className={style.managment}/>
                <img src={app} className={style.app}/>
                
            </div>
        </div>
    );
};

export default Section2;