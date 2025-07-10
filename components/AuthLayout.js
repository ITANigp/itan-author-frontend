"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import useAuth from "../app/hooks/UseAuth";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

// Public pages that don’t require auth
const publicRoutes = ["/", "/author/sign_in", "/author/sign_up"];

export default function AuthLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoggedIn, loading } = useAuth();

  useEffect(() => {
    if (typeof window !== "undefined" && !loading) {
      const isPublic = publicRoutes.includes(pathname);

      if (!isLoggedIn && !isPublic) {
        console.log("🔒 Not logged in. Redirecting to sign in...");
        router.push("/author/sign_in");
      }
    }
  }, [isLoggedIn, loading, pathname, router]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  );
}
