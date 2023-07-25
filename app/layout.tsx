import Header from "./components/Header";
import "./globals.css";
import type { Metadata } from "next";

import { Righteous } from "next/font/google";

const righteous = Righteous({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ty Vile - Development Blogs",
  description: "My development blogs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={righteous.className}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
