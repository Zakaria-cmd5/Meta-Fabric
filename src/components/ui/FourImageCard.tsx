import { Link } from "react-router-dom";
import brand1 from "../../assets/brand-1.webp";
import brand2 from "../../assets/brand-2.webp";
import brand3 from "../../assets/brand-3.webp";
import brand4 from "../../assets/brand-4.webp";

interface Props {
  bgColor: string;
}

const FourImageCard = ({ bgColor }: Props) => {
  const categories = [
    { image: brand1, title: "Brand 1" },
    { image: brand2, title: "Brand 2" },
    { image: brand3, title: "Brand 3" },
    { image: brand4, title: "Brand 4" },
  ];

  return (
    <div
      className={`relative p-4 shadow-lg rounded-xl w-full max-w-lg flex flex-col justify-between transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${bgColor}`}
    >
      {/* Light glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-300/20 rounded-xl blur-lg opacity-50"></div>

      <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
        Shop for finding your brand
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-2">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md p-2 transition-all transform hover:scale-105 hover:shadow-lg flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover rounded-md"
            />
            <p className="text-sm mt-2 font-medium text-gray-700">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Link Button */}
      <Link
        to="/brands"
        className="text-blue-500 text-sm mt-4 text-center transition-all duration-200 hover:text-blue-700 hover:underline"
      >
        Discover more in Home
      </Link>
    </div>
  );
};

export default FourImageCard;
