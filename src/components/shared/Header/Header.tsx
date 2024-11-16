"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "./Header.css";
import Image from "next/image";
import logo from "../../../../public/assets/logo/nsinternational.png";
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
    { href: "/complain", label: "Compliance & Ethics" },
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
    <ul className="flex flex-col lg:flex-row gap-3 lg:items-center ">
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
      <div className=" h-16 lg:h-20 z-10 py-1 w-full bg-gray-100">
        <div className="w-full  lg:h-20 items-center justify-between flex gap-20 px-5 lg:px-24 pt-[5px]">
          <Image src={logo} className="h-auto lg:h-16 w-[70px] lg:w-28" alt="logo" />
          {/* <h1>Header</h1> */}
          <div className="lg:flex hidden">{navMenu}</div>
          <div className="flex gap-6">
            <Image
              src={location}
              className="h-auto lg:h-[40px] w-[30px] "
              alt="location Icon"
            />
            <Image
              src={chat}
              className="h-auto lg:h-[40px] w-[40px]"
              alt="location Icon"
            />
          </div>

          <div className="lg:hidden px-2">
            <button className="p-1" onClick={toggleNavbar}>
              {isClick ? <GrClose size={20} /> : <GiHamburgerMenu size={20} />}
            </button>
          </div>
        </div>
        {isClick && (
          <div className="lg:hidden absolute left-0 w-full bg-gray-200 z-50 shadow-md pb-1 mt-[15px] h-full pl-5 pt-5">
            {navMenu}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
