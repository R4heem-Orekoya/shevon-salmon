import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function viewFormatter(views: number) {
  const formatter = Intl.NumberFormat("en", { notation: "compact" })

  return formatter.format(views)
}