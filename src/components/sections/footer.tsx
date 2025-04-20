"use client"

import { ArrowUp } from "lucide-react"

const Footer = () => {
   return (
      <footer className="max-w-5xl mx-auto py-8 cursor-pointer flex max-sm:flex-col gap-4 flex-wrap items-center justify-between text-center">
         <div onClick={() => {
            window.scrollTo(0,0)
         }} className="animate-bounce">
            <ArrowUp className="w-8 h-8"/>
         </div>
         <p>{new Date().getFullYear()} &copy; Shevon Salmon. All rights reserved.</p>
      </footer>
   )
}

export default Footer
