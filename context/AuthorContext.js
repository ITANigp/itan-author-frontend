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

  // Check for stored author info on mount
  useEffect(() => {
    const stored = localStorage.getItem("authorInfo");
    if (stored) {
      try {
        const authorInfo = JSON.parse(stored);
        if (authorInfo.id) {
          setIsAuthenticated(true);
          // Only fetch profile if we don't already have it
          if (!profile) {
            fetchProfile();
          }
        }
      } catch (error) {
        console.error("Error parsing stored author info:", error);
        localStorage.removeItem("authorInfo");
      }
    }
  }, []);

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
