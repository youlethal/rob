import { motion } from 'framer-motion';
import { BrandingConfig } from '../../../config';

interface GalleryModuleProps {
  branding: BrandingConfig;
}

export default function GalleryModule({ branding }: GalleryModuleProps) {
  const galleryItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Gallery Item ${i + 1}`,
    description: `Description for item ${i + 1}`
  }));

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600">Take a look at some of our recent projects.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <span className="text-gray-500">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 