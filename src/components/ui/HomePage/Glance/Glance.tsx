"use client";
import React from "react";
import { Parallax } from "react-parallax";
import bgImage from "../../../../assets/images/developmentslider/26.jpg"; 
import { IoIosPeople } from "react-icons/io";
import CountUp from "react-countup";
import ProgressBar from "@ramonak/react-progress-bar";

const Glance = () => {
  return (
    <>
      <Parallax
        bgImage={bgImage.src}
        strength={500}
        className="text-white"
        bgImageStyle={{ objectFit: "cover" }}
      >
        <div className="bg-black bg-opacity-55">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center py-8 lg:py-20 px-5">
            {/* Left Section */}
            <div className="space-y-3">
              <h4 className="font-semibold">At A Glance</h4>
              <h1 className="text-4xl font-bold">
                <span className="text-blue-400">NS-International</span> Is
                Operating In Apparel Industries
              </h1>
            </div>

            {/* Progress Bars */}
            <div className="space-y-5">
              {[
                "R&D And Product Development",
                "On Time Delivery",
                "Fast Response & Sample Submission",
                "Quality Standard 2.5 AQL",
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{item}</span>
                    {/* <CountUp start={0} end={100} duration={2} /> % */}
                    {/* <ProgressBar completed={100} /> */}
                  </div>
                  <div className="bg-white bg-opacity-20 h-2 rounded-full">
                    {/* <div className="bg-white h-2 rounded-full w-full"></div> */}
                    <ProgressBar completed={100} bgColor="#527fec" />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center justify-center content-center bg-gray-500 bg-opacity-60 rounded-lg text-center p-5 gap-5">
              <IoIosPeople className="h-10 w-10" />
              <div className="text-3xl mb-1">
              
                <CountUp start={0} end={400} duration={2} /> +
                <p className="text-lg mt-2">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Glance;
