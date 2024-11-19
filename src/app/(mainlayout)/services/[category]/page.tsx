"use client";

import Banner from "@/components/shared/Banner/Banner";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "../_components/Sidebar";

type Product = {
  _id: string;
  title: string;
  sub_title: string;
  description: string;
  category: string[];
  images: string[];
};

type ApiResponse = {
  data: {
    services: Product[];
  };
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [data, setData] = useState<Product[]>([]);
  const [filteredService, setFilteredService] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/services");
        const result = (await response.json()) as ApiResponse;
        setData(result?.data?.services || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    if (category && data.length > 0) {
      const decodedCategory = decodeURIComponent(category);

      // Find the service matching the category
      const service = data.find((product) => product.title === decodedCategory);

      setFilteredService(service || null);
    }
  }, [category, data]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!filteredService) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">No data found !</p>
      </div>
    );
  }

  return (
    <>
      <Banner title={category} />
      <Container className="my-20">
        <div className="lg:flex gap-10">
          <Sidebar />
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-3">{filteredService.title}</h2>
            <p className="mb-3">{filteredService.sub_title}</p>
            <Image
              src={filteredService.images[0]}
              alt={filteredService.title}
              className="w-full max-h-[500px] object-cover my-10"
              width={600}
              height={400}
            />
            <p className="text-justify">{filteredService.description}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CategoryPage;
