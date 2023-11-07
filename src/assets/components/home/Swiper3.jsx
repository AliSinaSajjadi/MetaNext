import React, { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import moment from "jalali-moment";
import articleData from "../../API/ArticleData";
import NavLeft from "../../images/Navigation left.png"
import NavRight from "../../images/Navigation right.png"
import NavRightUn from "../../images/NavigationUnactive right.png"
import NavLeftUn from "../../images/NavigationUnactive left.png"
import Calendar from "../../images/calendar.png"
import clock from "../../images/clock.png"
import style from "../../styles/swiper3.module.css"
import pagination from "../../images/pagination.png"

const ArticleData = articleData;

export default function Swiper3() {
    const swiperElRef = useRef(null);
    const [isPrevButtonClickable, setIsPrevButtonClickable] = useState(true);
    const [isNextButtonClickable, setIsNextButtonClickable] = useState(true);

    useEffect(() => {
        let swiper = null;

        if (swiperElRef.current) {
            swiper = new Swiper(swiperElRef.current, {
                speed: 500,
                spaceBetween: 50,
                slidesPerView: 3,
            });

            swiper.on("slideChange", () => {
                setIsPrevButtonClickable(!swiper?.isBeginning);
                setIsNextButtonClickable(!swiper?.isEnd);
            });

            setIsPrevButtonClickable(!swiper.isBeginning);
            setIsNextButtonClickable(!swiper.isEnd);

            const handleNextClick = () => {
                swiper?.slideNext();
            };

            const handlePrevClick = () => {
                swiper?.slidePrev();
            };

            const customNextButton2 = document.getElementById("customNextButton2");
            const customPrevButton2 = document.getElementById("customPrevButton2");

            if (customNextButton2) {
                customNextButton2.addEventListener("click", handleNextClick);
            }

            if (customPrevButton2) {
                customPrevButton2.addEventListener("click", handlePrevClick);
            }
        }

        return () => {
            if (swiper) {
                swiper.destroy();
            }
        };
    }, []);

    function toPersianNumerals(input) {
        const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

        return input.replace(/\d/g, (match) => persianDigits[+match]);
    }

    return (
        <div className={style.container}>
            <p className={style.text1}>
                با شما در مسیر یادگیری هستیم
            </p>

            <div className={style.title}>
                <h1 >
                    جدیدترین <span >مقالات</span>
                </h1>
                <div >
                    <img
                        className={style.nextBtn}
                        id="customPrevButton2"
                        src={
                            isPrevButtonClickable
                                ? NavRight
                                : NavRightUn
                        }
                        alt=""
                        style={{
                            cursor: isPrevButtonClickable ? "pointer" : "not-allowed",
                        }}
                    />
                    <img className={style.pagination} src={pagination} alt="" />
                    <img className={style.nextBtn}
                        id="customNextButton2"
                        src={
                            isNextButtonClickable
                                ? NavLeft
                                : NavLeftUn
                        }
                        alt=""
                        style={{
                            cursor: isNextButtonClickable ? "pointer" : "not-allowed",
                        }}
                    />
                </div>
            </div>
            <div className="swiper-container" ref={swiperElRef}>
                <div className="swiper-wrapper">
                    {ArticleData.map((article, idx) => {
                        const jalaliDate = moment(article.date)
                            .locale("fa")
                            .format("D MMMM YYYY");

                        return (
                            <div
                                className={`swiper-slide ${style.card}`}
                                key={idx}

                            >
                                <img
                                    className={style.articleimg}
                                    src={article.image}
                                    alt=""
                                />
                                <img src={article.tag} alt="" />
                                <h1 className={style.item}>
                                    {article.title}
                                </h1>
                                <div className={style.date}>
                                    <div className={style.time}>
                                        <p >
                                            {`مدت زمان مطالعه ${toPersianNumerals(article.duration.toString())} دقیقه`}
                                        </p>
                                        <img
                                            className="ml-2"
                                            src={clock}
                                            alt=""
                                        />
                                    </div>
                                    <div className={style.time}>
                                        <p >
                                            {toPersianNumerals(jalaliDate)}
                                        </p>
                                        <img
                                            
                                            src={Calendar}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
