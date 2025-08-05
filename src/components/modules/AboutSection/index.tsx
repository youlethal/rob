import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart } from 'lucide-react';
import { BrandingConfig } from '../../../config';

interface AboutSectionProps {
  branding: BrandingConfig;
  aiContent?: {
    about: {
      mission: string;
      vision: string;
      values: string[];
    };
  };
}

export default function AboutSection({ branding, aiContent }: AboutSectionProps) {
  // Use AI content if available, otherwise use defaults
  const aboutContent = aiContent?.about || {
    mission: "To deliver outstanding results that exceed expectations.",
    vision: "To be the leading provider in our industry.",
    values: ["Integrity", "Quality", "Customer Satisfaction"]
  };

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: aboutContent.mission
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description: aboutContent.vision
    },
    {
      icon: Heart,
      title: "Our Values",
      description: aboutContent.values.join(", ")
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About {branding.businessName}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing exceptional service and quality results for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 