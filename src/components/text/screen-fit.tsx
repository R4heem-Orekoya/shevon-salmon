"use client"

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, HTMLAttributes } from "react";

interface ScreenFitTextProps extends HTMLAttributes<HTMLSpanElement> {
   children?: React.ReactNode
}

export const ScreenFitText = ({ className, children = "Fit text to container", ...props }: ScreenFitTextProps) => {
   const textRef = useRef<HTMLSpanElement | null>(null)

   useEffect(() => {
      resizeText()

      window.addEventListener("resize", resizeText)

      return () => {
         window.removeEventListener("resize", resizeText)
      }
   }, [])

   const resizeText = () => {
      const text = textRef.current

      if (!text || !text.parentElement) {
         return;
      }

      // Use the parent element of the text element
      const containerWidth = text.parentElement.offsetWidth;
      let min = 1
      let max = 2500

      while (min <= max) {
         const mid = Math.floor((min + max) / 2)
         text.style.fontSize = mid + "px"

         if (text.offsetWidth <= containerWidth) {
            min = mid + 1
         } else {
            max = mid - 1
         }
      }
      text.style.fontSize = max + "px"
   }

   return (
      <span
         className={cn("mx-auto whitespace-nowrap leading-none text-center font-semibold uppercase", className)}
         ref={textRef}
         {...props}
      >
         {children}
      </span>
   )
}