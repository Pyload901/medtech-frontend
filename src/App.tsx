import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Appointments } from './pages/Appointments';
import { Appointment } from './pages/Appointment';
import { HealthCheck } from './pages/Health';
import { Navbar } from './components/Navbar'; 
const App: React.FC = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/health" element={<HealthCheck />} />
        <Route path="/hospital/appointments" element={<Appointments />} />
        <Route path="/hospital/appointment" element={<Appointment />} />
      </Routes>
      <Navbar />
    </Router>
    </>
  );
};

export default App;

