import React from "react";

import style from "../../styles/Sliders.module.css"


import calcPurple from "../../images/calcPurple (2).png"
import calcRed from "../../images/calcRed (2).png"
import calcOrange from "../../images/calcOrange (2).png"
import Data from "../../images/Data.png"
import ProductViews from "../../images/product views.png"
import Arrow from "../../images/arrow-left.png"
import ProTips from "../../images/Pro Tips.png"
const Slider2: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.RightDiv}>
        <div className={style.section1}>
          <h1>سیستم حسابداری متانکست</h1>
          <p>ثبت رویداد های مالی، تهیه گزارش برای افراد درون سازمان با سرعت بالا و حسابرسی سریع اسناد از مزایای ان نرم افزار است پس میتواند به سرعت بخشیدن امور مالی به مجموعه ها برای رونق گرفتن و سود اوری در بازار کسب و کار کمک بسزایی کند.</p>
          <img src={Data} />
        </div>
        <div className={style.section2}>
          <h1>چرا باید از سیستم متانکست استفاده کنیم</h1>
          <p>ثبت رویداد های مالی، تهیه گزارش برای افراد درون سازمان با سرعت بالا و حسابرسی سریع اسناد از مزایای ان نرم افزار است پس میتواند به سرعت بخشیدن امور مالی به مجموعه ها برای رونق گرفتن و سود اوری در بازار کسب و کار کمک بسزایی کند.</p>

        </div>
        <div className={style.section3}>
          <h1>
            امکانات موجود در سیستم حسابداری

          </h1>
          <p>سیستم کامل مالی، سیستم کامل خزانه ، و سیستم کامل انبار که شامل ثبت چک ها ، ثبت فاکتور های خرید و فروش ، نگهداری سوابق خرید و فروش ، نگهداری سوابق مشتری ، حساب های بانکی و صندوق ، گردش موجودی کالا ، حواله حساب ، صورتحساب سود و زیان ، تراز نامه ، اتصال به دستگاه پوز ، ثبت فاکتور های درامد و هزینه میشوند.</p>
          <button><p>اطلاعات بیشتر</p><img className={style.Arrow} src={Arrow} />
          </button>
        </div>
      </div>
      <div>
        <div>
          <img src={ProductViews} />
        </div>
        <div>
          <img src={ProTips} />
          <img src={calcPurple} className={style.calcPurple} />
          <img src={calcRed} className={style.calcRed} />
          <img src={calcOrange} className={style.calcOrange} />


        </div>
      </div>
    </div>
  );
}
export default Slider2;
