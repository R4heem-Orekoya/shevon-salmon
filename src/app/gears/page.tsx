import React from "react";

const gears = [
   {
      name: "Sony A7 IV",
      image: "/images/sony-a7iv.jpg",
      description: "A powerful mirrorless camera for high-quality video and photography.",
      link: "https://example.com/sony-a7iv",
   },
   {
      name: "Apple MacBook Pro M3",
      image: "/images/macbook-pro.jpg",
      description: "A high-performance laptop for editing and content creation.",
      link: "https://example.com/macbook-pro",
   },
   {
      name: "Shure SM7B Microphone",
      image: "/images/shure-sm7b.jpg",
      description: "A premium microphone for crystal-clear audio recording.",
      link: "https://example.com/shure-sm7b",
   },
   {
      name: "Elgato Key Light",
      image: "/images/elgato-keylight.jpg",
      description: "Professional lighting for video recording and live streaming.",
      link: "https://example.com/elgato-keylight",
   },
];

//https://examples.motion.dev/react/app-store : something similar to this for this page

const GearsPage = () => {
   return (
      <div className="container mx-auto px-6 py-16">
         <h1 className="text-4xl font-extrabold text-center mb-6 text-white">Shevon’s Gear & Setup</h1>
         <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            The tools and gadgets I use daily for content creation. Click to check them out!
         </p>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {gears.map((gear, index) => (
               <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-6 text-center border border-white/20 transition-transform hover:scale-105 hover:shadow-2xl"
               >
                  <img
                     src={gear.image}
                     alt={gear.name}
                     className="w-full h-52 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-2xl font-bold text-white">{gear.name}</h2>
                  <p className="text-gray-300 mt-2 mb-6">{gear.description}</p>
                  <a
                     href={gear.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block bg-blue-500 text-primary px-5 py-3 rounded-lg font-semibold tracking-wide hover:bg-blue-600 transition"
                  >
                     Buy Now
                  </a>
               </div>
            ))}
         </div>
      </div>
   );
};

export default GearsPage;