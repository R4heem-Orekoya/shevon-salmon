import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function removeSearchQueryAndHash(url: string) {
  return url.split('?')[0].split('#')[0];
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


type Text = { type: "text"; content: string }
type Image = { type: "image"; src: string }
type Video = { type: "video"; src: string }

type Post = Text | Image | Video

export type PostCatalog = {
  [P in Post as P["type"]]: P;
}



type Success<T> = {
  data: T;
  error: null;
}

type Failure<Error> = {
  data: null;
  error: Error
}

type Result<T, E = Error> = Success<T> | Failure<E>

export async function tryCatch<T>(promise: Promise<T>): Promise<Result<T>> {
  try{
    const data = await promise
    return { data, error: null }
  }catch(err){
    return { data: null, error: err as Error }
  }
}