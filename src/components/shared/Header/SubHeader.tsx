import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlinePushPin, MdOutlineWatchLater } from "react-icons/md";

const SubHeader = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex justify-between bg-[#222429] text-white px-5 lg:px-24 border-b border-gray-600 py-5">
        <div className="flex items-center gap-2">
          <MdOutlinePushPin className="text-xl text-blue-600" />
          <span className="text-sm text-gray-400">
            Efficiency | Quality | Sustainability
          </span>
        </div>
        <div>
          <ul className="flex items-center gap-5">
            <li className="flex items-center gap-5">
              <MdOutlineWatchLater className="text-lg text-blue-600" />
              <span className="text-sm border-r pr-5 text-gray-400">
                Always Open
              </span>
            </li>
            <li className="text-sm text-gray-400">Follow us:</li>
            <li className="hover:text-blue-600 hover:cursor-pointer">
              <FaLinkedinIn />
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer">
              <FaInstagram />
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer">
              <FaFacebook />
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer">
              <FaTwitter />
            </li>
            <li className="hover:text-blue-600 hover:cursor-pointer">
              <FaPinterest />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
