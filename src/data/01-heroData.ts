import heroImg from '@/assets/images/receptionist.webp';
import cnbcLogo from '@/assets/images/company/cnbcLogo.png';
import forbesLogo from '@/assets/images/company/forbesLogo.png';
import incLogo from '@/assets/images/company/incLogo.png';
import moneyLogo from '@/assets/images/company/moneyLogo.png';
import theStreetLogo from '@/assets/images/company/theStreetLogo.png';

interface LogoData {
  textPrimary: string;
  textSecondary: string;
}

interface HeroContent {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: '#connect';
  heroImage: {
    src: string;
    alt: string;
  };
}

interface PartnerLogo {
  id: string;
  name: string;
  src: string;
  alt: string;
}

interface HeroData {
  logo: LogoData;
  hero: HeroContent;
  partners: PartnerLogo[];
}

export const heroData: HeroData = {
  logo: {
    textPrimary: 'MANHATTAN',
    textSecondary: 'BRIDGE CAPITAL',
  },
  hero: {
    title: 'Loan approval in 60 minutes',
    description:
      "Manhattan Bridge Capital offers short-term, secured, non-banking or 'hard-money' loans to real estate investors in Brooklyn, Queens, Bronx",
    ctaText: 'Apply Now',
    ctaHref: '#connect',
    heroImage: {
      src: heroImg,
      alt: 'Receptionist on the phone',
    },
  },
  partners: [
    {
      id: 'forbes',
      name: 'Forbes',
      src: forbesLogo,
      alt: 'Forbes Logo',
    },
    {
      id: 'the-street',
      name: 'TheStreet',
      src: theStreetLogo,
      alt: 'TheStreet Logo',
    },
    {
      id: 'money',
      name: 'Money',
      src: moneyLogo,
      alt: 'Money Magazine Logo',
    },
    {
      id: 'inc',
      name: 'Inc.',
      src: incLogo,
      alt: 'Inc. Magazine Logo',
    },
    {
      id: 'cnbc',
      name: 'CNBC',
      src: cnbcLogo,
      alt: 'CNBC Logo',
    },
  ],
};
