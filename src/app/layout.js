// src/app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import Providers from '@/components/Providers';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jagadeesh Dasari | Senior Big Data Engineer",
  description: "Senior Big Data Engineer specializing in Spark, AWS and Big Data Technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background transition-colors duration-300`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}