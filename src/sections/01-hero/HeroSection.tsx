import SectionWrapper from '@/components/layouts/SectionWrapper';
import MarqueePartner from '@/components/shadcn-space/marquee/MarqueePartner';
import { Button } from '@/components/ui/button';
import { heroData } from '@/data/01-heroData';

const HeroSection = () => {
  const logo = heroData.logo;
  const hero = heroData.hero;
  return (
    <SectionWrapper
      sectionId='home'
      className='flex flex-col gap-8 bg-[#517eb7] md:pl-0 lg:pl-0 xl:pl-0 md:pr-0 lg:pr-0 xl:pr-0'
    >
      <div className='flex flex-col md:flex-row gap-8 md:gap-4 md:pl-10 lg:pl-15 xl:pl-30'>
        <div className='pt-6.5 relative flex flex-col gap-13 text-white'>
          <div className='flex flex-col px-4 sm:px-5 py-3 sm:py-3.75 bg-white w-fit font-medium items-center'>
            <p className='text-[35px] sm:text-[60px] leading-10 sm:leading-15 text-green-primary text-center'>
              {logo.textPrimary}
            </p>
            <p className='text-[20px] sm:text-[30px] text-green-primary/30 tracking-[3px] sm:tracking-[6px]'>
              {logo.textSecondary}
            </p>
          </div>

          <div className='flex flex-col gap-8 md:max-w-120 '>
            <h1 className='text-[50px] font-sans leading-tight'>
              {hero.title}
            </h1>
            <p className='font-georgia text-[16px] md:max-w-85'>
              {hero.description}
            </p>
            <Button
              asChild
              className='max-w-75 md:max-w-93.75 bg-green-primary h-25 md:h-28 rounded-[40px] text-[50px] md:text-[70px] leading-0 shadow-[2px_5px_0_rgba(4.3,16.1,5.1,1)] active:shadow-none hover:bg-[#166518]'
            >
              <a href={hero.ctaHref}>{hero.ctaText}</a>
            </Button>
          </div>
        </div>
        <div className='rounded-4xl md:rounded-l-full bg-[#3f659e] py-2 pl-2 pr-2 md:py-0 md:pr-0 md:pl-7.5 md:h-179 w-full overflow-hidden'>
          <div className='rounded-2xl md:rounded-l-full w-full h-full bg-[#457ecf] py-2 pl-2 pr-2 md:py-0 md:pr-0 md:pl-7.5'>
            <div className='relative right-0 rounded-lg md:rounded-l-full h-full overflow-hidden w-full'>
              <img
                src={hero.heroImage.src}
                alt={hero.heroImage.alt}
                className='md:absolute -right-50 md:right-[clamp(-300px,-642.86px+44.64vw,0px)] inset-y-0 size-full object-cover object-top md:min-w-390 shrink-0'
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <MarqueePartner />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;

// 457ecf
