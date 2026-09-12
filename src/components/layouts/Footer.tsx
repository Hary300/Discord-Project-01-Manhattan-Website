import { footerData } from '@/data/footerData';

const Footer = () => {
  const socials = footerData.socials;
  const footerNavLinks = footerData.footerNavigation;
  return (
    <footer className='flex flex-col gap-6 py-5 items-center bg-[#527eb7]'>
      <div className='flex flex-col gap-4  items-center'>
        <div className='flex gap-4'>
          {socials.map((social) => {
            const Icon = social.icon;
            return <Icon key={social.id} className='size-7' />;
          })}
        </div>
        <ul className='flex gap-5 md:gap-10 flex-wrap justify-center'>
          {footerNavLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className='text-white sm:text-[25px] md:text-[30px] hover:underline cursor-pointer'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className='text-[14px]'>{footerData.copyrightText}</p>
    </footer>
  );
};

export default Footer;
