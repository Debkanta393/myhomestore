import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    { title: "Consultation", description: "Share your vision and goals with our team" },
    { title: "Design & Planning", description: "Custom designs tailored to your needs" },
    { title: "Permits & Approvals", description: "We handle all compliance and paperwork" },
    { title: "Construction", description: "Quality builds with certified professionals" },
    { title: "Handover", description: "Move in to your transformed space" }
  ];

  return (
    <section ref={ref} className="section bg-gray-50">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Complete Start-to-Finish Home Transformations
      </motion.h2>

      <motion.p
        className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We manage the entire process with certified professionals, transparent pricing and clear timelines
      </motion.p>

      {/* Process Timeline */}
      <div className="max-w-4xl mx-auto space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-6 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Step Number */}
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center text-3xl font-bold flex-shrink-0 shadow-lg"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {index + 1}
            </motion.div>

            {/* Step Content */}
            <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <motion.div
                className="absolute left-10 top-20 w-1 h-8 bg-primary-500"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                style={{ transformOrigin: 'top' }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
