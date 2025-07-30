"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuthorProfile } from "@/utils/auth/authorApi";

// Create the context
const AuthorContext = createContext();

// Custom hook to use the AuthorContext
export const useAuthor = () => {
  const context = useContext(AuthorContext);
  if (!context) {
    throw new Error("useAuthor must be used within an AuthorProvider");
  }
  return context;
};

// AuthorProvider component
export const AuthorProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to fetch profile data
  const fetchProfile = async () => {
    // Prevent multiple simultaneous calls
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const { data } = await getAuthorProfile();
      setProfile(data);
      setIsAuthenticated(true);
      console.log("Fetched Profile Data: ", data);
    } catch (err) {
      setError("Failed to fetch author profile.");
      setIsAuthenticated(false);
      console.error("Profile fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Function to update profile data (without API call)
  const updateProfile = (newProfileData) => {
    setProfile(newProfileData);
  };

  // Function to clear profile data (for logout)
  const clearProfile = () => {
    setProfile(null);
    setIsAuthenticated(false);
    setError(null);
  };

  // Only fetch profile on authenticated/protected pages
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("authorInfo");
    const pathname = window.location.pathname;
    // List of protected routes (customize as needed)
    const isProtectedRoute = [
      "/author",
      "/dashboard",
      "/admin",
      "/reader",
    ].some((route) => pathname.startsWith(route));

    if (stored && isProtectedRoute) {
      try {
        const authorInfo = JSON.parse(stored);
        if (authorInfo.id) {
          setIsAuthenticated(true);
          if (!profile) {
            fetchProfile();
          }
        }
      } catch (error) {
        console.error("Error parsing stored author info:", error);
        localStorage.removeItem("authorInfo");
      }
    }
  }, [profile]);

  const contextValue = {
    profile,
    loading,
    error,
    isAuthenticated,
    fetchProfile,
    updateProfile,
    clearProfile,
  };

  return (
    <AuthorContext.Provider value={contextValue}>
      {children}
    </AuthorContext.Provider>
  );
};
