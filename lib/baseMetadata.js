import { siteMeta } from "lib/constants";
const {
  siteTitle,
  siteDesc,
  siteUrl,
  siteLang,
  siteLocale,
  siteType,
  siteIcon,
} = siteMeta;
// OGP画像
import siteImg from "images/main-bg.jpg";

export const baseMetadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    cannonical: "./",
  },
  title: {
    template: `%s | ${siteTitle}`,
    default: siteTitle,
  },
  description: siteDesc,
  icons: {
    icon: siteIcon,
    apple: siteIcon,
  },
}

export const openGraphMetadata = {
    title: siteTitle,
    description: siteDesc,
    url: siteUrl,
    siteName: siteTitle,
    images: {
      url: siteImg.src,
      width: siteImg.width,
      height: siteImg.height,
    },
    locale: siteLocale,
    type: siteType,
}

export const twitterMetadata = {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDesc,
    images: [siteImg.src],
};


