import type { Metadata } from "next";
import { Dancing_Script, Sora, DM_Sans } from "next/font/google";
import "../globals.css";
import Nav from "@/components/navbar";
import Footer from "@/components/sections/footer"
import { ReactLenis } from "@/lib/lenis";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
})

const dm_sans = DM_Sans({
  variable: "--font-dm_sans",
  subsets: ["latin"]
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
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-light-32x32.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-light-16x16.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-dark-32x32.png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-dark-16x16.png"
          media="(prefers-color-scheme: dark)"
        />
      </head>
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