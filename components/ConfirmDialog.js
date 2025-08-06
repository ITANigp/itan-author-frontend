import React from "react";

const ConfirmDialog = ({ isOpen, onClose, onConfirm, message = "Are you sure?" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-md shadow-lg w-80 text-center">
        <p className="text-lg mb-4">{message}</p>
        <div className="flex justify-between gap-4">
          <button
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
