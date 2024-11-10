import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialMedia = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        <div className="bg-white p-5 rounded shadow-md">
          <div className="flex items-center justify-center gap-2">
            <FacebookIcon style={{ fontSize: "30px" }} />
            <p className="text-sm">Like us on facebook</p>
          </div>
          <h4 className="text-center">30,000</h4>
        </div>
        <div className="bg-white p-5 rounded shadow-md">
          <div className="flex items-center justify-center gap-2">
            <TwitterIcon style={{ fontSize: "30px" }} />
            <p className="text-sm">Follow us on twitter</p>
          </div>
          <h4 className="text-center">1,11,000</h4>
        </div>
        <div className="bg-white p-5 rounded shadow-md">
          <div className="flex items-center justify-center gap-2">
            <InstagramIcon style={{ fontSize: "30px" }} />
            <p className="text-sm">Follow us on instagram</p>
          </div>
          <h4 className="text-center">19,000</h4>
        </div>
        <div className="bg-white p-5 rounded shadow-md">
          <div className="flex items-center justify-center gap-2">
            <LinkedInIcon style={{ fontSize: "30px" }} />
            <p className="text-sm">Follow us on linked</p>
          </div>
          <h4 className="text-center">45,000</h4>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
