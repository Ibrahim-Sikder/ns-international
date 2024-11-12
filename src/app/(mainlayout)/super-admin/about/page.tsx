import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      {/* Part 1 */}
      <div className="flex p-6">
        {/* Left side of part 1 */}
        <div className="flex-1 pr-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Card Heading
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet accumsan arcu.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Click Me
          </button>
        </div>

        {/* Right side of part 1 (image) */}
        <div className="flex-none w-48 h-48 bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="https://via.placeholder.com/150"
            alt="Image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Part 2 */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Mini Cards Section
        </h3>

        <div className="grid grid-cols-3 gap-4">
          {/* Mini Card 1 */}
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-3xl text-blue-500 mb-2">💡</div>
            <div className="text-xl font-bold text-gray-800 mb-1">1</div>
            <p className="text-gray-600">Description for card 1</p>
          </div>

          {/* Mini Card 2 */}
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-3xl text-blue-500 mb-2">🚀</div>
            <div className="text-xl font-bold text-gray-800 mb-1">2</div>
            <p className="text-gray-600">Description for card 2</p>
          </div>

          {/* Mini Card 3 */}
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-3xl text-blue-500 mb-2">⚙️</div>
            <div className="text-xl font-bold text-gray-800 mb-1">3</div>
            <p className="text-gray-600">Description for card 3</p>
          </div>

          {/* Mini Card 4 */}
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-3xl text-blue-500 mb-2">🌱</div>
            <div className="text-xl font-bold text-gray-800 mb-1">4</div>
            <p className="text-gray-600">Description for card 4</p>
          </div>

          {/* Mini Card 5 */}
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-3xl text-blue-500 mb-2">🎨</div>
            <div className="text-xl font-bold text-gray-800 mb-1">5</div>
            <p className="text-gray-600">Description for card 5</p>
          </div>

          {/* Mini Card 6 */}
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-3xl text-blue-500 mb-2">🎯</div>
            <div className="text-xl font-bold text-gray-800 mb-1">6</div>
            <p className="text-gray-600">Description for card 6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
