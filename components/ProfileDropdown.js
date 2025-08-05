"use client";

import { Menu, Transition, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

import { useAuthor } from "@/context/AuthorContext";
import { signOutAuthor } from "@/utils/auth/authorApi";
import toast from "react-hot-toast";

export default function ProfileDropdown() {
  const router = useRouter();
  const { profile, clearProfile } = useAuthor();

  const handleLogout = async () => {
    try {
      await signOutAuthor();
      clearProfile();
      toast.success("Logged out successfully!");
      router.push("/author/sign_in");
    } catch (err) {
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="relative inline-block text-left w-full">
      <Menu as="div" className="w-full">
        {({ open }) => (
          <>
            <MenuButton className="p-2 text-gray-700 hover:text-gray-900 border border-transparent hover:border-gray-300 rounded focus:outline-none">
                <FontAwesomeIcon icon={faEllipsisV} size="xl" />
            </MenuButton>

           <MenuItems className="absolute right-0 mt-2 w-48 bg-transparent border border-white-200 rounded-md shadow-lg z-50 focus:outline-none">
            <div className="py-1 text-sm text-gray-700">
                <MenuItem>
                <button
                    onClick={() => router.push(`/author/${profile?.id}/profile`)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 whitespace-normal break-words"
                >
                    Profile
                </button>
                </MenuItem>
                <MenuItem>
                <button
                    onClick={() => router.push(`/author/${profile?.id}/profile/security`)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 whitespace-normal break-words"
                >
                    Privacy & Security
                </button>
                </MenuItem>
                <MenuItem>
                <button
                    onClick={() => router.push(`/author/${profile?.id}/profile/notification`)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 whitespace-normal break-words"
                >
                    Notification
                </button>
                </MenuItem>
                <MenuItem>
                <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 hover:text-red-600 whitespace-normal break-words"
                >
                    Logout
                </button>
                </MenuItem>
            </div>
            </MenuItems>


          </>
        )}
      </Menu>
    </div>
  );
}
