import React, { useState } from 'react';
import { ShareModal } from './ShareModal';

export const Dashboard: React.FC = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const menuItems = [
    { icon: "📁", label: "my files" },
    { icon: "📋", label: "Recetas" },
    { icon: "🔬", label: "X-Rays" },
    { icon: "🧪", label: "Examenes" },
    { icon: "👨‍⚕️", label: "Doctores" },
    { icon: "🏥", label: "Hospitales" },
    { icon: "🛡️", label: "Insurance" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">MEDTECH</span>
            </div>
            <h1 className="text-xl">Homepage</h1>
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
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
        <div className="flex justify-around items-center h-16">
          <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs">mi salud</span>
          </button>
          <button className="flex flex-col items-center" onClick={() => setIsShareModalOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="text-xs">compartir</span>
          </button>
          <button className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-xs">navegar</span>
          </button>
        </div>
      </div>

      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
    </div>
  );
};

