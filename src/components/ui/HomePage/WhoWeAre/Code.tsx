import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { FaHandshake } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaHotel } from "react-icons/fa6";
import { GiFactory } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";

const Code = () => {
  return (
    <div>
      <div className="">
        {/* Left side */}
        <div
          className="w-full lg:w-[500px] p-3 lg:p-6 bg-white z-10 -mt-10 lg:-mt-20 "
          data-aos="fade-right"
        >
          <div className="py-10">
            <h5 className="text-blue-900 mb-2">Who We Are</h5>
            {data?.data?.whoweares?.map((item, index) => (
              <div key={index}>
                <h2 className="text-gray-800 mb-2 text-xl sm:text-2xl lg:text-3xl">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-justify mb-4"></p>
                {item.description}
                <Link href="/about">
                  <button className="underline text-blue-400 hover:text-black">
                    View More
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {data?.data?.whoweares?.map((item, index) => (
            <div key={index}>
              <div className="overflow-hidden" data-aos="fade-up">
                {item?.images?.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image}
                      alt="Image"
                      height={400}
                      width={400}
                      className="object-cover h-[250px] md:h-[300px] lg:h-[400px] w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right side */}
        <div>
          {data?.data?.whoweares?.map((item, index) => (
            <div key={index}>
              <div className="w-full lg:w-[500px] mt-5 lg:mt-10 text-center lg:text-left">
                <h4 className="text-blue-900 mb-2">NS International</h4>
                <h3 className="font-semibold text-gray-800 mb-4 text-xl sm:text-2xl">
                  We are in apparel industries
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center content-center gap-4">
                  <div className="space-y-4">
                    {/* Card 1 */}
                    <div
                      className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md"
                      data-aos="fade-left"
                    >
                      <FaHandshake className="h-14 w-14 mx-auto text-blue-900" />
                      <div className="text-2xl font-bold text-gray-800 my-1">
                        <CountUp start={0} end={item?.client} duration={2} /> +
                      </div>
                      <p className="text-gray-600">Trusted Clients</p>
                    </div>

                    {/* Card 2 */}
                    <div
                      className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md"
                      data-aos="fade-left"
                    >
                      <FaTruckFast className="h-14 w-14 mx-auto text-blue-900" />
                      <p className="text-gray-600">More than </p>
                      <div className="text-2xl font-bold text-gray-800 my-1">
                        <CountUp start={0} end={item?.shipment} duration={2} />{" "}
                        +
                      </div>
                      <p className="text-gray-600">Shipments</p>
                    </div>

                    {/* Card 3 */}
                    <div
                      className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md"
                      data-aos="fade-left"
                    >
                      <IoIosPeople className="h-14 w-14 mx-auto text-blue-900" />
                      <div className="text-2xl font-bold text-gray-800 my-1">
                        <CountUp
                          start={0}
                          end={item?.experience}
                          duration={2}
                        />{" "}
                        +
                      </div>
                      <p className="text-gray-600">Years Of Experience</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {/* Card 4 */}
                    <div
                      className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md"
                      data-aos="fade-left"
                    >
                      <FaHotel className="h-14 w-14 mx-auto text-blue-900" />
                      <div className="text-2xl font-bold my-1">
                        <CountUp
                          start={0}
                          end={item?.compliance_factories}
                          duration={2}
                        />{" "}
                        +
                      </div>
                      <p className="text-gray-600">Visited Conference</p>
                    </div>

                    {/* Card 5 */}
                    <div
                      className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md"
                      data-aos="fade-left"
                    >
                      <GiFactory className="h-14 w-14 mx-auto text-blue-900" />
                      <div className="text-2xl font-bold text-gray-800 mb-1">
                        <CountUp
                          start={0}
                          end={item?.production}
                          duration={2}
                        />
                      </div>
                      <p className="text-gray-600">Compliance Factories</p>
                    </div>
                  </div>
                  <div>
                    {/* Card 6 */}
                    <div
                      className="bg-white p-4 border rounded-md border-gray-300 text-center shadow-md"
                      data-aos="fade-left"
                    >
                      <GiClothes className="h-14 w-14 mx-auto text-blue-900" />
                      <div className="text-2xl font-bold text-gray-800 mb-1">
                        <CountUp
                          start={0}
                          end={item?.visited_conference}
                          duration={2}
                        />{" "}
                        +
                      </div>
                      <p className="text-gray-600">pcs/month production</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Code;
