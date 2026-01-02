import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="min-h-[500px] bg-gradient-to-br from-primary-500 via-purple-600 to-primary-700 text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Animation Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 text-center px-5 max-w-3xl">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform Your Space?
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl mb-10 opacity-95"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's discuss your project and bring your vision to life
        </motion.p>

        <motion.button
          className="btn btn-primary text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Today
        </motion.button>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-3xl">📞</span>
            <span>(03) 1234 5678</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl">📧</span>
            <span>hello@radevoliving.com.au</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
