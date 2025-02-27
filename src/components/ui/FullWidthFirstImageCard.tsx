import { Link } from "react-router-dom";
import brand1 from "../../assets/brand-1.webp";
import brand2 from "../../assets/brand-2.webp";
import brand3 from "../../assets/brand-3.webp";
import brand4 from "../../assets/brand-4.webp";

const FullWidthFirstImageCard = () => {
  const categories = [
    { image: brand1, title: "Brand 1" },
    { image: brand2, title: "Brand 2" },
    { image: brand3, title: "Brand 3" },
    { image: brand4, title: "Brand 4" },
  ];

  return (
    <div className="bg-white p-4 shadow-md rounded-md w-full max-w-md flex flex-col justify-between">
      <h2 className="text-lg font-bold mb-4">Shop for finding your brand</h2>

      <div className="flex flex-col items-center mb-4">
        <div className="w-full mb-4">
          <img
            src={categories[0].image}
            alt={categories[0].title}
            className="w-full h-[300px] object-cover rounded-md"
          />
          <p className="text-center text-sm mt-2">{categories[0].title}</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {categories.slice(1).map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-contain rounded-md"
              />
              <p className="text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Link to="/brands" className="text-blue-500 text-sm mt-4 inline-block">
        Discover more in Home
      </Link>
    </div>
  );
};

export default FullWidthFirstImageCard;
