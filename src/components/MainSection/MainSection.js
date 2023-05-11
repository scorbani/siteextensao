import React from 'react';
import './MainSection.css';

function MainSection() {
    return (
        <div className="main-section">
            <div className="left-div">
                <h1>Programas Computacionais para projeto de edificações familiares</h1>
                <p>Subtitulo curto</p>
                <div>
                    <button className='btn-download'>Downloads</button>
                </div>
            </div>
        </div>
    );
}

export default MainSection;
