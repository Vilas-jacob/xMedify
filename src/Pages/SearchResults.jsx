import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import Search from '../Components/Search/Search';
import Faq from '../Components/Faq/Faq';
import MedifyApp from '../Components/MedifyApp/MedifyApp';
import Footer from '../Components/Footer/Footer';
import TickIcon from '../assets/tick_icon.png';
import HospitalCard from '../Components/HospitalCard/HospitalCard';
import AppointmentModal from '../Components/AppointmentModal/AppointmentModal';
import SnackbarMessage from '../Components/SnackbarMessage/SnackbarMessage';

function SearchResults() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const state = queryParams.get('state');
    const city = queryParams.get('city');

    const [hospitals,setHospitals]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error,setError]=useState('');
    const [isLoading, setIsLoading]=useState(false);
    const availableSlots = {
        morning: ["11:30 AM"],
        afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
        evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
      };
    const [isBookingModalOpen, setIsBookingModalOpen]=useState(false);
    const [bookingDetails, setBookingDetails] = useState({});
    const [showBookingSuccess, setShowBookingSuccess] = useState(false);
    

    //console.log("Modal state: ", isBookingModalOpen);
    

    useEffect(()=>{
        async function getHospitals() {
            setLoading(true);
            setError('');
            try{
                const response = await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
                if(!response.ok){
                    throw new Error(`Response Status: ${response.status}`);
                }
                const hospitalData = await response.json();
                //console.log(hospitalData);
                setHospitals(hospitalData);
            } catch(error){
                setError("Error fetching hospital data: " + error.message);
            } finally {
                setLoading(false);
            }
        }
        if(state && city){
            getHospitals();
        }
    },[state,city]);
    
    const handleAppointmentBookingModal = (bookingDetails)=>{
        setBookingDetails(bookingDetails);
        setIsBookingModalOpen(true);
    }

    const handleBookingSuccess = () => {
        setShowBookingSuccess(true);
        setTimeout(() => {
            setShowBookingSuccess(false);
        }, 3000); 
    };

    //console.log("handleAppointmentBooking in SearchResults:", handleAppointmentBookingModal);
  return (
    <>  
    <div >
        <NavBar />
        
       
        <div className="bg-sky-400 rounded-b-lg h-20 mb-50">
          <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg transform translate-y-12 mb-12 shadow-lg">
            <Search />
          </div>
        </div>

        <div className='bg-blue-100 flex flex-col justify-center'>
            {
                hospitals.length > 0 && (
                    <div className='flex flex-col gap-y-2 justify-start items-center'>
                        <h1 className='text-lg font-bold text-blue-900'>{`${hospitals.length} medical centers available in `}
                            <span>{city}</span>
                        </h1>
                        <div className='flex items-center space-x-4 mb-5'>
                            <img src={TickIcon} height={24} width={24} alt='Tick Icon' />
                            <p className='text-gray-600'>Book appointments with minimum wait-time & verified doctor details</p>
                        </div>
                    </div>
                )
            }

            <div className='w-full flex justify-center'>
                <div className='flex flex-col md:w-3/4 md:flex-row justify-center gap-y-4'>
                    <div className='flex flex-col md:flex-1 gap-y-4'>
                        {hospitals.length > 0 &&
                            hospitals.map((hospital) => (
                                <HospitalCard
                                    key={hospital["Provider ID"]}
                                    hospitalDetails={hospital}
                                    availableSlots={availableSlots}
                                    handleAppointmentBooking={handleAppointmentBookingModal}
                                />
                            ))
                        }
                    </div>
                    <div className='flex justify-center items-start md:ml-4'>
                        <div className='flex flex-col bg-white rounded-xl p-5 w-full md:w-auto'>
                            <h3 className='text-lg'>The World Oral Health Day,</h3>
                            <h2 className='text-blue-900 font-bold text-xl'>Get a <span className='text-sky-400'>FREE</span> Appointment*</h2>
                            <h2 className='text-blue-900 font-bold text-xl'>with Top Dentists.</h2>
                            <h4 className='text-white text-md mt-2 mb-4'><span className='bg-sky-400'>LIMITED PERIOD OFFER</span></h4>
                            <h4 className='text-sky-400 text-md mb-2'>#BeSensitiveToOralHealth</h4>
                            <h6 className='text-xs'>*T&C Apply - only consultation fee. Procedures / surgeries not covered</h6>
                        </div>
                    </div>

                    {isLoading && (
                        <h3 className="bg-white p-3 rounded-lg">Loading...</h3>
                    )}

                    {
                        !state && (
                            <h3>Please select a State and City</h3>
                        )
                    }
                </div>
            </div>



        </div>
        {
            isBookingModalOpen && 
            <AppointmentModal
                isBookingModalOpen={isBookingModalOpen}
                setIsBookingModalOpen={setIsBookingModalOpen}
                bookingDetails={bookingDetails}
                onBookingSuccess={handleBookingSuccess}
             />
        }
        
        <SnackbarMessage message="Booking Successful!" isOpen={showBookingSuccess} /> 


        <Faq />
        <MedifyApp />
        <Footer />
        
    </div>
   

    
    
</>
  )
}

export default SearchResults