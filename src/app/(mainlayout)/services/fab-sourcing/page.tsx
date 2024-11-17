import Banner from "@/components/shared/Banner/Banner";
import Container from "@/components/ui/Container/Container";
import React from "react";
import Sidebar from "../_components/Sidebar";
import Image from "next/image";
import { BiSolidHandRight } from "react-icons/bi";
import img from "../../../../../public/assets/services/Research-&-Development.jpg";

const page = () => {
  return (
    <>
      <Banner title="Fabric Sourcing" />
      <Container className="my-20">
        <div className="lg:flex gap-5">
          <Sidebar />
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-3">Fabric Sourcing</h2>
            <p className="mb-3">In-house Technical and R&D Team</p>
            <Image src={img} alt="delivery" className="w-full" />
            <p className="text-justify mt-5">
              NS International has emphasis on Research & Development as the
              core for our business. As an Innovative and Sustainable company we
              have integrated R&D infrastructure and built a team to lead the
              work of discovering new processes, product developments &
              improvement of current production infrastructure.
            </p>
            <ul className="flex flex-col mt-5">
              <li className="flex items-center">
                <BiSolidHandRight className="mr-2 text-yellow-400" />
                Improve process and product by optimization.
              </li>
              <li className="flex items-center">
                <BiSolidHandRight className="mr-2 text-yellow-400" />
                Enhancing the efficiency in a sustainable way.
              </li>
              <li className="flex items-center">
                <BiSolidHandRight className="mr-2 text-yellow-400" />
                Reducing the utilization of natural resource.
              </li>
              <li className="flex items-center">
                <BiSolidHandRight className="mr-2 text-yellow-400" />
                Innovate the sustainable product and process.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
