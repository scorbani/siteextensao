import React from 'react';
import './Estrutura.css';

import { Swiper, SwiperSlide } from 'swiper/react'

import casa1 from '../../assets/casa1.png';
import casa2 from '../../assets/casa2.png';
import casa3 from '../../assets/casa3.png';
import casa4 from '../../assets/casa4.png';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Estrutura() {

    const listaImagens = [
        { id: 1, image: casa1 },
        { id: 2, image: casa2 },
        { id: 3, image: casa3 },
        { id: 4, image: casa4 },
    ]

    return (
        <div className="estrutura-container">
            <div className="texto">
                <h2>Título</h2>
                <p>texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto
                </p>
            </div>

            <div className='slider'>
                <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1} 
                pagination={{ clickable: true }}
                navigation>
                    {listaImagens.map( (item) => ( 
                        <SwiperSlide key ={item.id}>
                            <img src={item.image} alt="" className="slide-image"></img>                           
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Estrutura;