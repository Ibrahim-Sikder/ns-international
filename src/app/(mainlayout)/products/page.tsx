"use client";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import Link from "next/link";
import Banner from "@/components/shared/Banner/Banner";
import { useEffect, useState } from "react";

interface Products {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  images: string[];
}

interface ProductsResponse {
  success: boolean;
  message: string;
  data: {
    products: Products[];
  };
}

const Products = () => {
  const [data, setData] = useState<ProductsResponse | null>(null);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/products`)
      .then((response) => response.json())
      .then((data: ProductsResponse) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="bg-gray-100">
      <Banner title="Products" />
      <Container>
        <div className="py-20">
          <h2 className="text-sm uppercase text-blue-700 mb-2 text-center">
            Our Products
          </h2>
          <h3 className="text-3xl font-bold mb-10 text-center">
            NS International Ensures The Best Products
          </h3>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {data?.data?.products.map((product, index) => (
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
                  {product?.images?.slice(0, 1).map((image, index) => (
                    <div key={index} className="w-full h-56">
                      <Image
                        src={image}
                        alt=""
                        height={56}
                        width={56}
                        quality={100}
                        layout="responsive"
                        className="w-full h-56  transition-transform
                      transform group-hover:scale-105"
                      />
                    </div>
                  ))}

                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={`/products/${product.category}`}>
                      <button className="text-white text-4xl hover:cursor-pointer">
                        <GoArrowUpRight />
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
