import React from 'react';
import Dentistry from '../../assets/Dentistry.png';
import Stethoscope from '../../assets/Stethoscope.png';
import Cardiology from '../../assets/Cardiology.png';
import Mri_Resonance from '../../assets/Mri_Resonance.png';
import Blood_Test from '../../assets/Blood_Test.png';
import Piscologist from '../../assets/Piscologist.png';
import Labs from '../../assets/Dentistry.png';
import X_Ray from '../../assets/X-Ray.png';

function Specialisation() {
  return (
    <>
        <div className='w-full bg-gradient-to-b from-blue-50 to-blue-100'>
            <div className='flex flex-col justify-center items-center gap-y-4'>
                <div className='py-8'>
                    <h1 className='text-blue-800 font-bold text-2xl'>Find By Specialisation</h1>
                </div>
                <div className='grid grid-cols-4 gap-4 justify-center items-center '>
                    <div className='flex flex-col gap-y-2 w-[270px] h-[180px] justify-center items-center bg-white rounded-lg hover:text-sky-400 hover:rounded-lg hover:border-2 hover:border-sky-400   px-10 py-4'>
                        <img src={Dentistry} alt='Dentistry' className='w-[80px]' />
                        <p className='text-md font-semibold text-gray-400 '>Dentistry</p>
                    </div>
                    <div className='flex flex-col gap-y-2 w-[270px] h-[180px] justify-center items-center bg-white rounded-lg hover:text-sky-400 hover:rounded-lg hover:border-2 hover:border-sky-400   px-10 py-4'>
                        <img src={Stethoscope} alt='Stethoscope' className='w-[80px]' />
                        <p className='text-md font-semibold text-gray-400 '>Primary care</p>
                    </div>
                    <div className='flex flex-col gap-y-2 w-[270px] h-[180px] justify-center items-center bg-white rounded-lg hover:text-sky-400 hover:rounded-lg hover:border-2 hover:border-sky-400   px-10 py-4'>
                        <img src={Cardiology} alt='Cardiology' className='w-[80px]' />
                        <p className='text-md font-semibold text-gray-400 '>Cardiology</p>
                    </div>
                    <div className='flex flex-col gap-y-2 w-[270px] h-[180px] justify-center items-center bg-white rounded-lg hover:text-sky-400 hover:rounded-lg hover:border-2 hover:border-sky-400   px-10 py-4'>
                        <img src={Mri_Resonance} alt='MRI Resonance' className='w-[80px]' />
                        <p className='text-md font-semibold text-gray-400 '>MRI Resonance</p>
                    </div>
                    <div className='flex flex-col gap-y-2 w-[270px] h-[180px] justify-center items-center bg-white rounded-lg hover:text-sky-400 hover:rounded-lg hover:border-2 hover:border-sky-400   px-10 py-4'>
                        <img src={Blood_Test} alt='Blood Test' className='w-[80px]' />
                        <p className='text-md font-semibold text-gray-400 '>Blood Test</p>
                    </div>
                    <div className='flex flex-col gap-y-2 w-[270px] h-[180px] justify-center items-center bg-white rounded-lg hover:text-sky-400 hover:rounded-lg hover:border-2 hover:border-sky-400   px-10 py-4'>
                        <img src={Piscologist} alt='Piscologist' className='w-[80px]' />
                        <p className='text-md font-semibold text-gray-400 '>Piscologist</p>
                    </div>
                    <div className='flex flex-col gap-y-2 w-[270px] h-[180px] justify-center items-center bg-white rounded-lg hover:text-sky-400 hover:rounded-lg hover:border-2 hover:border-sky-400   px-10 py-4'>
                        <img src={Labs} alt='Laboratory' className='w-[80px]' />
                        <p className='text-md font-semibold text-gray-400 '>Laboratory</p>
                    </div>
                    <div className='flex flex-col gap-y-2 w-[270px] h-[180px] justify-center items-center bg-white rounded-lg hover:text-sky-400 hover:rounded-lg hover:border-2 hover:border-sky-400   px-10 py-4'>
                        <img src={X_Ray} alt='X-Ray' className='w-[80px]' />
                        <p className='text-md font-semibold text-gray-400 '>X-Ray</p>
                    </div>
                </div>
                <div className='mb-8'>
                    <button className='bg-sky-400 w-30 h-10 md:w-50 mt-4 md:py-2 md:px-2 lg:px-4 text-sm lg:text-md xl:text-lg rounded-xl text-white align-center'>
                        View All
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Specialisation