import RootLayout from "./RootLayout";
import Script from "next/script";

export const metadata = {
  icons: {
    icon: "/images/itan-favicon.png",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SGQ45D1RLL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SGQ45D1RLL');
          `}
        </Script>
      </head>
      <body className="bg-gray-100">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
