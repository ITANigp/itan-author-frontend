"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import toast from "react-hot-toast";

import LogoutModal from "@/components/LogoutModal";
import { signOutAuthor } from "@/utils/auth/authorApi";
import { useAuthor } from "@/context/AuthorContext";

const layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();
  const isProfilePage = pathname.endsWith("/profile");
  const isPrivacyPage = pathname.endsWith("/security");
  const isNotificationPage = pathname.endsWith("/notification");

  // Use global author context instead of making another API call
  const { profile, loading, clearProfile } = useAuthor();

  const handleLogout = async () => {
    try {
      await signOutAuthor();
      clearProfile(); // Clear the global profile state
      setShowModal(false);
      toast.success("Logged out successfully!");
      window.location.href = "/author/sign_in";
    } catch (error) {
      toast.error("Failed to log out. Please try again.");
    }
  };

  // Show loading state while profile is being fetched
  if (loading) {
    return (
      <div className="mx-2 lg:pl-64 lg:pt-24 bg-gray-100 lg:bg-white">
        <div className="flex justify-center items-center h-64">
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-2  lg:pl-64  lg:pt-24 bg-gray-100 lg:bg-white">
      <div className="lg:flex lg:space-x-6 p-4 bg-gray-100 rounded-md">
        {/* Desktop nav */}
        <nav className="hidden lg:flex">

          <ul className="space-y-7">
            <Link href={`/author/${profile?.id}/profile`}>
              <li
                className={`hover:text-red-500 cursor-pointer ${isProfilePage ? "text-red-500 " : ""} `}
              >
                Profile
              </li>
            </Link>
            <Link href={`/author/${profile?.id}/profile/security`}>
              <li
                className={`hover:text-red-500 cursor-pointer ${isPrivacyPage ? "text-red-500 " : ""} `}
              >
                Privacy & Security
              </li>
            </Link>

            <Link href="/author/1/profile/notification">
              <li
                className={`hover:text-red-500 cursor-pointer ${isNotificationPage ? "text-red-500 " : ""} `}
              >
                Notification
              </li>
            </Link>

            <Link href="#" onClick={() => setShowModal(true)}>
              <li
                className={`hover:text-red-500 cursor-pointer ${showModal ? "text-red-500 " : ""} `}
              >
                Log Out
              </li>
            </Link>
          </ul>
        </nav>

        <div className="flex-1">{children}</div>
      </div>
      <LogoutModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default layout;
