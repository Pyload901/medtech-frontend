import React from 'react';
import medtechicon from '../assets/medtech.png';

export const Dashboard: React.FC = () => {
  const menuItems = [
    { icon: "📁", label: "my files" },
    { icon: "📋", label: "Recetas" },
    { icon: "🔬", label: "X-Rays" },
    { icon: "🧪", label: "Examenes" },
    { icon: "👨🏻‍⚕️", label: "Doctores" },
    { icon: "🏥", label: "Hospitales" },
    { icon: "🛡️", label: "Insurance" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="w-20 h-12 mb-4">
              <img src={medtechicon} alt='Medtech'/>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Appointment Card */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm text-gray-600">next Dr appointment</h2>
            <p className="text-lg font-semibold">June 21 2025</p>
          </div>

          {/* Medication Card */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm text-gray-600 mb-2">medication active</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>1 acetaminophen every 12 hours</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>2 tetracetina every 8 hours</span>
              </li>
            </ul>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="h-24 flex flex-col items-center justify-center space-y-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm capitalize">{item.label}</span>
              </button>
            ))}
          </div>
          <div className='flex w-100 justify-center mb-12'>
            <button className="mb-12 w-36 h-24 flex flex-col items-center justify-center space-y-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
              +
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

