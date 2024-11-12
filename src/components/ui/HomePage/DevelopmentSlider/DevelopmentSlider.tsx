"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img1 from "../../../../../public/assets/developmentslider/1.jpg";
import img2 from "../../../../../public/assets/developmentslider/2.jpg";
import img3 from "../../../../../public/assets/developmentslider/3.jpg";
import img4 from "../../../../../public/assets/developmentslider/4.jpg";
import img5 from "../../../../../public/assets/developmentslider/5.jpg";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const DevelopmentSlider = () => {
  const slides = [
    { image: img1, title: "Sample Development", link: "/sample-development" },
    { image: img2, title: "Merchandising", link: "/merchandising" },
    { image: img3, title: "Fabric Sourcing", link: "/fabric-sourcing" },
    { image: img4, title: "Production", link: "/production" },
    { image: img5, title: "QA And QC", link: "/qa-qc" },
  ];

  return (
    <div className="relative w-full h-auto my-7">
      {/* <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true} // Ensures the slider loops back when it reaches the end
        slidesPerView={5} // Display 5 slides at a time
        spaceBetween={20} // Space between slides
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="swiper-container"
      > */}
        <Swiper
         slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100">
              <div className="relative group">
                {/* Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[500px] object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                  <button
                    className="text-white bg-gray-800 rounded-full p-3 mx-2 hover:bg-gray-700"
                    onClick={() => alert("Popup Image")}
                  >
                    🔍
                  </button>
                  <Link
                    href={slide.link}
                    className="text-white bg-gray-800 rounded-full p-3 mx-2 hover:bg-gray-700"
                  >
                    🔗
                  </Link>
                </div>
              </div>
              {/* Slide Title */}
              <Link
                href={slide.link}
                className="block bg-white text-black hover:text-blue-400 py-2 font-semibold"
              >
                {slide.title}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="absolute bottom-4 left-4 flex space-x-2 z-10">
        <div className="swiper-button-prev bg-gray-800 text-white p-3 cursor-pointer hover:bg-gray-700">
          <FaChevronLeft />
        </div>
        <div className="swiper-button-next bg-gray-800 text-white p-3 cursor-pointer hover:bg-gray-700">
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSlider;
