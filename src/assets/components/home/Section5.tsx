import React from 'react';
import Customers from "../../images/Customers.png"
import style from "../../styles/Section5.module.css"
const Section5 : React.FC = () => {
    return (
        <div className={style.container}>
            <p>از این که به ما اعتماد کردین خوشحالیم</p>
            <h1>گوشه ای از مشتریان متانکست</h1>
            <img src={Customers}/>
        </div>
    );
};

export default Section5;