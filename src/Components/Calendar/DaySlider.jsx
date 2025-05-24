import { addDays, format, isEqual, startOfDay } from 'date-fns';
import React, { useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import PrevIcon from '../../assets/prevIcon.png';
import NextIcon from '../../assets/nextIcon.png';
import Styles from './DaySlider.module.css';

function DaySlider({totalSlots,dateSelected,setDateSelected}) {
    const today = new Date();
    const days = [];
    //const[selectedDate,setSelectedDate]=useState(startOfDay(today));
    

    for(let i=0;i<7;i++){
        const nextDay = startOfDay(addDays(today, i));

        let dayLabel;
        if(i==0){
            dayLabel = "Today";
        } else if(i==1){
            dayLabel="Tomorrow";
        } else {
            dayLabel = format(nextDay,'EEE, d MMM');
        }

        days.push({
            label: dayLabel,
            date: nextDay,
        });
    }

   //console.log(days);

    const handleDateClick=(day)=>{
        
        setDateSelected(startOfDay(day.date));
    }

    
  return (
    <>
        <div className="pt-3 relative mx-4">
            <div className="mb-3 border-b border-gray-300"></div>
            <Swiper
                slidesPerView={3}
                loop={false}
                spaceBetween={11}
                className={Styles.swiperStyles}
                breakpoints={{
                767: {
                    spaceBetween: 30,
                    slidesPerView: 3,
                },
                }}
            >
                {days.map((day, index) => {
                        const isSelected = isEqual(day.date, dateSelected);
                        

                        return (
                            <SwiperSlide key={index} className={Styles.swiperslide}>
                                <div
                                    className="text-center cursor-pointer"
                                    onClick={() => handleDateClick(day)}
                                >
                                    <p className={`text-xs md:text-lg ${isSelected ? 'font-bold' : 'font-normal'}`}>
                                        {day.label}
                                    </p>
                                    <p className="text-xs md:text-sm text-green-600">
                                        {`${totalSlots} Slots Available`}
                                    </p>

                                    <div
                                        className={`h-1 md:h-1.5 w-full md:w-[calc(100%-50px)] relative bottom-0 mx-auto mt-1 ${
                                            isSelected ? 'bg-blue-500' : 'bg-transparent'
                                        }`}
                                    ></div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                    <SlidePrevButton />
                    <SlideNextButton />
            </Swiper>

            <div
                className="h-1 md:h-1.5 w-full md:w-[calc(100%-150px)] bg-gray-200 mt-1 absolute bottom-0 left-1/2 transform -translate-x-1/2"
            ></div>
         </div>
  
    </>
  )
}


function SlidePrevButton() {
    const swiper = useSwiper();
    return (
        <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2">
            <img 
                src={PrevIcon}
                alt='Previous Icon'
                onClick={() => swiper.slidePrev()}
                className='h-12 w-12 cursor-pointer z-10 bg-white'
            />
        </div>
    );
}

function SlideNextButton() {
    const swiper = useSwiper();
    return (
        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
            <img 
                src={NextIcon}
                alt='Next Icon'
                onClick={() => swiper.slideNext()}
                className='h-12 w-12 cursor-pointer z-10 bg-white'
            />
        </div>
    );
}


export default DaySlider