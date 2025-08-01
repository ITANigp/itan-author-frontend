// components/ContactUs.js
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="mb-4">
      <div className="flex items-center mb-3">
        <div className="bg-[#E50913]/10 text-[#E50913] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
          10
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
      </div>
      <div className="pl-11">
        <p className="text-gray-700 mb-3">
          For questions or concerns about this policy, contact us at:
        </p>
        <p className="text-gray-800 font-medium">ITAN Global Publishing</p>
        <div className="flex items-center ml-1 mt-2">
          <svg
            className="w-5 h-5 text-[#E50913] mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          <span className="font-medium text-gray-700">Email: </span>
          <Link
            href="mailto:support@itan.app"
            className="ml-1 text-[#E50913] hover:underline"
          >
            support@itan.app
          </Link>
        </div>
      </div>
    </div>
  );
}
