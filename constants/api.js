// API route
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Page content routes (Single types)
export const HOME_PATH = "home";
export const ACCOMMODATION_PATH = "accommodation";
export const CAMPING_PATH = "camping";
export const EVENT_PATH = "event";
export const EVENT_ENQUIRY_PATH = "event-enquiry";
export const OPENING_HOUR_PATH = "opening-hour";
export const ABOUT_PATH = "about";
export const COMPANY_PATH = "company";
export const PRIVACY_PATH = "privacy";

// SEO Head only routes (Single types)
export const BLOG_SEO_PATH = "blog-seo";
export const ACTIVITIES_SEO_PATH = "activities-seo";
export const RENTAL_SEO_PATH = "rental-seo";
export const CONTACT_PATH = "contact-seo";

// Page content routes (Collection types)
export const POSTS_PATH = "posts";
export const ACTIVITIES_PATH = "activities";
export const RENTALS_PATH = "rentals";
export const CAMPING_GALLERY_PATH = "camping-galleries";
export const MESSAGES_PATH = "messages";
export const ENQUIRIES_PATH = "enquiries";

// Filtered routes (Collection types)
// Limit of 3 posts
export const POSTS_RECENT_PATH =
  POSTS_PATH + "?pagination[page]=1&pagination[pageSize]=3";
