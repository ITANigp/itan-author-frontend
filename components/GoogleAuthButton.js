"use client";

import { useGoogleLogin } from "@react-oauth/google";

export default function GoogleAuthButton() {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("✅ Google token response:", tokenResponse);

      try {
        // Send access_token directly to backend
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/authors/google_oauth2`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              access_token: tokenResponse.access_token,
            }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          console.log("🎉 Logged in user:", data);

          // ✅ Save JWT token to localStorage
          localStorage.setItem("authToken", data.token);

          // Optional: Save user profile for quick access
          localStorage.setItem("user", JSON.stringify(data.user));

          // ✅ Redirect to homepage
          window.location.href = "/";
        } else {
          console.error("❌ Backend error:", data.error || data);
          alert(data.error || "Google login failed. Please try again.");
        }
      } catch (error) {
        console.error("❌ Network error:", error);
        alert("Google login failed. Please check your connection and try again.");
      }
    },
    onError: (err) => {
      console.error("❌ Google login failed:", err);
      alert("Google login failed. Please try again.");
    },
    scope: "openid email profile", // request basic profile info
  });

  return (
    <button
      onClick={() => login()}
      type="button"
      className="flex items-center justify-center space-x-3 w-full h-[50px] px-4 rounded-lg border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <img src="/images/google.png" alt="Google Logo" className="w-6 h-6" />
      <span className="font-medium text-gray-700">Continue with Google</span>
    </button>
  );
}
