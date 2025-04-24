import type { Metadata } from "next";
import { Mona_Sans, Poppins, Dancing_Script, Sora, Nunito, Nunito_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navbar";
import Footer from "@/components/sections/footer"
import { ReactLenis } from "@/lib/lenis";
import S7on from "@/components/sections/s7on";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
})

const dm_sans = DM_Sans({
  variable: "--font-dm_sans",
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
      <body className={`${sora.variable} ${dm_sans.variable} ${dancingScript.variable} antialiased font-dm_sans`}>
        <ReactLenis root options={{ duration: 2 }}>
          <Nav />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  )
}