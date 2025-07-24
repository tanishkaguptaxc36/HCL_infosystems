// File: Card.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

// Animated colorful border gradients for cards
const borderGradient = 
  "linear-gradient(90deg, #ff6a00, #ffbe30, #00c3ff, #53ff1d, #ff6a00)";

// Hover animation for card magnify and shadow
const hoverAnim = {
  scale: 1.04,
  boxShadow: "0 4px 20px 4px rgba(0,0,0,0.15)",
  transition: { type: "spring", stiffness: 180, damping: 18 },
};

// Single CardItem component with animated border
function CardItem({ image, title, desc, link }) {
  return (
    <Link to={link} tabIndex={0} className="group">
      <div
        className="relative p-[3px] rounded-xl group-hover:scale-105 transition-transform duration-300"
        style={{
          background: borderGradient,
          backgroundSize: "400% 400%",
          animation: "borderGlow 5s linear infinite",
        }}
      >
        <motion.div
          whileHover={hoverAnim}
          whileFocus={hoverAnim}
          className="rounded-xl bg-[#181818] overflow-hidden min-w-[260px] max-w-[260px] flex-shrink-0 min-h-[220px] h-[340px] flex flex-col justify-end shadow-xl relative"
        >
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
          />
          <div className="relative z-10 p-6">
            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">
              {title}
            </h3>
            {desc && <p className="text-white text-base drop-shadow">{desc}</p>}
          </div>
        </motion.div>
      </div>
      <style>
        {`
          @keyframes borderGlow {
            0% { background-position: 0% 50% }
            100% { background-position: 100% 50% }
          }
        `}
      </style>
    </Link>
  );
}

// Scroll animation variants for the horizontal marquee
const scrollVariants = {
  animate: (width) => ({
    x: [0, -width],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  }),
  paused: {},
};

// Main CardGrid component handling infinite scroll and hover pause
export default function CardGrid({ cards }) {
  const controls = useAnimation();
  const CARD_WIDTH = 260;
  const SPACING = 32;
  const totalCards = cards.length;
  const trackWidth = (CARD_WIDTH + SPACING) * totalCards;

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => controls.start("animate");

  useEffect(() => {
    controls.start("animate");
  }, [controls, trackWidth]);

  // Duplicate cards for seamless infinite scrolling
  const infiniteCards = [...cards, ...cards];

  return (
    <div className="relative w-full overflow-x-hidden py-12 bg-[#212121]">
      <motion.div
        style={{ display: "flex", gap: `${SPACING}px` }}
        animate={controls}
        variants={scrollVariants}
        custom={trackWidth}
        initial={false}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {infiniteCards.map((card, idx) => (
          <CardItem
            key={idx}
            image={card.image}
            title={card.title}
            desc={card.desc}
            link={card.link}
          />
        ))}
      </motion.div>
    </div>
  );
}
