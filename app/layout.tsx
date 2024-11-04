import type { Metadata } from "next";
import { Merriweather, Montserrat } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";

export const merriweather_init = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--ff-body",
  weight: ["400", "700"],
});

export const montserrat_init = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--ff-title",
  weight: "900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="ff-body container">{children}</main>
      </body>
    </html>
  );
}
