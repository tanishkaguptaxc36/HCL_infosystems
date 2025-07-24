import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import networklines from '../assets/networklines.png';

export default function Investerpg() {
  const [activeTab, setActiveTab] = useState('Corporate Governance');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timerRef = useRef(null);

  // Auto-close after 25 seconds
  useEffect(() => {
    if (dropdownOpen) {
      timerRef.current = setTimeout(() => setDropdownOpen(false), 25000);
    }
    return () => clearTimeout(timerRef.current);
  }, [dropdownOpen]);

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => setDropdownOpen(false);
    if (dropdownOpen) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dropdownOpen]);

  const policies = [
    'MOA and AOA',
    'CSR Policy',
    'Appointment and Remuneration Policy',
    'Code of Conduct for Director & Senior Management',
    'Criteria for Remuneration of Non Executive Director',
    'Code of Conduct under Insider Trading Regulations',
    'Preservation of Documents Policy',
    'Policy for Determination of Materiality',
    'Familiarization Programme for Independent Directors',
    'Terms & Conditions for Independent Directors',
    'Material Subsidiary Policy',
    'Related Party Transactions Policy',
  ];

  return (
    <div className="w-full text-white">
      {/* Hero Section */}
      <div className="w-full h-auto bg-gradient-to-r from-[#0072b1] to-[#1163c6] py-10 px-6 md:px-16 relative overflow-hidden">
        <img
          src={networklines}
          alt="background shape"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />
        <motion.div
          className="absolute top-[15%] left-[65%] -z-10"
          style={ball}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />

        <div className="relative z-10 max-w-5xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Investors
          </motion.h1>

          <motion.h2
            className="text-xl font-semibold mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Investor Relations – Clear and Direct
          </motion.h2>

          <motion.p
            className="text-lg font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            HCL Infosystems’s fair practices emanating from core values of transparency, integrity,
            honesty and accountability ensure that we always deliver maximum value to all our stakeholders.
          </motion.p>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-10 px-6 md:px-16">
        {activeTab === 'Corporate Governance' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg text-gray-800 p-8 rounded-md shadow-xl"
          >
            {/* Dropdown summary */}
            <div className="group relative mb-6">
              <div
                className="flex items-center gap-2 text-blue-900 font-semibold text-lg cursor-pointer"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                ▼ <span>Corporate Governance Overview</span>
              </div>
              <div
                className={`transition-all duration-1000 ease-in-out ${
                  dropdownOpen ? 'opacity-100 max-h-[600px] mt-2' : 'opacity-0 max-h-0'
                } overflow-hidden`}
              >
                <p className="text-blue-800 text-md md:text-base leading-relaxed">
                  The Company firmly believes that good corporate governance practices ensure efficient
                  conduct of the affairs of the Company while upholding the core values of transparency,
                  integrity, honesty and accountability and help the Company in its goal to maximize value
                  for all its stakeholders. The Company adopts and adheres to the best recognized corporate
                  governance practices and continuously strives to better them. The Company is in compliance
                  with the requirements of the guidelines on corporate governance stipulated in Clause 49 of
                  the Listing Agreement and The Securities and Exchange Board of India (Listing Obligations
                  and Disclosure Requirements) Regulations, 2015 with the Stock Exchanges.
                </p>
              </div>
            </div>

            {/* PDF/Links section in two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {policies.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b py-2"
                >
                  <span className="text-black text-md">{item}</span>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 text-sm font-medium hover:underline"
                  >
                    (PDF)
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* Blurred animated ball background */
const ball = {
  width: 200,
  height: 200,
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.1)',
  filter: 'blur(80px)',
  opacity: 0.7,
};
