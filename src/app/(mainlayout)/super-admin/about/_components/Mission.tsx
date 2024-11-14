import React from "react";
import Image from "next/image";
import { SlEnergy } from "react-icons/sl";
import { GiSprint } from "react-icons/gi";
import { FaHandHoldingHeart, FaRegFlag } from "react-icons/fa";
import mapImage from "../../../../../../public/assets/about/map.jpg";

const cardData = [
  {
    icon: <FaRegFlag className="text-5xl" />,
    title: "Our Mission",
    description:
      "To satisfy our potential buyers with on-time shipment, service, commitment, and best quality products.",
  },
  {
    icon: <FaHandHoldingHeart className="text-5xl" />,
    title: "Our Belief",
    description:
      "Best quality, service, and strong commitment is the key of our success.",
  },
  {
    icon: <GiSprint className="text-5xl" />,
    title: "Our Spirit",
    description: "Professionalism is our spirit.",
  },
  {
    icon: <SlEnergy className="text-5xl" />,
    title: "Our Energy",
    description:
      "Dynamic qualified employees and good relationships with stakeholders.",
  },
];

const Mission = () => {
  return (
    <div className="my-20">
      {/* Title */}
      <h2 className="text-center text-5xl font-bold text-blue-800 mb-12">
        Our Mission And Belief
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Column - Map Image */}
        <div className="flex justify-center items-center">
          <Image src={mapImage} alt="World Map" />
        </div>

        {/* Right Column - Cards */}
        <div className="grid gap-5">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-blue-800 text-white p-5 flex items-center gap-5 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {card.icon}
              <div>
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
