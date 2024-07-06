import React from 'react';
import './GuideSection.css';

import { useState } from 'react';
import Aplicativo from '../GuideLayout/Aplicativo';
import Manual from '../GuideLayout/Manual';
import Normas from '../GuideLayout/Normas';
import Estrutura from '../GuideLayout/Estrutura';


function GuideSection() {

    const [component, setComponent] = useState('1')


    return (
        <div className="guide-background">
            <h2 className='guide-title'>Sobre o projeto</h2>
            <div className="guide-section">
                
                {/* <div id="img-id" className="img-class"></div> */}

                <div className="guide-container">
                    <div className="guide-navbar">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <button onClick={() => setComponent('1')} className="nav-btn">Aplicativo</button>
                            </li>

                            <li className="nav-item">
                                <button onClick={() => setComponent('2')} className="nav-btn">Estrutura</button>
                            </li>

                            <li className="nav-item">
                                <button onClick={() => setComponent('3')} className="nav-btn">Manual</button>
                            </li>

                            <li className="nav-item">
                                <button onClick={() => setComponent('4')} className="nav-btn">Normas</button>
                            </li>
                        </ul>
                    </div>

                    <div className="components">
                        {component === '1' ? 
                            <Aplicativo></Aplicativo>    
                            :
                            component === '2'?
                            <Estrutura/>
                            :
                            component === '3'?
                            <Manual/>
                            :
                            <Normas/>
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default GuideSection;
