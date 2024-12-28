import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Menu from './Menu';
import AboutUs from './AboutUs'; 
import { Home2 } from './Home2';
import { Grills } from './Grills';

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path='/Home2' element={<Home2/>}/>
        <Route path='/Grills' element={<Grills/>}/>
      
      </Routes>
    </Router>
  );
}
