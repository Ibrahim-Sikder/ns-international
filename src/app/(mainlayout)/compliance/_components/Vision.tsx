"use client";
import Image from "next/image";
import { BiSolidHandRight } from "react-icons/bi";
import Container from "@/components/ui/Container/Container";
import { useEffect, useState } from "react";

interface Compliance {
  description: string;
  social_compliance_description: string;
  images: string[];
  EmployeesCocCovers: string[];
}

interface ApiResponse {
  data: {
    compliances: Compliance[];
  };
}

const Vision = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/compliance")
      .then((response) => response.json())
      .then((data) => setData(data))
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
      <div className="bg-gray-100">
        <div className="flex justify-center bg-blue-700 py-4">
          <h2 className="text-white text-2xl font-semibold">
            Compliance Vision
          </h2>
        </div>

        {data?.data?.compliances?.map((section, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-2 items-center gap-8 lg:p-10 p-5"
          >
            <div>
              <div className="space-y-4">
                <p className="bg-white p-4 shadow-md text-justify">
                  {section.description}
                </p>
                <p className="bg-white p-4 shadow-md text-justify">
                  {section.social_compliance_description}
                </p>
              </div>
            </div>
            <div>
              {section?.images.map((image, i) => (
                <div key={i} className="flex justify-center">
                  <Image
                    src={image}
                    alt={`Compliance Image ${i + 1}`}
                    height={300}
                    width={300}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-10 p-5">
          {data?.data?.compliances?.map((section, index) => (
            <div key={index}>
              <ul className="space-y-1">
                {section?.EmployeesCocCovers?.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <BiSolidHandRight className="mr-2 text-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Vision;
