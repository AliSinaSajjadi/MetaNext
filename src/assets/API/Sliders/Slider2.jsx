import React from "react";

export default function slider2() {
  return (
    <div className="slider p-4 w-[90vw]  ">
      <div className=" mb-[50px] justify-between flex items-center">
        <div className=" w-[45vw]">
          <h1 className="text-[40px] font-[800] mb-[60px]">
            سیستم مدیریت متانکست
          </h1>
          <p className="text-[18px] font-[400] text-grayed mb-[60px]">
            ثبت رویداد های مالی، تهیه گزارش برای افراد درون سازمان با سرعت بالا
            و حسابرسی سریع اسناد از مزایای ان نرم افزار است پس میتواند به سرعت
            بخشیدن امور مالی به مجموعه ها برای رونق گرفتن و سود اوری در بازار
            کسب و کار کمک بسزایی کند.
          </p>
          <img
            className=" w-[590px]"
            src="src/assets/Services/Group 70169 (1).png"
            alt=""
          />
        </div>
        <img src="src/assets/Services/Product views.png" alt="" />
      </div>
      <div>
        <div className=" justify-between flex items-center">
          <div className="w-[45vw] ">
            <h1 className="text-[34px] font-[700] mb-[60px]">
              چرا باید از سیستم متانکست استفاده کنیم
            </h1>
            <p className="text-[18px] font-[400] text-grayed mb-[60px]">
              ثبت رویداد های مالی، تهیه گزارش برای افراد درون سازمان با سرعت
              بالا و حسابرسی سریع اسناد از مزایای ان نرم افزار است پس میتواند به
              سرعت بخشیدن امور مالی به مجموعه ها برای رونق گرفتن و سود اوری در
              بازار کسب و کار کمک بسزایی کند.
            </p>
            <h1 className="text-[34px] font-[700] mb-[60px]">
              امکانات موجود در سیستم حسابداری
            </h1>
            <p className="text-[18px] font-[400] text-grayed mb-[60px] ">
              ثبت رویداد های مالی، تهیه گزارش برای افراد درون سازمان با سرعت
              بالا و حسابرسی سریع اسناد از مزایای ان نرم افزار است پس میتواند به
              سرعت بخشیدن امور مالی به مجموعه ها برای رونق گرفتن و سود اوری در
              بازار کسب و کار کمک بسزایی کند.
            </p>
            <img
              className="2-[220px] my-scale"
              src="src/assets/Services/Buttons (1).png"
              alt=""
            />
          </div>
          <div className="relative">
            <img
              className="absolute right-[25px] top-[-20px]"
              src="src/assets/Services/Group 70173 (1).png"
              alt="red"
            />
            <img
              className="absolute left-[-70px] top-[-90px]"
              src="src/assets/Services/Group 70174.png"
              alt=""
            />
            <img
              className="absolute right-[175px] top-[275px]"
              src="src/assets/Services/Group 34785.png"
              alt=""
            />
            <img src="src/assets/Services/Pro tips.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}