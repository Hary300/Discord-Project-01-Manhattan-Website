export type NavLabel = 'Home' | 'About' | 'Reviews' | 'Faqs' | 'Connect';
export type NavHref = '#home' | '#about' | '#reviews' | '#faqs' | '#connect';

interface NavData {
  id: string;
  label: NavLabel;
  href: NavHref;
}

export const navData: NavData[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'reviews', label: 'Reviews', href: '#reviews' },
  { id: 'team', label: 'Faqs', href: '#faqs' },
  { id: 'connect', label: 'Connect', href: '#connect' },
];
