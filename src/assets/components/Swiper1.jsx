import React, { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import style from "../styles/Swiper1.module.css"
import ServicesData from "../API/ServicesData";
import ProgressBar from "../helpers/ProgressBar";

import Slider1 from "../API/Sliders/Slider1";
import Slider2 from "../API/Sliders/Slider2";
import Slider3 from "../API/Sliders/Slider3";
import Slider4 from "../API/Sliders/Slider4";
import Slider5 from "../API/Sliders/Slider5";



export default function ServicesContainer() {
  const [selected, setSelected] = useState(0);
  const [previousSelected, setPreviousSelected] = useState(0);
  const swiperElRef = useRef(null);
  const data = ServicesData;
  const [autoChange, setAutoChange] = useState(true);
  const duration = 5000;
  const speed = 500;

  useEffect(() => {
    let interval ;

    if (autoChange) {
      interval = setInterval(() => {
        setPreviousSelected(selected);
        setSelected((prevSelected) => (prevSelected + 1) % data.length);
      }, duration);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoChange, data, selected]);

  useEffect(() => {
    let swiper = null;

    if (swiperElRef.current) {
      swiper = new Swiper(swiperElRef.current, {
        speed: speed,
        spaceBetween: 0,
        slidesPerView: 1,
      });
    }
    if (swiper) {
      const difference = selected - previousSelected;
      if (difference > 0) {
        swiper.changeLanguageDirection("rtl");
      } else {
        swiper.changeLanguageDirection("ltr");
      }
      swiper.slideTo(selected + 1, speed);
    }

    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, [selected, previousSelected]);

  function manualClick(idx) {
    setPreviousSelected(selected);
    setSelected(idx);
  }

  return (
    <div>
      <div className="mt-[100px] p-[3vw] mx-[auto] bg-[#F5F8FC]  ">
        <p className={style.text}>
          یک پلتفرم برای تمامی نیاز ها
        </p>
        <h2 className={style.title}>خدمات ما در متانکست</h2>
        <div className= {style.ServiceContainer}>
          {data.map((ele, idx) => (
            <div
              key={idx}
              onClick={() => manualClick(idx)}
              className= {style.Item}
            >
              <img
                src={selected === idx ? ele.image2 : ele.image1}
                alt={selected === idx ? "image2" : "image1"}
              />
              <p>{ele.text}</p>
              <ProgressBar
                duration={duration}
                selectedIdx={selected}
                idx={idx}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-10 flex items-center justify-between bg-[#F5F8FC] mb-[30px]  flex-row-reverse">
        <div className= {`swiper-container overflow-hidden ${style.container}`}  ref={swiperElRef}>
          <div className="swiper-wrapper ">
            <div className="swiper-slide ">
              <Slider1 />
            </div>
            <div className="swiper-slide">
              <Slider2 />
            </div>
            <div className="swiper-slide">
              <Slider3 />
            </div>
            <div className="swiper-slide">
              <Slider4 />
            </div>
            <div className="swiper-slide">
              <Slider5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}