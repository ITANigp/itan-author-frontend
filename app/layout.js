
import "./globals.css";
import RootLayout from "./RootLayout";

export const metadata = {
  title: "Itan Audiobook",
  description: "Your audiobook platform",
};

export default function Layout({ children }) {
  return (
    <RootLayout>{children}</RootLayout>
  );
}

