import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Ensure Route is also imported
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import Myprofile from './pages/Myprofile';
import About from './pages/About';
import Contact from './pages/Contact';
import MyAppointments from './pages/MyAppointments';
import Appointments from './pages/Appointments';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/my-profile" element={<Myprofile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointments/>} />
      </Routes>
    </div>
  );
}

export default App;

