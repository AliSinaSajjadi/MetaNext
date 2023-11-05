import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import style from "../styles/Swiper2.module.css"
import NavigationL from "../images/Navigation left.png"
import NavigationR from "../images/Navigation right.png"
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
    return (
        <div className={style.container}>

                <div>
                    <p>تجربه مدیراین کسب و کاری که به ما اعتماد کردن</p>
                    <h1>در مورد <span>متانکست</span> چه میشنویم؟</h1>
                    <div className={style.navigators}>
                        <img src={NavigationL} className='swiper-button-next' />
                        <div className="swiper-pagination"></div>
                        <img src={NavigationR} className='swiper-button-prev' />
                    </div>
                </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                pagination
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <div>
                    <SwiperSlide>
                        <div className={style.swiperr}>
                            <div className={style.Item}>
                                <img />
                                <div>
                                    <h2>90%</h2>
                                    <div><p>افزایش سود مشتری</p></div>
                                    <div>
                                        <h2>آقای علیرضا رودی</h2>
                                        <h3>مدیر عامل ترناو</h3>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآ</p>
                                        <img />

                                    </div>
                                </div>

                            </div>
                            <div>
                                <img />
                                <div>
                                    <h2>98%</h2>
                                    <div><p>افزایش سود مشتری</p></div>
                                    <div>
                                        <h2>آقای علیرضا رودی</h2>
                                        <h3>مدیر عامل ترناو</h3>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآ</p>
                                        <img />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img />
                            <div>
                                <h2>90%</h2>
                                <div><p>افزایش سود مشتری</p></div>
                                <div>
                                    <h2>آقای علیرضا رودی</h2>
                                    <h3>مدیر عامل ترناو</h3>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآ</p>
                                    <img />

                                </div>
                            </div>

                        </div>
                        <div>
                            <img />
                            <div>
                                <h2>98%</h2>
                                <div><p>افزایش سود مشتری</p></div>
                                <div>
                                    <h2>آقای علیرضا رودی</h2>
                                    <h3>مدیر عامل ترناو</h3>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآ</p>
                                    <img />

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                </div>


            </Swiper>
        </div>
    );
};


