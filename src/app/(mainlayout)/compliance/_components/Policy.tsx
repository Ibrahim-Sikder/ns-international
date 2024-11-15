import Image from "next/image";
import img1 from "../../../../../public/assets/ethics/no-child-labor.jpg";
import img2 from "../../../../../public/assets/ethics/harassment-and-abuse.jpg";
import Container from "@/components/ui/Container/Container";

const Policy = () => {
  return (
    <>
      <Container className="my-20">
        <div className="bg-gray-100">
          {/* Header */}
          <div className="flex justify-center bg-blue-800 py-4">
            <h2 className="text-white text-2xl font-semibold">
              Zero Tolerance Policy
            </h2>
          </div>

          {/* Social Compliance Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:p-10 p-5">
            <div>
              <h4 className="text-xl font-bold text-center mb-5">
                Compliance issues to be categorized as ZTV
              </h4>
              <div className="bg-white">
                <p className="p-5 border-b text-justify">Compliance Vision</p>
                <p className="p-5 border-b text-justify">Forced labor</p>
                <p className="p-5 border-b text-justify">Discrimination</p>
                <p className="p-5 border-b text-justify">
                  Harassment and Abuse
                </p>
                <p className="p-5 border-b text-justify">
                  Unauthorized subcontracting including Tier 2 operations
                  regardless of brands
                </p>
                <p className="p-5 border-b text-justify">
                  Shared building unless approved by Head of Compliance (any
                  other factory owned by different owner located in the same
                  building) or factory located in building which has
                  shops/markets
                </p>
                <p className="p-5 border-b text-justify">
                  Factory building approved for residential purposes
                </p>
                <p className="p-5 border-b text-justify">
                  Any unethical practice, such as bribery in the form of cash or
                  kind to facilitate any process
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="space-y-5">
              <Image src={img1} alt="Compliance Workforce" />
              <Image src={img2} alt="Compliance Workforce" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Policy;
