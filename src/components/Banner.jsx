import React from 'react'
import { motion } from 'framer-motion';
import networklines from '../assets/networklines.png';

function Banner({title, subtitle, description}) {
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
            {title}
          </motion.h1>

          <motion.h2
            className="text-xl font-semibold mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.h2>

          <motion.p
            className="text-lg font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
      </div>
  )
}

const ball = {
  width: 200,
  height: 200,
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.1)',
  filter: 'blur(80px)',
  opacity: 0.7,
};



export default Banner
