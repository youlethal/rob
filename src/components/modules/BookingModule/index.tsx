import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import { BrandingConfig } from '../../../config';

interface BookingModuleProps {
  branding: BrandingConfig;
}

export default function BookingModule({ branding }: BookingModuleProps) {
  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h2>
          <p className="text-xl text-gray-600">Schedule a consultation with our team.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <div className="text-center text-gray-500">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-primary" />
            <p className="text-lg mb-4">Booking system will be integrated here</p>
            <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Book Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 