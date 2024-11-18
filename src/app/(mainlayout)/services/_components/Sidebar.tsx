"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const currentRoute = usePathname();

  return (
    <div className="w-full lg:w-96 space-y-3">
      <Link
        href="/services/research"
        className={`bg-blue-400 flex items-center justify-between px-4 py-4 ${
          currentRoute === "/services/research" ? "bg-[#02ADFF] text-white" : ""
        }`}
      >
        <span>Research & Development</span>
        <IoIosArrowForward />
      </Link>

      <Link
        href="/services/development"
        className={`bg-blue-400 flex items-center justify-between px-4 py-3 ${
          currentRoute === "/services/development"
            ? "bg-[#02ADFF] text-white"
            : ""
        }`}
      >
        <span>Sample Development</span>
        <IoIosArrowForward />
      </Link>

      <Link
        href="/services/merchandising"
        className={`bg-gray-100 flex items-center justify-between px-4 py-3 ${
          currentRoute === "/services/merchandising"
            ? "bg-[#02ADFF] text-white"
            : ""
        }`}
      >
        <span>Merchandising</span>
        <IoIosArrowForward />
      </Link>

      <Link
        href="/services/fab-sourcing"
        className={`bg-gray-100 flex items-center justify-between px-4 py-3 ${
          currentRoute === "/services/fab-sourcing"
            ? "bg-[#02ADFF] text-white"
            : ""
        }`}
      >
        <span>Fabric Sourcing</span>
        <IoIosArrowForward />
      </Link>

      <Link
        href="/services/production"
        className={`bg-gray-100 flex items-center justify-between px-4 py-3 ${
          currentRoute === "/services/production"
            ? "bg-[#02ADFF] text-white"
            : ""
        }`}
      >
        <span>Production</span>
        <IoIosArrowForward />
      </Link>
      <Link
        href="/services/qa-qc"
        className={`bg-gray-100 flex items-center justify-between px-4 py-3 ${
          currentRoute === "/services/qa-qc" ? "bg-[#02ADFF] text-white" : ""
        }`}
      >
        <span>QA and QC</span>
        <IoIosArrowForward />
      </Link>
      <Link
        href="/services/delivery"
        className={`bg-gray-100 flex items-center justify-between px-4 py-3 ${
          currentRoute === "/services/delivery" ? "bg-[#02ADFF] text-white" : ""
        }`}
      >
        <span>Delivery and Shipment</span>
        <IoIosArrowForward />
      </Link>
      <Link
        href="/services/knitting"
        className={`bg-gray-100 flex items-center justify-between px-4 py-3 ${
          currentRoute === "/services/knitting" ? "bg-[#02ADFF] text-white" : ""
        }`}
      >
        <span>Knitting</span>
        <IoIosArrowForward />
      </Link>
      <Link
        href="/services/embroidery"
        className={`bg-gray-100 flex items-center justify-between px-4 py-3 ${
          currentRoute === "/services/embroidery"
            ? "bg-[#02ADFF] text-white"
            : ""
        }`}
      >
        <span>Embroidery</span>
        <IoIosArrowForward />
      </Link>
      <Link
        href="/services/dyeing-wash"
        className={`bg-gray-100 flex items-center justify-between px-4 py-3 ${
          currentRoute === "/services/dyeing-wash"
            ? "bg-[#02ADFF] text-white"
            : ""
        }`}
      >
        <span>Garment Dyeing & Wash</span>
        <IoIosArrowForward />
      </Link>
      <Link
        href="/services/printing"
        className={`bg-gray-100 flex items-center justify-between px-4 py-3 ${
          currentRoute === "/services/printing" ? "bg-[#02ADFF] text-white" : ""
        }`}
      >
        <span>Printing</span>
        <IoIosArrowForward />
      </Link>
      <Link
        href="/services/trimming"
        className={`bg-gray-100 flex items-center justify-between px-4 py-3 ${
          currentRoute === "/services/trimming" ? "bg-[#02ADFF] text-white" : ""
        }`}
      >
        <span>Trimming & Accessories</span>
        <IoIosArrowForward />
      </Link>
    </div>
  );
};

export default Sidebar;
