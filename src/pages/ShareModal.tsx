import React from 'react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-4">
          <div className="grid gap-4">
            <div className="flex justify-around py-4">
              {[
                { icon: "message-circle", label: "WhatsApp", color: "bg-green-500" },
                { icon: "mail", label: "Email", color: "bg-blue-600" },
                { icon: "message-circle", label: "Messenger", color: "bg-blue-500" },
                { icon: "share-2", label: "Telegram", color: "bg-black" },
              ].map((item) => (
                <button key={item.label} className="flex flex-col items-center gap-1">
                  <div className={`h-12 w-12 flex items-center justify-center rounded-full ${item.color} text-white`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </div>
                  <span className="text-xs">{item.label}</span>
                </button>
              ))}
            </div>
            
            <div className="flex flex-col gap-2">
              {[
                { icon: "file-text", label: "Save as PDF" },
                { icon: "printer", label: "Print" },
                { icon: "users", label: "Share with contacts" },
              ].map((item) => (
                <button key={item.label} className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t p-4 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
