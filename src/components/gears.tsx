'use client'

import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";

const gears = [
   {
     name: "Sony A7S III",
     description: "A powerhouse for creators, the Sony A7S III delivers exceptional low-light performance and stunning 4K video with up to 120fps. Ideal for filmmakers, it features a flip-out touchscreen, dual card slots, and unmatched autofocus accuracy.",
     link: "https://geni.us/-A7SIII",
     image: "https://static.bhphoto.com/images/images500x500/1595930779_1577838.jpg"
   },
   {
     name: "Tamron 17-28mm F/2.8",
     description: "This ultra-wide zoom lens is perfect for landscapes, architecture, and vlogging. With a constant f/2.8 aperture, it performs well in low light and delivers beautiful bokeh and sharpness throughout the zoom range.",
     link: "https://geni.us/Tamron17-28EMount",
     image: "https://m.media-amazon.com/images/I/31Q8Af86TCL._SL500_.jpg"
   },
   {
     name: "Sony 24-70mm",
     description: "A versatile workhorse lens with a wide-to-standard zoom range. Ideal for everything from portraits to street photography, it delivers professional-quality optics and fast autofocus for everyday shooting.",
     link: "https://geni.us/h8MBLXk",
     image: "https://m.media-amazon.com/images/I/41nwJh4Bf-L.jpg"
   },
   {
     name: "K&F Concept Variable 67mm ND Filter",
     description: "Control your exposure effortlessly in bright conditions with this variable ND filter. It’s perfect for achieving cinematic motion blur or wide aperture shots in daylight without overexposing your footage.",
     link: "https://geni.us/ND240067mm",
     image: "https://m.media-amazon.com/images/I/51bsKGVnlYL._SL500_.jpg"
   },
   {
     name: "Small Rig Cage",
     description: "This modular camera cage provides added protection and multiple mounting points for accessories like microphones, monitors, and lights. A must-have for turning your camera into a fully rigged video setup.",
     link: "https://geni.us/SmallRigCameraCage",
     image: "/vercel.svg"
   },
   {
     name: "Small Rig Monitor Mount",
     description: "Mount your external monitor with flexibility using this durable articulating monitor mount. It locks securely and allows for easy adjustment to get the perfect viewing angle while shooting.",
     link: "https://geni.us/HawkLockMount",
     image: "https://m.media-amazon.com/images/I/31cgjpuypIL._SL500_.jpg"
   },
   {
     name: "Ulanzi Tripod Quick Release Plate",
     description: "Swap gear in seconds with this sleek quick release plate. Designed for fast transitions between tripods, gimbals, and handheld rigs — no more fumbling with screws mid-shoot.",
     link: "https://geni.us/xAbArM7",
     image: "https://m.media-amazon.com/images/I/41Zw9Zr7i8L._SL500_.jpg"
   },
   {
     name: "GoPro Hero 12",
     description: "Shoot crisp 5.3K60 video with incredible stabilization using the GoPro Hero 12. It's rugged, waterproof, and packed with features like HDR video, vertical capture, and upgraded audio — perfect for action and adventure.",
     link: "https://geni.us/MQ89",
     image: "https://m.media-amazon.com/images/I/31eAG8wuEnL._SL500_.jpg"
   },
   {
     name: "DJI Mic 2",
     description: "Deliver crystal-clear audio with the DJI Mic 2 wireless system. With dual transmitters and real-time monitoring, it’s ideal for interviews, vlogging, or any professional audio recording on the go.",
     link: "https://bhpho.to/42knlTZ",
     image: "https://static.bhphoto.com/images/images500x500/1705477554_1800665.jpg"
   },
   {
     name: "GoPro Headmount",
     description: "Capture your point of view effortlessly with this comfortable, adjustable GoPro headmount. Whether you're biking, hiking, or traveling, it offers immersive footage from your perspective.",
     link: "https://geni.us/GoProHeadmount",
     image: "https://static.gopro.com/assets/blta2b8522e5372af40/blt5028e412643854ae/65cbdc3afcd8646428eec8a5/01-pdp-h12b-headstrap-gallery-1920.png?width=2880&quality=80&auto=webp&disable=upscale"
   },
   {
     name: "Small Rig Articulating Arm / Clamp",
     description: "A multi-purpose articulating arm and clamp that lets you mount monitors, lights, or microphones securely to your rig or desk. Highly adjustable and built to last — great for both field and studio use.",
     link: "https://geni.us/smallrigarticulating",
     image: "https://m.media-amazon.com/images/I/31VYAYagVkS._SL500_.jpg"
   },
   {
     name: "Peak Design Mobile Tripod",
     description: "This ultra-compact tripod attaches magnetically to your phone and folds flat when not in use. It’s a beautifully designed, pocket-sized tripod for stable mobile shooting anywhere.",
     link: "https://geni.us/peakdesignmobiletripod",
     image: "https://m.media-amazon.com/images/I/31WZ+4H64XL._SL500_.jpg"
   },
   {
     name: "iPhone 16",
     description: "Apple’s latest flagship brings cutting-edge performance, ProMotion display, and even more powerful camera capabilities. A perfect companion for mobile filmmaking, content creation, and productivity on the go.",
     link: "https://geni.us/7HiOUTk",
     image: "https://www.apple.com/v/iphone-16-pro/f/images/overview/welcome/hero_startframe__4pqj154zt8ym_xlarge_2x.jpg"
   },
   {
     name: "Grams 28L Bag",
     description: "Sleek, minimal, and built to last — this 28L backpack combines modern aesthetics with everyday practicality. Made with premium materials, it's perfect for carrying your gear, laptop, and essentials in style.",
     link: "https://geni.us/7HiOUTk",
     image: "https://www.grams28.com/cdn/shop/files/151_web_2b_1024x1024.jpg?v=1741638680"
   }
]
 

export const HoverImageLinks = () => {
   return (
      <section>
         <div className="">
            {gears.map((gear) => (
               <LinkItem
                  key={gear.name}
                  name={gear.name}
                  description={gear.description}
                  imgSrc={gear.image}
                  href={gear.link}
               /> 
            ))}
         </div>
      </section>
   );
}

interface LinkProps {
   name: string;
   imgSrc: string;
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

         <motion.img
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
            src={imgSrc}
            className="absolute z-20 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64 border bg-zinc-100"
            alt={`Image representing a link for ${name}`}
         />

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