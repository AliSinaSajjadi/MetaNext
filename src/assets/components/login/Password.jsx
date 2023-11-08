import React from 'react';
import Navbar from '../home/Navbar';
import Image from "../../images/Login.png" 
import style from "../../styles/Login.module.css"
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

const Password = () => {
    return (
        <div className={style.container} >
            <Navbar/>
            <div className={style.login}>
                <img className={style.image} src={Image}/>
                <div className={style.text}>
                <h1 className={style.title}>ورود - ثبت نام</h1>
                <h3 className={style.page}>رمز خود را وارد کنید</h3>
                
    <Formik
      initialValues={{ password: '' }}
      validate={values => {
        const errors = {};
        if (!values.password) {
          errors.password = 'وارد کردن پسورد الزامی است';
        } else if (
          !/.{8,32}/i.test(values.password)
        ) {
          errors.password = 'پسورد باید بیشتر از 8 رقم باشد';
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
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <p className={style.error}>{errors.password && touched.password && errors.password}</p>
          
          <Link className={style.link} to= {!errors.password && values.password && "otp"} >
                <button type="submit" disabled={isSubmitting} className={style.button}>تایید رمز</button>
                </Link>
        </form>
      )}
    </Formik>

                </div>
            </div>
        </div>
    );
};

export default Password;




