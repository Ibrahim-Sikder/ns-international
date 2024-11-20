"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import mapImage from "../../../../../public/assets/about/map.jpg";
import { SlEnergy } from "react-icons/sl";
import { GiSprint } from "react-icons/gi";
import { FaHandHoldingHeart, FaRegFlag } from "react-icons/fa";

interface Mission {
  _id: string;
  title: string;
  description: string;
}

interface MissionResponse {
  success: boolean;
  message: string;
  data: {
    missions: Mission[];
  };
}

const Mission = () => {
  const [data, setData] = useState<MissionResponse | null>(null);
  // console.log(data);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/mission`)
      .then((response) => response.json())
      .then((data: MissionResponse) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="my-20">
      {/* Title */}
      <h2 className="text-center text-5xl font-bold text-blue-700 mb-12">
        Our Mission And Belief
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Map Image */}
        <div className="flex justify-center items-center">
          <Image src={mapImage} alt="World Map" />
        </div>

        {/* Mission Data */}
        <div className="grid gap-3">
          {data?.data?.missions?.map((mission, index) => (
            <div
              key={mission._id}
              className="bg-blue-700 text-white p-5 flex items-center gap-5 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Icons */}
              {index === 0 ? (
                <FaRegFlag size={40} />
              ) : index === 1 ? (
                <FaHandHoldingHeart size={40} />
              ) : index === 2 ? (
                <GiSprint size={40} />
              ) : (
                index === 3 && <SlEnergy size={40} />
              )}
              <div>
                <h3 className="text-2xl font-bold">{mission.title}</h3>
                <p className="mt-2">{mission.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
