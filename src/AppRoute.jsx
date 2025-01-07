import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Menu from './Menu';
import AboutUs from './AboutUs'; 
import { Home2 } from './Home2';
import Meals from './Meals';
import Footers from './Footers';
import AhaFoods from './AhaFoods';
import { Grills } from './Grills';
import AboutUsGrills from './AboutUsGrills';
import GrillsMenu from './GrillsMenu';
import ContactUs from './ContactUs';
import ContactusGrills from './ContactusGrills';
import { AhaCaterings } from './AhaCaterings';
export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ahacaterings" element={<AhaCaterings />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/contactusgrills" element={<ContactusGrills/>} />
        <Route path="/aboutusgrills" element={<AboutUsGrills />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path='/Home2' element={<Home2/>}/>
        <Route path='/Meals' element={<Meals/>}/>
        <Route path='/Footers' element={<Footers/>}/>
        <Route path="/" element={<AhaFoods />} /> 
        <Route path="/Grills" element={<Grills />} /> 
        <Route path="/grillsmenu" element={<GrillsMenu />} /> 

      </Routes>
    </Router>
  );
}
