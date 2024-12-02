import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center">
          <div className="w-24 h-24 mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-full h-full"
            >
              <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zM4 6l8 4m0 0l8-4m-8 4v12" />
              <path d="M12 12l4-2v4l-4 2-4-2v-4l4 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">MEDTECH</h1>
        </div>
        
        <div className="space-y-4 mt-8">
          <Link to="/login" className="w-full">
            <button
              className="mb-4 w-full bg-black text-white hover:bg-gray-800 py-6 text-lg rounded"
            >
              LOGIN
            </button>
          </Link>
          
          <Link to="/register" className="w-full">
            <button
              className="mt-4 w-full bg-black text-white hover:bg-gray-800 py-6 text-lg rounded"
            >
              REGISTER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

