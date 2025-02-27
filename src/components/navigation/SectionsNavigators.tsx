import { Link } from "react-router-dom";

const SectionsNavigators = () => {
  return (
    <div className="bg-[#01566d] text-white py-2 flex gap-6 items-center px-5">
      <Link to="/brands">BRANDS</Link>
      <Link to="/designers">DESIGNERS</Link>
      <Link to="/artists">ARTISTS</Link>
      <Link to="/creators">CREATORS</Link>
    </div>
  );
};

export default SectionsNavigators;
