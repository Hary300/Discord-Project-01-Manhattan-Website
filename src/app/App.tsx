import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import HeroSection from '@/sections/01-hero';
import ThreeColumnsSection from '@/sections/02-threeColumns';
import WhyManhattanSection from '@/sections/03-whyManhattan';
import FaqsSection from '@/sections/04-faqs';
import ContactSection from '@/sections/05-contact';

function App() {
  return (
    <div className='max-w-360 mx-auto'>
      <Header />
      <HeroSection />
      <ThreeColumnsSection />
      <WhyManhattanSection />
      <FaqsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
