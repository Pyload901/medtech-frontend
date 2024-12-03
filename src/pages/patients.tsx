import React from 'react';
import { useNavigate } from 'react-router-dom';
import medtechicon from '../assets/medtech.png';

export const Patients: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = (patientName: string) => {
    navigate(`/patienthealth`);
    //navigate(`/patient/${patientName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="w-20 h-12 mb-4">
              <img src={medtechicon} alt="Medtech" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <h3>all patients</h3>
          
          {/* Cards */}
          {["1:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "9:00 pm", "9:00 am"].map((time, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg">
              <h2 className="text-sm text-gray-600 mb-2">{time} Patient</h2>
              <ul className="space-y-2">
                <li
                  className="flex items-center cursor-pointer"
                  onClick={() => handleRedirect(`/health`)} 
                >
                  <span className="mr-2">👤</span>
                  <span>Ernesto Bricenio</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
