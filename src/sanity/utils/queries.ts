import { defineQuery } from "next-sanity";

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

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage"] {
  heroSection, aboutSection, 
  companiesSection, ytVideosSection, 
  testimonialsSection, faqSection
}`)