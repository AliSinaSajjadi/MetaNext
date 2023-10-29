import React from 'react';
import Items from './Items';

import style from "../styles/Section3.module.css"

import Skate from "../images/Skate.png"
import Reading from "../images/Reading.png"
import Selfie from "../images/Selfie.png"
import Sprinting from "../images/Sprinting.png"
import Managing from "../images/Managing.png"
import Orgnize from "../images/Orgnize.png"
import unboxing from "../images/unboxing.png"
const Section3 = () => {
    return (
        <div className={style.container}>
                <div>
            <Items img={Skate} title="صرفه جویی در زمان" text="یکی از واقعیت ها ناخوشایند بخش فروش حجم کاری زیاد است.حذف کاغذ از فرایند های کار باعث صرفه جویی زمان تا حد قابل توجهی میشود." />
            <Items img={Reading} title="سازماندهی" text="استفاده از این سیستم باعث میشود ک بتوانید با سهولت بیشتری کار خود را سازماندهی کنید.." />
            </div> <div>  
            <Items img={Selfie} title="ارتباط برقرار کردن" text="سی ار ام میتواند اکثر این ارتباطات را به صورت خودکار انجام دهد و اطلاعات مختلف را دراختیار کاربران کلی قالب یا اسکریپت قرار دهد." />
            <Items img={Sprinting} title="ایجاد سریعتر سرنخ فروش" text="زمانی که دررابطه با محصول خود اطلاعات دارید میتوانید با سرعت بیشتری سرنخ های فروش ایجاد کنید و این سیستم پیدا کردن اطلاعات مورد نیاز را برای شما اسان تر میکند ." />
            </div><div>
            <Items img={Managing} title="مدیریت خدمات" text="مواردی نظیر قیمت دهی به مشتریان و پردازش ان گرفته تا گرفتن سفارش و تنظیم تاریخچه ی دقیقی از ارتباط مشتری." />
            <Items img={Orgnize} title="شناسایی نیاز های مشتری" text="این سیستم باعث میشود نیاز های مشتریان شناسایی شده و پاسخ مناسب برای نیاز های فعلی و اینده مشتریان درنظر گرفته شود." />
            </div>
            <Items img={unboxing} title="برنامه ریزی امور فروش" text="تیم فروش میتواند با انالیز داده های سی ار ام امکان پیش بینی میزان فروش و درامد تخمینی کلی را دراختیار داشته باشد." />

        </div>
    );
};

export default Section3;