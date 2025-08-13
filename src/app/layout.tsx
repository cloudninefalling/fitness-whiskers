import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/scss/bundle.scss";

import Header from "@/components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitness Whiskers",
  description: "Самое пушистое приложение для занятий фитнесом",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />

        {children}
      </body>
    </html>
  );
}
