"use client";

import Image from "next/image";
import img1 from "../../../../assets/images/abouthome/cotton.jpg";
import CountUp from "react-countup";
import { FaHandshake } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaHotel } from "react-icons/fa6";
import { GiFactory } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhoWeAre = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

 
  return (
    <div className="bg-gray-50 pb-2">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10 mb-10 px-4 ">
        {/* Left side */}
        <div
          className="w-full lg:w-[500px] p-3 lg:p-6 bg-white z-10 -mt-10 lg:-mt-20 "
          data-aos="fade-right"
        >
          <div className="py-10">
            <h5 className="text-blue-900 mb-2">Who We Are</h5>
            <h2 className="text-gray-800 mb-2 text-xl sm:text-2xl lg:text-3xl">
              The Leading Apparel Manufacturer and Exporter
            </h2>
            <p className="text-gray-600 text-justify mb-4">
              NS Internation is a leading multinational apparel buying hub,
              sourcing company, manufacturer and committed exporter on woven,
              denim, knit, sweater etc. We produce best quality garments for all
              of our internationally reputed buyers/importers and departmental
              chain stores from US, RU, EU, etc. markets. Since our
              establishment, we have developed long term trade relationships
              with most of our potential customers & earned trust in their
              respective markets.
            </p>

            <button className="underline text-blue-400 hover:text-black">
              View More
            </button>
          </div>

          <div className="overflow-hidden" data-aos="fade-up">
            <Image
              src={img1}
              alt="Image"
              className="object-cover h-[250px] md:h-[300px] lg:h-[400px] w-full"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-[500px] mt-5 lg:mt-10 text-center lg:text-left">
          <h4 className="text-blue-900 mb-2">NS International</h4>
          <h3 className="font-semibold text-gray-800 mb-4 text-xl sm:text-2xl">
            We are in apparel industries
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center content-center gap-4">
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md" data-aos="fade-left">
                <FaHandshake className="h-14 w-14 mx-auto text-blue-900" />
                <div className="text-2xl font-bold text-gray-800 my-1">
                  <CountUp start={0} end={100} duration={2} /> +
                </div>
                <p className="text-gray-600">Trusted Clients</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md" data-aos="fade-left">
                <FaTruckFast className="h-14 w-14 mx-auto text-blue-900" />
                <p className="text-gray-600">More than </p>
                <div className="text-2xl font-bold text-gray-800 my-1">
                  <CountUp start={0} end={5000} duration={2} /> +
                </div>
                <p className="text-gray-600">Shipments</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md" data-aos="fade-left">
                <IoIosPeople className="h-14 w-14 mx-auto text-blue-900" />
                <div className="text-2xl font-bold text-gray-800 my-1">
                  <CountUp start={0} end={13} duration={2} /> +
                </div>
                <p className="text-gray-600">Years Of Experience</p>
              </div>
            </div>
            <div className="space-y-4">
              {/* Card 4 */}
              <div className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md" data-aos="fade-left">
                <FaHotel className="h-14 w-14 mx-auto text-blue-900" />
                <div className="text-2xl font-bold my-1">
                  <CountUp start={0} end={400} duration={2} /> +
                </div>
                <p className="text-gray-600">Visited Conference</p>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md" data-aos="fade-left">
                <GiFactory className="h-14 w-14 mx-auto text-blue-900" />
                <div className="text-2xl font-bold text-gray-800 mb-1">
                  <CountUp start={0} end={500} duration={2} />
                </div>
                <p className="text-gray-600">Compliance Factories</p>
              </div>
            </div>
            <div>
              {/* Card 6 */}
              <div className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md" data-aos="fade-left">
                <GiClothes className="h-14 w-14 mx-auto text-blue-900" />
                <div className="text-2xl font-bold text-gray-800 mb-1">
                  <CountUp start={0} end={600} duration={2} /> +
                </div>
                <p className="text-gray-600">pcs/month production</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
