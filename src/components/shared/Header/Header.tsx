"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../../../../public/assets/logo/nsinternational.png";
import location from "../../../../public/assets/icon/location23.png";
import chat from "../../../../public/assets/icon/chat1.png";
import "./Header.css";

const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const currentPath = usePathname(); // Get the current path

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const closeSidebar = () => {
    setIsClick(false);
  };

  const toggleAccordion = (label: string) => {
    setActiveAccordion((prev) => (prev === label ? null : label));
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    {
      href: "/services",
      label: "Services",
      submenu: [
        { href: "/services/research", label: "Research & Development" },
        { href: "/services/development", label: "Sample Development" },
        { href: "/services/merchandising", label: "Merchandising" },
        { href: "/services/fab-sourcing", label: "Fabric Sourcing" },
        { href: "/services/production", label: "Production" },
        { href: "/services/qa-qc", label: "QA and QC" },
        { href: "/services/delivery", label: "Delivery and Shipment" },
        { href: "/services/knitting", label: "Knitting" },
        { href: "/services/embroidery", label: "Embroidery" },
        { href: "/services/dyeing-wash", label: "Garment Dyeing & Wash" },
        { href: "/services/printing", label: "Printing" },
        { href: "/services/trimming", label: "Trimming & Accessories" },
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
    <ul className="flex flex-col lg:flex-row gap-3 lg:items-center">
      {menuItems.map((item, index) => (
        <li key={index} className="relative group">
          {/* Large Screen Menu */}
          <div className="hidden lg:block">
            <Link
              href={item.href || "#"}
              className={`flex gap-1 items-center mr-3 pr-5 ${
                currentPath === item.href ? "text-blue-500 font-bold" : ""
              }`}
              onClick={closeSidebar}
            >
              {item.label}
            </Link>
            {item.submenu && (
              <ul className="submenu absolute hidden group-hover:flex flex-col bg-white rounded shadow-lg p-2">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={subItem.href}
                      className={`text-sm ${
                        currentPath === subItem.href
                          ? "text-blue-500 font-bold"
                          : ""
                      }`}
                      onClick={closeSidebar}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Small Screen Accordion */}
          <div className="lg:hidden">
            {item.submenu ? (
              <Accordion
                disableGutters
                expanded={activeAccordion === item.label}
                onChange={() => toggleAccordion(item.label)}
                sx={{ boxShadow: "none" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${index}-content`}
                  id={`panel-${index}-header`}
                >
                  <Typography>{item.label}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className="flex flex-col">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-1">
                        <Link
                          href={subItem.href}
                          className={`text-sm block ${
                            currentPath === subItem.href
                              ? "text-blue-500 font-bold"
                              : ""
                          }`}
                          onClick={closeSidebar}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ) : (
              <Link
                href={item.href || "#"}
                className={`block py-2 px-4 ${
                  currentPath === item.href ? "text-blue-500 font-bold" : ""
                }`}
                onClick={closeSidebar}
              >
                {item.label}
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="h-16 lg:h-20 z-10 py-1 w-full bg-gray-100">
      <div className="w-full lg:h-20 items-center justify-between flex gap-20 px-5 lg:px-24 pt-[5px]">
        <Image src={logo} className="h-auto lg:h-16 w-[70px] lg:w-28" alt="logo" />
        <div className="lg:flex hidden">{navMenu}</div>
        <div className="flex gap-6">
          <Image
            src={location}
            className="h-auto lg:h-[40px] w-[30px]"
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
        <div className="lg:hidden absolute left-0 w-full bg-white z-50 shadow-md pb-1 mt-[15px] h-full pl-5 pt-5">
          {navMenu}
        </div>
      )}
    </div>
  );
};

export default Header;
