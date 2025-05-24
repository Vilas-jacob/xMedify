import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import Offer1 from '../../assets/offer_1.png';
import Offer2 from '../../assets/offer_2.png';
import { Pagination } from 'swiper/modules';

function Offers() {
  return (
    <>
        <div className='flex justify-center mt-10 mx-30 mb-10'>
            <Swiper slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    767: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                }}
                style={{ width: '100%', height: 'auto', paddingBottom: '50px' }} >
                <SwiperSlide>
                    <img src={Offer1} alt='Offer 1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Offer2} alt='Offer 2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Offer1} alt='Offer 1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Offer2} alt='Offer 2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Offer1} alt='Offer 1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Offer2} alt='Offer 2' />
                </SwiperSlide>
            </Swiper>

        </div>
    </>
  )
}

export default Offers