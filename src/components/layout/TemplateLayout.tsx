import { motion } from 'framer-motion';
import { BrandingConfig } from '../../config';
import Navbar from '../ui/Navbar';
import HeroSection from '../modules/HeroSection';
import AboutSection from '../modules/AboutSection';
import BookingModule from '../modules/BookingModule';
import GalleryModule from '../modules/GalleryModule';



import Footer from '../modules/Footer';

interface TemplateLayoutProps {
  branding: BrandingConfig;
  modules: string[];
  darkMode?: boolean;
  aiContent?: {
    hero: {
      headline: string;
      subtitle: string;
      cta: string;
      stats: Array<{label: string, value: string}>;
    };
    about: {
      mission: string;
      vision: string;
      values: string[];
    };
    services: Array<{
      name: string;
      description: string;
      price?: string;
      features: string[];
    }>;
    testimonials: Array<{
      name: string;
      role: string;
      content: string;
      rating: number;
    }>;
    contact: {
      phone: string;
      email: string;
      address: string;
      hours: string;
    };
  };
}

export default function TemplateLayout({ branding, modules, darkMode = false, aiContent }: TemplateLayoutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white dark:bg-gray-900"
      >
        {/* Navigation */}
        <Navbar branding={branding} />

        {/* Main Content */}
        <main>
          {modules.includes('hero') && <HeroSection branding={branding} aiContent={aiContent} />}
          {modules.includes('about') && <AboutSection branding={branding} aiContent={aiContent} />}
          {modules.includes('booking') && <BookingModule branding={branding} />}
          {modules.includes('gallery') && <GalleryModule branding={branding} />}
        </main>

        {/* Footer */}
        {modules.includes('footer') && <Footer branding={branding} />}
      </motion.div>
    </div>
  );
} 