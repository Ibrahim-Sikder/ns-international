"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoCloseSharp } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Container from "@/components/ui/Container/Container";
import Banner from "@/components/shared/Banner/Banner";

// Dynamically import react-image-gallery
const Gallery = dynamic(() => import("react-image-gallery"), { ssr: false });

// Types for products and gallery images
type Product = {
  _id: string;
  title: string;
  category: string[];
  images: string[];
};

type ApiResponse = {
  data: {
    products: Product[];
  };
};

type GalleryImage = {
  original: string;
  thumbnail: string;
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [data, setData] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/products")
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
      const filtered = data.filter((product) =>
        product.category.some(
          (cat) => cat.toLowerCase() === decodedCategory.toLowerCase()
        )
      );
      setFilteredProducts(filtered);

      // Prepare images for React Image Gallery
      const images = filtered.flatMap((product) =>
        product.images.map((image) => ({
          original: image,
          thumbnail: image,
        }))
      );
      setGalleryImages(images);
    }
  }, [category, data]);

  console.log(filteredProducts);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const goToNext = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const goToPrev = () => {
    setPhotoIndex(
      (prevIndex) =>
        (prevIndex + galleryImages.length - 1) % galleryImages.length
    );
  };

  return (
    <div className="bg-gray-100">
      <Banner title={category} />
      <Container className="py-20">
        {/* <h1 className="text-3xl font-bold my-10 text-center capitalize">
          {category}
        </h1> */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProducts.flatMap((product) =>
              product.images.map((image, index) => (
                <div
                  key={`${product._id}-${index}`}
                  className="overflow-hidden group h-72"
                >
                  <Image
                    src={image}
                    alt={`${product.title} Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-90 cursor-pointer"
                    width={500}
                    height={500}
                    onClick={() => {
                      setPhotoIndex(
                        galleryImages.findIndex((img) => img.original === image)
                      );
                      setIsOpen(true);
                    }}
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

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
          <div className="relative bg-white max-w-2xl w-full p-5">
            <button
              className="absolute z-50 top-2 right-2 text-white text-2xl font-bold bg-[#337AB7] rounded-full p-2"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
            >
              <IoCloseSharp />
            </button>

            {galleryImages.length > 0 && (
              <Gallery
                items={galleryImages}
                startIndex={photoIndex}
                showThumbnails={true}
                showNav={false}
                showFullscreenButton={true}
              />
            )}

            <button
              className="absolute z-50 left-4 top-1/2 transform -translate-y-1/2 text-white bg-[#337AB7] rounded-full p-2 text-xl"
              aria-label="Previous"
              onClick={goToPrev}
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              className="absolute z-50 right-4 top-1/2 transform -translate-y-1/2 text-white bg-[#337AB7] rounded-full p-2 text-xl"
              aria-label="Next"
              onClick={goToNext}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
