import Banner from "@/components/shared/Banner/Banner";
import image from "../../../../../public/assets/ethics/compliance.jpg";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import { FaCheckCircle } from "react-icons/fa";

const Compliance = () => {
  return (
    <>
      <Banner title="Compliance & Ethics" />
      <Container>
        <div className="lg:flex gap-10 my-20">
          <div>
            <Image
              src={image.src}
              alt="Compliance"
              className="w-full h-full"
              width={4000}
              height={400}
            />
          </div>
          <div>
            <h1 className="bg-blue-700 text-white font-bold text-xl text-center py-4 lg:mt-0 mt-10">
              Compliance & Ethics
            </h1>
            <div className="bg-gray-100 p-5 lg:w-[400px]">
              <div className="bg-white">
                <div className="flex items-center gap-3 p-5 border-b">
                  <FaCheckCircle className="text-2xl text-blue-700" />
                  <h4>Compliance Vision</h4>
                </div>
                <div className="flex items-center gap-3 p-5 border-b">
                  <FaCheckCircle className="text-2xl text-blue-700" />
                  <h4>Zero Tolerance Policy</h4>
                </div>
                <div className="flex items-center gap-3 p-5 border-b">
                  <FaCheckCircle className="text-2xl text-blue-700" />
                  <h4>Code Of Conduct</h4>
                </div>
                <div className="flex items-center gap-3 p-5 border-b">
                  <FaCheckCircle className="text-2xl text-blue-700" />
                  <h4>CSR</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Compliance;
