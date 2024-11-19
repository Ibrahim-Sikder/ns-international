// components/Footer.tsx
import Image from "next/image";
import image2 from "../../../../assets/images/decorate/bgimg.jpeg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";

const Decorate = () => {
  const features = [
    {
      icon: <CalendarMonthIcon sx={{ color: "white" }} />,
      title: "Appointment",
      description: "Always Open to You.",
      link: "#",
    },
    {
      icon: <QuestionAnswerIcon sx={{ color: "white" }} />,
      title: "FAQ",
      description: "Frequently Ask Any Types of Question.",
      link: "/faq",
    },
    {
      icon: <CallIcon sx={{ color: "white" }} />,
      title: "24/7 Support",
      description: "Any Day, Any Time.",
      link: "#",
    },
  ];

  return (
    <div className="text-black">
      <div className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src={image2}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="bg-black bg-opacity-65 py-[150px]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Decorated With Our Best Products
            </h2>
            <p className="text-gray-300 mb-8">
              Best Quality Product, Give Good Experience. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up"
     data-aos-duration="3000">
              {features.map((feature, index) => (
                <div key={index}>
                  <Link href={feature.link}>
                    <div className="bg-gray-100 bg-opacity-25 p-6 text-white">
                      <div className="flex justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decorate;
