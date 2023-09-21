"use client";
import React, { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Testimonials:FC = () => {
  return (
    <div className="relative w-full h-auto">
      <div className="w-full my-28 ">
        <div className="w-full h-full max-w-7xl mx-auto bg-[#fff5f6]">
          <div className="w-full h-full px-28 pt-36 pb-28">
            <div className="w-full flex flex-col items-center gap-5">
              <span className="font-medium text-lg">-TESTIMONIAL</span>
              <span className="font-extrabold text-4xl font-Inter">
                What clients say?
              </span>
              {/* <div className="w-full h-auto mt-11 border"> */}
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-full h-auto mt-11 "
              >
                <SwiperSlide>
                  <div className="w-full text-3xl font-Inter flex flex-col justify-center items-center">
                    <div className="text-2xl mb-8">
                      <p>
                        Loved the template design, documentation,
                        customizability and the customer support from Marketify
                        team! I am a noob in programming but the Marketify team
                        helped me successfully.
                      </p>
                    </div>
                    <div className="w-auto flex items-center gap-5 justify-center">
                      <span>
                        {" "}
                        <Image
                          src={"/img.png"}
                          width={60}
                          height={60}
                          alt=""
                          className=" w-16 h-16 rounded-full border-4 border-white"
                        />
                      </span>
                      <h3 className=" font-medium">Alan Walker</h3>
                    </div>
                    <p className=" text-lg mb-8">
                      Sales Manager at Vivaco Shop
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full text-3xl font-Inter flex flex-col justify-center items-center">
                    <div className="text-2xl mb-8">
                      <p>
                        Loved the template design, documentation,
                        customizability and the customer support from Marketify
                        team! I am a noob in programming but the Marketify team
                        helped me successfully.
                      </p>
                    </div>
                    <div className="w-auto flex items-center gap-5 justify-center">
                      <span>
                        {" "}
                        <Image
                          src={"/img.png"}
                          width={60}
                          height={60}
                          alt=""
                          className=" w-16 h-16 rounded-full border-4 border-white"
                        />
                      </span>
                      <h3 className=" font-medium">Alan Walker</h3>
                    </div>
                    <p className=" text-lg mb-8">
                      Sales Manager at Vivaco Shop
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="w-full text-3xl font-Inter flex flex-col justify-center items-center">
                    <div className="text-2xl mb-8">
                      <p>
                        Loved the template design, documentation,
                        customizability and the customer support from Marketify
                        team! I am a noob in programming but the Marketify team
                        helped me successfully.
                      </p>
                    </div>
                    <div className="w-auto flex items-center gap-5 justify-center">
                      <span>
                        {" "}
                        <Image
                          src={"/img.png"}
                          width={60}
                          height={60}
                          alt=""
                          className=" w-16 h-16 rounded-full border-4 border-white"
                        />
                      </span>
                      <h3 className=" font-medium">Alan Walker</h3>
                    </div>
                    <p className=" text-lg mb-8">
                      Sales Manager at Vivaco Shop
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
