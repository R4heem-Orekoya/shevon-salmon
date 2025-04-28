import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);

export const GEARS_PAGE_QUERY =
  defineQuery(`*[_type == "gearsPage"] {
    heading, subHeading, gears, youtubeReferenceVideo
}`)

export const WALLPAPERS_PAGE_QUERY = defineQuery(`*[_type == "wallpapersPage"] {
  heading,
  premiumLink,
  wallpapers[]{
    _key,
    wallpaper,
    image{
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          palette,
          lqip
        }
      }
    }
  }
}`)

export const GALLERY_PAGE_QUERY = defineQuery(`*[_type == "galleryPage"] {
  heading,
  subHeading,
  medias[]{
    _key,
    title,
    image{
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          palette,
          lqip
        }
      }
    }
  }
}`)