'use client'

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";
import SlideUp from "./slide-up";
import { Gear, GEARS_PAGE_QUERYResult } from "@/root/sanity.types";
import { urlFor } from "@/sanity/utils/image";

interface HoverImageLinksProps {
   gears: GEARS_PAGE_QUERYResult[number]["gears"]
}

export const HoverImageLinks = ({ gears }: HoverImageLinksProps) => {
   return (
      <section>
         {gears && gears.map((gear) => (
            <SlideUp y={80} delay={0.25} duration={0.8} key={gear._key}>
               <LinkItem
                  name={gear.gear!}
                  description={gear.description!}
                  imgSrc={gear.image!}
                  href={gear.affiliateLink!}
               />
            </SlideUp>
         ))}
      </section>
   );
}

interface LinkProps {
   name: string;
   imgSrc: Gear["image"];
   description: string;
   href: string;
}

const LinkItem = ({ name, imgSrc, description, href }: LinkProps) => {
   const ref = useRef<HTMLAnchorElement | null>(null);

   const x = useMotionValue(0);
   const y = useMotionValue(0);

   const mouseXSpring = useSpring(x);
   const mouseYSpring = useSpring(y);

   const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
   const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

   const handleMouseMove = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
   ) => {
      const rect = ref.current!.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
   };
   
   return (
      <motion.a
         href={href}
         ref={ref}
         onMouseMove={handleMouseMove}
         initial="initial"
         whileHover="whileHover"
         className="group relative flex items-center justify-between border-b-2 py-4 transition-colors duration-500 md:py-8"
      >
         <div>
            <span className="relative z-10 block text-2xl font-semibold sm:font-bold font-sora transition-opacity duration-500 md:text-4xl">
               {name}
            </span>
            <span className="relative z-10 mt-2 block text-base text-muted-foreground max-w-xl transition-colors duration-500">
               {description}
            </span>
         </div>

         <motion.div
            style={{
               top,
               left,
               translateX: "-50%",
               translateY: "-50%",
            }}
            variants={{
               initial: { scale: 0, rotate: "-12.5deg" },
               whileHover: { scale: 1, rotate: "12.5deg" },
            }}
            transition={{ type: "spring" }}
            className="absolute z-20 h-24 w-32 rounded-lg md:h-48 md:w-64 border overflow-hidden bg-zinc-100"
         >
            <img
               src={urlFor(imgSrc!).quality(100).url()}
               className="w-full h-full object-cover"
               alt={`Image representing a link for ${name}`}
            />
         </motion.div>

         <motion.div
            variants={{
               initial: {
                  x: "25%",
                  opacity: 0,
               },
               whileHover: {
                  x: "0%",
                  opacity: 1,
               },
            }}
            transition={{ type: "spring" }}
            className="relative z-10 p-4"
         >
            <ArrowRight className="text-5xl" />
         </motion.div>
      </motion.a>
   );
}