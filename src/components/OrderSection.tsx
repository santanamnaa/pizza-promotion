import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ShoppingCart, Clock, Star } from 'lucide-react';
import bg from '../assets/bg.webp';

interface OrderSectionProps {}

export default function OrderSection() {
  return (
    <div 
      className="relative py-16 px-4 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(52, 0, 0, 0.76), rgba(47, 1, 1, 0.91)), url(${bg})`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Menu highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2
              className="text-4xl md:text-5xl text-white mb-8"
              style={{
                fontFamily: 'Arial Black, Impact, sans-serif',
                textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
                transform: 'skew(-3deg)',
              }}
              whileHover={{ scale: 1.02 }}
            >
              Why Choose Us?
            </motion.h2>

            {/* Features */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Clock, text: "Fast 15-minute delivery", delay: 0.1 },
                { icon: Star, text: "Premium fresh ingredients", delay: 0.2 },
                { icon: ShoppingCart, text: "Special party packages", delay: 0.3 },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 text-white text-lg md:text-xl"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <feature.icon className="w-6 h-6 text-yellow-400" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Special offers */}
            <motion.div
                className="bg-[#650602] bg-opacity-90 p-6 rounded-lg shadow-lg border-2 border-yellow-400"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(255, 255, 0, 0.3)"
                }}
              >
                <h3 className="text-2xl text-white mb-3" style={{ fontFamily: 'Arial Black, Impact, sans-serif' }}>
                  🍕 PARTY SPECIAL
                </h3>
                <p className="text-yellow-300 text-lg">
                  Order 3 pizzas and get 1 FREE! Perfect for your next party celebration.
                </p>
              </motion.div>
          </motion.div>

          {/* Right side - Order button and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <motion.div
              className="bg-red bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20"
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(61, 1, 1, 0.82)"
              }}
            >
              <motion.h3
                className="text-3xl md:text-4xl text-white mb-4"
                style={{
                  fontFamily: 'Impact, Arial Black, sans-serif',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                }}
                animate={{
                  textShadow: [
                    "2px 2px 4px rgba(0,0,0,0.7)",
                    "3px 3px 6px rgba(255,255,0,0.3)",
                    "2px 2px 4px rgba(0,0,0,0.7)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Ready to Order?
              </motion.h3>
              
              <p className="text-white text-lg mb-6 opacity-90">
                Join the pizza party today! Call now or visit our website to place your order.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-[#650602] hover:bg-[#540501] text-white text-xl px-12 py-6 rounded-full shadow-lg border-2 border-yellow-400 transition-all duration-300"
                  style={{
                    fontFamily: 'Arial Black, Impact, sans-serif',
                    letterSpacing: '2px',
                  }}
                >
                  <motion.div
                    className="flex items-center space-x-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ShoppingCart className="w-6 h-6" />
                    <span>ORDER NOW</span>
                  </motion.div>
                </Button>
              </motion.div>

              <motion.p
                className="text-yellow-300 text-sm mt-4"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Limited time offer - Don't miss out!
              </motion.p>
            </motion.div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 gap-4">
              <motion.div
                className="bg-yellow-400 text-black p-4 rounded-lg shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 1,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <a 
                  href="https://wa.me/6282898878730" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity"
                >
                  <h4 className="text-lg font-bold">� Chat on WhatsApp</h4>
                  <p className="text-xl font-black">+62 828 9887 873</p>
                </a>
              </motion.div>
              
              <motion.div
                className="bg-white text-black p-4 rounded-lg shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  rotate: -1,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold">🌐 Visit Website</h4>
                <p className="text-xl font-black">dagdownpizza.my.id</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-8 h-8 bg-yellow-400 rounded-full opacity-40"
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-20 right-16 w-6 h-6 bg-red-400 rounded-full opacity-30"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  );
}