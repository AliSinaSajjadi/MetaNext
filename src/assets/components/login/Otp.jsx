import React , {useEffect,useState}from 'react';
import Navbar from '../home/Navbar';
import Image from "../../images/Login.png"
import style from "../../styles/Login.module.css"
import OtpInput from 'react-otp-input';
import { useOtpApi } from "../login/OtpAPI"
import { useNavigate } from 'react-router-dom';

const Otp = () => {
    const [otp, setOtp] = useState('');
    const Navigate = useNavigate();
  
    const { data, refetch, isLoading, isSuccess, isError, error } =
      useOtpApi(otp);
    useEffect(() =>{
        if (otp.length ===5){
            refetch()

        }
    } , [otp])
    useEffect (() =>{
      if (isSuccess){
        Navigate("/login/password")
      }
    },[isSuccess])
    
    const handleClick = () => {
  
  
      refetch()
  
    }

    return (
        <div className={style.container} >
            <Navbar/>
            <div className={style.login}>
                <img className={style.image} src={Image}/>
                <div className={style.text}>
                <h1 className={style.title}>ورود - ثبت نام</h1>
                <h3 className={`${style.otpP}  ${style.page}`}>رمز چهار رقمی را وارد کنید</h3>
                

                    <OtpInput
                    shouldAutoFocus={true}
                        containerStyle={style.input}
                        inputStyle={style.slot}
                        value={otp}
                        onChange={setOtp}
                        numInputs={5}
                        renderSeparator={<span> </span>}
                        renderInput={(props) => <input {...props} />}
                    />

                        <button onClick={() => handleClick()} className={style.button}>{isLoading? "درحال بارگیری ..." : "تایید کد" }</button>
                </div>
            </div>
        </div>
    );
};

export default Otp;