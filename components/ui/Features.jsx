import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Gem, Package, Milestone } from "lucide-react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const problems = [
    {
      icon: ShieldCheck,
      text: "Australian-standard quality",
    },
    {
      icon: Gem,
      text: "Competitive pricing",
    },
    {
      icon: Package,
      text: "Reliable supply & fast delivery",
    },
    {
      icon: Milestone,
      text: "Expert guidance at every step",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-28 bg-gradient-to-b from-[#FBF8F6] to-[#EDE6E1]"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold mb-6"
        >
          Australia’s Trusted Tiles Supplier
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-gray-700 max-w-4xl mx-auto"
        >
          With years of experience in the Australian tiles industry, we proudly
          serve homeowners, builders, architects, and designers nationwide —
          delivering quality, value, and confidence in every tile.
        </motion.p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-20">
        {problems.map((problem, index) => {
          const Icon = problem.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl p-10 text-center shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full
                bg-gradient-to-br from-[#8A6A5A] to-[#B8B0A7]
                text-white shadow-lg group-hover:scale-110 transition-transform">
                <Icon size={30} strokeWidth={1.8} />
              </div>

              {/* Text */}
              <p className="text-lg font-medium text-gray-800">
                {problem.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
