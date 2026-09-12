import SectionWrapper from '@/components/layouts/SectionWrapper';
import { contactData } from '@/data/05-contactData';
import ContactForm from './components/ContactForm';

const ContactSection = () => {
  const title = contactData.title;
  const contactInfo = contactData.contactInfo;
  const mapUrl = contactData.mapEmbedUrl;
  return (
    <SectionWrapper
      sectionId='connect'
      className='py-10 lg:py-20 flex flex-col gap-10'
    >
      <h2 className='text-[72px] font-bold text-green-primary'>{title}</h2>
      <div className='flex flex-col md:flex-row gap-4'>
        {contactInfo.map((item) => (
          <div
            key={item.id}
            className='border flex-1 bg-[#f5f5f5] flex flex-col pt-25 pb-25 md:pb-0 items-center h-93 gap-3'
          >
            <div>
              <img src={item.icon} alt={`${item.id} icon`} />
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <p className='text-[36px] font-extralight'>{item.title}</p>
              <div className='flex flex-col items-center'>
                {item.details.map((detail) => (
                  <p key={detail} className='font-georgia'>
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col sm:flex-row gap-4'>
        <ContactForm />
        <iframe
          src={mapUrl}
          style={{ border: 0 }}
          loading='lazy'
          referrerPolicy='strict-origin-when-cross-origin'
          className='w-full'
        ></iframe>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
