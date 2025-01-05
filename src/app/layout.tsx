import type { Metadata } from "next";
import { Mona_Sans, Poppins } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Shevon Salmon",
  description: "Digital Creator",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable} ${poppins.variable} antialiased font-poppins`}>
        {children}
      </body>
    </html>
  );
}
