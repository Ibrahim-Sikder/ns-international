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

  console.log(data);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="w-full lg:w-96 space-y-3">
      {data.map((item: { _id: string; title: string }) => (
        <Link
          key={item?._id}
          href={`/services/${item?.title}`}
          className={`bg-gray-100 flex items-center justify-between px-4 py-3 ${
            currentRoute === "/services/trimming"
              ? "bg-[#02ADFF] text-white"
              : ""
          }`}
        >
          {item?.title}
          <IoIosArrowForward />
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
