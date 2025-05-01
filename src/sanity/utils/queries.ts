import { defineQuery } from "next-sanity";

export const GEARS_PAGE_QUERY = defineQuery(`*[_type == "gearsPage"] {
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
  heroSection {
    portrait {
      asset->{
        _id,
        url,
        metadata { dimensions, palette, lqip }
      }
    },
    heading,
    subHeading,
    bottomImages[] {
      asset->{
        _id,
        url,
        metadata { dimensions, palette, lqip }
      }
    },
    digitalProductLinks
  },
  aboutSection {
    heading,
    subHeading,
    content[] {
      ...,
      markDefs[]{
        ...,
        _type == "link" => {
          _type,
          href
        }
      }
    },
    image {
      asset->{
        _id,
        url,
        metadata { dimensions, palette, lqip }
      }
    }
  },
  companiesSection {
    heading,
    companiesList[] {
      companyName,
      companyWebsiteLink,
      companyLogo {
        asset->{
          _id,
          url,
          metadata { dimensions }
        }
      }
    }
  },
  ytVideosSection {
    heading,
    subHeading,
    "videos": videos[0..11] {
      videoId
    }
  },
  testimonialsSection {
    heading,
    subHeading,
    testimonials[] {
      author,
      quote
    }
  },
  faqSection {
    heading,
    subHeading,
    faqs[] {
      question,
      answer[] {
        ...,
        markDefs[]{
          ...,
          _type == "link" => {
            _type,
            href
          }
        }
      }
    }
  }
}`)