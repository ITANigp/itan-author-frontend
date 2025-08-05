import React from "react";

const ErrorModal = ({ show, onClose, title, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className="relative bg-white rounded-lg shadow-lg p-5 w-full max-w-sm sm:max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 mt-2">
            {title}
          </h3>
          <div className="mt-2 px-1 py-3">
            <p className="text-sm text-gray-500">{message}</p>
          </div>
          <div className="mt-4 px-1 py-1">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
