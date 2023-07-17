import React, { useRef } from "react";

const Search = ({ onSearch }) => {
  const searchRef = useRef("");

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      let inputValue = searchRef.current.value;
      event.preventDefault();
      onSearch(inputValue);
      inputValue = searchRef.current.value = "";
    }
  };
  return (
    <>
      <div className="flex m-2 p-2">
        <input
          type="text"
          className="p-2 bg-transparent border-4 rounded-full border-gray-400 text-black shadow-md shadow-slate-600 focus:border-blue-500"
          placeholder="Search..."
          ref={searchRef}
          onKeyDown={handleSearch}
        />
      </div>
    </>
  );
};

export default Search;
