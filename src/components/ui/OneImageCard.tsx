import { Link } from "react-router-dom";
import brand5 from "../../assets/brand-5.webp";

const OneImageCard = () => {
  return (
    <div className="bg-sky-100 p-4 shadow-md rounded-md w-full max-w-md flex flex-col justify-between">
      <h2 className="text-lg font-bold mb-4">Get your Brand on</h2>

      <div className="flex justify-center mb-4">
        <img
          src={brand5}
          alt="Brand"
          className="w-[500px] h-[400px] object-contain rounded-md"
        />
      </div>

      <Link to="/" className="text-blue-500 text-sm mt-4 inline-block">
        Shop all
      </Link>
    </div>
  );
};

export default OneImageCard;
