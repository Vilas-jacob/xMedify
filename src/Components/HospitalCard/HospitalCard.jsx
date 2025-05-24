import React, { useState } from "react";
import HospitalIcon from "../../assets/hospital_icon.png";
import ThumbsUp from "../../assets/thumbsUp.png";
import Calendar from "../Calendar/Calendar";
import { format } from "date-fns";

function HospitalCard({
  hospitalDetails,
  handleAppointmentBooking,
  availableSlots,
  booking = false,
}) {
  const [isCalenderOpen, setIsCalendarOpen] = useState(false);

  const handleOpenCalendar = () => {
    setIsCalendarOpen(!isCalenderOpen);
  };
  //console.log("Booking Date:", hospitalDetails);
  return (
    <>
      <div className="flex flex-col justify-center gap-x-4 py-10 bg-white border border-gray-200 rounded-xl">
        <div className="flex flex-row justify-center items-center ">
          <div>
            <img src={HospitalIcon} alt="Hospital Icon" className="w-40" />
          </div>
          <div className="flex flex-col w-full md:w-64">
            <h3 className="text-sky-400">{hospitalDetails["Hospital Name"]}</h3>
            <h3>{`${hospitalDetails["City"]},${hospitalDetails["State"]}`}</h3>
            <h4>{hospitalDetails["Hospital Type"]}</h4>
            <h4>
              <span className="text-green-600 font-bold">FREE </span>
              <span className="line-through">₹ 500 </span>Consultation fee at
              clinic
            </h4>
            <img
              src={ThumbsUp}
              alt="Thumbs Up Icon"
              className="pt-4 w-10 h-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            {!booking && (
              <>
                <h2 className="text-green-600 font-bold">Available Today</h2>
                <button
                  className="bg-sky-400 text-white rounded-lg w-full md:w-48 px-4 py-2 text-center"
                  onClick={handleOpenCalendar}
                >
                  {!isCalenderOpen ? "Book FREE Center Visit" : "Hide Calendar"}
                </button>
              </>
            )}

            {booking && (
                 <div className="flex space-x-1 mt-2">
                 <span className="border border-blue-600 text-blue-600 rounded-md px-2 py-1 text-sm">
                   {hospitalDetails.appointmentTime}
                 </span>
                 <span className="border border-green-600 text-green-600 rounded-md px-2 py-1 text-sm">
                   {format(new Date(hospitalDetails.appointmentDate), "dd MMMM yyyy")}
                 </span>
               </div>
            )}
          </div>
        </div>
        {isCalenderOpen && (
          <Calendar
            availableSlots={availableSlots}
            hospitalDetails={hospitalDetails}
            handleAppointmentBooking={handleAppointmentBooking}
          />
        )}
      </div>
    </>
  );
}

export default HospitalCard;
