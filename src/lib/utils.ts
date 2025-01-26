import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function viewFormatter(views: number) {
  const formatter = Intl.NumberFormat("en", { notation: "compact" })

  return formatter.format(views)
}

export const getRandomColor = () => {
  const colors = [
    '#FF5733', // Bright Orange/Red-Orange
    '#33FF57', // Lime Green
    '#5733FF', // Vivid Blue/Violet Blue
    '#FFC300', // Bright Yellow
    '#FF33A8', // Hot Pink/Fuchsia
    '#33FFF2', // Aqua/Teal
    '#FF6F61', // Coral
    '#6A33FF', // Deep Purple
    '#33FFBD', // Mint Green
    '#FFD700', // Gold
    '#FF4500', // Orange Red
    '#40E0D0'  // Turquoise
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}