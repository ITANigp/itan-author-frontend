
"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ for loading state

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        // ✅ Decode token to check expiration
        const decoded = jwtDecode(token);
        console.log("Decoded JWT:", decoded);

        if (decoded.exp * 1000 < Date.now()) {
          // 🔥 Token expired
          console.warn("JWT token expired");
          localStorage.removeItem("authToken");
          setUser(null);
        } else {
          // ✅ Fetch fresh user data from backend
          fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/authors/me`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then(async (res) => {
              if (res.ok) {
                const data = await res.json();
                console.log("Fetched user profile:", data);
                setUser(data.data); // Your API returns user in `data`
              } else {
                console.error("Failed to fetch profile");
                localStorage.removeItem("authToken");
                setUser(null);
              }
            })
            .catch((err) => {
              console.error("Error fetching profile:", err);
              localStorage.removeItem("authToken");
              setUser(null);
            });
        }
      } catch (err) {
        console.error("Invalid JWT:", err);
        localStorage.removeItem("authToken");
        setUser(null);
      }
    } else {
      console.log("No token found");
      setUser(null);
    }

    setLoading(false);
  }, []);

  return {
    user,
    isLoggedIn: !!user,
    loading, // ✅ helpful for showing loaders
  };
}
