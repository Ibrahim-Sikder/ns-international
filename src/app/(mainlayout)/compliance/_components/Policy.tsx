"use client";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import { useEffect, useState } from "react";

interface Compliance {
  description: string;
  zeroTolerance_Title: string;
  zeroTolerance_description: string;
  zeroToleranceImages: string[];
  EmployeesCocCovers: string[];
}

interface ApiResponse {
  data: {
    compliances: Compliance[];
  };
}

const Policy = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/compliance`)
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
    <>
      <Container className="my-20">
        <div className="bg-gray-100">
          {/* Header */}
          <div className="flex justify-center bg-blue-700 py-4">
            <h2 className="text-white text-2xl font-semibold">
              Zero Tolerance Policy
            </h2>
          </div>

          {/* Social Compliance Section */}
          {data?.data?.compliances?.map((section, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 items-center gap-8 lg:p-10 p-5"
            >
              <div>
                <div className="space-y-4">
                  <h3 className="text-center">{section.zeroTolerance_Title}</h3>
                  <p className="text-justify">
                    {section.zeroTolerance_description}
                  </p>
                </div>
              </div>
              <div>
                {section?.zeroToleranceImages?.map((image, i) => (
                  <div key={i} className="grid grid-cols-1 gap-5">
                    <Image
                      src={image}
                      alt=""
                      height={300}
                      width={300}
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Policy;
