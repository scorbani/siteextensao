import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from './components/Navbar/Navbar'
import MainSection from './components/MainSection/MainSection';
import InfoSection from './components/InfoSection/InfoSection';
import GuideSection from './components/GuideSection/GuideSection';

import TeamSection from './components/teamSection/TeamSection';
import DisclaimerSection from './components/DisclaimerSection/DisclaimerSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Navbar />
    <MainSection />
    <InfoSection />
    <GuideSection />
    <TeamSection />
    <DisclaimerSection />
  </React.StrictMode>
);

