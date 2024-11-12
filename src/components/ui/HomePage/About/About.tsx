import Image from "next/image";
import img1 from "../../../../../public/assets/slider/s1.jpg";

const About = () => {
  return (
    <div className="bg-gray-100 pb-2">
    <div className=" w-[1200px] mx-auto  flex space-x-20 mb-10">
      {/* left side */}
      <div className="w-[500px] p-6 -mt-20 z-50 bg-white">
        <div className="flex-1 py-10">
          <h4 className=" text-gray-800 mb-2">Who We Are</h4>
          <h2 className=" text-gray-800 mb-2">
            The Leading Apparel Manufacturer and Exporter
          </h2>
          <p className="text-gray-600 text-justify mb-4">
            NS Internation is a leading multinational apparel buying hub,
            sourcing company, manufacturer and committed exporter on woven,
            denim, knit, sweater etc. We produce best quality garments for all
            of our internationally reputed buyers/importers and departmental
            chain stores from US, RU, EU, etc. markets. Since our establishment,
            we have developed long term trade relationships with most of our
            potential customers & earned trust in their respective markets.
          </p>

          <button className="underline text-blue-400 hover:text-black">
            View More
          </button>
        </div>

        <div className="overflow-hidden">
          <Image src={img1} alt="Image" className="object-cover" />
        </div>
      </div>

      {/* right side */}
      <div className="w-[400px] mt-16 ">
        <h4 className=" text-gray-800 mb-2">NS International</h4>
        <h3 className="font-semibold text-gray-800 mb-4">
          We are in apparel industries
        </h3>

        <div className="grid grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-gray-100 p-2 border border-gray-300 text-center">
            <div className="text-3xl text-blue-500 mb-2">💡</div>
            <div className="text-xl font-bold text-gray-800 mb-1">1</div>
            <p className="text-gray-600">Description for card 1</p>
          </div>

          {/* 2 */}
          <div className="bg-gray-100 p-2 border border-gray-300   text-center">
            <div className="text-3xl text-blue-500 mb-2">🚀</div>
            <div className="text-xl font-bold text-gray-800 mb-1">2</div>
            <p className="text-gray-600">Description for card 2</p>
          </div>

          {/* 3 */}
          <div className="bg-gray-100 p-2 border border-gray-300  text-center">
            <div className="text-3xl text-blue-500 mb-2">⚙️</div>
            <div className="text-xl font-bold text-gray-800 mb-1">3</div>
            <p className="text-gray-600">Description for card 3</p>
          </div>

          {/* 4 */}
          <div className="bg-gray-100 p-2 border border-gray-300  text-center">
            <div className="text-3xl text-blue-500 mb-2">🌱</div>
            <div className="text-xl font-bold text-gray-800 mb-1">4</div>
            <p className="text-gray-600">Description for card 4</p>
          </div>

          {/* 5 */}
          <div className="bg-gray-100 p-2 border border-gray-300  text-center">
            <div className="text-3xl text-blue-500 mb-2">🎨</div>
            <div className="text-xl font-bold text-gray-800 mb-1">5</div>
            <p className="text-gray-600">Description for card 5</p>
          </div>

          {/* 6 */}
          <div className="bg-gray-100 p-2 border border-gray-300  text-center">
            <div className="text-3xl text-blue-500 mb-2">🎯</div>
            <div className="text-xl font-bold text-gray-800 mb-1">6</div>
            <p className="text-gray-600">Description for card 6</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
