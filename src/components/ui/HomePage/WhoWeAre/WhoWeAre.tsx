"use client";

import Image from "next/image";
import img1 from "../../../../assets/images/abouthome/cotton.jpg";
// import { useEffect, useState } from 'react';
import CountUp from "react-countup";

const WhoWeAre = () => {
  return (
    <div className="bg-gray-100 pb-2">
      <div className=" w-[1200px] mx-auto  flex space-x-20 mb-10">
        {/* left side */}
        <div className="w-[500px] p-6 -mt-20 z-50 bg-white">
          <div className="flex-1 py-10">
            <h4 className=" text-blue-700 mb-2">Who We Are</h4>
            <h2 className=" text-gray-800 mb-2">
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

          <div className="overflow-hidden">
            <Image src={img1} alt="Image" className="object-cover h-[400px]" />
          </div>
        </div>

        {/* right side */}
        <div className="w-[500px] mt-16 ">
          <h4 className=" text-blue-700 mb-2">NS International</h4>
          <h3 className="font-semibold text-gray-800 mb-4">
            We are in apparel industries
          </h3>

          <div className="flex justify-center items-center content-center gap-4">
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md">
                <div className="text-3xl text-blue-500 mb-2">💡</div>
                <div className="text-xl font-bold text-gray-800 mb-1">
                  <CountUp start={0} end={100} duration={2} />
                </div>
                <p className="text-gray-600">Trusted Clients</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md">
                <div className="text-3xl text-blue-500 mb-2">🚀</div>
                <p className="text-gray-600">More than </p>
                <div className="text-xl font-bold text-gray-800 mb-1">
                  <CountUp start={0} end={5000} duration={2} />
                </div>
                <p className="text-gray-600">Shipments</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md">
                <div className="text-3xl text-blue-500 mb-2">⚙️</div>
                <div className="text-xl font-bold text-gray-800 mb-1">
                  <CountUp start={0} end={13} duration={2} /> +
                </div>
                <p className="text-gray-600">Years Of Experience</p>
              </div>
            </div>
            <div className="space-y-4">
              {/* Card 4 */}
              <div className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md">
                <div className="text-3xl text-blue-500 mb-2">🌱</div>
                <div className="text-xl font-bold text-gray-800 mb-1">
                  <CountUp start={0} end={400} duration={2} />
                </div>
                <p className="text-gray-600">Visited Conference</p>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md">
                <div className="text-3xl text-blue-500 mb-2">🎨</div>
                <div className="text-xl font-bold text-gray-800 mb-1">
                  <CountUp start={0} end={500} duration={2} />
                </div>
                <p className="text-gray-600">Compliance Factories</p>
              </div>
            </div>
            <div>
              {/* Card 6 */}
              <div className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md">
                <div className="text-3xl text-blue-500 mb-2">🎯</div>
                <div className="text-xl font-bold text-gray-800 mb-1">
                  <CountUp start={0} end={600} duration={2} />
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
