"use client";
import { useState } from "react";
import img1 from "../../../../../../public/assets/products/product (1).jpg";
import img2 from "../../../../../../public/assets/products/product (2).jpg";
import img3 from "../../../../../../public/assets/products/product (3).jpg";
import img4 from "../../../../../../public/assets/products/product (4).jpg";
import img5 from "../../../../../../public/assets/products/product (5).jpg";
import img6 from "../../../../../../public/assets/products/product (6).jpg";
import img7 from "../../../../../../public/assets/products/product (7).jpg";
import img8 from "../../../../../../public/assets/products/product (8).jpg";

import Image from "next/image";
import Container from "@/components/ui/Container/Container";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoCloseSharp } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const products = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
];

const Knit = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Prepare images for React Image Gallery
  const galleryImages = products.map((product) => ({
    original: product.image.src,
    thumbnail: product.image.src,
  }));

  // Custom handlers for next/prev
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
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, index) => (
            <div key={index} className="overflow-hidden group">
              <Image
                src={product.image}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-90 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            </div>
          ))}
        </div>
      </Container>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
          {/* Gallery Modal */}
          <div className="relative bg-white max-w-2xl w-full p-5">
            <button
              className="absolute z-50 top-2 right-2 text-white text-2xl font-bold bg-[#337AB7] rounded-full p-2"
              onClick={() => setIsOpen(false)}
            >
              <IoCloseSharp />
            </button>

            <Gallery
              items={galleryImages}
              startIndex={photoIndex}
              showThumbnails={true}
              showNav={false}
              showFullscreenButton={true}
            />

            <button
              className="absolute z-50 left-4 top-1/2 transform -translate-y-1/2 text-white bg-[#337AB7] rounded-full p-2 text-xl"
              onClick={goToPrev}
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              className="absolute z-50 right-4 top-1/2 transform -translate-y-1/2 text-white bg-[#337AB7] rounded-full p-2 text-xl"
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

export default Knit;
