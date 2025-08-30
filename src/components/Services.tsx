import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Satellite, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onGetStarted: () => void;
}

const Services: React.FC<ServicesProps> = ({ onGetStarted }) => {
  const services = [
    {
      icon: Truck,
      title: 'Local & Long-Haul Freight',
      description: 'Reliable transportation for short and long distances with verified carriers and competitive pricing.',
      color: 'from-blue-600 to-darkblue-800'
    },
    {
      icon: Package,
      title: 'Shared Truck Space (Groupage)',
      description: 'Cost-effective sharing of truck space for smaller loads, optimizing efficiency and reducing costs.',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Satellite,
      title: 'Tracking & Updates',
      description: 'Real-time GPS tracking and status notifications to keep you informed throughout the journey.',
      color: 'from-darkblue-700 to-black'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive logistics solutions designed to meet your transportation needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  hover: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-darkblue-800 to-black rounded-2xl p-8 text-center text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Logistics?
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Join thousands of satisfied customers and carriers on our platform
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetStarted}
              className="bg-white text-darkblue-800 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-lg flex items-center space-x-2 mx-auto"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;