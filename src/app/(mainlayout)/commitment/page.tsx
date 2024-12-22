import Banner from "@/components/shared/Banner/Banner";
import Image from "next/image";
import { FaHandsHelping, FaLightbulb, FaHeart, FaCheck } from "react-icons/fa";
import img1 from "../../../../public/assets/about/commitment.jpg";
import Container from "@/components/ui/Container/Container";
import Mission from "../about/_components/Mission";

export default function VisionAndCommitment() {
  return (
    <div className="bg-gray-100">
      <Banner title="Vision & Commitment" />

      <Container>
      <Mission />
        {/* Vision Statement */}
        <div className="py-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            To create a sustainable, inclusive, and innovative world where
            everyone thrives.
          </p>
        </div>

        {/* Commitment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div className="text-gray-700">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Commitment
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              We are committed to excellence in every aspect of our work,
              ensuring that we positively impact the communities we serve.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <FaCheck className="text-blue-600 mt-1" />
                Fostering innovation to solve global challenges.
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-blue-600 mt-1" />
                Building inclusive opportunities for growth.
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-blue-600 mt-1" />
                Maintaining transparency and ethical practices.
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={img1}
              alt="Commitment"
              width={600}
              height={400}
              className="w-full border"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="py-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg text-center">
              <FaLightbulb className="text-blue-600 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Embracing creativity to drive progress and growth.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg text-center">
              <FaHandsHelping className="text-green-600 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Working together to achieve shared goals.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg text-center">
              <FaHeart className="text-red-600 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                Upholding the highest standards of honesty and ethics.
              </p>
            </div>
          </div>
        </div>
      
      </Container>
    </div>
  );
}
