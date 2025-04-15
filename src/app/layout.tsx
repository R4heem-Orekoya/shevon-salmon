import type { Metadata } from "next";
import { Mona_Sans, Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navbar";
import Footer from "@/components/sections/footer"
import { ReactLenis } from "@/lib/lenis";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dacing-script"
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
      <body className={`${monaSans.variable} ${poppins.variable} ${dancingScript.variable} antialiased font-poppins`}>
        <ReactLenis root options={{ duration: 2 }}>
          <Nav />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  )
}