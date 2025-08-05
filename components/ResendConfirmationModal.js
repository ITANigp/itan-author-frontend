"use client";

import { useState } from "react";
import { api } from "@/utils/auth/authorApi";
import { toast } from "react-hot-toast";

export default function ResendConfirmationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResend = async () => {
    if (!email) return toast.error("Email is required");
    setLoading(true);

    try {
      await api.post("/authors/confirmation", {
        author: { email },
      });
      toast.success("Confirmation email sent!");
      setIsOpen(false); // close modal
      setEmail(""); // reset field
    } catch (err) {
      console.error(err);
      toast.error("Failed to send confirmation email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm text-blue-600 underline hover:text-blue-800"
      >
        Haven’t received your confirmation email? Resend it here
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-lg"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">
              Resend Confirmation Email
            </h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleResend}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
            >
              {loading ? "Sending..." : "Send Confirmation Email"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
