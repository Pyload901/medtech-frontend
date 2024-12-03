import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Appointments } from './pages/Appointments';
import { Appointment } from './pages/Appointment';
import { HealthCheck } from './pages/Health';
import { Doctordashboard } from './pages/DoctorDashboard';
import { Navbar } from './components/Navbar'; 
import { Patients } from './pages/patients';
import { Patienthealth } from './pages/patienthealth';
import {Exams}  from './pages/exams';
import { AddExams } from './pages/Addexams';
import {Xray} from './pages/Xray';
import {Files} from './pages/Files';
import {MedicationList} from './pages/Medicine';
import {ExamsList} from './pages/Hospital';
import {DoctorsHistory} from './pages/Doctors';
import {HospitalsHistory} from './pages/HospitalList';
import {InsuranceList}  from './pages/Insurance';

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
        <Route path="/doctor/dashboard" element={<Doctordashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patienthealth" element={<Patienthealth />} />
        <Route path="/examenes" element={<Exams />} />
        <Route path="/addexams" element={<AddExams />} />
        <Route path="/xrays" element={<Xray />} />
        <Route path="/files" element={<Files />} />
        <Route path="/medication" element={<MedicationList />} />
        <Route path="/ExamsList" element={<ExamsList />} />
        <Route path="/doctors" element={<DoctorsHistory />} />
        <Route path="/hospitals" element={<HospitalsHistory />} />
        <Route path="/insurance" element={<InsuranceList />} />
      </Routes>
      <Navbar />
    </Router>
    </>
  );
};

export default App;

