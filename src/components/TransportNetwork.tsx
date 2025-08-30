import React from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure this is imported (can be global in index.tsx)

// Fix for Leaflet default marker icon in React (required for v4+)
interface DefaultIconPrototype extends L.Icon.Default {
  _getIconUrl?: string;
}
delete ((L.Icon.Default.prototype as DefaultIconPrototype)._getIconUrl);
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Define East African cities for map pins (expandable)
interface City {
  name: string;
  position: [number, number];
  description: string;
}

const cities: City[] = [
  { name: 'Nairobi, Kenya', position: [-1.286389, 36.817223], description: 'Major logistics hub in Kenya' },
  { name: 'Dar es Salaam, Tanzania', position: [-6.792354, 39.208328], description: 'Key port for East African trade' },
  { name: 'Kampala, Uganda', position: [0.347596, 32.582520], description: 'Central hub for regional transport' },
  // Add more pins here if needed, e.g.:
  { name: 'Mombasa, Kenya', position: [-4.043477, 39.668206], description: 'Primary seaport for cargo' },
];

const TransportNetwork: React.FC = () => {
  return (
    <section id="network" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Transport Network
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Connecting East Africa with reliable routes and real-time logistics solutions.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Expanding your reach, one route at a time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Africa Map with Custom Styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-xl overflow-hidden custom-map-container"> {/* Custom class for styling */}
              <MapContainer
                center={[0, 20]} // Centered on Africa
                zoom={4}
                style={{ height: '100%', width: '100%' }}
                className="rounded-xl"
              >
                {/* Custom TileLayer for preferred color scheme (light, clean Positron style) */}
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" // Positron: Soft grays/whites; change to /dark_all/ for dark theme
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                {cities.map((city, index) => (
                  <motion.div
                    key={city.name}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Marker position={city.position}>
                      <Popup>
                        <div className="text-sm text-blue-800"> {/* Blue text for theme */}
                          <strong>{city.name}</strong>
                          <p>{city.description}</p>
                        </div>
                      </Popup>
                    </Marker>
                  </motion.div>
                ))}
              </MapContainer>
            </div>
            {/* CTA Button Below Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 text-center"
            >
              <a
                href="#get-started"
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
              >
                Join Our Network
              </a>
            </motion.div>
          </motion.div>

          {/* Expanding Coverage Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-2">Expanding Coverage</h4>
              <p className="text-gray-300 text-sm">
                New routes added weekly • Real-time tracking • 24/7 support for goods and truck owners
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom CSS for Map Styling (add to your global CSS file, e.g., src/index.css) */}
      <style>{`
        .custom-map-container .leaflet-container {
          filter: hue-rotate(200deg) saturate(0.8) brightness(1.1); /* Subtle blue tint; adjust hue-rotate for your preferred color (e.g., 120deg for green) */
        }
        .custom-map-container .leaflet-marker-icon {
          filter: hue-rotate(200deg); /* Blue tint on pins; customize as needed */
        }
      `}</style>
    </section>
  );
};

export default TransportNetwork;