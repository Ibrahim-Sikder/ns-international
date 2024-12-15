"use client";

import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import Link from "next/link";
import Banner from "@/components/shared/Banner/Banner";
import { useEffect, useState } from "react";

type Service = {
  _id: string;
  title: string;
  category: string[];
  images: string[];
};

type ApiResponse = {
  data: {
    services: Service[];
  };
};

const Services = () => {
  const [data, setData] = useState<ApiResponse | null>(null);

  console.log(data);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/services`)
      .then((response) => response.json() as Promise<ApiResponse>)
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-gray-100">
      <Banner title="All Services" />
      <Container>
        <div className="py-20">
          <h2 className="text-sm uppercase text-blue-700 mb-2 text-center">
            OUR SERVICES
          </h2>
          <h3 className="text-3xl font-bold mb-10 text-center">
            NS International Ensure the Best Production From Every Angle
          </h3>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {data?.data?.services?.map((service) => (
              <div
                key={service._id}
                className="bg-white shadow-lg group p-5 relative"
              >
                <div className="flex justify-center">
                  <div className="absolute top-0 z-10 bg-blue-600 text-white px-4 py-2 shadow-md">
                    {service?.category?.slice(0, 1).map((category, index) => (
                      <h4 key={index} className="text-sm">
                        {category}
                      </h4>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden relative">
                  {service?.images?.slice(0, 1).map((image, index) => (
                    <div key={index} className="w-full h-56">
                      <Image
                        src={image}
                        alt={service.title || "Service Image"}
                        height={224}
                        width={224}
                        quality={100}
                        layout="responsive"
                        className="w-full h-56 transition-transform transform group-hover:scale-105"
                      />
                    </div>
                  ))}

                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={`/services/${service.category[0]}`}>
                      <button className="text-white text-4xl hover:cursor-pointer">
                        <GoArrowUpRight />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
