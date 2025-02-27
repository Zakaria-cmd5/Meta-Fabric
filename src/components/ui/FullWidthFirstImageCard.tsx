import { Link } from "react-router-dom";
import design1 from "../../assets/design-1.webp";
import design2 from "../../assets/design-2.webp";
import design3 from "../../assets/design-3.webp";
import design4 from "../../assets/design-4.webp";

const FullWidthFirstImageCard = () => {
  const categories = [
    { image: design1, title: "Brand 1" },
    { image: design2, title: "Brand 2" },
    { image: design3, title: "Brand 3" },
    { image: design4, title: "Brand 4" },
  ];

  return (
    <div
      className="relative bg-white p-4 shadow-lg rounded-xl w-full max-w-lg 
                 flex flex-col justify-between transition-all duration-300 ease-in-out 
                 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
    >
      {/* Light glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-300/20 rounded-xl blur-lg opacity-50"></div>

      <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
        Shop for finding your brand
      </h2>

      <div className="mb-4">
        {/* Full-width first image */}
        <div className="w-full mb-4">
          <img
            src={categories[0].image}
            alt={categories[0].title}
            className="w-full h-48 object-cover rounded-md shadow-md transition-all 
                       transform hover:scale-105 hover:shadow-lg"
          />
          <p className="text-center text-sm mt-2 font-medium text-gray-700">
            {categories[0].title}
          </p>
        </div>

        {/* Grid for the remaining three images */}
        <div className="grid grid-cols-3 gap-2">
          {categories.slice(1).map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-2 transition-all 
                         transform hover:scale-105 hover:shadow-lg flex flex-col items-center"
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
      </div>

      {/* Link Button */}
      <Link
        to="/brands"
        className="text-blue-500 text-sm mt-4 text-center transition-all 
                   duration-200 hover:text-blue-700 hover:underline"
      >
        Discover more in Home
      </Link>
    </div>
  );
};

export default FullWidthFirstImageCard;
