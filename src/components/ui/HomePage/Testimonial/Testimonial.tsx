"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import bgImage from "../../../../assets/images/testimonial/map.png";
import Container from "../../Container/Container";

type Review = {
  name: string;
  company: string;
  location: string;
  rating: number;
  images: string[];
  designation: string;
  description: string;
};

type ApiResponse = {
  data: {
    reviews: Review[];
  };
};

const Testimonials: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/review`)
      .then((response) => response.json())
      .then((data: ApiResponse) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div
      className="w-auto lg:w-full bg-bottom lg:bg-right bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <Container>
        <div className="w-full py-20 bg-opacity-80">
          <h2 className="text-center text-blue-600 text-xl mb-6">
            Testimonials
          </h2>
          <h2 className="text-center text-3xl font-bold mb-6">
            What Our Clients Say About Us
          </h2>
          <Slider {...settings}>
            {data?.data?.reviews?.map((testimonial, index) => (
              <div key={index} className="">
                <div className="w-full lg:flex items-center">
                  <div className="lg:border-r lg:border-dashed lg:border-gray-500 lg:w-[600px] flex flex-col content-center items-center justify-center text-center space-x-3">
                    {testimonial?.images?.map((image, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={image}
                        alt="testimonial"
                        height={150}
                        width={150}
                        className="rounded-full w-[150px] h-[150px] mb-4"
                      />
                    ))}

                    <h3 className="text-2xl font-semibold">
                      {testimonial.name}
                    </h3>
                  </div>
                  <div className="lg:mx-8 space-y-5">
                    <p className="font-bold font-sans text-2xl lg:text-3xl text-justify">
                      {testimonial.designation}
                    </p>
                    <p className="text-justify">{testimonial.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
