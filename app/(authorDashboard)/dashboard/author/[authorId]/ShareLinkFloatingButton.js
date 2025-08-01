import { useState } from "react";
import { X, Copy, Check } from "lucide-react";

const shareUrl = "https://publish.itan.app";

export default function ContactUsPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // handle error silently
    }
  };

  const togglePopup = () => {
    setIsOpen(true);
    setCopied(false);
  };

  return (
    <>
      {/* Contact Us Button */}
      <button
        onClick={togglePopup}
        className="fixed bottom-6 right-6 z-50 bg-white text-black border border-black rounded-2xl shadow-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 px-4 py-2 text-sm"
      >
        Contact Us
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path
            d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4z"
            fill="red"
          />
          <path d="M2 4l10 9 10-9" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </button>

      {/* Share Link Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 bg-white border border-gray-200 shadow-xl rounded-lg p-4 w-72 animate-fade-in text-black">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          >
            <X className="w-4 h-4" />
          </button>

          <p className="text-sm text-gray-700 mb-2">Copy and share this link:</p>
          <div className="flex items-center justify-between bg-gray-100 rounded px-3 py-2">
            <span className="text-sm text-gray-800 truncate">{shareUrl}</span>
            <button
              onClick={handleCopy}
              className="text-[#E50913] hover:text-red-700 ml-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {copied && (
            <p className="text-green-600 text-xs mt-1 font-medium">Link copied!</p>
          )}
        </div>
      )}
    </>
  );
}
