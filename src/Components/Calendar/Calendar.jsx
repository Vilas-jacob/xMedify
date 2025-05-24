import React, { useState } from 'react'
import DaySlider from './DaySlider'
import SlotSelector from './SlotSelector'
import { startOfDay } from 'date-fns';

function Calendar({availableSlots,  hospitalDetails, handleAppointmentBooking}) {
    const totalSlots = availableSlots.morning.length + availableSlots.afternoon.length + availableSlots.evening.length;
    const [dateSelected,setDateSelected]=useState(startOfDay(new Date()));
  return (
    <>
        
        <DaySlider totalSlots={totalSlots} dateSelected={dateSelected} setDateSelected={setDateSelected}  />
        <SlotSelector availableSlots={availableSlots} hospitalDetails={hospitalDetails} handleAppointmentBooking={handleAppointmentBooking} dateSelected={dateSelected} />
    </>
  )
}

export default Calendar