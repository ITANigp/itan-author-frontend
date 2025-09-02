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

      // Check for the specific 422 error
      if (err.response && err.response.status === 422) {
        // Display the specific error message from the backend
        const errorMessage =
          err.response.data.message ||
          "Email was already confirmed. Please try signing in.";
        toast.error(errorMessage);
      } else {
        // Handle other, more general errors
        toast.error(
          "Failed to send confirmation email. Please try again later."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <p onClick={() => setIsOpen(true)} className="text-sm">
        Haven’t received your confirmation email?{" "}
        <span className="text-blue-600 underline hover:text-blue-800">
          <br className="sm:hidden"/>
          Resend it here
        </span>
      </p>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center ">
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-[360px] mx-3">
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
