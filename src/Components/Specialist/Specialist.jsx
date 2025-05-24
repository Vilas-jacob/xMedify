import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import "swiper/css/pagination";
import Doctor1 from '../../assets/lesley.png';
import Doctor2 from '../../assets/ahmad.png';
import Doctor3 from '../../assets/heena.png';
import Doctor4 from '../../assets/ankur.png';
import Doctor5 from '../../assets/stevens.png';
import { Autoplay, Pagination } from 'swiper/modules';

function Specialist() {
  return (
    <>
        <div className='w-full flex flex-col bg-white justify-center items-center mb-10'>
            <div className='py-5 pb-1'>
                <p className='text-blue-800 text-2xl font-bold'>Our Medical Specialist</p>
            </div>
            <div className='w-full'>
                <Swiper 
                    slidesPerView={2}
                    spaceBetween={5}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay:2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        767: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Autoplay,Pagination]}
                    style={{ height: '340px' }}
                   
                >
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <img src={Doctor1} alt='Dr. Lesley Hull' className='w-48 h-52 object-cover' />
                            <h3 className='text-blue-800 text-lg'>Dr. Lesley Hull</h3>
                            <p className='text-sky-400 text-md'>Medicine</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <img src={Doctor2} alt='Dr. Ahmad Khan' className='w-48 h-52 object-cover' />
                            <h3 className='text-blue-800 text-lg'>Dr. Ahmad Khan</h3>
                            <p className='text-sky-400 text-md'>Neurologist</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <img src={Doctor3} alt='Dr. Heena Sachdev' className='w-48 h-52 object-cover' />
                            <h3 className='text-blue-800 text-lg'>Dr. Heena Sachdev</h3>
                            <p className='text-sky-400 text-md'>Orthopadics</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <img src={Doctor4} alt='Dr. Ankur Sharma' className='w-48 h-52 object-cover' />
                            <h3 className='text-blue-800 text-lg'>Dr. Ankur Sharma</h3>
                            <p className='text-sky-400 text-md'> Medicine</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <img src={Doctor5} alt='Dr. Ahmad Stevens' className='w-48 h-52 object-cover' />
                            <h3 className='text-blue-800 text-lg'>Dr. Ahmad Stevens</h3>
                            <p className='text-sky-400 text-md'>Neurologist</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <img src={Doctor1} alt='Dr. Lesley Hull' className='w-48 h-52 object-cover' />
                            <h3 className='text-blue-800 text-lg'>Dr. Lesley Hull</h3>
                            <p className='text-sky-400 text-md'>Medicine</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <img src={Doctor2} alt='Dr. Ahmad Khan' className='w-48 h-52 object-cover' />
                            <h3 className='text-blue-800 text-lg'>Dr. Ahmad Khan</h3>
                            <p className='text-sky-400 text-md'>Neurologist</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <img src={Doctor3} alt='Dr. Heena Sachdev' className='w-48 h-52 object-cover' />
                            <h3 className='text-blue-800 text-lg'>Dr. Heena Sachdev</h3>
                            <p className='text-sky-400 text-md'>Orthopadics</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <img src={Doctor4} alt='Dr. Ankur Sharma' className='w-48 h-52 object-cover' />
                            <h3 className='text-blue-800 text-lg'>Dr. Ankur Sharma</h3>
                            <p className='text-sky-400 text-md'>Medicine</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <img src={Doctor5} alt='Dr. Ahmad Stevens' className='w-48 h-52 object-cover' />
                            <h3 className='text-blue-800 text-lg'>Dr. Ahmad Stevens</h3>
                            <p className='text-sky-400 text-md'>Neurologist</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </>
  )
}

export default Specialist