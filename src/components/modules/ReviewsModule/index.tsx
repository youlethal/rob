import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { BrandingConfig } from '../../../config';

interface ReviewsModuleProps {
  branding: BrandingConfig;
}

export default function ReviewsModule({ branding }: ReviewsModuleProps) {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      rating: 5,
      text: "Exceptional service and outstanding results. Highly recommended!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, StartupXYZ",
      rating: 5,
      text: "Professional team that delivers on their promises. Great experience!"
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Marketing Director",
      rating: 5,
      text: "The quality of work exceeded our expectations. Will definitely work with them again."
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 relative"
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <div className="flex mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 