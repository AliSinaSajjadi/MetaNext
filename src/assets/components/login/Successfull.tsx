import React from 'react';
import Navbar from '../home/Navbar';
import Image from "../../images/green-check-mark-circular-validation-16213.png";
import style from "../../styles/Login.module.css";

const Successfull: React.FC = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <div className={style.login}>
        <img className={style.image} src={Image} alt="Success" />
        <div className={style.text}>
          <h1 className={style.title}>ورود - ثبت نام</h1>
          <h3 className={style.page}>ورود موفقیت آمیز بود</h3>
        </div>
      </div>
    </div>
  );
};

export default Successfull;
