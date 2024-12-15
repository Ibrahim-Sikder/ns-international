"use client";

import Image from "next/image";
import Container from "@/components/ui/Container/Container";
// import Accordion from "./Accordion";
import { useEffect, useState } from "react";

interface Compliance {
  cod_of_conduct_title: string;
  cod_of_conduct_short_description: string;
  codeOfConductImages: string[];
  cod_of_conduct_description: string;
}

interface ApiResponse {
  data: {
    compliances: Compliance[];
  };
}

const Conduct = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/compliance`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: ApiResponse) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data.");
      });
  }, []);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Container className="my-20">
      <h2 className="bg-blue-700 py-4 text-center text-white text-2xl font-semibold">
        Code Of Conduct
      </h2>
      <div className="bg-gray-100 lg:p-10 p-5">
        {data.data.compliances.map((section, index) => (
          <div key={index}>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                {section.cod_of_conduct_title}
              </h3>
              <p className="text-justify mt-5">
                {section.cod_of_conduct_short_description}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10">
              {section.codeOfConductImages?.map((image, i) => (
                <div key={i}>
                  <Image
                    src={image}
                    alt={`Code of Conduct Image ${i + 1}`}
                    height={300}
                    width={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-justify mt-5">
              {section.cod_of_conduct_description}
            </p>
          </div>
        ))}

        {/* <Accordion /> */}
      </div>
    </Container>
  );
};

export default Conduct;
