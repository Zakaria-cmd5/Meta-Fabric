import FourImageCard from "../ui/FourImageCard";
import FullWidthFirstImageCard from "../ui/FullWidthFirstImageCard";
import OneImageCard from "../ui/OneImageCard";

const BrandsSection = () => {
  return (
    <div className="relative -top-32 p-6 bg-gray-300 shadow-2xl rounded-2xl w-full mx-auto transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-3xl">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-300/20 rounded-2xl blur-lg opacity-50" />

      <h2 className="text-2xl font-bold text-white text-center mb-6">Brands</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FourImageCard />
        <OneImageCard />
        <FullWidthFirstImageCard />
        <FourImageCard />
        <FourImageCard />
        <OneImageCard />
        <FullWidthFirstImageCard />
        <FourImageCard />
      </div>
    </div>
  );
};

export default BrandsSection;
