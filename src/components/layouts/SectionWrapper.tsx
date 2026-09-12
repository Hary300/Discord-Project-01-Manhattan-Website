import { cn } from 'cn';
import type { ReactNode } from 'react';

type SectionId = 'home' | 'about' | 'reviews' | 'team' | 'connect';

interface SectionWrapperProps {
  sectionId: SectionId;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({
  sectionId,
  children,
  className,
}: SectionWrapperProps) => {
  return (
    <section
      id={sectionId}
      className={cn(
        'px-4 sm:pr-10 sm:pl-10 lg:pr-15 lg:pl-15 xl:pr-30 xl:pl-30',
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
