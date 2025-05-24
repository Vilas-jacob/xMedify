import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function NavBar() {
     const [isTrayOpen, setIsTrayOpen] = useState(false);
     const navigate = useNavigate();
  return (
    <>
        <div className='bg-sky-400 w-screen h-[60px] md:h-[40px] p-2 flex flex-wrap items-center justify-center text-white text-xs md:text-md md:font-semibold'>
            <p className='text-center'>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
        </div>
        <nav className='w-full bg bg-blue-50 px-12 md:px-6'>
            <div className='flex justify-between md:justify-around py-6 '>
                <div className='flex items-center'>
                    <img src={Logo} alt='Medify Logo' className='h-[27px]'  />
                </div>
                <div className='hidden md:block'>
                    <div className='flex justify-around md:gap-4 lg:gap-10'>
                        <ul className='flex justify-around md:gap-2 lg:gap-10 items-center text-xs lg:text-md xl:text-lg'>
                            <li>Find Doctors</li>
                            <li>Hospitals</li>
                            <li>Medicines</li>
                            <li>Surgeries</li>
                            <li>Software for Provider</li>
                            <li>Facilities</li>
                        </ul>
                        <button onClick={()=>navigate('/my-bookings')} className='bg-sky-400 h-[40px] md:px-2 lg:px-4 text-xs lg:text-md xl:text-lg rounded-xl text-white cursor-pointer'>My Bookings</button>
                    </div>
                </div>
                <div className='block md:hidden cursor-pointer'>
                    <button onClick={()=>{setIsTrayOpen(!isTrayOpen)}} type='button' className='fill-sky-400'>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l18 0M3 12l18 0M3 18l18 0"></path>
                        </svg>
                    </button>
                    
                </div>
            </div>
        
           
           {
            isTrayOpen && (
                <div className='flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2'>
                    <ul className='flex flex-col gap-y-2 items-center text-md '>
                        <li>1Find Doctors</li>
                        <li>Hospitals</li>
                        <li>Medicines</li>
                        <li>Surgeries</li>
                        <li>Software for Provider</li>
                        <li>Facilities</li>
                    </ul>
                    <button onClick={()=>navigate('/my-bookings')}  className='bg-sky-400 h-[40px] text-md rounded-xl text-white cursor-pointer'>My Bookings</button>
                </div>
            )
           }
        
        </nav>
    </>
  )
}

export default NavBar