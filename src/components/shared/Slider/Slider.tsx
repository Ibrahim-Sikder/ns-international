"use client"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../../../../public/assets/doctorsCare/slider/2.jpg";
import slide2 from "../../../../public/assets/doctorsCare/slider/6.jpg";
import slide3 from "../../../../public/assets/doctorsCare/slider/3.jpg";
import slide4 from "../../../../public/assets/doctorsCare/slider/4.jpg";
import slide5 from "../../../../public/assets/doctorsCare/slider/5.jpg";
import Image from 'next/image';

const schools = [
  {
    name: "Doctors Care Model School",
    est: "Est. 2021",
    img: slide1,
  },
  {
    name: "Doctors Care Model School ",
    est: "Est. 2021",
    img: slide2,
  },
  {
    name: "Doctors Care Model School",
    est: "Est. 2021",
    img: slide3,
  },
  {
    name: "Doctors Care Model School",
    est: "Est. 2021",
    img: slide4,
  },
  {
    name: "Doctors Care Model School",
    est: "Est. 2021",
    img: slide5,
  },
];
const Slider = () => {
  return (
    <div className="flex justify-center align-middle items-center w-auto">
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        {/* first slide */}
        {schools.map((item) => (
          <div className="h-[500px]" key={item.name}>

            <Image src={item.img}
              alt="Image 1" className="h-52 md:h-full lg:h-auto w-auto" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center lg:pl-0">
              <h2 className="text-lg lg:text-4xl font-bold lg:mb-4 text-white">
                {item.name}
              </h2>
              <p className="text-white mb-3 text-[10px] lg:text-base">
                {item.est}
              </p>
            </div>
          </div>))}
      </Carousel>
    </div>
  );
};

export default Slider;
