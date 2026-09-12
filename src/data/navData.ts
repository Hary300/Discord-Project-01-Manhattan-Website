export type NavLabel = 'Home' | 'About' | 'Reviews' | 'Team' | 'Connect';
export type NavHref = '#home' | '#about' | '#reviews' | '#team' | '#connect';

interface NavData {
  id: string;
  label: NavLabel;
  href: NavHref;
}

export const navData: NavData[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'reviews', label: 'Reviews', href: '#reviews' },
  { id: 'team', label: 'Team', href: '#team' },
  { id: 'connect', label: 'Connect', href: '#connect' },
];
