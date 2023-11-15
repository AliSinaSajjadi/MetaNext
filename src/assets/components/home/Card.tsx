import React from "react";
import style from "../../styles/Card.module.css";
import line from "../../images/line.png";
import Mask from "../../images/Mask.svg";
import quet from "../../images/quet.png";
import Chart from "../../images/Chart-square.png";
import People from "../../images/People.png";
import Heart from "../../images/Heart.png";
import Wallet from "../../images/Wallet.png";

const Card: React.FC = () => {
  return (
    <div className={style.box}>
      <div className={style.group}>
        <div className={style.overlapgroup}>
          <div className={style.rectangle} />
          <img className={style.maskgroup} alt="Mask group" src={Mask} />
          <div className={style.textwrapper}>هدف ما در متانکست</div>
          <img className={style.img} alt="Group" src={line} />
          <img className={style.group2} alt="Group" src={quet} />
          <p className={style.div}>
            یک استراتژی در پروسه ی بازاریابی کسب وکار است که تمام نظام و فعالیت های موجود در سازمان را حول محور مشتری
            یکپارچه میسازد.در این نرم افزار شما به عنوان مدیر فروش میتوانید با برنامه ریزی و زمان بندی و پیش بینی فروش
            کسب و کار خود&nbsp;&nbsp;را به درجه ی بالای کیفی برسانید. نرم افزار های سی ار ام که با تجزیه و تحلیل اطلاعات
            شرکت شما جز نرم افزار های هوش تجاری نیز شناخته میشود با هدف&nbsp;&nbsp;توانمند کردن سازمان شما جهت ایجاد
            ارتباط و تعامل با مشتری – ترغیب – گسترش – حفظ و ارایه خدمات بهتر به مشتریان در راضی نگه داشتن و وفادار سازی
            مشتری نقش مهمی ایفا میکند.
          </p>
        </div>
      </div>
      <div className={style.frame1}>
        <div className={style.textwrapper1}>افزایش سود فروش</div>
        <img className={style.img1} alt="Frame" src={Chart} />
      </div>
      <div className={style.frame2}>
        <div className={style.textwrapper2}>افزایش میزان روابط با مشتریان</div>
        <img className={style.img2} alt="Frame" src={People} />
      </div>
      <div className={style.frame3}>
        <div className={style.textwrapper3}>افزایش میزان رضایت مشتریان</div>
        <img className={style.img3} alt="Frame" src={Heart} />
      </div>
      <div className={style.frame4}>
        <div className={style.textwrapper4}>افزایش درامد حاصل از فروش</div>
        <img className={style.img4} alt="Frame" src={Wallet} />
      </div>
    </div>
  );
};

export default Card;