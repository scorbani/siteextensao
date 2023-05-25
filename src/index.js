import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/Navbar/Navbar'
import MainSection from './components/MainSection/MainSection';
import InfoSection from './components/InfoSection/InfoSection';

import GoogleFontLoader from 'react-google-font-loader';
import DownloadSection from './components/DownloadSection/DownloadSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleFontLoader
  fonts={[    {      font: 'Montserrat',      weights: [400, '400i'],
    },
  ]}
/>
    <Navbar />
    <MainSection />
    <InfoSection/>
    <DownloadSection />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
