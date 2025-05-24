import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import SearchHospital from "../Components/SearchHospital/SearchHospital";
import HospitalCard from "../Components/HospitalCard/HospitalCard";

function MyBooking() {
  const [bookings, setBookings] = useState([]);
  const [filteredAppointment, setFilteredAppointment] = useState([]);

  useEffect(() => {
    const storedBooking = localStorage.getItem("bookings") || "[]";
    const parsedBookings = JSON.parse(storedBooking);
    //console.log("Parsed Bookings:", parsedBookings);
    setBookings(parsedBookings);
    setFilteredAppointment(parsedBookings);
  }, []);

  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-b from-[#EFF5FE] to-[rgba(241,247,255,0.47)]">
        <div className="mb-12 pt-12 md:pt-4 relative bg-sky-400 rounded-b-lg">
          <div className="container mx-auto px-0 md:px-30">
            <div className="flex flex-col md:flex-row md:space-x-24 items-center">
              <h1 className="pb-4 text-4xl md:text-5xl font-bold text-white">
                My Bookings
              </h1>
              <div className="bg-white p-3 rounded-lg shadow-md absolute left-1/3 transform -translate-y-1/2 top-[90%] w-full max-w-3xl">
                <SearchHospital
                  hospitalList={bookings}
                  filterHospital={setFilteredAppointment}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 flex flex-col justify-center">
        <div className="w-full flex justify-center mt-4">
          <div className="flex flex-col md:w-3/4 md:flex-row justify-center gap-y-4 pt-4">
            <div className="flex flex-col md:flex-1 gap-y-4">
              {filteredAppointment.length > 0 ? (
                filteredAppointment.map((hospital) => (
                  <HospitalCard
                    key={hospital["Hospital Name"]}
                    hospitalDetails={hospital}
                    booking={true}
                  />
                ))
              ) : (
                <h3 className="bg-white p-3 rounded-lg text-center">
                  No Bookings Found!
                </h3>
              )}
            </div>
            <div className="flex justify-center items-start md:ml-4">
              <div className="flex flex-col bg-white rounded-xl p-5 w-full md:w-auto">
                <h3 className="text-lg">The World Oral Health Day,</h3>
                <h2 className="text-blue-900 font-bold text-xl">
                  Get a <span className="text-sky-400">FREE</span> Appointment*
                </h2>
                <h2 className="text-blue-900 font-bold text-xl">
                  with Top Dentists.
                </h2>
                <h4 className="text-white text-md mt-2 mb-4">
                  <span className="bg-sky-400">LIMITED PERIOD OFFER</span>
                </h4>
                <h4 className="text-sky-400 text-md mb-2">
                  #BeSensitiveToOralHealth
                </h4>
                <h6 className="text-xs">
                  *T&C Apply - only consultation fee. Procedures / surgeries not
                  covered
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBooking;
