"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function AuthProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        const decoded = jwtDecode(token);

        // Token expired?
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("authToken");
          router.push("/author/sign_in");
        } else {
          setIsLoggedIn(true);
        }
      } catch (err) {
        console.error("Invalid JWT token:", err);
        localStorage.removeItem("authToken");
        router.push("/author/sign_in");
      }
    } else if (pathname !== "/author/sign_in") {
      router.push("/author/sign_in");
    }
     setLoading(false); // ✅ Finished checking
  }, [pathname, router]);

   if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    );
  }

  if (!isLoggedIn && pathname !== "/author/sign_in") {
    return null; // don’t render content while checking auth
  }

  return <>{children}</>;
}
