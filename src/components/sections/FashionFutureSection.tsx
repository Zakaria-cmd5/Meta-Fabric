import fashion from "../../assets/meta.png";

const FashionFutureSection = () => {
  return (
    <div className="bg-slate-300 mt-32 grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
      <div className="flex justify-center items-center">
        <img
          src={fashion}
          alt="Fashion"
          className="w-full max-[500px] h-[500px] object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-4 justify-center items-center bg-gray-800 p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 relative">
        <h1 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-center">
          Meta Fabric
        </h1>

        {/* Notification Boxes */}
        <div className="flex flex-col gap-4 w-full">
          {/* Notification Box 1 */}
          <div className="relative p-4 bg-gray-700 text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-teal-500 opacity-20 rounded-lg"></div>
            <div className="relative z-10">
              <div className="font-semibold text-xl">Innofi Funding</div>
              <p className="mt-2 text-sm">
                Get the funds you need to launch your collection.
              </p>
            </div>
          </div>

          {/* Notification Box 2 */}
          <div className="relative p-4 bg-gray-700 text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-teal-500 opacity-20 rounded-lg"></div>
            <div className="relative z-10">
              <div className="font-semibold text-xl">Global Exposure</div>
              <p className="mt-2 text-sm">
                Showcase your designs to a global NFT market.
              </p>
            </div>
          </div>

          {/* Notification Box 3 */}
          <div className="relative p-4 bg-gray-700 text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-teal-500 opacity-20 rounded-lg"></div>
            <div className="relative z-10">
              <div className="font-semibold text-xl">Transform Ideas</div>
              <p className="mt-2 text-sm">
                Turn your concepts into exclusive NFT collections.
              </p>
            </div>
          </div>

          {/* Notification Box 4 */}
          <div className="relative p-4 bg-gray-700 text-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-teal-500 opacity-20 rounded-lg"></div>
            <div className="relative z-10">
              <div className="font-semibold text-xl">Exclusive Drops</div>
              <p className="mt-2 text-sm">
                Create limited-edition pieces to set trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionFutureSection;
