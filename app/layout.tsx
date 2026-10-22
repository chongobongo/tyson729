// Main Layout

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Archivo_Black } from 'next/font/google'
import { Roboto } from 'next/font/google'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-archivo-black-raw", // renamed
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],   // required: Roboto is not a variable font
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "Tyson 729",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} ${archivoBlack.variable} ${roboto.variable} h-full antialiased`}
      >
      <body className="flex h-dvh flex-col">{children}</body>
    </html>
  );
}
