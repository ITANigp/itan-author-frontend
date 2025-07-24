"use client";
import "flowbite";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import { FormProvider } from "@/context/FormContext";
import { AuthorProvider } from "@/context/AuthorContext";

config.autoAddCss = false;

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isSignIn = pathname.endsWith("/author/sign_in");
  const isSignUp = pathname.endsWith("/author/sign_up");
  const isRegPage = isSignIn || isSignUp

  const authorPages =
    pathname.startsWith("/author") ||
    pathname.startsWith("/dashboard");

  const authPages = pathname.startsWith("/auth")

  const privacyPages =
    pathname.startsWith("/privacy-policies") ||
    pathname.startsWith("/terms&conditions");
  
  const contentPolicy = pathname.startsWith("/content-policy");

  const PasswordPage =
    pathname.endsWith("/auth/forget-password") ||
    pathname.endsWith("/reset-password");

  const adminPage = pathname.startsWith("/admin")

  const readerPage = pathname.startsWith("/reader")
    
    const shouldHideHeader =
      authorPages ||
      privacyPages ||
      PasswordPage ||
      adminPage ||
      authPages ||
      contentPolicy ||
      readerPage
        ? "hidden"
        : "";

    const ProfilePage = pathname.endsWith('/profile')
    const ProfileBackground = ProfilePage ? "bg-gray-100" : ""




  return (
    <div
      className={`z-10  ${isRegPage ? "bg-slate-800" : "bg-white"} overflow-hidden`}
    >
      <AuthorProvider>
        <FormProvider>
          <Toaster />
          <main className="w-full min-h-screen">
            <div>
              {/* <AnimatedLayout> */}
              <div className="">
                <TopNav styles={shouldHideHeader } />
                <div>{children}</div>
                <Footer styles={shouldHideHeader} />
                {/* <ScrollToTop styles={hideIfAuthorPage} /> */}
              </div>
              {/* </AnimatedLayout> */}
            </div>
          </main>
        </FormProvider>
      </AuthorProvider>
    </div>
  );
}
