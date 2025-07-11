import "./globals.css";
import "flowbite";
import { config } from "@fortawesome/fontawesome-svg-core";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";

import TopNav from "../components/TopNav"; // ✅ Client-only component
import Footer from "../components/Footer";
import { FormProvider } from "@/context/FormContext";
import AuthProvider from "../components/AuthProvider";

config.autoAddCss = false;

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <FormProvider>
          <AuthProvider>
            <Toaster />
            <div className="bg-white min-h-screen">
              {/* ✅ TopNav is client-only */}
              <TopNav />
              <main>{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </FormProvider>
      </GoogleOAuthProvider>
      </body>
    </html>
  );
}
