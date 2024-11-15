// components/Footer.tsx
import Image from "next/image";
import image2 from "../../../../assets/images/decorate/bgimg.jpeg";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CallIcon from '@mui/icons-material/Call';

const Decorate = () => {
  return (
    <div className="text-black">
      {/* Section 1: Background Image Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={image2}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Overlay Content */}
        <div className="bg-black bg-opacity-65 py-[150px]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Decorated With Our Best Products
            </h2>
            <p className="text-gray-300 mb-8">
              Pellentesque dui diam, tincidunt sit amet ligula viverra sodales.
            </p>
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature Box 1 */}
              <div className="bg-gray-100 bg-opacity-25 p-6  text-white">
                <div className="flex justify-center mb-4">
                 <CalendarMonthIcon sx={{color:""}}/>
                </div>
                <h3 className="text-xl font-semibold mb-2">Appointment</h3>
                <p className="text-gray-400">Lorem ipsum dolor sit amet.</p>
              </div>
              {/* Feature Box 2 */}
              <div className="bg-gray-100 bg-opacity-25 p-6 text-white">
                <div className="flex justify-center mb-4">
                  <QuestionAnswerIcon/>
                </div>
                <h3 className="text-xl font-semibold mb-2">FAQs Page</h3>
                <p className="text-gray-400">Lorem ipsum dolor sit amet.</p>
              </div>
              {/* Feature Box 3 */}
              <div className="bg-gray-100 bg-opacity-25 p-6 text-white">
                <div className="flex justify-center mb-4">
                  <CallIcon/> 
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-400">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Decorate;
