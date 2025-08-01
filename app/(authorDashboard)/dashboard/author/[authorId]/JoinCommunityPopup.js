// for future use
// components/JoinCommunityPopup.js
import { X } from "lucide-react";

export default function JoinCommunityPopup({ onClose }) {
  return (
    <div className="fixed bottom-20 left-6 z-50 bg-red-600 border border-red-700 shadow-xl rounded-xl p-6 w-[360px] animate-fade-in text-white">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white hover:text-gray-200"
      >
        <X className="w-4 h-4" />
      </button>

      <h3 className="text-lg font-semibold mb-2">Join the ITAN Community</h3>
      <p className="text-sm mb-4">
        Get access to over 2,000 authors and readers and a wealth of libraries of over 1,500 books.
      </p>

      <button className="bg-white text-red-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300">
        Join
      </button>
    </div>
  );
}
