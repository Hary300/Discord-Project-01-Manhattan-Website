import { navData } from '@/data/navData';
import { HiMenu } from 'react-icons/hi';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { cn } from 'cn';

const Header = () => {
  const [isOutsideSelectedSection, setIsOutsideSelectedSection] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');

      const navbarHeight = header?.offsetHeight ?? 0;

      const navbarBottom = window.scrollY + navbarHeight;

      const isOutsideSection = (elementId: string) => {
        const el = document.getElementById(elementId);
        if (!el) return false;
        const sectionTop = el.offsetTop;
        const sectionBottom = sectionTop + el.offsetHeight;

        return navbarBottom < sectionTop || navbarBottom > sectionBottom;
      };

      const isOutsideHome = isOutsideSection('home');
      const isOutsideReviews = isOutsideSection('reviews');

      setIsOutsideSelectedSection(isOutsideHome && isOutsideReviews);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id='header'
      className={cn(
        'fixed w-full flex justify-end max-w-360 mx-auto z-50 pr-4 sm:pr-10 xl:pr-20 pt-7'
      )}
    >
      <nav className='hidden lg:flex w-full max-w-140 py-4 px-6 rounded-2xl backdrop-blur-2xl'>
        <ul className='flex justify-between w-full '>
          {navData.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={cn(
                  'text-[23px] font-sans font-semibold hover:underline text-white',
                  isOutsideSelectedSection && 'text-foreground'
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            className={cn(
              'lg:hidden bg-transparent backdrop-blur-2xl h-16 text-white',
              isOutsideSelectedSection && 'text-foreground'
            )}
          >
            <HiMenu className='size-10 ' />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <nav className=''>
            <nav className='w-full max-w-140 py-4 px-6 rounded-2xl backdrop-blur-2xl'>
              <ul className='flex flex-col gap-4  w-full '>
                {navData.map((link) => (
                  <li key={link.id}>
                    {' '}
                    <a
                      href={link.href}
                      className='text-[23px] font-sans font-semibold'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
