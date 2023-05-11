import React from 'react';
import './MainSection.css';

function MainSection() {
    return (
        <div className="main-section">
            <div className="left-div">
                <h1>Aplicativos para auxiliar projetos residenciais</h1>
                <span>Isso aqui é um subtitulo curto para uma breve explicação sobre o tema</span>
                <div>
                    <button className='btn-download'>Downloads</button>
                </div>
            </div>
        </div>
    );
}

export default MainSection;
