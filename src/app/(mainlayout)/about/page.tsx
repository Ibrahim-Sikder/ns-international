"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/ui/Container/Container";

import Image from "next/image";
import Mission from "./_components/Mission";
import Banner from "@/components/shared/Banner/Banner";

interface About {
  _id: string;
  title: string;
  description: string;
  image: string;
  images: string[];
}

interface AboutResponse {
  success: boolean;
  message: string;
  data: {
    abouts: About[];
  };
}

const Page = () => {
  const [data, setData] = useState<AboutResponse | null>(null);
  console.log(data);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/about`)
      .then((response) => response.json())
      .then((data: AboutResponse) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Banner title="About Us" />
      <Container className="my-20">
        <div className="space-y-3 mb-10">
          <p className="text-2xl font-bold text-center text-blue-700">
            WHO WE ARE
          </p>
          <h1 className="text-5xl font-bold text-center">
            The Leading Apparel Manufacturer And Exporter
          </h1>
        </div>

        {data?.data?.abouts?.map((about, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 items-center bg-gray-100"
          >
            {index % 2 === 0 ? (
              <>
                {about.images.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image}
                      alt="About Image"
                      width={400}
                      height={400}
                      className="w-full h-[400px]"
                    />
                  </div>
                ))}
                <p className="text-justify lg:px-10 px-5 lg:py-0 py-5">
                  {about.description}
                </p>
              </>
            ) : (
              <>
                <p className="text-justify lg:px-10 px-5 lg:py-0 py-5">
                  {about.description}
                </p>
                {about.images.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image}
                      alt="About Image"
                      width={400}
                      height={400}
                      className="w-full h-[400px]"
                    />
                  </div>
                ))}
              </>
            )}
          </div>
        ))}

        <Mission />
      </Container>
    </>
  );
};

export default Page;
