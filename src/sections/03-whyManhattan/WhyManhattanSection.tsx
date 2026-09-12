import SectionWrapper from '@/components/layouts/SectionWrapper';
import { whyManhattanData } from '@/data/03-whyManhattanData';

const WhyManhattanSection = () => {
  const bgImg = whyManhattanData.backgroundImage;
  const title = whyManhattanData.title;
  const articles = whyManhattanData.articles;
  return (
    <SectionWrapper
      sectionId='reviews'
      className='relative overflow-hidden py-10 lg:py-20 flex flex-col gap-8'
    >
      <div className='absolute inset-0 -z-1 overflow-hidden'>
        <img
          src={bgImg.src}
          alt={bgImg.alt}
          className='size-full object-cover object-top sm:min-w-400 xl:min-w-450'
        />
      </div>
      <h2 className='text-[50px] sm:text-[83px] font-bold text-white '>
        {title}
      </h2>
      <div className='bg-white flex flex-col gap-10 py-10 px-4 max-w-160'>
        {articles.map((article) => (
          <div key={article.id} className='flex flex-col gap-2 font-sans'>
            <p className='text-[28px]'>{article.heading}</p>
            <p className='text-[22px]'>{article.body}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WhyManhattanSection;
