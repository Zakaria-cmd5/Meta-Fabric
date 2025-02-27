import { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import LangDropdown from "../ui/LangDropDown";
import SearchBar from "../ui/SearchBar";
import SignupButton from "../ui/SignupButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-700 text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="font-bold text-2xl whitespace-nowrap">Meta Fabric</h1>

      {/* Mobile Hamburger Icon */}
      <button
        className="block md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Search Bar */}
      <SearchBar />

      {/* Right Section - Buttons & Cart */}
      <div className="items-center gap-x-4 md:flex-row md:gap-x-4 hidden md:flex">
        <button className="wallet-button">
          <Link to="/wallet">Connect Wallet</Link>
        </button>
        <SignupButton />
        <LangDropdown />
        <button className="btn">Shop now</button>
        <div className="relative">
          <button className="relative p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all">
            <MdOutlineAddShoppingCart className="text-2xl" />
          </button>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
            0
          </span>
        </div>
      </div>

      {/* Mobile Menu for Buttons */}
      <div
        className={`absolute bg-slate-700 text-white p-4 left-0 right-0 top-full ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <button className="block w-full py-2 text-center bg-gray-800 rounded-lg hover:bg-gray-700">
          <Link to="/wallet">Connect Wallet</Link>
        </button>
        <SignupButton />
        <LangDropdown />
        <button className="block w-full py-2 text-center bg-gray-800 rounded-lg hover:bg-gray-700">
          Shop now
        </button>
        <div className="relative mt-4">
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
