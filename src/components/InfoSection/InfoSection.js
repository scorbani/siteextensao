import React from 'react';
import './InfoSection.css';

import { IoConstruct } from "react-icons/io5";


function InfoSection() {
    return (
        <div className="info-section">
            <h2>Objetivos</h2>
            <div className='goals-list'>
                <div className='goal'>
                    <div id="goal-1" className='goal-img'></div>
                    <p className="goal-title">Construir com Qualidade</p>
                    <p className='goal-text'>Temos a missão de melhorar a qualidade da construção no país, facilitando a escolha das dimensões dos 
                    elementos estruturais. Acreditamos que ao oferecer uma ferramenta acessível e intuitiva,
                     estamos contribuindo para edificações mais seguras e duráveis, garantindo o bem-estar de todos os envolvidos.</p>
                </div>
                <div className='goal'>
                    <div id="goal-2" className='goal-img'></div>
                    <p className="goal-title">Economia de Materiais</p>
                    <p className='goal-text'>Uma das vantagens significativas de utilizar nosso aplicativo é a economia de materiais.
                     Ao obter estimativas precisas das dimensões dos elementos estruturais, você evitará desperdícios desnecessários,
                     resultando em uma construção mais eficiente, sustentável e econômica. Aproveite os benefícios financeiros e ambientais dessa otimização.</p>
                </div>
                <div className='goal'>
                    <div id="goal-3" className='goal-img'></div>
                    <p className="goal-title">Facilidade</p>
                    <p className='goal-text'>O PyCasas facilita muito a escolha das dimensões dos elementos estruturais.
                     Com uma interface amigável e funcionalidades intuitivas, você poderá obter rapidamente as informações
                     necessárias para tomar decisões informadas. Simplificamos o processo, proporcionando maior agilidade e confiança em suas escolhas de construção.</p>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;