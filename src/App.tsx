import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import TransportNetwork from './components/TransportNetwork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'goods' | 'truck' | null>(null);

  const handleRoleSelect = (role: 'goods' | 'truck') => {
    setSelectedRole(role);
    setIsLoginModalOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white font-['Futura',_sans-serif]">
        <Navbar onGetStarted={() => setIsLoginModalOpen(true)} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero onRoleSelect={handleRoleSelect} />
              <AboutUs />
              <Services onGetStarted={() => setIsLoginModalOpen(true)} />
              <TransportNetwork />
              <Contact />
            </>
          } />
        </Routes>
        
        <Footer />
        
        <LoginModal 
          isOpen={isLoginModalOpen}
          onClose={() => {
            setIsLoginModalOpen(false);
            setSelectedRole(null);
          }}
          selectedRole={selectedRole}
          onRoleSelect={setSelectedRole}
        />
      </div>
    </Router>
  );
}

export default App;