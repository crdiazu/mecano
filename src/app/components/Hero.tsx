import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-fixed bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Estanterías Industriales<br />MECANO Solutions
        </motion.h1>
        <motion.button
          className="bg-mecano-orange text-white px-8 py-3 rounded-md hover:bg-white hover:text-mecano-orange transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Cotiza tu proyecto
        </motion.button>
      </div>
    </section>
  );
}
