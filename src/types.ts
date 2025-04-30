// export interface image {
//    id: number | string,
//    width: number,
//    height: number,
//    url: string,
//    photographer: string,
//    photographer_url: string,
//    photographer_id: number,
//    avg_color: string,
//    liked: boolean,
//    src: {
//       original: string,
//       large: string,
//       tiny: string,
//       medium: string
//    },
//    alt: string 
// }

type Author = {
  username: string;
  id: string;
  name: string;
  avatar: string;
  attributionUrl: string;
  role: string;
};

type ColorPalette = {
  [key: string]: {
    hex: string;
    weight: number;
  };
};

type VariantPaths = {
  path: string;
  url: string;
};

type Variants = {
  neon?: VariantPaths;
  comic?: VariantPaths;
  "cute-3d"?: VariantPaths;
  colorful?: VariantPaths;
  "pixel-art"?: VariantPaths;
  watercolor?: VariantPaths;
};

type Tag = {
  id: string;
  slug: string;
  name: string;
};

type Category = {
  id: string;
  slug: string;
  name: string;
};

export type image = {
  dominantColorGroup: string;
  dominantColorWeight: number;
  approved: boolean;
  aspectRatio: number;
  blurhash: string;
  description: string;
  detailedDescription: string;
  vibeDescription: string;
  downloadCount: number;
  focalHeight: number;
  focalPositionX: number;
  focalPositionY: number;
  focalWidth: number;
  height: number;
  width: number;
  luminance: number;
  name: string;
  orientation: string;
  pro: boolean;
  randomFieldScore: number;
  removed: boolean;
  searchAppearances: number;
  transparent: boolean;
  viewCount: number;
  visionPromptVersion: number;
  discoverable: boolean;
  becameDiscoverableAt: string;
  unsafe: boolean;
  reference: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
  slug: string;
  size: number;
  path: string;
  outpaintAssetPath: string;
  imageType: string;
  collections: number;
  attributionUrl: string;
  focalZone: string;
  author: Author;
  shootId: string | null;
  contentType: string;
  colorPalette: ColorPalette;
  colorGroups: string[];
  numberOfPeople: number;
  trendScore: number;
  featuredAt: string | null;
  featuredScore: number;
  featuredScoreUpdatedAt: string;
  free: boolean;
  flags: string[];
  videoUpdatedAt: string | null;
  variants: Variants;
  outpaintAssetUrl: string;
  url: string;
  tags: Tag[];
  categories: Category[];
};


export type VideoInfo = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  }
  duration: string;
  views: number;
  videoLink: string;
  datePosted: string;
}