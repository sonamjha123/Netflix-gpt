import React from 'react';

function Modal({ isOpen, onClose, title, children, onConfirm, confirmText = "Confirm" }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        <div className="flex justify-end space-x-2">
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          {onConfirm && (
            <button 
              onClick={() => {
                onConfirm();
                onClose();
              }} 
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
