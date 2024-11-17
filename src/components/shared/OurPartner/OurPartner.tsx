"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

interface Partner {
  _id: string;
  title: string;
  description: string;
  image: string;
  images: string[];
}

interface PartnerResponse {
  success: boolean;
  message: string;
  data: {
    brands: Partner[];
  };
}

const OurPartner = () => {
  const [data, setData] = useState<PartnerResponse | null>(null);
  console.log(data);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/brands")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="w-full bg-gray-100 py-[50px]">
        <h2 className="mb-10 text-center underline">Our Partners</h2>
        <Marquee speed={140} pauseOnHover gradient={false}>
          {data?.data?.brands.map((partner) => (
            <div
              key={partner._id}
              className="mx-4 flex justify-center items-center"
            >
              {partner.images.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image}
                    alt=""
                    height={150}
                    width={150}
                    className="object-contain h-[120px] lg:h-[150px]"
                  />
                </div>
              ))}
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default OurPartner;
