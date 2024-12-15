/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img1 from "../../../../../public/assets/developmentslider/1.jpg";
import img2 from "../../../../../public/assets/developmentslider/2.jpg";
import img3 from "../../../../../public/assets/developmentslider/3.jpg";
import img4 from "../../../../../public/assets/developmentslider/4.jpg";
import img5 from "../../../../../public/assets/developmentslider/5.jpg";
import img6 from "../../../../../public/assets/developmentslider/1.jpg";
import img7 from "../../../../../public/assets/developmentslider/2.jpg";
import img8 from "../../../../../public/assets/developmentslider/3.jpg";
import img9 from "../../../../../public/assets/developmentslider/4.jpg";
import img10 from "../../../../../public/assets/developmentslider/5.jpg";
import img11 from "../../../../../public/assets/developmentslider/4.jpg";
import img12 from "../../../../../public/assets/developmentslider/5.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DevelopmentSlider = () => {
  const slides = [
    {
      image: img1,
      title: "Research & Development",
      link: "/services/Research & Development",
    },
    { image: img2, title: "Merchandising", link: "/services/Merchandising" },
    {
      image: img3,
      title: "Fabric Sourcing",
      link: "/services/Fabric Sourcing",
    },
    { image: img4, title: "Production", link: "/services/Production" },
    { image: img5, title: "QA And QC", link: "/services/QA and QC" },
    {
      image: img6,
      title: "Sample Development",
      link: "/services/Sample Development",
    },
    {
      image: img7,
      title: "Delivery and Shipment",
      link: "/services/Delivery and Shipment",
    },
    { image: img8, title: "Knitting", link: "/services/Knitting" },
    { image: img9, title: "Embroidery", link: "/services/Embroidery" },
    {
      image: img10,
      title: "Garment Dyeing & Wash",
      link: "/services/Garment Dyeing & Wash",
    },
    { image: img11, title: "Printing", link: "/services/Printing" },
    {
      image: img12,
      title: "Trimming & Accessories",
      link: "/services/Trimming & Accessories",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image: any) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <div className="relative w-full h-auto my-7">
        <div className="text-center space-y-4 p-4" data-aos="fade-up">
          <h5 className="text-blue-400 text-base">
            Development, Production & Delivery
          </h5>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            NS International Ensure the Best Production From
            <span className="text-blue-400"> Every Angle</span>
          </h2>
          <h5 className="text-sm md:text-base text-gray-500">
            NS International is the largest peer-to-peer comparison initiative
            in the textile industry. It tracks the apparel material and home
            textile sector’s progress.
          </h5>
        </div>
        <Swiper
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          data-aos="fade-up-left"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 my-10">
                <div className="relative group">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-48 md:h-64 lg:h-[500px] xl:h-[500px] object-cover"
                    onClick={() => handleImageClick(slide.image)}
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                    <button
                      className="text-white bg-gray-800 rounded-full p-3 mx-2 hover:bg-gray-700"
                      onClick={() => handleImageClick(slide.image)}
                    >
                      <SearchIcon />
                    </button>
                    <Link
                      href={slide.link}
                      className="text-white bg-gray-800 rounded-full p-3 mx-2 hover:bg-gray-700"
                    >
                      <ArrowOutwardIcon />
                    </Link>
                  </div>
                </div>

                <Link
                  href={slide.link}
                  className="block bg-white text-black hover:text-blue-400 py-2 font-semibold text-center"
                >
                  {slide.title}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal to show image */}
      {isOpen && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
          <div className="relative bg-white max-w-2xl p-5 rounded-md">
            <button
              className="absolute z-50 top-2 right-2 text-white text-2xl font-bold bg-[#337AB7] rounded-full p-2"
              onClick={() => setIsOpen(false)}
            >
              <IoCloseSharp />
            </button>
            <Image
              src={currentImage}
              alt="Modal Image"
              className="w-full h-48 md:h-64 lg:h-[500px] xl:h-[500px] object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DevelopmentSlider;
