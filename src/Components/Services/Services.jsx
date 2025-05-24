import React from 'react';
import Doctors from '../../assets/Doctor.png';
import Labs from '../../assets/Drugstore.png';
import Hospitals from '../../assets/Hospital.png';
import Medstore from '../../assets/Capsule.png';
import Ambulance from '../../assets/ambulance.png';


function Services() {
  return (
    <>
    <div className='flex flex-col gap-y-4 bg-white w-full justify-center items-center py-5 '>
        <h2 className='text-lg font-semibold align- text-blue-900'>You may be looking for</h2>
        <div className='flex flex-wrap justify-between items-center'>
            <div className='flex flex-col gap-y-2 justify-center items-center hover:text-sky-400 hover:rounded-lg hover:border-2 hover:border-sky-400   px-10 py-4 w-1/2 sm:w-1/2 md:w-1/3 lg:w-auto'>
                <img src={Doctors} alt='Doctors' className='w-[60px]' />
                <p className='text-md font-semibold text-gray-400 '>Doctors</p>
            </div>
            <div className='flex flex-col gap-y-2 justify-center items-center hover:text-sky-400 hover:rounded-lg hover:border-2 hover:border-sky-400   px-10 py-4 w-1/2 sm:w-1/2 md:w-1/3 lg:w-auto'>
                <img src={Labs} alt='Labs' className='w-[60px]' />
                <p className='text-md font-semibold text-gray-400 '>Labs</p>
            </div>
            <div className='flex flex-col gap-y-2 justify-center items-center hover:text-sky-400 hover:rounded-lg hover:border-2 hover:border-sky-400   px-10 py-4 w-1/2 sm:w-1/2 md:w-1/3 lg:w-auto'>
                <img src={Hospitals} alt='Hospitals' className='w-[60px]' />
                <p className='text-md font-semibold text-gray-400 '>Hospitals</p>
            </div>
            <div className='flex flex-col gap-y-2 justify-center items-center hover:text-sky-400 hover:rounded-lg hover:border-2 hover:border-sky-400   px-10 py-4 w-1/2 sm:w-1/2 md:w-1/3 lg:w-auto'>
                <img src={Medstore} alt='Medical Store' className='w-[60px]' />
                <p className='text-md font-semibold text-gray-400 '>Medical Store</p>
            </div>
            <div className='flex flex-col gap-y-2 justify-center items-center hover:text-sky-400 hover:rounded-lg hover:border-2 hover:border-sky-400   px-10 py-4 w-1/2 sm:w-1/2 md:w-1/3 lg:w-auto'>
                <img src={Ambulance} alt='Ambulance' className='w-[60px]' />
                <p className='text-md font-semibold text-gray-400 '>Ambulance</p>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Services