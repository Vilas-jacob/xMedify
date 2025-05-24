import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AppointmentModal({ isBookingModalOpen, setIsBookingModalOpen, bookingDetails,onBookingSuccess }) {
    const [patientName, setPatientName] = useState('');
    const [patientPhoneNumber, setPatientPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handleBookAppointment = (e) => {
        e.preventDefault();
        triggerAppointmentEvent();

        const bookings = localStorage.getItem("bookings");
        let oldAppointments = [];

        if (bookings) {
            try {
                oldAppointments = JSON.parse(bookings);
            } catch (error) {
                console.error("Error parsing bookings from localStorage:", error);
            }
        }


        localStorage.setItem(
            "bookings",
            JSON.stringify([
                ...oldAppointments,
                { ...bookingDetails, patientName, patientPhoneNumber },
            ])
        );

        onBookingSuccess();
        setPatientName("");
        setPatientPhoneNumber("");
        setIsBookingModalOpen(false);
        navigate('/my-bookings');
    //    setTimeout(() => {
    //     navigate('/my-bookings');
    //      }, 2000);
    };

    const triggerAppointmentEvent = () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "appointment_booking",
            eventDate: new Date().toISOString(),
        });
    };
    //console.log(bookingDetails);
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray bg-opacity-30 backdrop-blur-sm rounded-lg' style={{zIndex:999}}>
            <div className='modalContainer bg-sky-100 rounded-lg shadow-lg w-11/12 md:w-1/3 h-auto m-5' style={{zIndex: 1000}}>
                <div className='modalTitle px-5 pt-5'>
                    <h2 className='text-xl font-bold text-blue-900'>Confirm Appointment</h2>
                </div>
                <div className='modalForm'>
                    <form onSubmit={handleBookAppointment} className='grid grid-cols-1 gap-5 p-5 text-md font-semibold md:text-lg md:font-bold'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input
                                className='patientName rounded-lg bg-white p-3 shadow-md text-sky-400'
                                type='text'
                                placeholder='Patient Name'
                                value={patientName}
                                onChange={(e) => setPatientName(e.target.value)}
                                required
                            />
                            <input
                                className='patientPhoneNumber rounded-lg bg-white p-3 shadow-md text-sky-400'
                                type='tel'
                                placeholder='Patient Phone Number'
                                value={patientPhoneNumber}
                                onChange={(e) => setPatientPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <input
                                className='appointmentDate rounded-lg bg-white p-3 shadow-md text-sky-400'
                                type='text'
                                value={bookingDetails.bookingDate.toDateString()} 
                                readOnly
                            />
                            <input
                                className='appointmentTime rounded-lg bg-white p-3 shadow-md text-sky-400'
                                type='text'
                                value={bookingDetails.bookingTime}
                                readOnly
                            />
                        </div>
                        <div className='flex justify-between'>
                            <button type='submit' 
                                    className='bookAppointmentButton rounded-lg bg-sky-400 text-white px-3 py-2 shadow-md'>
                                        Confirm</button>
                            <button
                                type='button'
                                className='cancelButton rounded-lg bg-gray-300 text-black px-3 py-2 shadow-md'
                                onClick={() => { setIsBookingModalOpen(false) }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AppointmentModal;
