import React from 'react';
import './Manual.css';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import m1 from '../../assets/manual/manual-1.png'
import m2 from '../../assets/manual/manual-2.png'
import m3 from '../../assets/manual/manual-3.png'
import m4 from '../../assets/manual/manual-4.png'
import m5 from '../../assets/manual/manual-5.png'
import m6 from '../../assets/manual/manual-6.png'
import m7 from '../../assets/manual/manual-7.png'
import m8 from '../../assets/manual/manual-8.png'
import m9 from '../../assets/manual/manual-9.png'
import m10 from '../../assets/manual/manual-10.png'
import m11 from '../../assets/manual/manual-11.png'
import m12 from '../../assets/manual/manual-12.png'
import m13 from '../../assets/manual/manual-13.png'


function Manual() {

    const manualImgs = [
        {id:1 , image: m1},
        {id:2 , image: m2}, 
        {id:3 , image: m3}, 
        {id:4 , image: m4}, 
        {id:5 , image: m5}, 
        {id:6 , image: m6}, 
        {id:7 , image: m7}, 
        {id:8 , image: m8}, 
        {id:9 , image: m9}, 
        {id:10 , image: m10}, 
        {id:11 , image: m11}, 
        {id:12 , image: m12},
        {id:13 , image: m13},
    ]

    return (
        <div className="manual-container">
            <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1} 
                pagination={{ clickable: true }}
                navigation>
                    {manualImgs.map( (item) => ( 
                        <SwiperSlide key ={item.id}>
                            <img src={item.image} alt="" className="manual-img"></img>                           
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

export default Manual;