import { navData } from '@/data/navData';
import { HiMenu } from 'react-icons/hi';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { cn } from 'cn';

const Header = () => {
  const [isOverHero, setIsOverHero] = useState(false);

  useEffect(() => {
    const targetElement = document.getElementById('home');

    const obverse = new IntersectionObserver(
      ([entry]) => {
        setIsOverHero(!entry.isIntersecting);
      },
      { threshold: 0.001 }
    );

    if (targetElement) {
      obverse.observe(targetElement);
    }

    return () => {
      obverse.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed w-full flex justify-end max-w-360 mx-auto z-50 text-white pr-4 sm:pr-10 xl:pr-20 pt-7',
        isOverHero && 'text-foreground'
      )}
    >
      <nav className='hidden lg:flex w-full max-w-140 py-4 px-6 rounded-2xl backdrop-blur-2xl'>
        <ul className='flex justify-between w-full '>
          {navData.map((link) => (
            <li key={link.id}>
              {' '}
              <a
                href={link.href}
                className='text-[23px] font-sans font-semibold hover:underline'
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
              'lg:hidden bg-transparent backdrop-blur-2xl h-16',
              isOverHero && 'text-foreground'
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
