// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import Container from "@/components/ui/Container/Container";
// import Banner from "@/components/shared/Banner/Banner";


// type Product = {
//   _id: string;
//   title: string;
//   category: string[];
//   images: string[];
// };

// type ApiResponse = {
//   data: {
//     services: Product[];
//   };
// };

// const CategoryPage = () => {
//   const { category } = useParams<{ category: string }>();
//   const [data, setData] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/v1/services")
//       .then((response) => response.json() as Promise<ApiResponse>)
//       .then((data) => {
//         setData(data?.data?.services || []);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   console.log(data);

//   useEffect(() => {
//     if (category && data.length > 0) {
//       const decodedCategory = decodeURIComponent(category);

      
//       const filtered = data.filter((product) =>
//         product.category.some(
//           (cat) => cat.toLowerCase() === decodedCategory.toLowerCase()
//         )
//       );
//       setFilteredProducts(filtered);
//     }
//   }, [category, data]);

//   if (loading) {
//     return <div className="text-center py-20">Loading...</div>;
//   }

//   return (
//     <div className="bg-gray-100">
//       <Banner title={`Category: ${category}`} />
//       <Container className="py-20">
//         <h1 className="text-3xl font-bold my-10 text-center capitalize">
//           {category}
//         </h1>
//         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {filteredProducts.map((product) =>
//             product?.images?.slice(0,1).map((image, index) => (
//               <div key={index} className="relative">
//                 <Image
//                   src={image}
//                   alt={product.title}
//                   width={300}
//                   height={300}
//                   className="w-full h-auto object-cover rounded-lg shadow-md"
//                 />
//               </div>
//             ))
//           )}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default CategoryPage;
