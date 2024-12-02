import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Files: React.FC = () => {
  const navigate = useNavigate();

  const [files, setFiles] = useState([
    { name: "X-Ray_Chest_2023-12-01.pdf", date: "2023-12-01" },
    { name: "MRI_Brain_2023-11-20.pdf", date: "2023-11-20" },
    { name: "Ultrasound_Abdomen_2023-10-15.pdf", date: "2023-10-15" },
    { name: "CT_Scan_Lung_2023-09-10.pdf", date: "2023-09-10" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const sortedFiles = files.sort((a, b) => (a.date < b.date ? 1 : -1));

  const handleAddFile = () => {
    if (selectedFile) {
      const newFile = {
        name: selectedFile.name,
        date: new Date().toISOString().split("T")[0], // Fecha actual en formato YYYY-MM-DD
      };
      setFiles([...files, newFile]);
      setSelectedFile(null);
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-lg font-bold">My Files</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Available Files</h2>

          {/* Lista de archivos */}
          <ul className="space-y-4">
            {sortedFiles.map((file, index) => (
              <li
                key={index}
                className="p-4 bg-gray-100 rounded-lg flex justify-between items-center hover:bg-gray-200"
              >
                <div>
                  <h3 className="font-medium text-gray-800">{file.name}</h3>
                  <p className="text-sm text-gray-600">Uploaded: {file.date}</p>
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => alert(`Opening ${file.name}`)}
                >
                  Open
                </button>
              </li>
            ))}
          </ul>

          {/* Botón centrado */}
          <div className="flex justify-center mt-6">
            <button
              className="bg-red-200 text-black py-2 px-4 rounded hover:bg-red-300"
              onClick={() => setShowModal(true)}
            >
              Add New File
            </button>
          </div>

          {/* Botón para regresar */}
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

      {/* Modal para agregar archivo */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Add New File</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Select File</label>
                <input
                  type="file"
                  className="w-full p-2 border rounded"
                  onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
                />
              </div>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleAddFile}
                disabled={!selectedFile}
              >
                Add File
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
