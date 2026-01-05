import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Gem, Package, Milestone} from "lucide-react"

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const problems = [
    {
        icon: <ShieldCheck />,
    text: "Australian-standard quality",
    },
    {
        icon: <Gem />,
        text: "Competitive pricing"
    },
    {
        icon: <Package />,
    text: "Reliable supply & fast delivery",
    },
    {
        icon: <Milestone />,
    text: "Expert guidance at every step",
    } 
  ];


  return (
    <section ref={ref} className="section bg-gray-50 p-0">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Australia’s Trusted Tiles Supplier
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-xl text-center"
      >
        With years of experience in the Australian tiles industry, we proudly
        serve homeowners, builders, architects, and interior designers across
        Australia. Our commitment to quality, affordability, and expert support
        makes us the preferred choice for tile solutions nationwide.
      </motion.p>

      {/* Problems Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 mt-5">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            className={`${index %2 == 0 ? 'bg-gray-200':'bg-white'} p-6 rounded-xl text-center font-semibold shadow-xl py-8 hover:bg-gray-200 group`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center items-center group-hover:bg-gray-300 w-fit p-4 rounded-full mx-auto">{problem.icon}</div>
            <p className="mt-3">{problem.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
