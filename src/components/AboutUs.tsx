import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Route, AlertTriangle } from 'lucide-react';

import aboutUsImage from '../images/aboutUsImage.jpg';

const AboutUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    {
      id: 'about',
      label: 'About Us',
      icon: Target,
      title: 'Empowering Seamless Logistics in East Africa',
      content: 'Cargo Bridge is revolutionizing the logistics landscape by creating efficient connections between goods owners and truck operators. Our mission is to eliminate inefficiencies in freight transportation while building trust and transparency in the supply chain ecosystem.'
    },
    {
      id: 'success',
      label: 'Success Path',
      icon: Route,
      title: 'How We Solve Logistics Challenges',
      content: 'Our platform streamlines the entire logistics process: 1) Smart matching algorithm connects cargo with available trucks, 2) Real-time tracking provides visibility throughout the journey, 3) Secure payment processing ensures trust, 4) Performance analytics help optimize future shipments.'
    },
    {
      id: 'challenges',
      label: 'Challenges',
      icon: AlertTriangle,
      title: 'Addressing Industry Pain Points',
      content: 'We tackle critical logistics challenges head-on: Poor road infrastructure through route optimization, lack of trust via verified user profiles, cost transparency with upfront pricing, and inefficient communication through our integrated platform that keeps all parties connected in real-time.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-blue-100 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src={aboutUsImage}
                alt="About Cargo Bridge"
                className="object-cover w-full h-full"
                draggable="false"
              />
            </div>
          </motion.div>

          {/* Right Side - Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                      activeTab === tab.id
                        ? 'bg-darkblue-800 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {tabs.map((tab) => (
                activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                  >
                    <h3 className="text-2xl font-bold text-black mb-4">
                      {tab.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {tab.content}
                    </p>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;