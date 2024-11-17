"use client";

// import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import NSForm from "@/components/Forms/Form";
import NSInput from "@/components/Forms/Input";
import EmailIcon from "@mui/icons-material/Email";
import NSTextArea from "@/components/Forms/TextArea";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import img1 from "../../../assets/images/contact/R.jpg";
import img2 from "../../../assets/images/contact/c.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Container from "@/components/ui/Container/Container";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Banner from "@/components/shared/Banner/Banner";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Page = () => {
  const handleSubmit = () => {
    console.log();
  };
  return (
    <>
      <Banner title="Contact Us" />
      <Container>
        <div className="items-center justify-center content-center  mx-2 md:mx-0 lg:mx-auto my-10">
          {/* top part */}
          <div className="my-5 lg:my-10">
            <div className="lg:flex ">
              <div className="relative lg:w-1/3 h-64 bg-cover bg-center flex flex-col items-center justify-center content-center lg:p-5">
                <div className="absolute inset-0 -z-10 rounded-t-xl lg:rounded-l-xl">
                  <Image
                    src={img1}
                    alt="Background"
                    fill
                    className="rounded-t-xl lg:rounded-l-xl"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-60 rounded-t-xl lg:rounded-l-xl"/>

                <div className="absolute text-center text-white space-y-4">
                  <div className="mb-2">
                    <LocationOnIcon
                      sx={{
                        background: "#EAEAEA",
                        padding: "4px",
                        borderRadius: "5px",
                        height: "40px",
                        width: "40px",
                        color: "#1E3A8A",
                      }}
                    />
                  </div>
                  <h3 className="">PHILIPPINE OFFICE</h3>
                  <p className="mt-2">6021 Argao, Cebu, Philippines</p>
                  <p className="mt-2">eugenia@nsintbd.com</p>
                </div>
              </div>

              <div className="relative w-[300px] lg:w-1/3 bg-[#EAEAEA] h-[300px] -ml-3 lg:-mt-[22px]  rounded-lg flex flex-col items-center justify-center content-center p-5">
                <div className="absolute inset-0 opacity-50"/>
                <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="">
                    <LocationOnIcon
                      sx={{
                        background: "#1E3A8A",
                        padding: "4px",
                        borderRadius: "5px",
                        height: "40px",
                        width: "40px",
                        color: "white",
                      }}
                    />
                  </div>
                  <h3 className="">DHAKA OFFICE</h3>
                  <p className="mt-2">
                    House-376/5, East Kazipara, Mirpur, Dhaka-1216
                  </p>
                  <p className="mt-2">info@nsintbd.com</p>
                </div>
              </div>

              <div className="relative lg:w-1/3 h-64 bg-cover bg-center flex flex-col items-center justify-center content-center p-5">
                <div className="absolute inset-0 -z-10 ">
                  <Image
                    src={img2}
                    alt="Background"
                    fill
                    className="rounded-b-xl lg:rounded-r-xl"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-70 rounded-b-xl lg:rounded-r-xl"/>
                <div className="absolute text-center text-white space-y-4">
                  <div className="">
                    <LocationOnIcon
                      sx={{
                        background: "#EAEAEA",
                        padding: "4px",
                        borderRadius: "5px",
                        height: "40px",
                        width: "40px",
                        color: "#1E3A8A",
                      }}
                    />
                  </div>

                  <h3 className="">FRANCE OFFICE</h3>
                  <p className="mt-2">
                    1 Rue Sarrail, 93800 Epinay-sur-Seine, France.
                  </p>
                  <p className="mt-2">m.ziani@nsintbd.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* middle part */}
          <div className="lg:max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:gap-10 mx-auto  px-1 md:px-8 lg:px-10 py-1 md:py-5 lg:py-5  text-gray-800  justify-center ">
            <div className="p-2 lg:p-12 shadow-lg border">
              <NSForm onSubmit={handleSubmit}>
                <div className="space-y-3 lg:space-y-8">
                  <div>
                    <NSInput
                      name="name"
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
                      name="phone"
                      label="Phone Number"
                      size="medium"
                      fullWidth
                    />
                  </div>
                  <div>
                    <NSInput
                      name="cname"
                      label="Company Name"
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
                    <NSTextArea
                      name="textarea"
                      minRows={5}
                      placeholder="Write Your Message"
                      sx={{ padding: "4px" }}
                    />
                  </div>

                  <Button size="large">Send Message</Button>
                </div>
              </NSForm>
            </div>

            <div className="lg:w-full">
              <div className="space-y-6 mt-10">
                <div>
                  <h5 className="border-b-4 border-blue-700 inline-block pb-2">
                    Contact Us
                  </h5>
                </div>
                <h1 className=" text-gray-800">Get In Touch</h1>
                <p className="text-lg text-gray-600 text-justify">
                  We&apos;re always here to assist you with any questions or
                  support you need. Feel free to reach out to us through the
                  following options.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-blue-700 text-white rounded-full">
                      <LocationCityIcon />
                    </div>
                    <div>
                      <h4 className="font-bold">Office Location</h4>
                      <p className="text-sm text-gray-600">
                        House-376/5, East Kazipara, Mirpur, Dhaka, Bangladesh.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mt-[10px]">
                    <div className="p-4 bg-blue-700 text-white rounded-full">
                      <EmailIcon />
                    </div>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-sm text-gray-600">
                        contact@company.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-blue-700 text-white rounded-full">
                      <LocalPhoneIcon />
                    </div>
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <h5 className="text-sm text-gray-600">
                        +880 1917-847198
                      </h5>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mt-[10px]">
                    <div className="p-4 bg-blue-700 text-white rounded-full">
                      <WhatsAppIcon />
                    </div>
                    <div>
                      <h4 className="font-bold">Whatsapp</h4>
                      <p className="text-sm text-gray-600">+880 1917-847198</p>
                    </div>
                  </div>
                </div>

                <hr className="my-8 border-t-2 border-gray-300" />

                {/* Social Media  */}
                <h3 className=" text-gray-800">Our Social Media</h3>
                <div className="flex flex-wrap justify-start gap-2 mt-4 space-x-1 ">
                  {/* fb */}
                  <Link href="https://facebook.com" className="">
                    <button className="p-2 bg-blue-600 text-white rounded-full">
                      <FacebookIcon />
                    </button>
                  </Link>

                  {/* x */}
                  <Link href="https://instagram.com" className="">
                    <button className="p-2 bg-black text-white rounded-full">
                      <XIcon />
                    </button>
                  </Link>

                  {/* youtube */}
                  <Link href="https://twitter.com" className="">
                    <button className="p-2 bg-red-600 text-white rounded-full">
                      <YouTubeIcon />
                    </button>
                  </Link>

                  {/* instagram */}
                  <Link href="https://twitter.com" className="">
                    <button className="p-2 bg-[#E1306C] text-white rounded-full">
                      <InstagramIcon />
                    </button>
                  </Link>

                  {/* LinkedIn */}
                  <Link href="https://twitter.com" className="">
                    <button className="p-2 bg-[#0A66C2] text-white rounded-full">
                      <LinkedInIcon />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="shadow-md rounded border mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.1518268683578!2d90.42238324968673!3d23.820644750680454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700ff992a63%3A0xbdcb1d9ae66b2d5c!2sSoftypi%20Technology!5e0!3m2!1sen!2sbd!4v1711790838610!5m2!1sen!2sbd"
          className="w-full h-64 md:h-[500px] lg:h-[600px]"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Page;
