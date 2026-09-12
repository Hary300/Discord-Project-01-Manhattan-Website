import type { IconType } from 'react-icons';
import {
  FaFacebook,
  FaPinterest,
  FaSquareInstagram,
  FaSquareXTwitter,
} from 'react-icons/fa6';

type FooterNavLabel = 'Home' | 'Privacy' | 'Resources' | 'Press Releases';
type FooterNavHref = '#home' | '#privacy' | '#resources' | '#press-releases';

interface SocialLink {
  id: string;
  name: string;
  icon: IconType;
  href: string;
}

interface FooterNavItem {
  id: string;
  label: FooterNavLabel;
  href: FooterNavHref;
}

interface FooterData {
  socials: SocialLink[];
  footerNavigation: FooterNavItem[];
  copyrightText: string;
}

export const footerData: FooterData = {
  socials: [
    {
      id: 'pinterest',
      name: 'Pinterest',
      icon: FaPinterest,
      href: 'https://pinterest.com',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: FaFacebook,
      href: 'https://facebook.com',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: FaSquareInstagram,
      href: 'https://instagram.com',
    },
    {
      id: 'x',
      name: 'X',
      icon: FaSquareXTwitter,
      href: 'https://x.com',
    },
  ],
  footerNavigation: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'privacy', label: 'Privacy', href: '#privacy' },
    { id: 'resources', label: 'Resources', href: '#resources' },
    { id: 'press-releases', label: 'Press Releases', href: '#press-releases' },
  ],
  copyrightText: 'Copyright 2026 Manhattan Bridge Capital',
};
