import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCamera } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center max-w-4xl mx-auto w-full">
        {/* ITAN Logo */}
        {/* <div className="text-red-600 text-2xl font-bold">ITAN</div> */}
        <Image src="/images/logo.png" width={40} height={40} alt="Itan"/>
        {/* Progress Indicator */}
        <div className="text-gray-700 text-lg font-semibold">1/3</div>
      </header>

      {/* Main Content Area */}
      <main className="flex flex-col items-center justify-center text-center mt-16 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Upload a profile picture
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Add a profile picture for us to know you more
        </p>

        {/* Profile Picture Placeholder */}
        <div className="relative w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center shadow-lg mb-12 cursor-pointer">
          {/* User Icon */}
          <FontAwesomeIcon icon={faUser} className="w-24 h-24 text-gray-500" />
          {/* Camera Icon for Upload */}
          <div className="absolute bottom-2 right-2 rounded-full">
            <FontAwesomeIcon icon={faCamera} className="w-6 h-6 text-gray-500" />
          </div>
          {/* Hidden input for file upload */}
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
      </main>

      {/* Next Button */}
      <footer className="absolute bottom-0 left-0 right-0 p-6 flex justify-center items-center max-w-4xl mx-auto w-full">
        <button className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-3 px-12 rounded-lg shadow-md transition duration-300 ease-in-out">
          Next
        </button>
      </footer>
    </div>
  );
};

export default App;
