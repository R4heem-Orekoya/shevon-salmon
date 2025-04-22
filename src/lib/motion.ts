export const fadeInUp = {
   hidden: { opacity: 0, y: -40 },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.6,
         ease: "easeInOut",
         delay: 0.2,
      },
   },
}

export const fadeInLogo = {
   hidden: { opacity: 0, y: -40 },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.5,
         ease: "easeInOut",
         delay: 0.1,
      },
   },
}