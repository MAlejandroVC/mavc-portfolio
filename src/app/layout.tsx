import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Alejandro Villalobos | Computer Systems Engineer",
  description: "A showcase of my skills and projects as a Computer Systems Engineer.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`antialiased flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar/>
          <main className={`flex-grow max-w-screen-xl mx-auto`}>
            {children}
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
