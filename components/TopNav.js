"use client";

import React, { useState, useEffect } from "react";
import LandingPgBtn from "./LandingPgBtn";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { usePathname } from "next/navigation";
import {
  faBars,
  faTimes,
  faInfoCircle,
  faBookOpen,
  faDollarSign,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";

// ✅ Import your custom useAuth hook
import useAuth from "../app/hooks/UseAuth";

library.add(
  faBars,
  faTimes,
  faInfoCircle,
  faBookOpen,
  faDollarSign,
  faQuestionCircle
);

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

const TopNav = ({ styles }) => {
  const [menu, setMenu] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const { user, isLoggedIn, loading } = useAuth(); // ✅ Get auth state

  const toggleMenu = () => {
    if (!menu) {
      setMenu(true);
      setTimeout(() => setShowCloseIcon(true), 150);
    } else {
      setShowCloseIcon(false);
      setTimeout(() => setMenu(false), 50);
    }
  };

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menu]);

  const menuItems = [
    { title: "About Itan", href: "/", icon: faInfoCircle },
    { title: "Publish", href: "/publish", icon: faBookOpen },
    { title: "Monetize", href: "/monetize", icon: faDollarSign },
    { title: "Help", href: "/help", icon: faQuestionCircle },
    { title: "Blog", href: "/blog", icon: faQuestionCircle },
  ];

  const pathname = usePathname();
  const homePath = pathname.endsWith("/");
  const publishPath = pathname.endsWith("/publish");
  const monetizePath = pathname.endsWith("/monetize");
  const helpPath = pathname.endsWith("/help");
  const blogPath = pathname.endsWith("/blog");

  // ✅ Handle logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/"; // Redirect to home after logout
  };

  return (
    <div
      className={` ${styles} h-16 md:h-auto w-full bg-[#111928] items-center pt-[10px] md:px-5 md:pt-3`}
    >
      <div className="flex items-center">
        <div className="flex w-full md:justify-between">
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              className="block md:hidden z-30 px-2"
              onClick={toggleMenu}
              aria-label={menu ? "Close menu" : "Open menu"}
            >
              <FontAwesomeIcon
                icon={showCloseIcon ? faTimes : faBars}
                style={{ color: "#FFFFFF" }}
                className="text-[21px] ml-2 md:hidden"
              />
            </button>
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={50}
                height={12}
                alt="itan logo"
                className="w-10 ml-4 hidden sm:block md:hidden"
              />
            </Link>
          </div>

          {/* Logo and Text */}
          <div className="flex items-center ml-auto md:ml-0 pb-3">
            <div className="hidden md:flex items-center">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  width={50}
                  height={12}
                  alt="itan logo"
                  className="md:w-12 md:ml-3 lg:-mb-3"
                />
              </Link>
              <p
                className={`${bricolage.className} hidden sm:flex text-gray-200 text-xl md:text-[28px] lg:text-[32px] ml-1 lg:-mb-3 font-bold`}
              >
                Global Publishing
              </p>
            </div>
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={50}
                height={12}
                alt="itan logo"
                className="w-10 pt-4 -mt-1 mr-4 sm:hidden"
              />
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="w-[320px] lg:w-[280px] hidden sm:flex justify-between mr-3 md:mr-10 py-3">
            {!loading && isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">
                 Welcome, <strong>
                  {user?.first_name && user?.last_name
                    ? `${user.first_name} ${user.last_name}`
                    : user?.first_name
                    ? user.first_name
                    : user?.email?.split("@")[0]}
                  </strong>

                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-1 rounded-md hover:bg-red-700 transition"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/author/sign_in"
                  className="bg-[#0c1320] text-white px-6 py-1 w-24 pb-2 border border-red-600 border-b-gray-400 rounded-md"
                >
                  Sign In
                </Link>
                <Link
                  href="/author/sign_up"
                  className="bg-[#E50913] text-white px-6 py-1 w-24 pb-2 border border-red-600 border-b-gray-400 rounded-md"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Rest of your nav links... */}
    </div>
  );
};

export default TopNav;
