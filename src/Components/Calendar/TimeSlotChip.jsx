import React from 'react';

function TimeSlotChip({label,hospitalDetails,dateSelected, handleAppointmentBooking}) {

    const handleSlotClick = ()=>{
      console.log("Selected Date:", dateSelected);
      console.log("Selected Time:", label);
        handleAppointmentBooking({...hospitalDetails, bookingDate: dateSelected, bookingTime: label});
    }
    
  return (
    <>
        <div className='border-sky-400 border rounded-md cursor-pointer mr-1 md:mr-3 mt-1 md:mt-0 p-2' onClick={handleSlotClick}>
            <h3 className='text-sky-600 text-xs md:text-md'>{label}</h3>
        </div>
    </>
  )
}

export default TimeSlotChip