"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, HTMLAttributes } from "react";

interface ScreenFitTextProps extends HTMLAttributes<HTMLDivElement> {
   children?: React.ReactNode;
}

export const ScreenFitText = ({
   className,
   children = "Fit text to container",
   ...props
}: ScreenFitTextProps) => {
   const containerRef = useRef<HTMLDivElement | null>(null);
   const textRef = useRef<HTMLDivElement | null>(null);
   const [fontSize, setFontSize] = useState(100); // Initial guess

   useEffect(() => {
      const resizeText = () => {
         if (!containerRef.current || !textRef.current) return;

         const containerWidth = containerRef.current.offsetWidth;
         let min = 1;
         let max = 300;
         let best = 100;

         // Binary search for best font size
         while (min <= max) {
            const mid = Math.floor((min + max) / 2);
            textRef.current.style.fontSize = `${mid}px`;
            const textWidth = textRef.current.offsetWidth;

            if (textWidth <= containerWidth) {
               best = mid;
               min = mid + 1;
            } else {
               max = mid - 1;
            }
         }

         setFontSize(best);
      };

      resizeText();
      window.addEventListener("resize", resizeText);
      return () => window.removeEventListener("resize", resizeText);
   }, [children]);

   return (
      <div
         ref={containerRef}
         className={cn("w-full text-center overflow-hidden", className)}
         {...props}
      >
         <div
            ref={textRef}
            style={{ fontSize }}
            className="inline-block font-bold uppercase leading-none"
         >
            {children}
         </div>
      </div>
   );
};
