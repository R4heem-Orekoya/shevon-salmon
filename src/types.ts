export interface image {
   id: number | string,
   width: number,
   height: number,
   url: string,
   photographer: string,
   photographer_url: string,
   photographer_id: number,
   avg_color: string,
   liked: boolean,
   src: {
      original: string,
      large: string,
      tiny: string,
      medium: string
   },
   alt: string 
}