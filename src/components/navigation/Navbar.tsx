import { CiMicrophoneOn } from "react-icons/ci";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import SearchBar from "../ui/SearchBar";

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="flex border-2 border-green-300 text-sm md:text-lg font-extrabold">
        <span className="bg-purple-300 px-4 py-2">M</span>
        <span className="bg-green-300 px-4 py-2">e</span>
        <span className="bg-yellow-300 px-4 py-2">t</span>
        <span className="bg-white px-4 py-2">a</span>
        <span className="bg-purple-500 px-4 py-2 font-extrabold">F</span>
        <span className="bg-white px-4 py-2">a</span>
        <span className="bg-orange-400 px-4 py-2">b</span>
        <span className="bg-cyan-300 px-4 py-2">r</span>
        <span className="bg-pink-500 px-4 py-2">i</span>
        <span className="bg-emerald-300 px-4 py-2">c</span>
      </h1>

      {/* Search Bar */}
      <SearchBar />

      {/* Right Section - Buttons & Cart */}
      <div className="items-center gap-x-4 md:flex-row md:gap-x-4 hidden md:flex">
        <button className="wallet-button">
          <Link to="/wallet">Connect Wallet</Link>
        </button>
        {/* <SignupButton /> */}
        {/* <LangDropdown /> */}
        {/* <button className="btn">Shop now</button> */}
        <div className="relative">
          <button className="relative p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all">
            <MdOutlineAddShoppingCart className="text-2xl" />
          </button>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
            0
          </span>
        </div>
        <button className="relative p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all">
          <CiMicrophoneOn className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
