import React, { useEffect, useState } from 'react';
import Navbar from '../home/Navbar';
import Image from "../../images/Login.png"
import style from "../../styles/Login.module.css"
import {
  Formik,

  Form,

} from 'formik';


import { usePhoneNumberApi } from "./PhoneAPI"
import { useNavigate } from 'react-router-dom';


interface initialValues{
  number:string
}

const initialValues:initialValues={number:''}

const Login: React.FC = () => {
  const Navigate = useNavigate();
  const [values, setValues] = useState<string>("");
  const [errors, setErrors] = useState<string>("");

  const { data, refetch, isLoading, isSuccess } =
    usePhoneNumberApi(values);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  
      setValues(event.target.value)
    
  }


  const validate = (value: string) => {
    if (!value.trim()) {
      setErrors("شماره را وارد کنید");
    } else if (!/^(\+98|0)?9\d{9}$/.test(value)) {
      setErrors("شماره نادرست است");
    } else {
      setErrors("");
    }
  }

  useEffect(() => {
    validate(values);
  }, [values, errors]);

  useEffect(() => {
    if (isSuccess) {
      sessionStorage.setItem("secret", data.data.data.secret);
      Navigate("/login/otp");
    }
  }, [isSuccess, data, Navigate]);
  
  const handleClick = () => {
    if (!errors) {
      refetch();
    }
  }

  return (
    <div className={style.container} >
      <Navbar />
      <div className={style.login}>
        <img className={style.image} src={Image} />
        <div className={style.text}>
          <h1 className={style.title}>ورود - ثبت نام</h1>
          <h3 className={style.page}>شماره خود را وارد کنید</h3>
          <Formik
            initialValues={initialValues}
            onSubmit={()=>{ handleClick()}}

          >
            {({
              touched,
              handleBlur,
            }) => (
              <Form >
                <input
                  autoFocus={true}
                  className={style.number}
                  type="number"
                  name="number"
                  onChange={(event) => changeHandler(event as React.ChangeEvent<HTMLInputElement> )}
                  onBlur={handleBlur}
                  value={values}
                />



                <p className={style.error}>{errors && touched.number && errors}</p>

                <button type='submit' className={style.button}>{isLoading ? "درحال بارگیری ..." : "تایید کد"}</button>

              </Form>
            )}
          </Formik>

        </div>
      </div>
    </div>
  );
};

export default Login;
