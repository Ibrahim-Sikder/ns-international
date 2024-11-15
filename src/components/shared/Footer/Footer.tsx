import Image from "next/image";
import image2 from "../../../assets/images/footer/bgiamge.jpg";
// import logo from "../../../assets/images/footer/logo-(1).png";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
    <div className="">
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Image src={image2} alt="Background" fill className="" priority />
        </div>

        <div className="bg-black bg-opacity-10 py-16">
          <div className="py-12  text-gray-400">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                {/* <Image src={logo} alt="Background"  className="w-[180px] h-[80px]"  /> */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  NS International
                </h3>
                <p className="mb-4">Comitted to Best Quality Product</p>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="p-1 rounded-full border border-gray-500"
                  >
                    <FacebookIcon
                      sx={{
                        color: "white",
                        "&:hover": { color: "#1877F2" },
                      }}
                    />
                  </Link>

                  <Link
                    href="#"
                    className="p-1 rounded-full border border-gray-500"
                  >
                    <XIcon
                      sx={{
                        color: "white",
                        "&:hover": { color: "gray" },
                      }}
                    />
                  </Link>

                  <Link
                    href="#"
                    className="p-1 rounded-full border border-gray-500"
                  >
                    <InstagramIcon
                      sx={{
                        color: "white",
                        "&:hover": { color: "#E1306C" },
                      }}
                    />
                  </Link>

                  <Link
                    href="#"
                    className="p-1 rounded-full border border-gray-500"
                  >
                    <YouTubeIcon
                      sx={{ color: "white", "&:hover": { color: "red" } }}
                    />
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Visit Us
                </h4>
                <p>457 Morningview Lane, New York</p>
                <p>07:00 AM - 18:00 PM</p>
                <h4 className="text-xl font-semibold text-white my-4">
                Contact Us
                </h4>
                <p>+1 (234) 567 890</p>
                <p>example@mail.com</p>
              </div>

              <div>
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
                    <Link
                      href="/about"
                      className=" text-gray-400 hover:text-white"
                    >
                      About
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
                      href="/projects"
                      className="text-gray-400 hover:text-white"
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
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

            <div className="mt-8  pt-6">
              <div className="flex justify-between mx-auto max-w-7xl border-t border-gray-700">
                <p className="pt-2">
                  Copyright © 2024{" "}
                  <span className="text-blue-400">NS International</span>. All
                  Rights Reserved
                </p>
                <div className="flex items-center pt-2">
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
