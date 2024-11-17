import Image from "next/image";
import img1 from "../../../../../public/assets/ethics/no-child-labor.jpg";
import img2 from "../../../../../public/assets/ethics/harassment-and-abuse.jpg";
import Container from "@/components/ui/Container/Container";
import Accordion from "./Accordion";

const Conduct = () => {
  return (
    <>
      <Container className="my-20">
        <h2 className="bg-blue-700 py-4 text-center text-white text-2xl font-semibold">
          Code Of Conduct
        </h2>
        <div className="bg-gray-100 lg:p-10 p-5">
          <div>
            <h3>NS International Code of Conduct for Manufacturing Unit</h3>
            <p className="text-justify mt-5">
              Our code is derived from the values and standards set by our
              customers. More particularly the Declaration of Human Rights and
              many of the ILO core conventions and local laws. It is our earnest
              endeavor to meet all the aspects of our buyers’ code of conduct.
              We only work with factories which are approved by our buyers.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
            <Image src={img1} alt="Compliance Workforce" />
            <Image src={img2} alt="Compliance Workforce" />
          </div>
          <Accordion />
        </div>
      </Container>
    </>
  );
};

export default Conduct;
