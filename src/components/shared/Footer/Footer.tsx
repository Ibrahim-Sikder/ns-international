import Image from "next/image";
import image2 from "../../../assets/images/footer/bgiamge.jpg";
// import logo from "../../../assets/images/footer/logo-(1).png";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <>
      <div className="">
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <Image src={image2} alt="Background" fill className="" priority />
          </div>

          <div className="bg-black bg-opacity-10 py-8 lg:py-16">
            <div className="py-5 lg:py-12  text-gray-400">
              <div className="lg:max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center lg:text-start">
                  {/* <Image src={logo} alt="Background"  className="w-[180px] h-[80px]"  /> */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    NS International
                  </h3>
                  <p className="mb-4">Efficiency | Quality | Sustainability</p>
                  <div className="flex gap-2 justify-center lg:justify-start">
                    <Link
                      href="#"
                      className="p-2 border border-gray-500 group"
                    >
                      <FacebookIcon
                        sx={{
                          color: "gray",
                          "&:hover": { color: "#1877F2" },
                        }}
                        className="group-hover:text-[#1877F2]"
                      />
                    </Link>

                    <Link
                      href="#"
                      className="p-2 border border-gray-500 group"
                    >
                      <XIcon
                        sx={{
                          color: "gray",
                          "&:hover": { color: "#1DA1F2" },
                        }}
                        className="group-hover:text-[#1DA1F2]"
                      />
                    </Link>

                    <Link
                      href="#"
                      className="p-2 border border-gray-500 group"
                    >
                      <InstagramIcon
                        sx={{
                          color: "gray",
                          "&:hover": { color: "#E4405F" },
                        }}
                        className="group-hover:text-[#E4405F]"
                      />
                    </Link>

                    <Link
                      href="#"
                      className="p-2 border border-gray-500 group"
                    >
                      <YouTubeIcon
                        sx={{
                          color: "gray",
                          "&:hover": { color: "#FF0000" },
                        }}
                        className="group-hover:text-[#FF0000]"
                      />
                    </Link>

                    <Link
                      href="#"
                      className="p-2 border border-gray-500 group"
                    >
                      <PinterestIcon
                        sx={{
                          color: "gray",
                          "&:hover": { color: "#E60023" },
                        }}
                        className="group-hover:text-[#E60023]"
                      />
                    </Link>
                  </div>

                </div>

                <div className="text-center lg:text-start">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Products
                  </h4>
                  <ul className="flex flex-col space-y-2">
                    <li>
                      <Link
                        href="/products/woven"
                        className="text-gray-400 hover:text-white"
                      >
                        Woven
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/knit"
                        className="text-gray-400 hover:text-white"
                      >
                        Knit
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/sweater"
                        className="text-gray-400 hover:text-white"
                      >
                        Sweater
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/Homeweare & Others"
                        className="text-gray-400 hover:text-white"
                      >
                        Homewear & Other
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="text-center lg:text-start">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Explore
                  </h4>
                  <ul className="flex flex-col space-y-2 ">
                    <li>
                      <Link href="/" className="text-gray-400 hover:text-white">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-400 hover:text-white">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className=" text-gray-400 hover:text-white"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="text-gray-400 hover:text-white"
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white"
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/compliance"
                        className="text-gray-400 hover:text-white"
                      >
                        compliance Compliance & Ethics
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="text-center lg:text-start">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Support
                  </h4>
                  <ul className="flex flex-col space-y-2">
                    <li>
                      <Link
                        href="/help-center"
                        className="text-gray-400 hover:text-white"
                      >
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/career"
                        className="text-gray-400 hover:text-white"
                      >
                        Career
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy-policy"
                        className="text-gray-400 hover:text-white"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="text-gray-400 hover:text-white"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <div className="lg:flex justify-between mx-auto max-w-7xl border-t border-gray-700 pt-8">
                  <p className="text-sm lg:text-base text-center lg:text-start">
                    Copyright © 2024{" "}
                    <span className="text-blue-400">NS International</span>. All
                    Rights Reserved
                  </p>
                  <div className="flex items-center text-sm lg:text-base justify-center">
                    <Link
                      href="/privacy-policy"
                      className="text-gray-400 hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                    |
                    <Link
                      href="/terms"
                      className="text-gray-400 hover:text-white "
                    >
                      Terms & Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
