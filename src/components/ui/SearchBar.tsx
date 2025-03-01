import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="hidden md:flex flex-1 mr-32 mx-4">
      <div
        className="flex w-[80%] ml-48 border border-gray-300 rounded-md overflow-hidden 
          hover:ring-2 focus-within:ring-2 ring-blue-500 transition-all duration-200 ease-in-out"
      >
        {/* Super Compact Dropdown */}
        <select className="bg-gray-200 text-xs px-1 py-1 border-r border-gray-300 focus:outline-none w-14 text-black">
          <option>All</option>
          <option>Brands</option>
          <option>Designers</option>
          <option>Artist</option>
          <option>Creators</option>
        </select>

        {/* Search Input */}
        <input
          type="text"
          className="flex-grow px-2 py-2 focus:outline-none text-sm"
          placeholder="Search Amazon"
        />

        {/* Search Button */}
        <button className="cursor-pointer bg-yellow-500 p-2 flex items-center justify-center w-8">
          <FaSearch className="text-black text-sm" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
