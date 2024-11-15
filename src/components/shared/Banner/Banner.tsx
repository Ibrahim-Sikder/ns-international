import Image from "next/image";
import bannerImage from "../../../../public/assets/banner/banner.jpg";

type BannerProps = {
  title: string;
};

const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <div className="relative flex items-center justify-center h-64">
      {/* Background Image */}
      <Image
        src={bannerImage}
        alt="Banner Background"
        layout="fill"
        // objectFit="cover"
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Title */}
      <h1 className="relative z-20 text-4xl font-bold text-white">{title}</h1>
    </div>
  );
};

export default Banner;
