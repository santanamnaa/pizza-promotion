import { motion } from 'motion/react';
import { Phone, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  pizzaImage: string;
  backgroundImage: string;
}

export default function HeroSection({ pizzaImage, backgroundImage }: HeroSectionProps) {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(45deg, rgba(143, 20, 20, 0), rgba(87, 2, 19, 0.57)), url(${backgroundImage})`,
      }}
    >
      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center mb-8"
      >
        <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl text-white tracking-wider mb-4"
            style={{
              fontFamily: 'Arial Black, Impact, sans-serif',
              textShadow: '4px 4px 8px rgba(0,0,0,0.7), -2px -2px 4px rgba(255,255,255,0.1)',
              transform: 'skew(-5deg)',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            DAG DOWN
          </motion.h1>
        <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl text-white tracking-widest"
            style={{
              fontFamily: 'Arial Black, Impact, sans-serif',
              textShadow: '4px 4px 8px rgba(0,0,0,0.7), -2px -2px 4px rgba(255,255,255,0.1)',
              transform: 'skew(-5deg)',
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            PIZZA PARTY
          </motion.h2>
      </motion.div>

      {/* Pizza Image with Price Badge */}
      <motion.div
        className="relative flex justify-center items-center mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: "backOut" }}
      >
        <motion.div
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5 }
          }}
          className="relative"
        >
          <ImageWithFallback
            src={pizzaImage}
            alt="Delicious Pizza Slice"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-lg shadow-2xl"
          />
          
          {/* Price Badge */}
          <motion.div
            className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center border-4 border-white shadow-lg"
            style={{
              transform: 'rotate(15deg)',
            }}
            initial={{ opacity: 0, scale: 0, rotate: 45 }}
            animate={{ opacity: 1, scale: 1, rotate: 15 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 200 }}
            whileHover={{ 
              scale: 1.2, 
              rotate: 0,
              transition: { duration: 0.3 }
            }}
          >
            <span className="text-sm md:text-base font-bold">ONLY</span>
            <span className="text-xl md:text-2xl font-black">10$</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        className="text-center text-white space-y-4 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
      >
        <motion.div
          className="flex items-center justify-center space-x-2 text-lg md:text-xl"
          whileHover={{ scale: 1.05 }}
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6" />
          <span className="tracking-wide">+62 828 9887 873</span>
        </motion.div>
        <motion.div
          className="flex items-center justify-center space-x-2 text-lg md:text-xl"
          whileHover={{ scale: 1.05 }}
        >
          <Globe className="w-5 h-5 md:w-6 md:h-6" />
          <span className="tracking-wide">dagdownpizza.my.id</span>
        </motion.div>
      </motion.div>

      {/* Special Promotion Banner */}
      <motion.div
        className="w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 2, ease: "easeOut" }}
      >
        <div className="bg-[#650602] text-white py-4 px-8 skew-x-[-5deg] shadow-lg">
          <motion.h3
            className="text-2xl md:text-3xl lg:text-4xl text-center tracking-wider"
            style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}
            whileHover={{ scale: 1.05 }}
          >
            Special Promotion
          </motion.h3>
        </div>
      </motion.div>

      {/* Floating elements animation */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-50"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-white rounded-full opacity-30"
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}