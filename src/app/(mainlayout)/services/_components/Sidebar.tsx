"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const currentRoute = usePathname();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/services")
      .then((response) => response.json())
      .then((data) => {
        setData(data?.data?.services || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="w-full lg:w-96 space-y-3">
      {data.map((item: { _id: string; title: string }) => {
        // Dynamically generate the route according to the title
        const itemRoute = `/services/${encodeURIComponent(item?.title)}`;
        const isActive = currentRoute === itemRoute;

        return (
          <Link
            key={item?._id}
            href={itemRoute}
            className={`bg-gray-100 flex items-center justify-between px-4 py-3 ${
              isActive ? "bg-red-500 text-white" : ""
            }`}
          >
            {item?.title}
            <IoIosArrowForward />
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
