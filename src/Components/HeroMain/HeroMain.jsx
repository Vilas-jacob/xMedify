import React from 'react';
import DoctorPng from '../../assets/NicePng_doctor-png_336282.png';

function HeroMain() {
  return (
    <>
        <div className='relative flex flex-col gap-y-2 md:flex-row bg-gradient-to-b from-blue-50 to-blue-100 w-full justify-between md:justify-around px-12'>
            <div className='flex flex-col gap-y-2'>
                <h2 className='text-blue-900 font-bold text-lg md:text-xl'>Skip the travel! Find Online</h2>
                <h1 className='text-sky-400 text-4xl md:text-6xl font-bold'><span className='text-black'>Medical </span>Centers</h1>
                <p className='text-gray-400'>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                    <div className='flex justify-center md:justify-start'>
                        <button className='bg-sky-400 w-30 h-10 md:w-50 mt-4 md:py-2 md:px-2 lg:px-4 text-sm lg:text-md xl:text-lg rounded-xl text-white align-center'>
                            Find Centers
                        </button>
                    </div>

            </div>
            <div>
                <img src={DoctorPng} />
            </div>
        </div>
    </>
  )
}

export default HeroMain