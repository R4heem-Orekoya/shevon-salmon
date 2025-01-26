"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface StickyScrollProps {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}

export const StickyScroll = ({ content, contentClassName }: StickyScrollProps) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    )
    setActiveCard(closestBreakpointIndex);
  })

  const backgroundColors = [
    "var(--zinc-900)",
    "var(--black)",
    "var(--neutral-900)",
  ]
  
  const linearGradients = [
    "https://images.pexels.com/photos/30387548/pexels-photo-30387548/free-photo-of-top-view-of-camera-and-lenses-on-desk.jpeg",
    "https://images.pexels.com/photos/30393929/pexels-photo-30393929/free-photo-of-gaming-controller-on-illuminated-keyboard-setup.jpeg",
    "https://images.pexels.com/photos/27467770/pexels-photo-27467770/free-photo-of-laptop-and-camera-on-desk.jpeg",
    "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg",
  ]

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0])

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div className="sticky-scroll-div h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md"
      ref={ref}
    >
      <div className="relative flex items-start">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-16">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-mono_sans font-semibold text-primary tracking-tight"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-muted-foreground font-poppins max-w-sm mt-6"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden md:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        <div className="relative w-full h-full">
          <Image src={backgroundGradient} alt="some image" fill className="object-cover"/>
        </div>
        {/* {content[activeCard].content ?? null} */}
      </div>
    </motion.div>
  )
}