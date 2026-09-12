import { Marquee } from '@/components/shadcn-space/animations/marquee';
import { heroData } from '@/data/01-heroData';
import { cn } from 'cn';

export default function MarqueePartner() {
  const partners = heroData.partners;

  return (
    <>
      <Marquee className='[--duration:20s]' pauseOnHover>
        {partners.map((partner, index) => (
          <div key={index} className='max-w-60'>
            <img
              src={partner.src}
              alt={partner.alt}
              className={cn(
                'mr-6 lg:mr-20 size-full object-contain pr-10',
                partner.id === 'money' && 'scale-115 mt-1.5',
                partner.id === 'inc' && 'scale-80',
                partner.id === 'cnbc' && 'mt-1'
              )}
            />
          </div>
        ))}
      </Marquee>
    </>
  );
}
