import React, { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Comments from "../../API/Comments"
import NavLeft from "../../images/Navigation left.png"
import NavRight from "../../images/Navigation right.png"
import NavRightUn from "../../images/NavigationUnactive right.png"
import NavLeftUn from "../../images/NavigationUnactive left.png"
import style from "../../styles/Swiper2.module.css"
import pagination from "../../images/pagination.png"
import play from "../../images/Play.png"

const Swiper2 = () => {
    const swiperElRef = useRef(null);
    const [isPrevButtonClickable, setIsPrevButtonClickable] = useState(true);
    const [isNextButtonClickable, setIsNextButtonClickable] = useState(true);
    const comments = Comments;
    function toPersianNumerals(input) {
        const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    
        return input.replace(/\d/g, (match) => persianDigits[+match]);
      }

    useEffect(() => {
        let swiper = null;

        if (swiperElRef.current) {
            swiper = new Swiper(swiperElRef.current, {
                speed: 500,
                spaceBetween: 50,
                slidesPerView: 2,
            });

            swiper.on("slideChange", () => {
                setIsPrevButtonClickable(!swiper.isBegining);
                setIsNextButtonClickable(!swiper.isEnd);
            });

            setIsPrevButtonClickable(!swiper.isBeginning);
            setIsNextButtonClickable(!swiper.isEnd);

            const handleNextClick = () => {
                swiper.slideNext();
            };

            const handlePrevClick = () => {
                swiper.slidePrev();
            };

            const customNextButton = document.getElementById("customNextButton");
            const customPrevButton = document.getElementById("customPrevButton");

            if (customNextButton) {
                customNextButton.addEventListener("click", handleNextClick);
            }

            if (customPrevButton) {
                customPrevButton.addEventListener("click", handlePrevClick);
            }
        }
    })


    return (
        <div className={style.container}>
            <div className={`swiper-container ${style.container}`} ref={swiperElRef}>
                <div className={`swiper-wrapper ${style.swiperWrapper}`}>
                    {comments.map((comment, idx) => {
                        return (
                            <div
                                key={idx}
                                className={`swiper-slide ${style.item}`}
                            >

                                <img src={comment.arrow} alt="" />
                                <div
                                    style={{ color: comment.color }}
                                    className={style.percentage}
                                >
                                    <p className={style.text}>
                                        {"%" + comment.percentage + "+"}
                                    </p>

                                    <p className={style.frame}>
                                        افزایش سود مشتری
                                    </p>
                                </div>
                                <h1 className={style.name}>
                                    {comment.name}
                                </h1>
                                <p className={style.role}>
                                    {comment.role}
                                </p>
                                <p className={style.discription}>
                                    {comment.text}
                                </p>
                                <div className={style.video}>
                                    <img className={style.img} src={comment.url} alt="" />
                                    <img className={style.play} src={play} />
                                    <div className={style.length}>
                                        <p >{toPersianNumerals("11:23")}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={style.title}>
                <p >
                    تجربه مدیراین کسب و کاری که به ما اعتماد کردن
                </p>
                <h1 >
                    در مورد <span >متانکست</span> چه
                    میشنویم?
                </h1>
                <div className={style.navigations}>
                    <img
                        className={style.navBtn}
                        id="customNextButton"
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
                    <img className={style.pagination} src={pagination} alt="" />
                    <img
                        className={style.navBtn}
                        id="customPrevButton"
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
                </div>
            </div>
        </div>
    );
}


export default Swiper2;