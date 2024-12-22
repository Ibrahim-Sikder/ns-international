"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { IoCloseSharp } from "react-icons/io5";
import Container from "@/components/ui/Container/Container";
import Banner from "@/components/shared/Banner/Banner";
import Image from "next/image";

// Types for products
type Product = {
  _id: string;
  title: string;
  category:{
    name:string,
    _id:string,
  };
  images: string[];
};

type ApiResponse = {
  data: {
    products: Product[];
  };
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [data, setData] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/products`)
      .then((response) => response.json() as Promise<ApiResponse>)
      .then((data) => {
        setData(data?.data?.products || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (category && data.length > 0) {
      const decodedCategory = decodeURIComponent(category);
  
      // Filter products by decoded category, case-insensitively
      const filtered = data.filter(
        (product) =>
          product?.category?.name?.toLowerCase() === decodedCategory.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [category, data]);
  

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-100">
      <Banner title={category} />
      <Container className="py-20">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProducts.flatMap((product) =>
              product.images.map((image, index) => (
                <div
                  key={`${product._id}-${index}`}
                  className="overflow-hidden group h-72 cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <Image
                    src={image}
                    alt={`${product.title} Image ${index + 1}`}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-90"
                  />
                </div>
              ))
            )}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No products found in this category.
          </p>
        )}
      </Container>

      {isOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <div className="relative bg-white max-w-3xl w-full p-5">
            <button
              className="absolute top-4 right-4 text-white bg-blue-600 rounded-full p-2 z-10"
              aria-label="Close"
              onClick={closeModal}
            >
              <IoCloseSharp size={24} />
            </button>
            <div className="p-4">
              <InnerImageZoom
                src={selectedImage}
                zoomSrc={selectedImage}
                hideHint={true}
                zoomScale={1.5}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
