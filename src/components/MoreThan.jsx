
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { BILL_DATA_LIST } from "@/utils/helper";
import Image from "next/image";
const MoreThan = () => {
  return (
    <div className="py-[54px]">
      <div className="max-w-[1180px] px-5 mx-auto container">
        <h2 className=" text-2xl max-custom-lg:text-center max-custom-lg:mx-auto sm:text-3xl xl:text-custom-3xl capitalize !leading-110 text-dark-blue font-normal xl:max-w-[548px] lg:max-w-[540px] mb-6 sm:mb-10 md:mb-12 lg:mb-16">
          More than <span className="text-sky-blue font-bold">80,000</span>+
          companies trust bill central{" "}
        </h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={{
            1024: {
              slidesPerView: 7,
            },
            768: {
              slidesPerView: 5,
            },
            480: {
              slidesPerView: 4,
            },
            350: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {BILL_DATA_LIST.map((data, i) => (
            <SwiperSlide key={i}>
              <div className="max-w-[127.28px] flex justify-center">
                <Image
                  src={data}
                  alt="logos"
                  width={127.28}
                  height={62.12}
                  className={`${
                    i === 6 || i === 13 ? "w-[63.33px]" : "w-[127.28px]"
                  } h-[62.12px] cursor-pointer`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MoreThan