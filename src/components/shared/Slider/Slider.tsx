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
    Text1: "NS International",
    Text2: "Multinational Apparel Buying-hub, Manufacturer & Exporter",
    
  },
  {
    img: img2,
    Text1: "NS International",
    Text2: "Woven, Denim, Knit & Sweater Manufacturer",
   
  },
  {
    img: img3,
    Text1: "NS International",
    Text2: "One-Stop Solution for All Apparel Product Categories",
    
  },
  {
    img: img4,
    Text1: "NS International",
    Text2: "Multinational Apparel Buying-hub, Manufacturer & Exporter",
    
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
                <motion.h3
                  className="text-animation text-blue-400"
                  initial={{ opacity: 0, x: -20 }} // Start position: off-screen to the left
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : -20, // Move to normal position
                  }}
                  transition={{ duration: 2 }}
                >

                  {slide.Text1}
                </motion.h3>

                <motion.h1
                  className="text-animation"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    x: currentSlide === index ? 0 : -20,
                  }}
                  transition={{ duration: 1.5 }}
                >
                  {slide.Text2}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.9 }}
                >
                  <Button>Discover More</Button>
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
