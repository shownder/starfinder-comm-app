import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strfinder Society Communications",
  description: "Researching the gap and the galaxy!",
  openGraph: {
    title: "Strfinder Society Communications",
    description: "Researching the gap and the galaxy!",
    images: [
      { url: "https://assets-us-01.kc-usercontent.com/d960ad1b-9967-00f9-1158-72274b18312d/0db0055c-357e-487d-81c5-6f17a5dbe227/SFPFS_Symbol_Scenarios_800x1000.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
