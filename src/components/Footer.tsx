import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Transport Network', href: '#network' },
    { name: 'Contact', href: '#contact' },
    { name: 'Leaderboard', href: '#leaderboard' },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">Cargo Bridge</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Connecting goods owners with truck owners for efficient, reliable, and transparent logistics across East Africa.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-darkblue-700 p-2 rounded-lg hover:bg-darkblue-800 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <span className="text-sm font-bold">TikTok</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>+254 700 123 456</p>
              <p>hello@cargobridge.co.ke</p>
              <p>Nairobi, Kenya</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-6 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Cargo Bridge. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;