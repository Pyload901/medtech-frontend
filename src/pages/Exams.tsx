import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Exams: React.FC = () => {
  const navigate = useNavigate();

  // Estado para manejar la selección de horarios y medicinas
  const [selectedTime, setSelectedTime] = useState<TimeOfDay>("morning");
  type TimeOfDay = "morning" | "afternoon" | "night";

  const [medicineDetails, setMedicineDetails] = useState<Record<TimeOfDay, string>>({
    morning: "",
    afternoon: "",
    night: "",
  });


  const handleMedicineInputChange = (value: string) => {
    setMedicineDetails((prev) => ({
      ...prev,
      [selectedTime]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-lg font-bold">Patient Health</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm font-semibold text-gray-600 mb-4">Medicine</h2>
            <div className="mb-4">
              <label htmlFor="time-dropdown" className="block text-gray-700 mb-2">
                Select Time:
              </label>
              <select
                id="time-dropdown"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value as TimeOfDay)}
                className="w-full p-2 border rounded">
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="night">Night</option>
              </select>
            </div>
            <div>
              <label htmlFor="medicine-input" className="block text-gray-700 mb-2">
                Medicine for {selectedTime.charAt(0).toUpperCase() + selectedTime.slice(1)}:
              </label>
              <input
                id="medicine-input"
                type="text"
                value={medicineDetails[selectedTime]}
                onChange={(e) => handleMedicineInputChange(e.target.value)}
                placeholder={`Enter medicine for ${selectedTime}...`}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

      <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm font-semibold text-gray-600 mb-4">Medicine</h2>
            <div className="mb-4">
              <label htmlFor="time-dropdown" className="block text-gray-700 mb-2">
                Select Time:
              </label>
              <select
                id="time-dropdown"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value as TimeOfDay)}
                className="w-full p-2 border rounded"
              >
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="night">Night</option>
              </select>
            </div>
            <div>
              <label htmlFor="medicine-input" className="block text-gray-700 mb-2">
                Medicine for {selectedTime.charAt(0).toUpperCase() + selectedTime.slice(1)}:
              </label>
              <input
                id="medicine-input"
                type="text"
                value={medicineDetails[selectedTime]}
                onChange={(e) => handleMedicineInputChange(e.target.value)}
                placeholder={`Enter medicine for ${selectedTime}...`}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
 <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-sm font-semibold text-gray-600 mb-4">Medicine</h2>
            <div className="mb-4">
              <label htmlFor="time-dropdown" className="block text-gray-700 mb-2">
                Select Time:
              </label>
              <select
                id="time-dropdown"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value as TimeOfDay)}
                className="w-full p-2 border rounded"
              >
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="night">Night</option>
              </select>
            </div>
            <div>
              <label htmlFor="medicine-input" className="block text-gray-700 mb-2">
                Medicine for {selectedTime.charAt(0).toUpperCase() + selectedTime.slice(1)}:
              </label>
              <input
                id="medicine-input"
                type="text"
                value={medicineDetails[selectedTime]}
                onChange={(e) => handleMedicineInputChange(e.target.value)}
                placeholder={`Enter medicine for ${selectedTime}...`}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button
              className="bg-black text-white py-2 px-4 rounded hover:bg-black"
              onClick={() => navigate("/patienthealth")}
            >
              Back to Home
            </button>
            <button
              className="bg-white text-black py-2 px-4 rounded hover:bg-red-200"
              onClick={() => navigate("/addexams")}
            >
              Add Exams
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
