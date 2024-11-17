import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import logo1 from "../../../assets/images/marqee/0.png";
import logo2 from "../../../assets/images/marqee/1.png";
import logo3 from "../../../assets/images/marqee/2.png";
import logo4 from "../../../assets/images/marqee/3.png";
import logo5 from "../../../assets/images/marqee/4.png";
import logo6 from "../../../assets/images/marqee/5.png";
import logo7 from "../../../assets/images/marqee/6.png";
import logo8 from "../../../assets/images/marqee/7.png";
import logo9 from "../../../assets/images/marqee/8.png";
import logo10 from "../../../assets/images/marqee/9.png";
import logo11 from "../../../assets/images/marqee/10.png";
import logo12 from "../../../assets/images/marqee/11.png";

const OurPartner = () => {
  const partners = [
    { id: 1, logo: logo1, name: "Partner 1" },
    { id: 2, logo: logo2, name: "Partner 2" },
    { id: 3, logo: logo3, name: "Partner 3" },
    { id: 4, logo: logo4, name: "Partner 4" },
    { id: 5, logo: logo5, name: "Partner 5" },
    { id: 6, logo: logo6, name: "Partner 6" },
    { id: 7, logo: logo7, name: "Partner 7" },
    { id: 8, logo: logo8, name: "Partner 8" },
    { id: 9, logo: logo9, name: "Partner 9" },
    { id: 10, logo: logo10, name: "Partner 7" },
    { id: 11, logo: logo11, name: "Partner 8" },
    { id: 12, logo: logo12, name: "Partner 9" },
    // { id: 13, logo: logo7, name: "Partner 7" },
    // { id: 14, logo: logo8, name: "Partner 8" },
    // { id: 15, logo: logo9, name: "Partner 9" },
  ];

  return (
    <>
      <div className="w-full bg-gray-100 py-[50px]">
        <h2 className="mb-10 text-center underline">Our Partners</h2>
        <Marquee speed={140} pauseOnHover gradient={false}>
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="mx-4 flex justify-center items-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}              
                className="object-contain h-[120px] lg:h-[150px]"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default OurPartner;
