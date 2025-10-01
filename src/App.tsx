import { motion } from 'motion/react';
import HeroSection from './components/HeroSection';
import OrderSection from './components/OrderSection';
import bgImage from './assets/bg.webp';
import posterImage from './assets/poster.webp';

export default function App() {
  const pizzaImage = posterImage;
  const backgroundImage = bgImage;
  const woodTexture = "https://images.unsplash.com/photo-1622837172115-5bcf625e7945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwdGFibGUlMjB0ZXh0dXJlJTIwc3VyZmFjZXxlbnwxfHx8fDE3NTkyNDYwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <HeroSection 
        pizzaImage={pizzaImage}
        backgroundImage={backgroundImage}
      />

      {/* Order/Contact Section */}
      <OrderSection woodTexture={woodTexture} />

      {/* Footer */}
      <motion.footer
        className="bg-black text-white py-8 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <h3 
              className="text-3xl md:text-4xl text-[#650602] mb-2"
              style={{ 
                fontFamily: 'Arial Black, Impact, sans-serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                transform: 'skew(-3deg)'
              }}
            >
              DAG DOWN PIZZA PARTY
            </h3>
            <p className="text-white text-lg">
              The Ultimate Pizza Experience
            </p>
          </motion.div>

          <motion.div
          className="flex flex-wrap justify-center gap-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex-1 min-w-[200px] text-center">
            <h4 className="text-lg font-bold text-[#650602] mb-2">Contact</h4>
            <p className="text-white">+62 828 9887 873</p>
            <p className="text-white">dagdownpizza.my.id</p>
          </div>
          <div className="flex-1 min-w-[200px] text-center">
            <h4 className="text-lg font-bold text-[#650602] mb-2">Hours</h4>
            <p className="text-white">Mon-Fri: 10AM-11PM</p>
            <p className="text-white">Sat-Sun: 10AM-12AM</p>
          </div>
          <div className="flex-1 min-w-[200px] text-center">
            <h4 className="text-lg font-bold text-[#650602] mb-2">Location</h4>
            <p className="text-white">Jl. Tanjung Duren Raya No.5</p>
          </div>
          <div className="flex-1 min-w-[200px] text-center">
            <h4 className="text-lg font-bold text-[#650602] mb-2">Special</h4>
            <p className="text-white">Party packages available</p>
            <p className="text-white">Group discounts</p>
          </div>
        </motion.div>

          <motion.div
            className="border-t border-gray-700 pt-4"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <p className="text-white">
              © 2024 Dag Down Pizza Party. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          className="bg-[#650602] hover:bg-[#540501] text-white p-4 rounded-full shadow-lg border-2 border-yellow-400 transition-all duration-300"
          style={{
            background: 'linear-gradient(45deg, #650602, #4a0401)',
            boxShadow: '0 4px 15px rgba(101, 6, 2, 0.4)'
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🍕
          </motion.div>
        </button>
      </motion.div>
    </motion.div>
  );
}