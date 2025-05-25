import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [stateSelected, setStateSelected] = useState("");
  const [citySelected, setCitySelected] = useState("");
  const [showStateList, setShowStateList] = useState(false);
  const [showCityList, setShowCityList] = useState(false);
  //const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // const toggleDropdown = ()=>{
  //   setIsOpen(!isOpen);
  // }

  // const handleOptionClick = ()=>{
  //   stateSelected(state);
  //   setIsOpen(false);
  // }
  async function getStateData() {
    try {
      const response = await fetch(
        "https://meddata-backend.onrender.com/states"
      );
      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
      }
      const stateData = await response.json();
      setStates(stateData);
    } catch (error) {
      console.log("Error fetching data: " + error.message);
    }
  }

  async function getCityData() {
    if (stateSelected) {
      try {
        const response = await fetch(
          `https://meddata-backend.onrender.com/cities/${stateSelected}`
        );
        if (!response.ok) {
          throw new Error(`Response Status: ${response.status}`);
        }
        const cityData = await response.json();
        setCities(cityData);
      } catch (error) {
        console.log("Error fetching data: " + error.message);
      }
    }
  }

  function handleStateChange(state) {
    setStateSelected(state);
    setShowStateList(false);
  }

  function handleCityChange(city) {
    setCitySelected(city);
    setShowCityList(false);
  }

  function handleSearch() {
    if (stateSelected && citySelected) {
      navigate(`/search-results?state=${stateSelected}&city=${citySelected}`);
    }
  }

  useEffect(() => {
    getStateData();
  }, []);

  useEffect(() => {
    getCityData();
  }, [stateSelected]);
  return (
    <>
      <div className="flex flex-col w-full gap-y-2 lg:gap-y-4 md:flex-row justify-center items-center md:justify-between px-10 lg:px-30 py-10">
        {/* <div id="state" className="w-full md:w-50">
          <select
            name="state"
            className="bg-gray-100 rounded-xl px-10 py-2 w-full"
            onChange={handleStateChange}
          >
            <option value="">State</option>
            {states.map((state) => {
              return (
                <option value={state} key={state}>
                  {state}
                </option>
              );
            })}
          </select>
        </div> */}
        <div id="state" className="relative w-full md:w-50">
          <button className="bg-gray-100 rounded-xl px-10 py-2 w-full text-left" 
            onClick={()=>setShowStateList(!showStateList)}>
              {stateSelected || 'Select State'}
              <span className="ml-2">&#9660;</span>
          </button>
          {showStateList && (
               <ul className="absolute bg-white border border-gray-300 rounded-lg shadow-lg mt-1 w-full z-10">
              {states.map((state)=>{
                return (
                  <li 
                    key={state}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"  
                    onClick={()=>handleStateChange(state)}>
                      {state}
                  </li>
                )
              })}
            </ul>
          )}
           
        </div>

           <div id="city" className="relative w-full md:w-50">
          <button
            className="dropdown-toggle bg-gray-100 rounded-xl px-10 py-2 w-full text-left flex justify-between items-center"
            onClick={() => setShowCityList(!showCityList)}
            disabled={!stateSelected}
          >
            {citySelected || "Select City"}
            <span className="ml-2">&#9660;</span>
          </button>
          {showCityList && (
            <ul className="dropdown-menu absolute bg-white border border-gray-300 rounded-lg shadow-lg mt-1 w-full z-10">
              {cities.map((city) => (
                <li
                  key={city}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleCityChange(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* <div id="city" className="w-full md:w-50">
          <select
            id="city"
            className="bg-gray-100 rounded-xl px-10 py-2 w-full"
            onChange={handleCityChange}
          >
            <option value="">City</option>
            {cities.map((city) => {
              return (
                <option value={city} key={city}>
                  {city}
                </option>
              );
            })}
          </select>
        </div> */}

        <button
          type="submit"
          id="searchBtn"
          className="flex flex-row justify-center items-center gap-x-2 bg-sky-400 w-full h-10 md:w-30 md:py-2 md:px-2 lg:px-4 text-md rounded-xl text-white align-center"
          onClick={handleSearch}
          disabled={!stateSelected || !citySelected}
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
      </div>
    </>
  );
}

export default Search;
