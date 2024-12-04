import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";


// Footer
export const SOCIAL_LINKS = [
  { href: "https://facebook.com", label: "Facebook", icon: FaFacebookF },
  { href: "https://twitter.com", label: "Twitter", icon: FaTwitter },
  { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
  { href: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedinIn },
];

// Sitelink for LogoDuplet
export const SITE_LINKS = [
  "https://www.mars.com/en-in",
  "https://ansrsource.com/",
];

// Carousel
export const AUTO_DELAY = 1000 * 10;
export const DRAG_BUFFER = 50;

export const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};
