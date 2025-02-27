import brand1 from "../../assets/brand-1.webp";
import brand2 from "../../assets/brand-2.webp";
import brand3 from "../../assets/brand-3.webp";
import brand4 from "../../assets/brand-4.webp";

const FourImageCard = () => {
  const categories = [
    { image: brand1, title: "Brands" },
    { image: brand2, title: "Brands" },
    { image: brand3, title: "Brands" },
    { image: brand4, title: "Brands" },
  ];

  return (
    <div className="bg-sky-100 p-4 shadow-md rounded-md w-full max-w-md flex flex-col justify-between">
      <h2 className="text-lg font-bold mb-4">Shop for finding your brand</h2>

      <div className="flex flex-col items-center mb-4">
        <div className="grid grid-cols-2 gap-4">
          {categories.map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-[500px] h-[200px] object-contain rounded-md"
              />
              <p className="text-sm mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <a href="#" className="text-blue-500 text-sm mt-4 inline-block">
        Discover more in Home
      </a>
    </div>
  );
};

export default FourImageCard;
