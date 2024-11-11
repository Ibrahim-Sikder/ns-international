"use client";

import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import images
import img1 from "../../../../public/assets/slider/s1.jpg";
import img2 from "../../../../public/assets/slider/s2.jpg";
import img3 from "../../../../public/assets/slider/s1.jpg";
import img4 from "../../../../public/assets/slider/s2.jpg";
import { Autoplay } from "swiper/modules";

// Import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "@mui/material";

import "./Slider.css";

// Array of slide data
const slides = [
  {
    img: img1,
    h5Text1: "The shore hat this group would some",
    h1Text: "Free you may not be right for some.",
    h5Text2: "Might be right for these days",
  },
  {
    img: img2,
    h5Text1: "The shore hat this group would some",
    h1Text: "Free you may not be right for some.",
    h5Text2: "Might be right for these days",
  },
  {
    img: img3,
    h5Text1: "The shore hat this group would some",
    h1Text: "Free you may not be right for some.",
    h5Text2: "Might be right for these days",
  },
  {
    img: img4,
    h5Text1: "The shore hat this group would some",
    h1Text: "Free you may not be right for some.",
    h5Text2: "Might be right for these days",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[700px]">
              <Image
                src={slide.img}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
              {/* Add overlay for text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white font-bold space-y-10">
                <motion.h5
                  className="text-xl text-animation"
                  initial={{ opacity: 0, x: -20 }} // Start position: off-screen to the left
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : -20, // Move to normal position
                  }}
                  transition={{ duration: 0.9 }}
                >
                  {slide.h5Text1}
                </motion.h5>

                <motion.h5
                  className="text-xl text-animation"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : -20,
                  }}
                  transition={{ duration: 0.9 }}
                >
                  {slide.h5Text2}
                </motion.h5>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.9 }}
                >
                  <Button>Discover More</Button>
                </motion.h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
