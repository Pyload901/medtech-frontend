import React from "react";
import { useNavigate } from "react-router-dom";
import medtechicon from '../assets/medtech.png';

export const ExamsList: React.FC = () => {
  const navigate = useNavigate();
  const [exams, setExams] = React.useState([]);
  React.useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/examinations/self', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setExams(data);
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching exams:', error);
      })
  }, []);
  // Lista de exámenes con el hospital correspondiente
  // const exams = [
  //   { name: "Blood Test", hospital: "City General Hospital", date: "Dec 10, 2024", id: 1 },
  //   { name: "MRI Scan", hospital: "Metro Health Clinic", date: "Dec 12, 2024", id: 2 },
  //   { name: "X-Ray", hospital: "Central Diagnostic Center", date: "Dec 14, 2024", id: 3 },
  //   { name: "Ultrasound", hospital: "Green Valley Hospital", date: "Dec 15, 2024", id: 4 },
  // ];

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
          {/* Exams List Card */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm text-gray-600 mb-4">Your Upcoming Exams</h2>
            
            {exams.map((exam) => (
              <div key={exam.id} className="p-4 mb-4 bg-white shadow-md rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">{exam.name}</h3>
                {/* <p className="text-sm text-gray-600">Hospital: {exam.hospital}</p> */}
                <p className="text-sm text-gray-600">Date: {exam.date}</p>
              </div>
            ))}
          </div>

          {/* Button to go back */}
          <div className="flex justify-center mt-6">
          <button
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-600"
              onClick={() => navigate("/dashboard")}
            >
              Back to Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};