"use client";

import "./style.css";
import Container from "@/components/ui/Container/Container";
import { Button } from "@mui/material";
import NSInput from "@/components/Forms/Input";
import NSForm from "@/components/Forms/Form";
import NSTextArea from "@/components/Forms/TextArea";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
// import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Page = () => {
  const handleSubmit = () => {
    console.log();
  };
  return (
    <>
      <Container>
        <div className="items-center justify-center content-center  mx-2 md:mx-0 lg:mx-auto">
          {/* email */}
          {/* <div className="md:w-64 lg:w-64 mx-auto py-4 md:py-8 lg:py-10">
            <h3 className="text-xl   border-y-4 text-center py-1 md:py-3 lg:py-3">
              Send Us a Email
            </h3>
          </div> */}

          <div className="grid lg:max-w-screen-xl grid-cols-1 lg:gap-5 mx-auto md:grid-cols-2 px-1 md:px-8 lg:px-10 py-1 md:py-5 lg:py-5  text-gray-800  justify-center ">
            <div className="p-12 shadow-lg">
              <NSForm onSubmit={handleSubmit}>
                {/* <NSForm onSubmit={handleSubmit} className="space-y-6 border-[1px] shadow-md p-2"> */}
                <div className="space-y-8">
                  <div>
                    <NSInput
                      name="fname"
                      label="Full Name"
                      size="medium"
                      fullWidth
                    />
                  </div>
                  <div>
                    <NSInput
                      name="email"
                      label="Email"
                      size="medium"
                      fullWidth
                    />
                  </div>
                  <div>
                    <NSInput
                      name="sub"
                      label="Subject"
                      size="medium"
                      fullWidth
                    />
                  </div>

                  <div>
                    <NSTextArea name="textarea" minRows={5} />
                  </div>

                  <Button size="large">Send Message</Button>
                </div>
              </NSForm>
            </div>
            <div className="lg:w-full">
              <div className="space-y-8">
                {/* Contact Us Title with Underline */}
                <div>
                  <h5 className="border-b-4 border-indigo-600 inline-block pb-2">
                    Contact Us
                  </h5>
                </div>

                {/* "Get In Touch" Title */}
                <h2 className=" text-gray-800">Get In Touch</h2>

                {/* Paragraph */}
                <p className="text-lg text-gray-600">
                  We&apos;re always here to assist you with any questions or
                  support you need. Feel free to reach out to us through the
                  following options.
                </p>

                {/* Two Part Section */}
                <div className="flex gap-8 space-y-2">
                  <div className="space-y-10">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-indigo-600 text-white rounded-full">
                        <LocationCityIcon />
                      </div>
                      <div>
                        <h4 className="  text-xl">Office Location</h4>
                        <p className="text-gray-600">
                          456 Office Park, Building 12, City, Country
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-indigo-600 text-white rounded-full">
                        <LocalPhoneIcon />
                      </div>
                      <div>
                        <h4 className="  text-xl">Phone</h4>
                        <h5 className="text-sm text-gray-600">+1 800 123 4567</h5>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-10">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-indigo-600 text-white rounded-full">
                        <ApartmentIcon />
                      </div>
                      <div>
                        <h4 className="  text-xl">Address</h4>
                        <p className="text-sm text-gray-600">
                          123 Business Ave, Suite 456, City, Country
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mt-[16px]">
                      <div className="p-4 bg-indigo-600 text-white rounded-full">
                        <EmailIcon />
                      </div>
                      <div>
                        <h4 className="  text-xl">Email</h4>
                        <p className="text-sm text-gray-600">contact@company.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <hr className="my-8 border-t-2 border-gray-300" />

                {/* Our Social Media Title */}
                <h3 className="text-3xl font-bold text-gray-800">
                  Our Social Media
                </h3>

                {/* Social Icons */}
                <div className="flex space-x-6 mt-4">
                  <Link
                    href="https://facebook.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FacebookIcon />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    className="text-pink-600 hover:text-pink-800"
                  >
                    <XIcon />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="text-red-400 hover:text-red-600"
                  >
                    <YouTubeIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="shadow-md rounded border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.1518268683578!2d90.42238324968673!3d23.820644750680454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700ff992a63%3A0xbdcb1d9ae66b2d5c!2sSoftypi%20Technology!5e0!3m2!1sen!2sbd!4v1711790838610!5m2!1sen!2sbd"
          className="map w-full h-[500px] "
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Page;
