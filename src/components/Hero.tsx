import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, Truck } from 'lucide-react';

interface HeroProps {
  onRoleSelect: (role: 'goods' | 'truck') => void;
}

const Hero: React.FC<HeroProps> = ({ onRoleSelect }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Images served from public/images/
  const backgroundImages = [
    'public/images/transport-logistics-products.jpg',
    'public/images/shipping-container-being-loaded-onto-truck-port.jpg',
    'public/images/white-semi-trailer-truck-port.jpg',
    'public/images/shipping-container-packed-with-cardboard-boxes.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
        >
          The Bridge Between
          <br />
          <span className="text-blue-500">Cargo & Carriers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
        >
          Whether you have goods to move or trucks to fill, Cargo Bridge connects you instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onRoleSelect('goods')}
            className="bg-gradient-to-r from-blue-600 to-darkblue-800 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-blue-700 hover:to-darkblue-900 transition-all shadow-lg flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <Package className="h-5 w-5" />
            <span>I Have Goods</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onRoleSelect('truck')}
            className="bg-gradient-to-r from-gray-700 to-black text-white px-8 py-3 rounded-full text-lg font-medium hover:from-gray-800 hover:to-gray-900 transition-all shadow-lg flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <Truck className="h-5 w-5" />
            <span>I Have a Truck</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
