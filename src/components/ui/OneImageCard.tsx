import { Link } from "react-router-dom";
import brand5 from "../../assets/brand-5.webp";

const OneImageCard = () => {
  return (
    <div
      className="relative bg-white shadow-lg rounded-xl w-full max-w-lg 
                 flex flex-col transition-all duration-300 ease-in-out 
                 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
    >
      {/* Light glow effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-300/20 
                      rounded-xl blur-lg opacity-50"
      ></div>

      {/* Image - Takes up full available space */}
      <div className="flex-grow">
        <img
          src={brand5}
          alt="Brand"
          className="w-full h-full object-cover rounded-t-xl shadow-md transition-all 
                     transform hover:scale-105 hover:shadow-lg"
        />
      </div>

      {/* Text and Button */}
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-lg font-bold text-gray-800 text-center mb-2">
          Get your Brand on
        </h2>

        <Link
          to="/"
          className="text-blue-500 text-sm transition-all 
                   duration-200 hover:text-blue-700 hover:underline"
        >
          Shop all
        </Link>
      </div>
    </div>
  );
};

export default OneImageCard;
