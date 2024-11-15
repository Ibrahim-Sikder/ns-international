import img1 from "../../../../public/assets/products/woven.jpg";
import img2 from "../../../../public/assets/products/knit.jpg";
import img3 from "../../../../public/assets/products/sweater.jpg";
import img4 from "../../../../public/assets/products/homewear.jpg";

import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import Link from "next/link";
import Banner from "@/components/shared/Banner/Banner";

const products = [
  {
    category: "Woven",
    image: img1,
    icon: GoArrowUpRight,
    link: "/products/woven",
  },
  {
    category: "Knit",
    image: img2,
    icon: GoArrowUpRight,
    link: "/products/knit",
  },
  {
    category: "Sweater",
    image: img3,
    icon: GoArrowUpRight,
    link: "/products/sweater",
  },
  {
    category: "Homewear",
    image: img4,
    icon: GoArrowUpRight,
    link: "/products/homewear",
  },
];

const Products = () => {
  return (
    <div className="bg-gray-100">
      <Banner title="Products" />
      <Container>
        <div className="py-20">
          <h2 className="text-sm uppercase text-blue-800 mb-2 text-center">
            Our Products
          </h2>
          <h3 className="text-3xl font-bold mb-10 text-center">
            Warptex Ensures The Best Products
          </h3>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-lg group p-5 relative"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 bg-blue-600 text-white px-4 py-2 shadow-md">
                  <h4 className="text-sm">{product.category}</h4>
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

export default Products;
