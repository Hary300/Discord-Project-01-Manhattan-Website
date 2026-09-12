import { navData } from '@/data/navData';
import { HiMenu } from 'react-icons/hi';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { cn } from 'cn';

const Header = () => {
  const [isOverSelectedSection, setIsOverSelectedSection] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('home');

    console.log(hero);

    const obverse = new IntersectionObserver(([entry]) =>
      setIsOverSelectedSection(!entry.isIntersecting)
    );

    if (hero) {
      obverse.observe(hero);
    }

    return () => {
      obverse.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed w-full flex justify-end max-w-360 mx-auto z-50 pr-4 sm:pr-10 xl:pr-20 pt-7'
      )}
    >
      <nav className='hidden lg:flex w-full max-w-140 py-4 px-6 rounded-2xl backdrop-blur-2xl'>
        <ul className='flex justify-between w-full '>
          {navData.map((link) => (
            <li key={link.id}>
              {' '}
              <a
                href={link.href}
                className={cn(
                  'text-[23px] font-sans font-semibold hover:underline text-white',
                  isOverSelectedSection && 'text-foreground'
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
              isOverSelectedSection && 'text-foreground'
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
