"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faUpload,
  faClipboard,
  faShoppingCart,
  faQuestionCircle,
  faUser,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import { useAuthor } from "@/context/AuthorContext";

export default function AuthorDashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSales, setOpenSales] = useState(false);
  const [authorId, setAuthorId] = useState(null);
  const sidebarRef = useRef(null);
  const pathName = usePathname();
  const router = useRouter();

  // Use global author context
  const { profile, loading, error, fetchProfile, isAuthenticated } =
    useAuthor();

  // This useEffect handles click-outside-to-close for the sidebar on mobile/tablet.
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("authorInfo") || "{}");
    if (!stored?.id) {
      alert("Sign in to continue!");
      router.push("/author/sign_in");
    } else {
      setAuthorId(stored.id);
      // Fetch profile only if not already loaded and not currently loading
      if (!profile && !loading) {
        fetchProfile();
      }
    }
  }, [router, profile, loading, fetchProfile]);

  if (!authorId) {
    return null;
  }

  const isDashboard = pathName.startsWith(`/dashboard/author/${authorId}`)
    ? "text-[#E50913]"
    : "text-gray-300";
  const isBookDetails = pathName.endsWith("/books/create/book-details");
  const isBookContent = pathName.endsWith("/books/create/book-content");
  const isBookPricing = pathName.endsWith("/books/create/book-pricing");
  const isSignIn = pathName.endsWith("/author/sign_in");
  const isSignUp = pathName.endsWith("/author/sign_up");
  const isRegPage = isSignIn || isSignUp;

  const textColor =
    isBookDetails || isBookContent || isBookPricing
      ? "text-[#E50913]"
      : "text-gray-300";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen">
      {/* Overlay to close sidebar on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-30"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Menu Icon for Mobile/Tablet */}
      <div className={`fixed top-4 left-4 z-50 lg:hidden`}>
        <button
          onClick={toggleSidebar}
          className="py-1 px-2 text-gray-700 bg-slate-50 rounded-md shadow-md"
        >
          <FontAwesomeIcon icon={faBars} size="sm" className="text-gray-900" />
        </button>
      </div>

      <div
        className={`lg:flex items-center justify-between bg-white ${
          isRegPage ? "hidden" : "fixed top-0 left-0"
        } w-full h-16 py-2 shadow-md z-10`}
      >
        <div className="flex-1 relative mr-8">
          {loading ? (
            <div className="w-12 h-12 absolute right-0 -top-6 rounded-full bg-gray-300 animate-pulse"></div>
          ) : (
            <Image
              width={50}
              height={50}
              className={`lg:w-12 lg:h-12 h-10 w-10 absolute lg:right-0 -right-4 top-1 lg:-top-6 rounded-full bg-slate-400 object-cover ${profile?.author_profile_image_url ? "" : "bg-slate-400 p-2"}`}
              alt="Profile"
              src={
                profile?.author_profile_image_url
                  ? profile?.author_profile_image_url
                  : `/images/avatar.png`
              }
            />
          )}
        </div>
      </div>

      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-50 w-64 pt-6 h-full bg-gray-900 text-white transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="w-full relative z-50 flex items-center justify-between px-4">
          <Link href="/">
            <img src="/images/logo.png" className="w-16 ml-3" alt="Logo" />
          </Link>
          <button onClick={toggleSidebar} className="lg:hidden p-2 text-white">
            <FontAwesomeIcon icon={faTimes} className="text-lg" />
          </button>
        </div>
        <div className="h-full px-4 py-4 mt-8 overflow-y-auto bg-gray-900">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href={`/dashboard/author/${authorId}`}
                className="flex items-center p-2 text-[#C5C5C5] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={() => setIsSidebarOpen(false)} // Close sidebar on click
              >
                <FontAwesomeIcon
                  icon={faChartPie}
                  className={`text-lg group-hover:text-[#E50913] ${isDashboard}`}
                />
                <span
                  className={`ml-2 text-[#C5C5C5] group-hover:text-[#E50913] ${isDashboard}`}
                >
                  Overview
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={`/author/${authorId}/books/create/book-details`}
                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={() => setIsSidebarOpen(false)} // Close sidebar on click
              >
                <FontAwesomeIcon
                  icon={faUpload}
                  className={`text-lg group-hover:text-[#E50913] ${textColor}`}
                />
                <span
                  className={`ml-2 text-[#C5C5C5] text-lg group-hover:text-[#E50913] ${textColor}`}
                >
                  Make an Upload
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={`/author/${authorId}/books`}
                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={() => setIsSidebarOpen(false)} // Close sidebar on click
              >
                <FontAwesomeIcon
                  icon={faClipboard}
                  className={`text-lg group-hover:text-[#E50913] ${
                    pathName.endsWith("/books")
                      ? "text-[#E50913]"
                      : "text-gray-300"
                  }`}
                />
                <span
                  className={`ml-2 text-[#C5C5C5] group-hover:text-[#E50913] ${
                    pathName.endsWith("/books")
                      ? "text-[#E50913]"
                      : "text-gray-300"
                  }`}
                >
                  Book Shelf
                </span>
              </Link>
            </li>
            {/* Sales Dropdown */}
            <li>
              <button
                onClick={() => setOpenSales(!openSales)}
                className="flex justify-between w-full items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-gray-300 text-lg group-hover:text-[#E50913]"
                  />
                  <span className="ml-2 text-[#C5C5C5] group-hover:text-[#E50913]">
                    Sales
                  </span>
                </div>
                <ChevronRight
                  className={`transition-transform duration-300 group-hover:text-[#E50913] ${openSales ? "rotate-90" : "rotate-0"}`}
                />
              </button>
              {/* Dropdown content */}
              <div
                className={`${openSales ? "block" : "hidden"} ml-10 mt-1 space-y-1`}
              >
                <div className="flex flex-col">
                  <Link
                    href="/author/analytics"
                    className="text-[#C5C5C5] hover:text-[#E50913] cursor-pointer"
                    onClick={() => setIsSidebarOpen(false)} // Close sidebar on click
                  >
                    Analytics
                  </Link>
                  <Link
                    href="/author/withdrawal"
                    className="text-[#C5C5C5] hover:text-[#E50913] cursor-pointer mt-4"
                    onClick={() => setIsSidebarOpen(false)} // Close sidebar on click
                  >
                    Withdrawal
                  </Link>
                </div>
              </div>
            </li>
            {/* ... (other menu items) */}
            <li>
              <Link
                href="/help"
                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="text-gray-300 text-lg group-hover:text-[#E50913]"
                />
                <span className="ml-2 text-[#C5C5C5] group-hover:text-[#E50913]">
                  Help
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={`/author/${authorId}/profile`}
                className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={() => setIsSidebarOpen(false)}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-gray-300 text-lg group-hover:text-[#E50913]"
                />
                <span className="ml-2 text-[#C5C5C5] group-hover:text-[#E50913]">
                  Profile
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      {children}
    </div>
  );
}
