import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";

import { Footer, Navbar } from "@/components";

const afacad = Afacad({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terminales y Servicios",
  description: "Landing page terminales y servicios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={afacad.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
