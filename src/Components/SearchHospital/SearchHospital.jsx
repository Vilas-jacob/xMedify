import React, { useMemo, useState } from "react";

function SearchHospital({ hospitalList, filterHospital }) {
  const [searchString, setSearchString] = useState("");

  const filteredHospital = useMemo(() => {
    const searchTerm = searchString.trim().toLowerCase();
    return searchTerm
      ? hospitalList.filter(item => item["Hospital Name"].toLowerCase().includes(searchTerm))
      : hospitalList;
  }, [searchString, hospitalList]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Filtered Hospitals:", filteredHospital); 
    filterHospital(filteredHospital);
  };

  return (
    <div className="w-full flex justify-center p-4">
      <form onSubmit={handleSearch} className="flex space-x-2 w-full max-w-lg">
        <input
          type="text"
          placeholder="Search By Hospital"
          className="border border-gray-300 rounded-md px-4 py-3 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          aria-label="Search by hospital"
        />
        <button
          type="submit"
          className="bg-sky-400 text-white rounded-md px-8 py-3 flex items-center focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchHospital;
