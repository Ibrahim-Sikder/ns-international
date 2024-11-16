"use client";
import React from "react";
import { Parallax } from "react-parallax";
import bgImage from "../../../../assets/images/developmentslider/6927689.jpg";
import { IoIosPeople } from "react-icons/io";
import CountUp from "react-countup";

const Glance = () => {
  return (
    <Parallax
      bgImage={bgImage.src}
      strength={500}
      className="text-white"
      bgImageStyle={{ objectFit: "cover" }}
    >
      <div className="bg-black bg-opacity-55">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center py-20 px-5">
          {/* Left Section */}
          <div className="space-y-3">
            <h4 className="text-lg uppercase font-semibold">At a Glance</h4>
            <h1 className="text-4xl font-bold">
              <span className="text-orange-400">Warptex</span> Is Operating In
              Apparel Industries
            </h1>
          </div>

          {/* Center Section: Progress Bars */}
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
                  <span>100%</span>
                </div>
                <div className="bg-white bg-opacity-20 h-2 rounded-full">
                  <div className="bg-white h-2 rounded-full w-full"></div>
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
  );
};

export default Glance;
