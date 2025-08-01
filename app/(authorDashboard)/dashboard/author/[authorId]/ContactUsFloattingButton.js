// This file is part of the Itan Author Dashboard project. It provides a floating button for authors to contact support via email.
// components/ContactUsFloatingButton.js
import Link from "next/link";
import { Mail } from "lucide-react"; // Optional: icon lib like lucide-react

export default function ContactUsFloatingButton() {
  return (
    <Link
      href="https://mail.google.com/mail/?view=cm&fs=1&to=support@itan.app"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#E50913] text-white rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300 flex items-center gap-2 px-4 py-3"
    >
      <Mail className="w-5 h-5" />
      Contact Us
    </Link>
  );
}
