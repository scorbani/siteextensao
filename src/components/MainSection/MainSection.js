import React from 'react';
import './MainSection.css';

import { AiFillCheckCircle } from "react-icons/ai";


function MainSection() {

    const handleClick = () => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSdKry_BjDfoesmbzc-IzRZGLVhA2uJ_Id8uCcBAbz6rm8Kr7A/viewform?embedded=true", '_blank');
    }

    return (
        <div className="main-section">
            <div className="main-container">
                <h1>PyCasas</h1>
                <span>Transforme sua visão de construção em realidade, construindo <br></br> com confiança e qualidade.</span>
                <ul className="benefits-list">
                    <li className='benefits-item'><AiFillCheckCircle></AiFillCheckCircle><p>Eficiência na escolha das dimensões</p></li>
                    <li className='benefits-item'><AiFillCheckCircle></AiFillCheckCircle><p>Redução de desperdício de materiais</p></li>
                    <li className='benefits-item'><AiFillCheckCircle></AiFillCheckCircle><p>Melhoria no planejamento da construção</p></li>
                    <li className='benefits-item'><AiFillCheckCircle></AiFillCheckCircle><p>Prevenção de falhas e riscos</p></li>
                </ul>
                <div>
                    <button className='btn-download' onClick={handleClick}>Download</button>
                </div>
            </div>
        </div>
    );
}

export default MainSection;
