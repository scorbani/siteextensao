import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Navbar from './components/Navbar/Navbar'
import MainSection from './components/MainSection/MainSection';
import InfoSection from './components/InfoSection/InfoSection';
import GuideSection from './components/GuideSection/GuideSection';

import FormSection from './components/FormSection/FormSection';
import TeamSection from './components/teamSection/TeamSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Navbar />
    <MainSection />
    <InfoSection/>
    <GuideSection/>
    <FormSection />
    <TeamSection/>
    {/* <App /> */}
  </React.StrictMode>
);

