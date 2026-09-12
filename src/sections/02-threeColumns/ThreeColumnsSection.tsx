import SectionWrapper from '@/components/layouts/SectionWrapper';
import { threeColumnsData } from '@/data/02-threeColumnsData';

const ThreeColumnsSection = () => {
  const features = threeColumnsData.features;
  return (
    <SectionWrapper sectionId='about' className='py-10 lg:py-20'>
      <div className='flex gap-4 flex-col sm:flex-row justify-between md:max-w-200 mx-auto'>
        {features.map((feature) => (
          <div
            key={feature.id}
            className='flex flex-col gap-3 w-full sm:max-w-43.75'
          >
            <h3 className='text-[30px] font-semibold text-green-primary'>
              {feature.title}
            </h3>
            <p className='text-[14px] font-sans'>{feature.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ThreeColumnsSection;
