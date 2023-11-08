import React from 'react';
import Navbar from '../home/Navbar';
import Image from "../../images/Login.png" 
import style from "../../styles/Login.module.css"
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

const Login = () => {
    return (
        <div className={style.container} >
            <Navbar/>
            <div className={style.login}>
                <img className={style.image} src={Image}/>
                <div className={style.text}>
                <h1 className={style.title}>ورود - ثبت نام</h1>
                <h3 className={style.page}>شماره خود را وارد کنید</h3>
                <Formik
      initialValues={{ number: '' }}
      validate={values => {
        const errors = {};
        if (!values.number) {
          errors.number = 'وارد کردن شماره الزامی است';
        } else if (
          /09[0-5][0-9]-?[0-9]{3}-?[0-9]{4}/i.test(values.number)
        ) {
          errors.number ="شماره معتبر نیست";
        }
        return errors;
      }}
     
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            className={style.number}
            type="number"
            name="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.number}
          />
          <p className={style.error}>{errors.number && touched.number && errors.number}</p>
          
          <Link className={style.link} to= {!errors.number && values.number && "otp"} >
                <button type="submit" disabled={isSubmitting} className={style.button}>تایید شماره</button>
                </Link>
        </form>
      )}
    </Formik>

                </div>
            </div>
        </div>
    );
};

export default Login;