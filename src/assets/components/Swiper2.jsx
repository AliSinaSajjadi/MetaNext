import React, { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Comments from "../API/Comments"
import NavLeft from "../images/Navigation left.png"
import NavRight from "../images/Navigation right.png"
import NavRightUn from "../images/NavigationUnactive right.png"
import NavLeftUn from "../images/NavigationUnactive left.png"
import style from "../styles/Swiper2.module.css"
import pagination from "../images/pagination.png"

const Swiper2 = () => {
    const swiperElRef = useRef(null);
    const [isPrevButtonClickable, setIsPrevButtonClickable] = useState(true);
    const [isNextButtonClickable, setIsNextButtonClickable] = useState(true);
    const comments = Comments;

    useEffect(() => {
        let swiper = null;

        if (swiperElRef.current) {
            swiper = new Swiper(swiperElRef.current, {
                speed: 500,
                spaceBetween: 50,
                slidesPerView: 2,
            });

            swiper.on("slideChange", () => {
                setIsPrevButtonClickable(!swiper.isEnd);
                setIsNextButtonClickable(!swiper.isBegining);
            });

            setIsPrevButtonClickable(!swiper.isEnd);
            setIsNextButtonClickable(!swiper.isBegining);

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
        <div className={`p-10 flex items-center justify-between bg-[white]  flex-row-reverse ${style.container}`}>
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
                                <p className="text-[20px] font-[500] text-[#0CA0A2] mt-[8px]">
                                    {comment.role}
                                </p>
                                <p className={style.discription}>
                                    {comment.text}
                                </p>
                                <img src={comment.url} alt="" />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={style.title}>
                <p className="text-grayed text-[18px] font-[300] mb-[40px]">
                    تجربه مدیراین کسب و کاری که به ما اعتماد کردن
                </p>
                <h1 className="text-[40px] font-[700] mb-[40px]">
                    در مورد <span className="font-[900] text-[#0CA0A2]">متانکست</span> چه
                    میشنویم?
                </h1>
                <div className={style.navigations}>
                    <img
                    className={style.navBtn}
                        id="customNextButton"
                        src={
                            isNextButtonClickable
                                ? NavRight
                                : NavRightUn
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
                                ? NavLeft
                                : NavLeftUn
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