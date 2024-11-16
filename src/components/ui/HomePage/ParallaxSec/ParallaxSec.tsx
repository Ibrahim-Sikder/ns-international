"use client";
import React from "react";
import { Background, Parallax } from "react-parallax";
import img from "../../../../assets/images/paralaxx/diy-pride-outfits.webp";
import sewing from "../../../../assets/images/paralaxx/DIY.webp";
import Image from "next/image";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineDangerous } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";

const ParallaxSec = () => {
  return (
    <div className="">
      <div className="relative ">
        <Parallax strength={600}>
          <Background className="sticky w-[1200px] md:w-[1400px] lg:w-[2000px]">
            <Image src={img} className="w-[2000px]" alt="image" />
          </Background>

          <div className="">
            <div className="absolute w-full h-full  bg-opacity-40 py-20"></div>
            <div className=" w-full p-10 lg:p-4  text-white  bg-black bg-opacity-55 ">
              <div className="py-20 text-center space-y-5">
                <h4 className="text-blue-400">Compliance and Ethics</h4>
                <h1>Obey all legal & social compliance guided by laws</h1>
                <p>
                  We do obey all legal & social compliance guided by laws and
                  regulatory bodies as per local government order & global
                  requirements. Some of our major compliance issues are:
                </p>
                <div className="flex gap-10 mx-10 justify-center items-center content-center">
                  <div className="bg-gray-500 bg-opacity-45 p-5 rounded-md h-[500px] flex flex-col justify-center items-center">
                    <div className="flex ">
                      <div className="flex gap-2 border-r border-b p-7 items-center">
                        <FaHandHoldingWater className="h-7 w-7 " />
                        <h4 className="">Pure Drinking Water</h4>
                      </div>
                      <div className="flex gap-2 border-b p-7 items-center">
                        <GiElectric className="h-7 w-7" />
                        <h4 className="">Electric Shock Prevention</h4>
                      </div>
                    </div>

                    <div className="flex ">
                      <div className="flex gap-2 border-r border-b p-7 items-center">
                        <GiTakeMyMoney className="h-7 w-7" />
                        <h4 className="">Salary On-Time</h4>
                      </div>
                      <div className="flex gap-2  border-b p-7 items-center">
                        <FaHandsHoldingChild className="h-7 w-7" />
                        <h4 className="">Maternity Leave</h4>
                      </div>
                    </div>

                    <div className="flex ">
                      <div className="flex gap-2 border-r border-b p-7 items-center">
                        <MdOutlineHealthAndSafety className="h-7 w-7" />
                        <h4 className="">Health and Safety</h4>
                      </div>
                      <div className="flex gap-2 border-b p-7 items-center">
                        <FaRegLightbulb className="h-7 w-7" />
                        <h4 className="">Lighting and Ventilation</h4>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex gap-2 border-r border-b p-7 items-center">
                        <MdOutlineDangerous className="h-7 w-7" />
                        <h4 className="">No Child Labor</h4>
                      </div>
                      <div className="flex gap-2  border-b p-7 items-center">
                        <IoMdTimer className="h-7 w-7" />
                        <h4 className="">Working hour</h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={sewing}
                      alt="img"
                      className="h-[500px] w-[600px] rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default ParallaxSec;
