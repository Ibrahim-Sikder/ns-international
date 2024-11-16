import img1 from "../../../../public/assets/services/1.jpg";
import img2 from "../../../../public/assets/services/2.jpg";
import img3 from "../../../../public/assets/services/3.jpg";
import img4 from "../../../../public/assets/services/4.jpg";
import img5 from "../../../../public/assets/services/5.jpg";
import img6 from "../../../../public/assets/services/6.jpg";
import img7 from "../../../../public/assets/services/7.jpg";
import img8 from "../../../../public/assets/services/8.jpg";
import img9 from "../../../../public/assets/services/9.jpg";
import img10 from "../../../../public/assets/services/10.jpg";
import img11 from "../../../../public/assets/services/11.jpg";
import img12 from "../../../../public/assets/services/12.jpg";

import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import Link from "next/link";
import Banner from "@/components/shared/Banner/Banner";

const products = [
  {
    category: "Research & Development",
    image: img1,
    icon: GoArrowUpRight,
    link: "/services/research",
  },
  {
    category: "Sample Development",
    image: img2,
    icon: GoArrowUpRight,
    link: "/services/development",
  },
  {
    category: "Merchandising",
    image: img3,
    icon: GoArrowUpRight,
    link: "/services/merchandising",
  },
  {
    category: "Fabric Sourcing",
    image: img4,
    icon: GoArrowUpRight,
    link: "/services/fab-sourcing",
  },
  {
    category: "Production",
    image: img5,
    icon: GoArrowUpRight,
    link: "/services/production",
  },
  {
    category: "QA and QC",
    image: img6,
    icon: GoArrowUpRight,
    link: "/services/qa-qc",
  },
  {
    category: "Delivery and Shipment",
    image: img7,
    icon: GoArrowUpRight,
    link: "/services/delivery",
  },
  {
    category: "Knitting",
    image: img8,
    icon: GoArrowUpRight,
    link: "/services/knitting",
  },
  {
    category: "Embroidery",
    image: img9,
    icon: GoArrowUpRight,
    link: "/services/embroidery",
  },
  {
    category: "Garment Dyeing & Wash",
    image: img10,
    icon: GoArrowUpRight,
    link: "/services/dyeing-wash",
  },
  {
    category: "Printing",
    image: img11,
    icon: GoArrowUpRight,
    link: "/services/printing",
  },
  {
    category: "Trimming & Accessories",
    image: img12,
    icon: GoArrowUpRight,
    link: "/services/trimming",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100">
      <Banner title="All Services" />
      <Container>
        <div className="py-20">
          <h2 className="text-sm uppercase text-blue-700 mb-2 text-center">
            OUR SERVICES
          </h2>
          <h3 className="text-3xl font-bold mb-10 text-center">
            NS International Ensure the Best Production From Every Angle
          </h3>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-lg group p-5 relative"
              >
                <div className="flex justify-center">
                  <div className="absolute top-0 z-10 bg-blue-600 text-white px-4 py-2 shadow-md">
                    <h4 className="text-sm">{product.category}</h4>
                  </div>
                </div>

                <div className="overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={product.category}
                    className="w-full h-56 object-cover transition-transform transform group-hover:scale-105"
                  />
                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {/* Wrap the icon in a Link component */}
                    <Link href={product.link}>
                      <button className="text-white text-4xl hover:cursor-pointer">
                        <product.icon />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
