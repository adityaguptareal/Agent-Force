import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Manrope } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./Providers/theme-provider";
import Navbar from "../components/Navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent Force Marketing Template By Aditya",
  description: "Agent Force - Marketing Templastes for AI Agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
          <main>
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
