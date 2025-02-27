import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import LangDropdown from "../ui/LangDropDown";
import SearchBar from "../ui/SearchBar";
import SignupButton from "../ui/SignupButton";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="font-bold text-2xl whitespace-nowrap">Meta Fabric</h1>

      {/* Search Bar (Now Expands Fully) */}
      <SearchBar />

      {/* Right Section - Buttons & Cart */}
      <div className="flex items-center gap-x-4">
        <button className="wallet-button">
          <Link to="/wallet">Connect Wallet</Link>
        </button>
        <SignupButton />
        <LangDropdown />
        <button className="btn"> Shop now</button>
        <div className="relative">
          <button className="relative p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all">
            <MdOutlineAddShoppingCart className="text-2xl" />
          </button>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
            0
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
