import React , {useState}from 'react';
import Navbar from '../home/Navbar';
import Image from "../../images/Login.png"
import style from "../../styles/Login.module.css"
import { Link } from 'react-router-dom';
import OtpInput from 'react-otp-input';
const Otp = () => {
    const [otp, setOtp] = useState('');
    return (
        <div className={style.container} >
            <Navbar />
            <div className={style.login}>
                <img className={style.image} src={Image} />
                <div className={style.text}>
                    <h1>ورود - ثبت نام</h1>
                    <h3>کد چهار رقمی را وارد کنید</h3>
                    <OtpInput
                        containerStyle={style.input}
                        inputStyle={style.slot}
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                    />

                    <Link to="otp" className={style.link}>
                        <button>تایید کد</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Otp;