"use client";

import Banner from "@/components/shared/Banner/Banner";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

interface ComplianceData {
  images: string[];
}

interface ApiResponse {
  data: {
    compliances: ComplianceData[];
  };
}

const Compliance = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/compliance`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
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
    <>
      <Banner title="Compliance & Ethics" />
      <Container>
        <div className="lg:flex gap-10 my-20">
          <div className="lg:w-2/3">
            {data.data.compliances.map((section, index) => (
              <div key={index}>
                {section.images?.map((image, i) => (
                  <div key={i} className="flex justify-center mb-5">
                    <Image
                      src={image}
                      alt={`Compliance Image ${i + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="lg:w-1/3">
            <h1 className="bg-blue-700 text-white font-bold text-xl text-center py-4 lg:mt-0 mt-10">
              Compliance & Ethics
            </h1>
            <div className="bg-gray-100 p-5">
              <div className="bg-white shadow rounded-lg">
                {[
                  "Compliance Vision",
                  "Zero Tolerance Policy",
                  "Code Of Conduct",
                  "CSR",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-5 border-b last:border-b-0"
                  >
                    <FaCheckCircle className="text-2xl text-blue-700" />
                    <h4>{item}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Compliance;
