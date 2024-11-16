"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "./Header.css";
import Image from "next/image";
import logo from "../../../../public/assets/logo/nsinternational.png";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import location from "../../../../public/assets/icon/location23.png";
import chat from "../../../../public/assets/icon/chat1.png";

const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    {
      label: "Service",
      submenu: [
        { href: "/", label: "Research & Development" },
        { href: "/", label: "Sample Development" },
        { href: "/", label: "Merchandising" },
        { href: "/", label: "Fabric Sourcing" },
        { href: "/", label: "Production" },
        { href: "/", label: "QA and QC" },
        { href: "/", label: "Delivery and Shipment" },
        { href: "/", label: "Knitting" },
        { href: "/", label: "Embroidery" },
        { href: "/", label: "Garment Dyeing & Wash" },
        { href: "/", label: "Printing" },
        { href: "/", label: "Trimming & Accessories" },
      ],
    },
    { href: "/compliance", label: "Compliance & Ethics" },
    {
      label: "Products",
      href: "/products",
      submenu: [
        { href: "/products/woven", label: "Woven" },
        { href: "/products/knit", label: "Knit" },
        { href: "/products/sweater", label: "Sweater" },
        { href: "/products/homewear", label: "Homewear & Others" },
      ],
    },
    { href: "/contact", label: "Contact Us" },
  ];

  const navMenu = (
    <ul className="flex flex-col lg:flex-row gap-3 items-center">
      {menuItems.map((item, index) => (
        <li key={index} className="relative group">
          <Link
            href={item.href || "#"}
            className="flex gap-1 items-center mr-3"
          >
            {item.label}{" "}
            {item.submenu && <ChevronDownIcon className="h-5 w-5" />}
          </Link>
          {item.submenu && (
            <ul className="submenu absolute hidden group-hover:flex flex-col bg-white rounded shadow-lg p-2">
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link href={subItem.href} className="text-sm">
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <div className=" h-10 lg:h-20 z-10 pb-1 w-full bg-gray-100">
        <div className="w-full  lg:h-20 mx-auto items-center justify-between lg:flex gap-20 px-24">
          <Image src={logo} className="h-16 w-28" alt="logo" />
          {/* <h1>Header</h1> */}
          <div className="lg:flex hidden">{navMenu}</div>
          <div className="flex gap-6">
          <Image src={location} className="h-[40px] w-[30px] " alt="location Icon" />
          <Image src={chat} className="h-[40px] w-[40px]" alt="location Icon" />
            {/* <LocationOnOutlinedIcon sx={{ height: "40px", width: "40px" }} />

            <ForumOutlinedIcon sx={{ height: "40px", width: "40px" }} /> */}
          </div>
          {/* <Link href="/login">
            <h5 className="hidden lg:flex gap-2 items-center">
              Log In <FaArrowRightLong />
            </h5>
          </Link> */}
          <div className="lg:hidden px-2">
            <button className="p-1" onClick={toggleNavbar}>
              {isClick ? <GrClose size={20} /> : <GiHamburgerMenu size={20} />}
            </button>
          </div>
        </div>
        {isClick && (
          <div className="lg:hidden absolute left-0 w-full bg-white z-50 shadow-md pb-1">
            {navMenu}
            {/* <div className="flex justify-center p-2">
              <Link href="/login">
                <p className="flex gap-2 items-center">
                  Log In <FaArrowRightLong />
                </p>
              </Link>
            </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
