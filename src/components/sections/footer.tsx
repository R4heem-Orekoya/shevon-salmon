"use client"

import { ArrowUp } from "lucide-react"
import S7on from "./s7on"
import { Marquee } from "../ui/marquee"

const Footer = () => {
   return (
      <footer className="bg-foreground mx-auto py-8 text-background">
         <div className="w-[min(1200px,90%)] mx-auto">
            <S7on className="text-background"/>
            
            <div className="max-w-5xl mx-auto flex items-center justify-between">
               <div onClick={() => {
                  window.scrollTo(0,0)
               }} className="animate-bounce cursor-pointer">
                  <ArrowUp className="w-8 h-8"/>
               </div>
               <p>{new Date().getFullYear()} &copy; Shevon Salmon. All rights reserved.</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer
