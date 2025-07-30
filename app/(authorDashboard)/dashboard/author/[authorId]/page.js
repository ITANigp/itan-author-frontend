"use client";

import React from "react";
import Link from "next/link";

import { storedAuthorInfo } from "@/utils/storedAuthorInfo";

const AuthorDashboard = () => {
  const { id: authorId } = storedAuthorInfo || {};

  if (!authorId) {
    return (
      <p className="lg:ml-72 lg:mt-20 px-4 lg:px-0 py-6">
        Author info not found. Please login again.
      </p>
    );
  }

  return (
    <section className="container min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="w-full lg:ml-72 lg:mt-20 px-4 lg:px-0 py-6">
        <h2 className="font-bold text-2xl mb-6 text-center md:text-left xl:text-left">
          Welcome! What would you like to create?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
          {[
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
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-2xl hover:shadow-xl focus:shadow-2xl transition-shadow duration-300 cursor-pointer border border-gray-100 hover:border-primary-500 focus:border-primary-500 outline-none focus:ring-2 focus:ring-primary-200 group"
              tabIndex={0}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorDashboard;
