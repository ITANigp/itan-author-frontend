"use client";

import React, { useState } from "react";
import Link from "next/link";
import { storedAuthorInfo } from "@/utils/storedAuthorInfo";
import ShareLinkFloatingButton from "./ShareLinkFloatingButton";

const AuthorDashboard = () => {
  const { id: authorId } = storedAuthorInfo || {};
  const [showPopup, setShowPopup] = useState(false);

  const handleComingSoonClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const items = [
    {
      title: "E-Books",
      img: "/images/ebook.png",
      href: `/author/${authorId}/books/create/book-details`,
    },
    { title: "Audiobooks", img: "/images/audiobook.png", href: "#" },
    { title: "Book Series", img: "/images/book-series.png", href: "#" },
    {
      title: "Audiobook Series",
      img: "/images/book-series.png",
      href: "#",
    },
  ];

  if (!authorId) {
    return (
      <p className="lg:ml-72 lg:mt-20 px-4 lg:px-0 py-6">
        Author info not found. Please login again.
      </p>
    );
  }

  return (
<section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
  <div className="w-full max-w-6xl mx-auto px-4 py-4 lg:ml-64 mt-16 sm:mt-12 md:mt-16">
    <h2 className="font-bold text-2xl mb-6 text-center">
        <span className="block sm:inline">Welcome!</span>{' '}
        <span className="block sm:inline">What would you like to create?</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {items.map((item, index) => {
        const isComingSoon = item.href === "#";
        return isComingSoon ? (
          <button
            key={index}
            onClick={handleComingSoonClick}
            className="w-full flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-2xl hover:shadow-xl focus:shadow-2xl transition-shadow duration-300 cursor-pointer border border-gray-100 hover:border-primary-500 focus:border-primary-500 outline-none focus:ring-2 focus:ring-primary-200 group"
          >
            <div className="flex items-center justify-center w-20 h-20 mb-3 rounded-full bg-gray-50 group-hover:bg-primary-50 transition-colors duration-300">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h5 className="text-lg font-medium text-gray-900 text-center">
              {item.title}
            </h5>
          </button>
        ) : (
          <Link
            key={index}
            href={item.href}
            className="w-full flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-2xl hover:shadow-xl focus:shadow-2xl transition-shadow duration-300 cursor-pointer border border-gray-100 hover:border-primary-500 focus:border-primary-500 outline-none focus:ring-2 focus:ring-primary-200 group"
          >
            <div className="flex items-center justify-center w-20 h-20 mb-3 rounded-full bg-gray-50 group-hover:bg-primary-50 transition-colors duration-300">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h5 className="text-lg font-medium text-gray-900 text-center">
              {item.title}
            </h5>
          </Link>
        );
      })}
    </div>
  </div>

  {showPopup && (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded-xl shadow-xl max-w-sm w-full text-center">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
          aria-label="Close popup"
        >
          &times;
        </button>

        <h3 className="text-xl font-semibold mb-2">Coming Soon ...</h3>
        <p className="text-gray-700 mb-4">This feature is not available yet.</p>
        <button
          onClick={() => setShowPopup(false)}
          className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  )}

  <ShareLinkFloatingButton />
</section>

  );
};

export default AuthorDashboard;
