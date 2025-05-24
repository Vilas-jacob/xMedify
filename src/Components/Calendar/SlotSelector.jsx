import React from 'react'
import TimeSlotChip from './TimeSlotChip'

function SlotSelector({availableSlots, hospitalDetails, handleAppointmentBooking,dateSelected}) {
    //console.log("handleAppointmentBooking:", handleAppointmentBooking);
  return (
    <>
        <div className="pt-3 flex flex-col mx-4 my-4">
            <div className='flex-1'>
                {availableSlots.morning.length > 0 && (
                    <div className='flex flex-col'>
                        <div className='flex items-center ml-4'>
                            <p className='font-bold pr-8'>Morning</p>
                            <div className='flex flex-wrap gap-2'>
                                {availableSlots.morning.map((slot) => (

                                    <TimeSlotChip key={slot} label={slot} hospitalDetails={hospitalDetails} handleAppointmentBooking={handleAppointmentBooking} dateSelected={dateSelected} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}  
            </div>
            
            <div className="border-1 border-gray-300 mx-4 my-6" />

            <div className='flex-1'>
                {availableSlots.afternoon.length > 0 && (
                    <div className='flex flex-col'>
                        <div className='flex items-center ml-4'>
                            <p className='font-bold pr-4'>Afternoon</p>
                            <div className='flex flex-wrap gap-2'>
                                {availableSlots.afternoon.map((slot) => (
                                    <TimeSlotChip key={slot} label={slot} hospitalDetails={hospitalDetails} handleAppointmentBooking={handleAppointmentBooking} dateSelected={dateSelected} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            <div className="border-1 border-gray-300 mx-4 my-6" />

            <div className='flex-1'>
                {availableSlots.evening.length > 0 && (
                    <div className='flex flex-col'>
                        <div className='flex items-center ml-4'>
                            <p className='font-bold pr-8'>Evening</p>
                            <div className='flex flex-wrap gap-2'>
                                {availableSlots.evening.map((slot) => (
                                    <TimeSlotChip 
                                    key={slot} 
                                    label={slot} 
                                    hospitalDetails={hospitalDetails} 
                                    handleAppointmentBooking={handleAppointmentBooking} 
                                    dateSelected={dateSelected} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        
        </div>
    </>
  )
}

export default SlotSelector