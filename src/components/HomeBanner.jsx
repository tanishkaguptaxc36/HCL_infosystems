import {useRef} from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import sky from "../assets/HCL-Infosystems_build.jpg";
import cloud from '../assets/cloud.svg';
import circuit from '../assets/circuit.svg';

export default function HclBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const gradientText = [
    { char: "F", color: "text-blue-50" },
    { char: "o", color: "text-blue-100" },
    { char: "c", color: "text-blue-200" },
    { char: "u", color: "text-blue-300" },
    { char: "s", color: "text-blue-400" },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-tr from-[#0b2c64] via-[#1976d2] to-[#7bb1f9] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 text-white"
    >
      {/* Background Animated Blobs */}
      <motion.div
        className="absolute top-[10%] left-[-100px] w-[300px] h-[300px] bg-blue-400/30 rounded-full blur-3xl z-0"
        style={{ rotate, scale }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-200/20 rounded-full blur-2xl z-0"
        style={{ rotate, scale }}
      />

      {/* Floating Icons */}
      <motion.img
        src={circuit}





        alt="circuit"
        className="absolute left-[20%] top-[10%] w-25 opacity-20 animate-pulse"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.img
        src={cloud}
        alt="cloud"
        className="absolute right-[25%] bottom-[20%] w-12 opacity-20 animate-pulse"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Left Text */}
      <div className="z-10 text-center md:text-left max-w-xl">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          Empowering Enterprises with
          <br />
          Smart Technology {" "}
          <span className="inline-block">
            {gradientText.map((item, idx) => (
              <span key={idx} className={`${item.color} drop-shadow-xl`}>{item.char}</span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-base md:text-lg font-light drop-shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Digital transformation redefined through next-gen IT infrastructure,
          integrated systems, and elite support services.
        </motion.p>

        
      </div>

      {/* Tech Image */}
      <motion.img
        src={sky}
        alt="Tech Visual"
        className="w-[700px] md:w-[680px] h-auto  object-contain drop-shadow-2xl z-10 mt-10 md:mt-0"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4 }}
      />
    </section>
  );
}
