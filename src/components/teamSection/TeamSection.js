import React from 'react';
import './TeamSection.css';




function TeamSection() {
    return (
        <div className="team-section">
            <h2>Responsáveis pelo projeto</h2>
            <div className='people-list'>
                <div className='person'>
                    <div id="person-1" className='person-img'></div>
                    <p className="person-title">Silvia Corbani</p>
                    <p className='person-text'>Coordenadora do projeto</p>
                    <a href="https://www.linkedin.com/in/silvia-corbani-97582316/" target="_blank" rel="noopener noreferrer">Perfil Profissional</a>
                </div>
                <div className='person'>
                    <div id="person-3" className='person-img'></div>
                    <p className="person-title">André Pereira</p>
                    <p className='person-text'>Coordenador</p>
                    <a href="https://lcc-uff.github.io/andre" target="_blank" rel="noopener noreferrer">Perfil Profissional</a>
                </div>
                <div className='person'>
                    <div id="person-2" className='person-img'></div>
                    <p className="person-title">Victor Lamosa</p>
                    <p className='person-text'>Integrante</p>
                    <p className='disabled'>Perfil Profissional</p>
                </div>
                <div className='person'>
                    <div id="person-4" className='person-img'></div>
                    <p className="person-title">Cainã Bittencourt</p>
                    <p className='person-text'>Integrante</p>
                    <a href="https://www.linkedin.com/in/cain%C3%A3-bittencourt-232955236/" target="_blank" rel="noopener noreferrer">Perfil Profissional</a>
                </div>
                <div className='person'>
                    <div id="person-8" className='person-img'></div>
                    <p className="person-title">Bernardo Melo</p>
                    <p className='person-text'>cargo</p>
                    <p className='disabled'>Perfil Profissional</p>
                </div>


                <div className='person'>
                    <div id="person-5" className='person-img'></div>
                    <p className="person-title">Bernardo Ventura</p>
                    <p className="person-text">Desenvolvedor Web</p>
                    <a href="https://www.linkedin.com/in/bernardo-ventura-b7583922a/" target="_blank" rel="noopener noreferrer">Perfil Profissional</a>
                </div>
                <div className='person'>
                    <div id="person-6" className='person-img'></div>
                    <p className="person-title">Lucas Vilar</p>
                    <p className='person-text'>cargo</p>
                    <a href="https://www.linkedin.com/in/lucas-vilar-42b988236/" target="_blank" rel="noopener noreferrer">Perfil Profissional</a>
                </div>
                <div className='person'>
                    <div id="person-9" className='person-img'></div>
                    <p className="person-title">Wemerson Caxias</p>
                    <p className='person-text'>cargo</p>
                    <a href="https://www.linkedin.com/in/wemersoncaxias/" target="_blank" rel="noopener noreferrer">Perfil Profissional</a>
                </div>
                <div className='person'>
                    <div id="person-10" className='person-img'></div>
                    <p className="person-title">Luiza Draeger</p>
                    <p className='person-text'>cargo</p>
                    <a href="https://www.linkedin.com/in/luiza-draeger-376a561b8/" target="_blank" rel="noopener noreferrer">Perfil Profissional</a>
                </div>
                

            </div>
        </div>
    );
}

export default TeamSection;
