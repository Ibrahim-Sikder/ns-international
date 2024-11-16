import Image from "next/image";
import { BiSolidHandRight } from "react-icons/bi";
import complianceImage from "../../../../../public/assets/ethics/4.jpg";
import Container from "@/components/ui/Container/Container";

const Vision = () => {
  return (
    <>
      <Container className="my-20">
        <div className="bg-gray-100">
          {/* Header */}
          <div className="flex justify-center bg-blue-800 py-4">
            <h2 className="text-white text-2xl font-semibold">
              Compliance Vision
            </h2>
          </div>

          {/* Social Compliance Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:p-10 p-5">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center">
                Social Compliance
              </h3>
              <div className="space-y-4">
                <p className="bg-white p-4 shadow-md text-justify">
                  To uphold the reputation of our Customers, Business Partners &
                  our organization by ensuring ethics, integrity, and technical
                  expertise are uncompromisingly practiced in our audit
                  processes.
                </p>
                <p className="bg-white p-4 shadow-md text-justify">
                  To enlist the factory, our compliance team first visits the
                  factory for a social compliance audit. If the audit passes,
                  then we go for the order placement. In this regard, we follow
                  buyers Code of Conduct and local law.
                </p>
                <p className="bg-white p-4 shadow-md text-justify">
                  We monitor compliance issues of all our enlisted suppliers and
                  vendors on a regular basis, announced and unannounced.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <Image src={complianceImage} alt="Compliance Workforce" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-10 p-5">
            <div>
              <h4 className="text-lg font-bold mb-4">Employees’ COC covers</h4>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" /> Bribery
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" />{" "}
                  Disclosure of confidential documents
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" />{" "}
                  Misappropriation of assets
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" />{" "}
                  Falsification of records
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" /> Sexual
                  harassment
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" />{" "}
                  Activities of conflicting business interest
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" />{" "}
                  Violation of sourcing ZTV code
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Suppliers’ COC covers</h4>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" /> Child
                  labor
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" />{" "}
                  Disciplinary practices
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" /> Legal
                  requirements
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" /> Working
                  hours
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" /> Freedom
                  of Association
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" />{" "}
                  Unauthorized subcontracting
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" /> Health,
                  Safety
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" /> Forced
                  labor
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" />{" "}
                  Disclosure of confidential documents
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" />{" "}
                  Harassment & Abuse
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" /> Ethical
                  standards
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" /> Wages &
                  Benefits
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" />{" "}
                  Discrimination
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" /> Building
                  and fire safety
                </li>
                <li className="flex items-center">
                  <BiSolidHandRight className="mr-2 text-yellow-400" />{" "}
                  Environment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Vision;
