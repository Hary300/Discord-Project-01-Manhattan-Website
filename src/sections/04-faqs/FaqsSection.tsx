import SectionWrapper from '@/components/layouts/SectionWrapper';
import { faqSectionData } from '@/data/04.faqData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqsSection = () => {
  const title = faqSectionData.title;
  const faqs = faqSectionData.faqs;
  const firstFaq = faqs[0];
  const restFaqs = faqs.slice(1);
  return (
    <SectionWrapper
      sectionId='faqs'
      className='py-10 lg:py-20 flex flex-col gap-10'
    >
      <h2 className='text-[50px] lg:text-[72px] font-bold text-green-primary'>
        {title}
      </h2>
      <div className='flex flex-col lg:flex-row gap-4'>
        <Accordion
          type='single'
          collapsible
          defaultValue='faq-1'
          className='font-sans flex flex-col gap-4'
        >
          <AccordionItem value={firstFaq.value}>
            <AccordionTrigger className='text-[24px]'>
              {firstFaq.trigger}
            </AccordionTrigger>
            <AccordionContent
              contentId={firstFaq.id}
              idClassName='lg:text-[72px] leading-15'
              className='text-[18px]'
            >
              {firstFaq.content}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type='single'
          collapsible
          className='font-sans flex flex-col gap-4'
        >
          {restFaqs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value}>
              <AccordionTrigger className='text-[24px]'>
                {faq.trigger}
              </AccordionTrigger>
              <AccordionContent contentId={faq.id} className='text-[18px]'>
                {faq.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};

export default FaqsSection;
